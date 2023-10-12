import { JsonDocs } from '@stencil/core/internal';
import path from 'path';
import fs from 'fs/promises';

export async function mdGenerator(docs: JsonDocs) {
  for (const component of docs.components) {
    const stylesMarkdownContent = `<h3>CSS Custom Properties</h3>\n| Name | Description |\n | --- | --- |\n${component.styles.map(s => `|${s.name}|${s.docs}|`).join('\n') || ''}`;
    const eventsMarkdownContent = `<h3>Events</h3>\n| Event | Description | Type |\n | --- | --- | --- |\n${
      component.events.map(s => `|${s.event}|${s.docs}|CustomEvent\\<${s.complexType.resolved}\\>|`).join('\n') || ''
    }`;
    const slotsMarkdownContent = `<h3>Slots</h3>\n| Slot | Description |\n | --- | --- |\n${component.slots.map(s => `|${s.name}|${s.docs}|`).join('\n') || ''}`;

    if (component.dirPath) {
      if (component.styles.length > 0) {
        const stylesFilePath = path.join(component.dirPath, 'readme_styles.md');
        await fs.writeFile(stylesFilePath, stylesMarkdownContent);
      }

      if (component.events.length > 0) {
        const eventsFilePath = path.join(component.dirPath, 'readme_events.md');
        await fs.writeFile(eventsFilePath, eventsMarkdownContent);
      }

      if (component.slots.length > 0) {
        const slotsFilePath = path.join(component.dirPath, 'readme_slots.md');
        await fs.writeFile(slotsFilePath, slotsMarkdownContent);
      }
    }
  }
}

export async function mdxGenerator(docs: JsonDocs) {
  const exclude = [
    'pd-backdrop',
    'pd-button-group',
    'pd-dropdown-item',
    'pd-list-item',
    'pd-list-item-expandable',
    'pd-menu-item',
    'pd-navbar-item',
    'pd-panel-content',
    'pd-panel-footer',
    'pd-panel-header',
    'pd-sidebar-item',
    'pd-table-filter',
  ];

  for (const component of docs.components) {
    if (exclude.includes(component.tag)) continue;
    const componentName = component.tag.replace(/-/g, '');
    const mdx = [
      `import { Meta, Title, Subtitle, Description, ArgTypes, Primary, Markdown, Controls, Stories } from '@storybook/blocks';\n`,
      `import * as ${componentName}Stories from './${component.tag}.stories';\n`,
      component.styles.length > 0 ? `import ReadMeStyles from './readme_styles.md?raw';\n` : ``,
      component.events.length > 0 ? `import ReadMeEvents from './readme_events.md?raw';\n` : ``,
      component.slots.length > 0 ? `import ReadMeSlots from './readme_slots.md?raw';\n` : ``,
      `\n`,
      `<Meta of={${componentName}Stories} />\n`,
      `\n`,
      `<Title />\n`,
      component.docs ? `<Description>${component.docs}</Description>\n` : ``,
      `<Primary />\n`,
      `<h3>Controls</h3>\n`,
      `<Controls />\n`,
      component.styles.length > 0 ? `<Markdown>{ReadMeStyles}</Markdown>\n` : ``,
      component.events.length > 0 ? `<Markdown>{ReadMeEvents}</Markdown>\n` : ``,
      component.slots.length > 0 ? `<Markdown>{ReadMeSlots}</Markdown>\n` : ``,
      `<Stories />\n`,
    ];

    if (component.dirPath) {
      const mdxFilePath = path.join(component.dirPath, `Docs.mdx`);
      await fs.writeFile(mdxFilePath, mdx.join(''));
    }
  }
}

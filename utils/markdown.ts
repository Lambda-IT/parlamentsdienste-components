import { JsonDocs } from '@stencil/core/internal';
import path from 'path';
import fs from 'fs/promises';

const generateTable = (head: any[], rows: any[][]) => {
  return [
    `<table>`,
    `<thead>`,
    `<tr>`,
    head.map((h: any) => `<th>${h}</th>`).join(''),
    `</tr>`,
    `</thead>`,
    `<tbody>`,
    rows.map((r: any[]) => `<tr>${r.map(d => `<td>${d}</td>`).join('')}</tr>`).join(''),
    `</tbody>`,
    `</table>\n`,
  ].join('');
};

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
      `\n`,
      `<Meta of={${componentName}Stories} />\n`,
      `\n`,
      `<Title />\n`,
      component.docs ? `<Description>${component.docs}</Description>\n` : ``,
      `<Primary />\n`,

      `<h3>Controls</h3>\n`,
      `<Controls />\n`,

      component.styles.length > 0 ? `<h3>CSS Custom Properties</h3>\n` : '',
      component.styles.length > 0
        ? generateTable(
            ['Name', 'Description'],
            component.styles.map(p => [p.name, p.docs]),
          )
        : '',

      component.events.length > 0 ? `<h3>Events</h3>\n` : '',
      component.events.length > 0
        ? generateTable(
            ['Event', 'Description', 'Type'],
            component.events.map(p => [p.event, p.docs, `CustomEvent\\<${p.complexType.original.replace(/{/g, '\\{').replace(/}/g, '\\}')}\\>`]),
          )
        : '',

      component.slots.length > 0 ? `<h3>Slots</h3>\n` : '',
      component.slots.length > 0
        ? generateTable(
            ['Slot', 'Description'],
            component.slots.map(p => [p.name, p.docs]),
          )
        : '',
      ,
      `<Stories />\n`,
    ];

    if (component.dirPath) {
      const mdxFilePath = path.join(component.dirPath, `Docs.mdx`);
      await fs.writeFile(mdxFilePath, mdx.join(''));
    }
  }
}

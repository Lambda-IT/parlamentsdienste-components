export default {
  title: 'Dialogs/Alert',
  parameters: {
    actions: {
      handles: ['pd-closed', 'pd-action', 'pd-collapsed'],
    },
    // notes,
  },
};

///////////////////////////////////////////////////////////////////////////

export const Basic = args => `
    <pd-alert class="m-3"
        color="${args.color}"
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText} (button)">
        A text to show on this alert
    </pd-alert>
    <pd-alert class="m-3"
        color="${args.color}"
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText} (link)"
        action-href="${args.actionHref}"
        action-target="${args.actionTarget}"
        color="primary">
        <p>Line 1: A simple primary alert—check it out!</p>
        <p style="font-weight: 400">Line 2: A simple primary alert—check it out!</p>
    </pd-alert>
`;

Basic.args = {
  closable: false,
  actionText: 'this is an action',
  actionHref: 'http://www.google.ch',
  actionTarget: '_blank',
  hideIcon: false,

  color: 'primary',
};

Basic.argTypes = {
  actionTarget: { control: { type: 'select', labels: { '': '-' } }, options: ['', '_blank'] },
  color: {
    control: { type: 'select' },
    options: ['primary', 'success', 'warning', 'danger', 'info', 'dark', 'light'],
  },
};

///////////////////////////////////////////////////////////////////////////

export const Color = args => `
    <pd-alert class="m-3"
        ${args.closable ? 'closable' : ''}
        ${!args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        color="primary">
        A simple primary alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        color="success">
        A simple success alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        color="warning">
        A simple warning alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        color="danger">
        A simple alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        color="info">
        A simple info alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        color="dark">
        A simple dark alert
    </pd-alert>
    <pd-alert class="m-3"
        ${args.closable ? 'closable' : ''}
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        color="light">
        A simple light alert
    </pd-alert>
`;

Color.args = {
  closable: true,
  hideIcon: false,
  actionText: 'this is an action',
};

///////////////////////////////////////////////////////////////////////////

export const Expandable = args => `
    <pd-alert
        ${args.expandable ? 'expandable' : ''}
        ${args.expanded ? 'expanded' : ''}
        color="${args.color}"
        ${args.hideIcon ? 'hide-icon' : ''}
        action-text="${args.actionText}"
        action-text-expanded="${args.actionTextExpanded}"
        ${args.closable ? 'closable' : ''}>
        <div>Info: A simple primary alert—check it out!</div>
        <div slot="expandable">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et inventore beatae, atque
            adipisci non eaque officia illo architecto ducimus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nam assumenda voluptatem magnam deserunt! Corrupti consectetur id enim harum esse
            repellat.
        </div>
    </pd-alert>
`;

Expandable.args = {
  expandable: true,
  expanded: false,
  closable: true,
  actionText: 'show more',
  actionTextExpanded: 'show less',
  hideIcon: false,
  color: 'info',
};

Expandable.argTypes = {
  color: {
    control: { type: 'select' },
    options: ['primary', 'success', 'warning', 'danger', 'info', 'dark', 'light'],
  },
};

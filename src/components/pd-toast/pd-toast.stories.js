import notes from './readme.md';

export default {
    title: 'Dialogs/Toast',
    parameters: {
        actions: {
            handles: ['pd-closed'],
        },
        notes,
    },
    argTypes: {
        header: { control: { type: 'text' } },
        info: { control: { type: 'text' } },
        body: { control: { type: 'text' } },
        size: { control: { type: 'select', options: ['large', 'small'] } },
    },
};

///////////////////////////////////////////////////////////////////////////

export const Toast = (args) => `
    <pd-toast class="m-3" header="${args.header}" info="${args.info}" size="${args.size}">${args.body}</pd-toast>
`;

Toast.args = {
    header: 'Toast Title',
    info: '11 minutes ago',
    body: 'Toast body text goes here',
    size: 'large',
};

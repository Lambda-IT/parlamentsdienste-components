import notes from './readme.md';

export default {
    title: 'Table',
    parameters: {
        notes,
    },
};

export const primary = () => {
    return `
        <pd-table>
            <pd-row>
                <pd-col>row1-col1</pd-col>
                <pd-col>row1-col2</pd-col>
                <pd-col>row1-col3</pd-col>
            </pd-row>
            <pd-row>
                <pd-col>row2-col1</pd-col>
                <pd-col>row2-col2</pd-col>
                <pd-col>row2-col3</pd-col>
            </pd-row>
            <pd-row>
                <pd-col>row3-col1</pd-col>
                <pd-col>row3-col2</pd-col>
                <pd-col>row3-col3</pd-col>
            </pd-row>
        </pd-table>
    `;
};

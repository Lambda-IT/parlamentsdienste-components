const t={title:"Interactions/Chip",parameters:{actions:{handles:["click","removeChip","checkChip"]}},argTypes:{disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},checked:{control:{type:"boolean"}}}},i=e=>`
    <pd-chip class="mt-3 ml-3" ${e.disabled?"disabled":""} ${e.readonly?"readonly":""} ${e.checked?"checked":""}>Text Chip</pd-chip>
    <pd-chip class="mt-3" ${e.disabled?"disabled":""} ${e.readonly?"readonly":""} ${e.checked?"checked":""} type="toggle">Toggle Chip</pd-chip>
    <pd-chip class="mt-3" ${e.disabled?"disabled":""} ${e.readonly?"readonly":""} ${e.checked?"checked":""} type="filter">Filter Chip</pd-chip>
`,d=i.bind({});d.args={disabled:!1,readonly:!1,checked:!1};d.argTypes={disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},checked:{control:{type:"boolean"}}};const n=e=>`
    <pd-button-group class="m-3">
        <pd-chip class="mt-3 ml-3"
        ${e.disabled?"disabled":""}
        ${e.readonly?"readonly":""}
        >Chip 1</pd-chip>
        <pd-chip class="mt-3 ml-3"
        ${e.disabled?"disabled":""}
        ${e.readonly?"readonly":""}
        >Chip 2</pd-chip>
        <pd-chip class="mt-3 ml-3"
        ${e.disabled?"disabled":""}
        ${e.readonly?"readonly":""}
        >Chip 3</pd-chip>
    </pd-button-group>
`,a=n.bind({});a.args={...d.args};a.argTypes={...d.argTypes};var l,s,p;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
    <pd-chip class="mt-3 ml-3" \${args.disabled ? 'disabled' : ''} \${args.readonly ? 'readonly' : ''} \${args.checked ? 'checked' : ''}>Text Chip</pd-chip>
    <pd-chip class="mt-3" \${args.disabled ? 'disabled' : ''} \${args.readonly ? 'readonly' : ''} \${args.checked ? 'checked' : ''} type="toggle">Toggle Chip</pd-chip>
    <pd-chip class="mt-3" \${args.disabled ? 'disabled' : ''} \${args.readonly ? 'readonly' : ''} \${args.checked ? 'checked' : ''} type="filter">Filter Chip</pd-chip>
\``,...(p=(s=d.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,o,r;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
    <pd-button-group class="m-3">
        <pd-chip class="mt-3 ml-3"
        \${args.disabled ? 'disabled' : ''}
        \${args.readonly ? 'readonly' : ''}
        >Chip 1</pd-chip>
        <pd-chip class="mt-3 ml-3"
        \${args.disabled ? 'disabled' : ''}
        \${args.readonly ? 'readonly' : ''}
        >Chip 2</pd-chip>
        <pd-chip class="mt-3 ml-3"
        \${args.disabled ? 'disabled' : ''}
        \${args.readonly ? 'readonly' : ''}
        >Chip 3</pd-chip>
    </pd-button-group>
\``,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const h=["States","Group"];export{a as Group,d as States,h as __namedExportsOrder,t as default};
//# sourceMappingURL=pd-chip.stories-84a98eb4.js.map

const p={title:"Interactions/Progress Bar",parameters:{},argTypes:{value:{control:{type:"select",options:{"0%":"0","25%":"0.25","33.33333%":"0.33333","50%":"0.5","75%":"0.75","100%":"1"}}},striped:{control:{type:"boolean"}},label:{control:{type:"boolean"}},decimals:{control:{type:"number"}}}},s=e=>`
    <pd-progress-bar class="m-3" ${e.striped?"striped":""} ${e.label?"label":""} decimals="${e.decimals}" color="primary" value=${e.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" ${e.striped?"striped":""} ${e.label?"label":""} decimals="${e.decimals}" color="success" value=${e.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" ${e.striped?"striped":""} ${e.label?"label":""} decimals="${e.decimals}" color="danger" value=${e.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" ${e.striped?"striped":""} ${e.label?"label":""} decimals="${e.decimals}" color="warning" value=${e.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" ${e.striped?"striped":""} ${e.label?"label":""} decimals="${e.decimals}" color="info" value=${e.value}></pd-progress-bar>
`;s.args={value:"0.25",striped:!1,label:!1,decimals:2};var r,a,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`args => \`
    <pd-progress-bar class="m-3" \${args.striped ? 'striped' : ''} \${args.label ? 'label' : ''} decimals="\${args.decimals}" color="primary" value=\${args.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" \${args.striped ? 'striped' : ''} \${args.label ? 'label' : ''} decimals="\${args.decimals}" color="success" value=\${args.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" \${args.striped ? 'striped' : ''} \${args.label ? 'label' : ''} decimals="\${args.decimals}" color="danger" value=\${args.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" \${args.striped ? 'striped' : ''} \${args.label ? 'label' : ''} decimals="\${args.decimals}" color="warning" value=\${args.value}></pd-progress-bar>
    <pd-progress-bar class="m-3" \${args.striped ? 'striped' : ''} \${args.label ? 'label' : ''} decimals="\${args.decimals}" color="info" value=\${args.value}></pd-progress-bar>
\``,...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const o=["ProgressBar"];export{s as ProgressBar,o as __namedExportsOrder,p as default};
//# sourceMappingURL=pd-progress-bar.stories-518a8f03.js.map

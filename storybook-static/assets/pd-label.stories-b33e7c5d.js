const s={title:"Interactions/Label",parameters:{actions:{handles:[]}},argTypes:{color:{control:{type:"color"}},text:{control:{type:"text"}}}},r=e=>`
    <pd-label class="mb-2" color="${e.color}">${e.text}</pd-label>
    <pd-label>${e.text}</pd-label>
    <pd-label has-dot color="${e.color}">${e.text}</pd-label>
`,t=r.bind({});t.args={color:"#12B886",text:"This is a label"};var l,o,a;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:'args => `\n    <pd-label class="mb-2" color="${args.color}">${args.text}</pd-label>\n    <pd-label>${args.text}</pd-label>\n    <pd-label has-dot color="${args.color}">${args.text}</pd-label>\n`',...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const c=["States"];export{t as States,c as __namedExportsOrder,s as default};
//# sourceMappingURL=pd-label.stories-b33e7c5d.js.map

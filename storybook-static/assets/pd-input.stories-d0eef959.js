const t={title:"Forms + Inputs/Input",parameters:{actions:{handles:["pd-input","pd-change","pd-blur","pd-focus"]}},argTypes:{label:{control:{type:"text"}},value:{control:{type:"text"}},helperText:{control:{type:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},viewonly:{control:{type:"boolean"}},required:{control:{type:"boolean"}},error:{control:{type:"boolean"}}}},r=e=>`
        <pd-input class="m-3"
        label="${e.label}"
        placeholder="${e.placeholder}"
        helper-text="${e.helperText}"
        value="${e.value}"
        ${e.disabled?"disabled":""}
        ${e.readonly?"readonly":""}
        ${e.viewonly?"view-only":""}
        ${e.required?"required":""}
        ${e.error?"error":""}></pd-input>
    `;r.args={label:"Label",value:"Text",helperText:"Helper Text",placeholder:"Placehoder",disabled:!1,readonly:!1,viewonly:!1,required:!1,error:!1};var l,o,a;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return \`
        <pd-input class="m-3"
        label="\${args.label}"
        placeholder="\${args.placeholder}"
        helper-text="\${args.helperText}"
        value="\${args.value}"
        \${args.disabled ? 'disabled' : ''}
        \${args.readonly ? 'readonly' : ''}
        \${args.viewonly ? 'view-only' : ''}
        \${args.required ? 'required' : ''}
        \${args.error ? 'error' : ''}></pd-input>
    \`;
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const n=["Input"];export{r as Input,n as __namedExportsOrder,t as default};
//# sourceMappingURL=pd-input.stories-d0eef959.js.map

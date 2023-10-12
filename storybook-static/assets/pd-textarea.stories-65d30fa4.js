const t={title:"Forms + Inputs/Textarea",parameters:{actions:{handles:["pd-input","pd-change","pd-blur","pd-focus"]}},argTypes:{label:{control:{type:"text"}},value:{control:{type:"text"}},helperText:{control:{type:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},viewonly:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},required:{control:{type:"boolean"}},autoGrow:{control:{type:"boolean"}},error:{control:{type:"boolean"}}}},r=e=>`
        <pd-textarea class="m-3"
        label="${e.label}"
        placeholder="${e.placeholder}"
        helper-text="${e.helperText}"
        value="${e.value}"
        ${e.disabled?"disabled":""}
        ${e.readonly?"readonly":""}
        ${e.viewonly?"view-only":""}
        ${e.required?"required":""}
        ${e.autoGrow?"auto-grow":""}
        ${e.error?"error":""}></pd-textarea>
    `;r.args={label:"Label",value:"Text",helperText:"Helper Text",placeholder:"Placehoder",disabled:!1,readonly:!1,viewonly:!1,required:!1,autoGrow:!0,error:!1};var a,l,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return \`
        <pd-textarea class="m-3"
        label="\${args.label}"
        placeholder="\${args.placeholder}"
        helper-text="\${args.helperText}"
        value="\${args.value}"
        \${args.disabled ? 'disabled' : ''}
        \${args.readonly ? 'readonly' : ''}
        \${args.viewonly ? 'view-only' : ''}
        \${args.required ? 'required' : ''}
        \${args.autoGrow ? 'auto-grow' : ''}
        \${args.error ? 'error' : ''}></pd-textarea>
    \`;
}`,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const n=["Textarea"];export{r as Textarea,n as __namedExportsOrder,t as default};
//# sourceMappingURL=pd-textarea.stories-65d30fa4.js.map

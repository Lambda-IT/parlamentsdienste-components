const d={title:"Forms + Inputs/Checkbox",parameters:{actions:{handles:["pd-checked"]}},argTypes:{checked:{control:{type:"boolean"}},text:{control:{type:"text"}},disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},required:{control:{type:"boolean"}},error:{control:{type:"boolean"}},isIndeterminate:{control:{type:"boolean"}}}},r=e=>`
        <pd-checkbox class="m-3"
        ${e.checked?"checked":""}
        text="${e.text}"
        ${e.disabled?"disabled":""}
        ${e.readonly?"readonly":""}
        ${e.required?"required":""}
        ${e.error?"error":""}
        ${e.isIndeterminate?"is-indeterminate":""}
        ></pd-checkbox>
`;r.args={disabled:!1,text:"checkbox",readonly:!1,required:!1,error:!1,checked:!1,isIndeterminate:!1};var o,t,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`args => \`
        <pd-checkbox class="m-3"
        \${args.checked ? 'checked' : ''}
        text="\${args.text}"
        \${args.disabled ? 'disabled' : ''}
        \${args.readonly ? 'readonly' : ''}
        \${args.required ? 'required' : ''}
        \${args.error ? 'error' : ''}
        \${args.isIndeterminate ? 'is-indeterminate' : ''}
        ></pd-checkbox>
\``,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const n=["Checkbox"];export{r as Checkbox,n as __namedExportsOrder,d as default};
//# sourceMappingURL=pd-checkbox.stories-7045a9f9.js.map

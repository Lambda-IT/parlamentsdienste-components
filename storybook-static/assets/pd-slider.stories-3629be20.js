const l={title:"Forms + Inputs/Slider",parameters:{actions:{handles:["pd-input","pd-change"]}},argTypes:{value:{control:{type:"number"}},name:{control:{type:"text"}},max:{control:{type:"number"}},min:{control:{type:"number"}},step:{control:{type:"number"}},disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},error:{control:{type:"boolean"}}}},r=e=>`
        <pd-slider class="m-3"
        name="${e.name}"
        max="${e.max}"
        min="${e.min}"
        step="${e.step}"
        value="${e.value}"
        ${e.disabled?"disabled":""}
        ${e.readonly?"readonly":""}
        ${e.error?"error":""}
        >
        </pd-slider>
    `;r.args={name:"",max:100,min:0,step:1,value:null,disabled:!1,readonly:!1,error:!1};var n,a,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return \`
        <pd-slider class="m-3"
        name="\${args.name}"
        max="\${args.max}"
        min="\${args.min}"
        step="\${args.step}"
        value="\${args.value}"
        \${args.disabled ? 'disabled' : ''}
        \${args.readonly ? 'readonly' : ''}
        \${args.error ? 'error' : ''}
        >
        </pd-slider>
    \`;
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const s=["Slider"];export{r as Slider,s as __namedExportsOrder,l as default};
//# sourceMappingURL=pd-slider.stories-3629be20.js.map

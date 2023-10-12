const o={title:"Forms + Inputs/Radio",parameters:{},argTypes:{checked:{control:{type:"boolean"}},value:{control:{type:"text"}},label:{control:{type:"text"}},name:{control:{type:"text"}},disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},verticalAdjust:{control:{type:"boolean"}}}},a=e=>`
        <div class="m-3">
            <pd-radio
            name="${e.name}"
            value="${e.value}"
            label="${e.label}"
            ${e.checked?"checked":""}
            ${e.disabled?"disabled":""}
            ${e.readonly?"readonly":""}
            ${e.error?"error":""}
            ${e.verticalAdjust?"vertical-adjust":""}
            ></pd-radio>
            <pd-radio name="radio-test" value="2" label="radio 2" ${e.disabled?"disabled":""}
            ${e.readonly?"readonly":""}
            ${e.error?"error":""}
            ${e.verticalAdjust?"vertical-adjust":""}></pd-radio>
            <pd-radio name="radio-test" value="3" label="radio 3" ${e.disabled?"disabled":""}
            ${e.readonly?"readonly":""}
            ${e.error?"error":""}
            ${e.verticalAdjust?"vertical-adjust":""}></pd-radio>
        </div>
    `;a.args={checked:!1,value:"1",label:"radio 1",name:"radio-test",disabled:!1,readonly:!1,error:!1,verticalAdjust:!1};var r,d,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return \`
        <div class="m-3">
            <pd-radio
            name="\${args.name}"
            value="\${args.value}"
            label="\${args.label}"
            \${args.checked ? 'checked' : ''}
            \${args.disabled ? 'disabled' : ''}
            \${args.readonly ? 'readonly' : ''}
            \${args.error ? 'error' : ''}
            \${args.verticalAdjust ? 'vertical-adjust' : ''}
            ></pd-radio>
            <pd-radio name="radio-test" value="2" label="radio 2" \${args.disabled ? 'disabled' : ''}
            \${args.readonly ? 'readonly' : ''}
            \${args.error ? 'error' : ''}
            \${args.verticalAdjust ? 'vertical-adjust' : ''}></pd-radio>
            <pd-radio name="radio-test" value="3" label="radio 3" \${args.disabled ? 'disabled' : ''}
            \${args.readonly ? 'readonly' : ''}
            \${args.error ? 'error' : ''}
            \${args.verticalAdjust ? 'vertical-adjust' : ''}></pd-radio>
        </div>
    \`;
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const t=["radio"];export{t as __namedExportsOrder,o as default,a as radio};
//# sourceMappingURL=pd-radio.stories-3d362a1f.js.map

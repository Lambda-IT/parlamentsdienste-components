const t={title:"Forms + Inputs/Datepicker",parameters:{actions:{handles:["pd-change","pd-open","pd-close","pd-month-change","pd-year-change","pd-ready","pd-value-update"]}},argTypes:{disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},icon:{control:{type:"boolean"}},config_allow_input:{control:{type:"boolean"}}}},r=a=>{const e=document.createElement("pd-datepicker");return e.classList=["m-3"],e.label=a.label,e.disabled=a.disabled,e.readonly=a.readonly,e.placeholder=a.placeholder,e.error=a.error,e.icon=a.icon,e.config={allowInput:a.config_allow_input},e};r.args={label:"Label Text",disabled:!1,readonly:!1,placeholder:null,error:!1,icon:!0,config_allow_input:!1};var o,l,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const datepicker = document.createElement('pd-datepicker');
  datepicker.classList = ['m-3'];
  datepicker.label = args.label;
  datepicker.disabled = args.disabled;
  datepicker.readonly = args.readonly;
  datepicker.placeholder = args.placeholder;
  datepicker.error = args.error;
  datepicker.icon = args.icon;
  datepicker.config = {
    allowInput: args.config_allow_input
  };
  return datepicker;
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const c=["datepicker"];export{c as __namedExportsOrder,r as datepicker,t as default};
//# sourceMappingURL=pd-datepicker.stories-5e03b0f3.js.map

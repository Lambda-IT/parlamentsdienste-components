const s={title:"Forms + Inputs/Dropdown",parameters:{actions:{handles:["pd-change"]},argTypes:{items:{controls:{type:"object"}},disabled:{controls:{type:"boolean"}},label:{controls:{type:"string"}},required:{controls:{type:"boolean"}},readonly:{controls:{type:"boolean"}},viewonly:{controls:{type:"boolean"}},error:{controls:{type:"boolean"}}}}},n=o=>{const e=document.createElement("pd-dropdown");return e.items=o.items,e.disabled=o.disabled,e.required=o.required,e.readonly=o.readonly,e.viewOnly=o.viewonly,e.error=o.error,e.label=o.label,e.classList=["m-3"],e};n.args={items:[{id:"1",label:"Mitteilungen und Verschiedenes",value:"a1"},{id:"2",label:"Pa.Iv. Semadeni. Fakultatives",value:"a2"},{id:"3",label:"Referendum für die Unterstützung Olympischer Spiele durch den Bund",value:"a3"},{id:"4",label:"Gesamtkonzeption, Präsentation und Diskussion",value:"a4"},{id:"5",label:"Controlling, Präsentation, Diskussion und Beschluss",value:"a5"},{id:"6",label:"Mitteilungen",value:"a6",selected:!0},{id:"7",label:"Aktuelles aus dem VBS, Information und Diskussion",value:"a7"},{id:"8",label:"NKF. Evaluationsverfahren, Information und Diskussion",value:"a8"},{id:"9",label:"Politisches Controlling, Präsentation, Diskussion und Beschluss",value:"a9"}],disabled:!1,label:"Dropdown label text",required:!1,readonly:!1,viewonly:!1,error:!1};var r,l,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const pdDropdown = document.createElement('pd-dropdown');
  pdDropdown.items = args.items;
  pdDropdown.disabled = args.disabled;
  pdDropdown.required = args.required;
  pdDropdown.readonly = args.readonly;
  pdDropdown.viewOnly = args.viewonly;
  pdDropdown.error = args.error;
  pdDropdown.label = args.label;
  pdDropdown.classList = ['m-3'];
  return pdDropdown;
}`,...(a=(l=n.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const d=["Dropdown"];export{n as Dropdown,d as __namedExportsOrder,s as default};
//# sourceMappingURL=pd-dropdown.stories-15caa6b5.js.map

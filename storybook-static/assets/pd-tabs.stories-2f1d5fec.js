const o={title:"Interactions/Tabs",parameters:{actions:{handles:["pd-change"]}},argTypes:{tabs:{control:{type:"array"}},light:{control:{type:"boolean"}}}},t=s=>{const a=document.createElement("pd-tabs");return a.classList=["m-3"],a.tabs=s.tabs,a.light=s.light,a};t.args={tabs:[{id:0,text:"Tab one"},{id:1,text:"Tab two"},{id:2,text:"Tab three",checked:!0},{id:3,text:"Tab four"}],light:!1};var e,r,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const tabs = document.createElement('pd-tabs');
  tabs.classList = ['m-3'];
  tabs.tabs = args.tabs;
  tabs.light = args.light;
  return tabs;
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const c=["Tabs"];export{t as Tabs,c as __namedExportsOrder,o as default};
//# sourceMappingURL=pd-tabs.stories-2f1d5fec.js.map

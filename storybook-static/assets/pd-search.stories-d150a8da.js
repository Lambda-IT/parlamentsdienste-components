const c={title:"Forms + Inputs/Search",parameters:{actions:{handles:["pd-input","pd-change","pd-search","pd-focus","pd-blur"]}},argTypes:{label:{control:{type:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},highlight:{control:{type:"boolean"}},results:{control:{type:"array"}}}},s=a=>{const e=document.createElement("pd-search");return e.classList=["m-3"],e.results=a.results,e.disabled=a.disabled,e.label=a.label,e.placeholder=a.placeholder,e.highlight=a.highlight,e};s.args={label:"Label",placeholder:"search...",disabled:!1,highlight:!1,results:["Sample Result 1","Sample Result 2","Sample Result 3","Sample Result 4","Sample Result 5"]};var l,r,t;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const search = document.createElement('pd-search');
  search.classList = ['m-3'];
  search.results = args.results;
  search.disabled = args.disabled;
  search.label = args.label;
  search.placeholder = args.placeholder;
  search.highlight = args.highlight;
  return search;
}`,...(t=(r=s.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const h=["Search"];export{s as Search,h as __namedExportsOrder,c as default};
//# sourceMappingURL=pd-search.stories-d150a8da.js.map

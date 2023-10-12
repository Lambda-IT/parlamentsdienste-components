const d={title:"Interactions/Menu",parameters:{},argTypes:{items:{control:{type:"object"}},label:{control:{type:"string"}},invertColor:{control:{type:"boolean"}},placement:{control:{type:"select",options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"]}}}},t=n=>{const e=document.createElement("pd-menu");return n.menuItems.forEach(r=>{const o=document.createElement("pd-menu-item"),c=document.createElement("pd-icon");c.name=r.icon,c.size=2,o.append(c),o.text=r.text,e.append(o)}),e.label=n.label,e.invertColor=n.invertColor,e.placement=n.placement,e.classList=["m-3"],e};t.args={menuItems:[{icon:"print",text:"Print"},{icon:"documents",text:"Download"}],label:"Aktionen",invertColor:!1,placement:"bottom-start"};var a,l,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const pdMenu = document.createElement('pd-menu');
  args.menuItems.forEach(i => {
    const child = document.createElement('pd-menu-item');
    const childIcon = document.createElement('pd-icon');
    childIcon.name = i.icon;
    childIcon.size = 2;
    child.append(childIcon);
    child.text = i.text;
    pdMenu.append(child);
  });
  pdMenu.label = args.label;
  pdMenu.invertColor = args.invertColor;
  pdMenu.placement = args.placement;
  pdMenu.classList = ['m-3'];
  return pdMenu;
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const m=["Menu"];export{t as Menu,m as __namedExportsOrder,d as default};
//# sourceMappingURL=pd-menu.stories-c92dcebf.js.map

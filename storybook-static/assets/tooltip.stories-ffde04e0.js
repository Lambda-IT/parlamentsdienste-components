const m={title:"Interactions/Tooltip & Popover",parameters:{layout:"centered"},argTypes:{text:{controls:{type:"string"}},header:{controls:{type:"string"}},placement:{control:{type:"select",options:["left","right","left-start","right-start","top","bottom"]}}}},n=t=>{const o=document.createElement("div"),e=document.createElement("pd-button");return e.innerHTML="Tooltip",e.classList.add("m-3"),o.appendChild(e),tippy(e,{content:t.text,allowHTML:!0,placement:t.placement}),o};n.args={text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",placement:"bottom"};const r=t=>{const o=document.createElement("div"),e=document.createElement("pd-button");e.innerHTML="Popover with Header",e.classList.add("m-3");const p=document.createElement("pd-button");return p.innerHTML="Popover",p.classList.add("m-3"),o.appendChild(e),o.appendChild(p),tippy(e,{content:`<div class="popover" role="tooltip"><h3 class="popover-header">${t.header}</h3><div class="popover-body">${t.text}</div></div>`,allowHTML:!0,theme:"pd-popover-header",placement:t.placement}),tippy(p,{content:`<div class="popover" role="tooltip"><div class="popover-body">${t.text}</div></div>`,allowHTML:!0,theme:"pd-popover",placement:t.placement}),o};r.args={text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",header:"Popover Header",placement:"bottom"};var a,d,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const wrapper = document.createElement('div');
  const buttonTooltip = document.createElement('pd-button');
  buttonTooltip.innerHTML = 'Tooltip';
  buttonTooltip.classList.add('m-3');
  wrapper.appendChild(buttonTooltip);
  tippy(buttonTooltip, {
    content: args.text,
    allowHTML: true,
    placement: args.placement
  });
  return wrapper;
}`,...(s=(d=n.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const wrapper = document.createElement('div');
  const buttonHeader = document.createElement('pd-button');
  buttonHeader.innerHTML = 'Popover with Header';
  buttonHeader.classList.add('m-3');
  const buttonBody = document.createElement('pd-button');
  buttonBody.innerHTML = 'Popover';
  buttonBody.classList.add('m-3');
  wrapper.appendChild(buttonHeader);
  wrapper.appendChild(buttonBody);
  tippy(buttonHeader, {
    content: \`<div class="popover" role="tooltip"><h3 class="popover-header">\${args.header}</h3><div class="popover-body">\${args.text}</div></div>\`,
    allowHTML: true,
    theme: 'pd-popover-header',
    placement: args.placement
  });
  tippy(buttonBody, {
    content: \`<div class="popover" role="tooltip"><div class="popover-body">\${args.text}</div></div>\`,
    allowHTML: true,
    theme: 'pd-popover',
    placement: args.placement
  });
  return wrapper;
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const u=["Tooltip","Popover"];export{r as Popover,n as Tooltip,u as __namedExportsOrder,m as default};
//# sourceMappingURL=tooltip.stories-ffde04e0.js.map

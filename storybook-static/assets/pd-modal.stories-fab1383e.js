const r={title:"Dialogs/Modal",parameters:{actions:{handles:["pd-closed","pd-backdrop","pd-escape"]}},argTypes:{config:{control:{type:"object"}}}},o=d=>{const t=document.createElement("pd-modal");return t.config=d.config,t.innerHTML=`
    <p>Modal Content</p>
    <div slot="footer">
        <pd-button outline>Cancel</pd-button>
        <pd-button>Save</pd-button>
    </div>`,t};o.args={config:{title:"Modal Title",backdropVisible:!0}};var e,n,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const modal = document.createElement('pd-modal');
  modal.config = args.config;
  modal.innerHTML = \`
    <p>Modal Content</p>
    <div slot="footer">
        <pd-button outline>Cancel</pd-button>
        <pd-button>Save</pd-button>
    </div>\`;
  return modal;
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const l=["Modal"];export{o as Modal,l as __namedExportsOrder,r as default};
//# sourceMappingURL=pd-modal.stories-fab1383e.js.map

const $={title:"Dialogs/Alert",parameters:{actions:{handles:["pd-closed","pd-action","pd-collapsed"]}}},a=e=>`
    <pd-alert class="m-3"
        color="${e.color}"
        ${e.closable?"closable":""}
        ${e.hideIcon?"hide-icon":""}
        action-text="${e.actionText} (button)">
        A text to show on this alert
    </pd-alert>
    <pd-alert class="m-3"
        color="${e.color}"
        ${e.closable?"closable":""}
        ${e.hideIcon?"hide-icon":""}
        action-text="${e.actionText} (link)"
        action-href="${e.actionHref}"
        action-target="${e.actionTarget}"
        color="primary">
        <p>Line 1: A simple primary alert—check it out!</p>
        <p style="font-weight: 400">Line 2: A simple primary alert—check it out!</p>
    </pd-alert>
`;a.args={closable:!1,actionText:"this is an action",actionHref:"http://www.google.ch",actionTarget:"_blank",hideIcon:!1,color:"primary"};a.argTypes={actionTarget:{control:{type:"select",options:["","_blank"]}},color:{control:{type:"select",options:["primary","success","warning","danger","info","dark","light"]}}};const o=e=>`
    <pd-alert class="m-3"
        ${e.closable?"closable":""}
        ${e.hideIcon?"":"hide-icon"}
        action-text="${e.actionText}"
        color="primary">
        A simple primary alert
    </pd-alert>
    <pd-alert class="m-3"
        ${e.closable?"closable":""}
        ${e.hideIcon?"hide-icon":""}
        action-text="${e.actionText}"
        color="success">
        A simple success alert
    </pd-alert>
    <pd-alert class="m-3"
        ${e.closable?"closable":""}
        ${e.hideIcon?"hide-icon":""}
        action-text="${e.actionText}"
        color="warning">
        A simple warning alert
    </pd-alert>
    <pd-alert class="m-3"
        ${e.closable?"closable":""}
        ${e.hideIcon?"hide-icon":""}
        action-text="${e.actionText}"
        color="danger">
        A simple alert
    </pd-alert>
    <pd-alert class="m-3"
        ${e.closable?"closable":""}
        ${e.hideIcon?"hide-icon":""}
        action-text="${e.actionText}"
        color="info">
        A simple info alert
    </pd-alert>
    <pd-alert class="m-3"
        ${e.closable?"closable":""}
        ${e.hideIcon?"hide-icon":""}
        action-text="${e.actionText}"
        color="dark">
        A simple dark alert
    </pd-alert>
    <pd-alert class="m-3"
        ${e.closable?"closable":""}
        ${e.hideIcon?"hide-icon":""}
        action-text="${e.actionText}"
        color="light">
        A simple light alert
    </pd-alert>
`;o.args={closable:!0,hideIcon:!1,actionText:"this is an action"};const t=e=>`
    <pd-alert 
        ${e.expandable?"expandable":""}
        ${e.expanded?"expanded":""}
        color="${e.color}"
        ${e.hideIcon?"hide-icon":""}
        action-text="${e.actionText}"
        action-text-expanded="${e.actionTextExpanded}"
        ${e.closable?"closable":""}>
        <div>Info: A simple primary alert—check it out!</div>
        <div slot="expandable">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et inventore beatae, atque
            adipisci non eaque officia illo architecto ducimus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nam assumenda voluptatem magnam deserunt! Corrupti consectetur id enim harum esse
            repellat.
        </div>
    </pd-alert>
`;t.args={expandable:!0,expanded:!1,closable:!0,actionText:"show more",actionTextExpanded:"show less",hideIcon:!1,color:"info"};t.argTypes={color:{control:{type:"select",options:["primary","success","warning","danger","info","dark","light"]}}};var n,l,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
    <pd-alert class="m-3"
        color="\${args.color}"
        \${args.closable ? 'closable' : ''}
        \${args.hideIcon ? 'hide-icon' : ''}
        action-text="\${args.actionText} (button)">
        A text to show on this alert
    </pd-alert>
    <pd-alert class="m-3"
        color="\${args.color}"
        \${args.closable ? 'closable' : ''}
        \${args.hideIcon ? 'hide-icon' : ''}
        action-text="\${args.actionText} (link)"
        action-href="\${args.actionHref}"
        action-target="\${args.actionTarget}"
        color="primary">
        <p>Line 1: A simple primary alert—check it out!</p>
        <p style="font-weight: 400">Line 2: A simple primary alert—check it out!</p>
    </pd-alert>
\``,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,r,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
    <pd-alert class="m-3"
        \${args.closable ? 'closable' : ''}
        \${!args.hideIcon ? 'hide-icon' : ''}
        action-text="\${args.actionText}"
        color="primary">
        A simple primary alert
    </pd-alert>
    <pd-alert class="m-3"
        \${args.closable ? 'closable' : ''}
        \${args.hideIcon ? 'hide-icon' : ''}
        action-text="\${args.actionText}"
        color="success">
        A simple success alert
    </pd-alert>
    <pd-alert class="m-3"
        \${args.closable ? 'closable' : ''}
        \${args.hideIcon ? 'hide-icon' : ''}
        action-text="\${args.actionText}"
        color="warning">
        A simple warning alert
    </pd-alert>
    <pd-alert class="m-3"
        \${args.closable ? 'closable' : ''}
        \${args.hideIcon ? 'hide-icon' : ''}
        action-text="\${args.actionText}"
        color="danger">
        A simple alert
    </pd-alert>
    <pd-alert class="m-3"
        \${args.closable ? 'closable' : ''}
        \${args.hideIcon ? 'hide-icon' : ''}
        action-text="\${args.actionText}"
        color="info">
        A simple info alert
    </pd-alert>
    <pd-alert class="m-3"
        \${args.closable ? 'closable' : ''}
        \${args.hideIcon ? 'hide-icon' : ''}
        action-text="\${args.actionText}"
        color="dark">
        A simple dark alert
    </pd-alert>
    <pd-alert class="m-3"
        \${args.closable ? 'closable' : ''}
        \${args.hideIcon ? 'hide-icon' : ''}
        action-text="\${args.actionText}"
        color="light">
        A simple light alert
    </pd-alert>
\``,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
    <pd-alert 
        \${args.expandable ? 'expandable' : ''}
        \${args.expanded ? 'expanded' : ''}
        color="\${args.color}"
        \${args.hideIcon ? 'hide-icon' : ''}
        action-text="\${args.actionText}"
        action-text-expanded="\${args.actionTextExpanded}"
        \${args.closable ? 'closable' : ''}>
        <div>Info: A simple primary alert—check it out!</div>
        <div slot="expandable">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et inventore beatae, atque
            adipisci non eaque officia illo architecto ducimus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nam assumenda voluptatem magnam deserunt! Corrupti consectetur id enim harum esse
            repellat.
        </div>
    </pd-alert>
\``,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const h=["Basic","Color","Expandable"];export{a as Basic,o as Color,t as Expandable,h as __namedExportsOrder,$ as default};
//# sourceMappingURL=pd-alert.stories-93e09e05.js.map

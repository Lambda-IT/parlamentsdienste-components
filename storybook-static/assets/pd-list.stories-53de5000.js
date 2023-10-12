const u={title:"Interactions/List",parameters:{actions:{handles:["pd-expand","pd-edit","pd-selected","pd-collapsed","pd-content-click"]}}},n=()=>`
    <pd-list class="m-3">
        <pd-list-item>
            <span>List Item 1</span>
        </pd-list-item>
        <pd-list-item>
            <span>List Item 2</span>
        </pd-list-item>
        <pd-list-item>
            <span>List Item 3</span>
        </pd-list-item>
    </pd-list>
`,s=()=>`
    <pd-list class="m-3">
        <pd-list-item status="unset">
            <div>16.3112</div>
            <a>WBK-NR: Antrag auf Ablehnung </a>
        </pd-list-item>
        <pd-list-item status="success">
            <div>18.3708</div>
            <a>SiK-NR: Antrag auf Annahme</a>
        </pd-list-item>
        <pd-list-item status="warning">
            <div>16.845</div>
            <a>Änderung Kategorie IVIb</a>
        </pd-list-item>
        <pd-list-item status="danger">
            <div>18.426</div>
            <a>Änderung Kategorie IIIb</a>
        </pd-list-item>
    </pd-list>
`,t=e=>`
    <pd-list class="m-3">
        <pd-list-item-expandable 
            ${e.checkbox?"checkbox":""} 
            ${e.checked?"checked":""} 
            ${e.edit?"edit":""} 
            ${e.expand?"expand":""} 
            ${e.expandable?"expandable":""} 
            ${e.menu?"menu":""} 
            ${e.contentClick?"content-click":""} 
            status="${e.status}" 
            style="--pd-list-item-background: #fff"
        >
            <div>16.3112</div>
            <a>WBK-NR: Antrag auf Ablehnung </a>
            <div slot="expandable">${e.expandableContent}</div>
            <pd-menu-item text="Drucken" slot="menu">
                <pd-icon size="2" name="print"></pd-icon>
            </pd-menu-item>
            <pd-menu-item text="Support" slot="menu">
                <pd-icon size="2" name="support"></pd-icon>
            </pd-menu-item>
        </pd-list-item-expandable>
    </pd-list>
`;t.args={checkbox:!1,checked:!1,edit:!0,expand:!1,expandable:!0,menu:!0,contentClick:!1,expandableContent:"Expandable Content",status:"success"};t.argTypes={checkbox:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},edit:{control:{type:"boolean"}},expand:{control:{type:"boolean"}},expandable:{control:{type:"boolean"}},menu:{control:{type:"boolean"}},contentClick:{control:{type:"boolean"}},expandableContent:{control:{type:"text"}},status:{control:{type:"select",options:["success","danger","warning","info","unset"]}}};var a,i,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => \`
    <pd-list class="m-3">
        <pd-list-item>
            <span>List Item 1</span>
        </pd-list-item>
        <pd-list-item>
            <span>List Item 2</span>
        </pd-list-item>
        <pd-list-item>
            <span>List Item 3</span>
        </pd-list-item>
    </pd-list>
\``,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,l,o;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`
    <pd-list class="m-3">
        <pd-list-item status="unset">
            <div>16.3112</div>
            <a>WBK-NR: Antrag auf Ablehnung </a>
        </pd-list-item>
        <pd-list-item status="success">
            <div>18.3708</div>
            <a>SiK-NR: Antrag auf Annahme</a>
        </pd-list-item>
        <pd-list-item status="warning">
            <div>16.845</div>
            <a>Änderung Kategorie IVIb</a>
        </pd-list-item>
        <pd-list-item status="danger">
            <div>18.426</div>
            <a>Änderung Kategorie IIIb</a>
        </pd-list-item>
    </pd-list>
\``,...(o=(l=s.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var c,m,r;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
    <pd-list class="m-3">
        <pd-list-item-expandable 
            \${args.checkbox ? 'checkbox' : ''} 
            \${args.checked ? 'checked' : ''} 
            \${args.edit ? 'edit' : ''} 
            \${args.expand ? 'expand' : ''} 
            \${args.expandable ? 'expandable' : ''} 
            \${args.menu ? 'menu' : ''} 
            \${args.contentClick ? 'content-click' : ''} 
            status="\${args.status}" 
            style="--pd-list-item-background: #fff"
        >
            <div>16.3112</div>
            <a>WBK-NR: Antrag auf Ablehnung </a>
            <div slot="expandable">\${args.expandableContent}</div>
            <pd-menu-item text="Drucken" slot="menu">
                <pd-icon size="2" name="print"></pd-icon>
            </pd-menu-item>
            <pd-menu-item text="Support" slot="menu">
                <pd-icon size="2" name="support"></pd-icon>
            </pd-menu-item>
        </pd-list-item-expandable>
    </pd-list>
\``,...(r=(m=t.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const b=["Basic","StatusList","ExpandableList"];export{n as Basic,t as ExpandableList,s as StatusList,b as __namedExportsOrder,u as default};
//# sourceMappingURL=pd-list.stories-53de5000.js.map

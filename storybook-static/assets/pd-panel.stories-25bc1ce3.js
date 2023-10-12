const r={title:"Layout/Panel",parameters:{actions:{handles:["pd-collapsed"]}},argTypes:{collapsed:{control:{type:"boolean"}},collapsible:{control:{type:"boolean"}},subpanel:{control:{type:"boolean"}}}},l=e=>`
        <pd-panel class="m-3" 
            ${e.collapsed?"collapsed":""}
            ${e.collapsible?"collapsible":""}
            ${e.subpanel?"subpanel":""}
        >
            <pd-panel-header slot="header">Header</pd-panel-header>
            <pd-panel-content>Content</pd-panel-content>
            <pd-panel-footer slot="footer">Footer</pd-panel-footer>
        </pd-panel>
    `;l.args={collapsible:!0,collapsed:!1,subpanel:!1};const a=e=>`
        <pd-panel class="m-3"
            ${e.collapsed?"collapsed":""}
            ${e.collapsible?"collapsible":""}
        >
            <pd-panel-header slot="header">
                Header
                <span slot="subtitle">Header Subtitle</span>
            </pd-panel-header>
            <pd-panel-content>
                <pd-panel
                    ${e.collapsed?"collapsed":""}
                    ${e.collapsible?"collapsible":""}
                    subpanel
                    style="--pd-panel-margin-bottom: 0.5rem"
                >
                    <pd-panel-header slot="header">
                        Subpanel Header
                        <span slot="subtitle">Subpanel Header Subtitle</span>
                    </pd-panel-header>
                    <pd-panel-content>
                        Subpanel Content
                    </pd-panel-content>
                </pd-panel>
                <pd-panel
                    ${e.collapsed?"collapsed":""}
                    ${e.collapsible?"collapsible":""}
                    subpanel
                >
                    <pd-panel-header slot="header">
                        Subpanel Header
                        <span slot="subtitle">Subpanel Header Subtitle</span>
                    </pd-panel-header>
                    <pd-panel-content>
                        Subpanel Content
                    </pd-panel-content>
                </pd-panel>
            </pd-panel-content>
            <pd-panel-footer slot="footer">Footer</pd-panel-footer>
        </pd-panel>
    `;a.args={collapsible:!0,collapsed:!1};var n,p,o;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return \`
        <pd-panel class="m-3" 
            \${args.collapsed ? 'collapsed' : ''}
            \${args.collapsible ? 'collapsible' : ''}
            \${args.subpanel ? 'subpanel' : ''}
        >
            <pd-panel-header slot="header">Header</pd-panel-header>
            <pd-panel-content>Content</pd-panel-content>
            <pd-panel-footer slot="footer">Footer</pd-panel-footer>
        </pd-panel>
    \`;
}`,...(o=(p=l.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};var t,s,d;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return \`
        <pd-panel class="m-3"
            \${args.collapsed ? 'collapsed' : ''}
            \${args.collapsible ? 'collapsible' : ''}
        >
            <pd-panel-header slot="header">
                Header
                <span slot="subtitle">Header Subtitle</span>
            </pd-panel-header>
            <pd-panel-content>
                <pd-panel
                    \${args.collapsed ? 'collapsed' : ''}
                    \${args.collapsible ? 'collapsible' : ''}
                    subpanel
                    style="--pd-panel-margin-bottom: 0.5rem"
                >
                    <pd-panel-header slot="header">
                        Subpanel Header
                        <span slot="subtitle">Subpanel Header Subtitle</span>
                    </pd-panel-header>
                    <pd-panel-content>
                        Subpanel Content
                    </pd-panel-content>
                </pd-panel>
                <pd-panel
                    \${args.collapsed ? 'collapsed' : ''}
                    \${args.collapsible ? 'collapsible' : ''}
                    subpanel
                >
                    <pd-panel-header slot="header">
                        Subpanel Header
                        <span slot="subtitle">Subpanel Header Subtitle</span>
                    </pd-panel-header>
                    <pd-panel-content>
                        Subpanel Content
                    </pd-panel-content>
                </pd-panel>
            </pd-panel-content>
            <pd-panel-footer slot="footer">Footer</pd-panel-footer>
        </pd-panel>
    \`;
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const c=["Panel","Subpanel"];export{l as Panel,a as Subpanel,c as __namedExportsOrder,r as default};
//# sourceMappingURL=pd-panel.stories-25bc1ce3.js.map

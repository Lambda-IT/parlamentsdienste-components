const I={title:"Interactions/Button",parameters:{actions:{handles:["click"]}}},W=t=>`
    <pd-button class="mt-3 ml-3" ${t.disabled?"disabled":""} size=${t.size} type="${t.type}" full-width="${t.fullWidth}">Primary</pd-button>
    <pd-button class="mt-3" ${t.disabled?"disabled":""} size=${t.size} color="success" type="${t.type}" full-width="${t.fullWidth}">Success</pd-button>
    <pd-button class="mt-3" ${t.disabled?"disabled":""} size=${t.size} color="danger" type="${t.type}" full-width="${t.fullWidth}">Danger</pd-button>
    <pd-button class="mt-3" ${t.disabled?"disabled":""} size=${t.size} color="warning" type="${t.type}" full-width="${t.fullWidth}">Warning</pd-button>
    <pd-button class="mt-3" ${t.disabled?"disabled":""} size=${t.size} color="info" type="${t.type}" full-width="${t.fullWidth}">Info</pd-button>
    <pd-button class="mt-3" ${t.disabled?"disabled":""} size=${t.size} color="light" type="${t.type}" full-width="${t.fullWidth}">Light</pd-button>
    <pd-button class="mt-3" ${t.disabled?"disabled":""} size=${t.size} color="dark" type="${t.type}" full-width="${t.fullWidth}">Dark</pd-button>
`,e=W.bind({});e.args={disabled:!1,size:"normal",type:"button",fullWidth:!1};e.argTypes={disabled:{control:{type:"boolean"}},size:{control:{type:"select",options:["large","normal","small"]}},type:{control:{type:"select",options:["button","submit","reset"]}},fullWidth:{control:{type:"boolean"}}};const k=t=>`
    <pd-button class="mt-3 ml-3" outline ${t.disabled?"disabled":""} size=${t.size} type="${t.type}" full-width="${t.fullWidth}">Primary</pd-button>
    <pd-button class="mt-3" outline ${t.disabled?"disabled":""} size=${t.size} color="success" type="${t.type}" full-width="${t.fullWidth}">Success</pd-button>
    <pd-button class="mt-3" outline ${t.disabled?"disabled":""} size=${t.size} color="danger" type="${t.type}" full-width="${t.fullWidth}">Danger</pd-button>
    <pd-button class="mt-3" outline ${t.disabled?"disabled":""} size=${t.size} color="warning" type="${t.type}" full-width="${t.fullWidth}">Warning</pd-button>
    <pd-button class="mt-3" outline ${t.disabled?"disabled":""} size=${t.size} color="info" type="${t.type}" full-width="${t.fullWidth}">Info</pd-button>
    <pd-button class="mt-3" outline ${t.disabled?"disabled":""} size=${t.size} color="light" type="${t.type}" full-width="${t.fullWidth}">Light</pd-button>
    <pd-button class="mt-3" outline ${t.disabled?"disabled":""} size=${t.size} color="dark" type="${t.type}" full-width="${t.fullWidth}">Dark</pd-button>
`,l=k.bind({});l.args={...e.args};l.argTypes={...e.argTypes};const S=t=>`
    <div>
        <pd-button class="m-3" icon-location="${t.location}" full-width="${t.fullWidth}">
            <pd-icon size="2" style="fill: white" slot="icon" name="link"></pd-icon>
            button
        </pd-button>
    </div>
    <div>
        <pd-button class="m-3" icon-location="${t.location}" href="http://www.google.ch" target="_blank" full-width="${t.fullWidth}">
            <pd-icon size="1.2" style="fill: #0b7285" slot="icon" name="link"></pd-icon>
            external link
        </pd-button>
    </div>
`,s=S.bind({});s.args={location:"left",fullWidth:!1};s.argTypes={location:{control:{type:"select",options:["left","right","center"]}},fullWidth:{control:{type:"boolean"}}};const D=t=>`
    <pd-button class="m-3" href="${t.href}" target="${t.target}">external link</pd-button>
`,d=D.bind({});d.args={href:"http://www.google.ch",target:"_blank"};d.argTypes={href:{control:{type:"text"}},target:{control:{type:"select",options:["","_blank"]}}};const v=t=>`
    <pd-button-group class="m-3">
        <pd-button ${t.disabled?"disabled":""} size=${t.size} type="${t.type}">Primary</pd-button>
        <pd-button ${t.disabled?"disabled":""} size=${t.size} type="${t.type}">Success</pd-button>
        <pd-button ${t.disabled?"disabled":""} size=${t.size} type="${t.type}">Danger</pd-button>
    </pd-button-group>
`,i=v.bind({});i.args=(({fullWidth:t,...o})=>o)(e.args);i.argTypes=(({fullWidth:t,...o})=>o)(e.argTypes);var n,a,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => \`
    <pd-button class="mt-3 ml-3" \${args.disabled ? 'disabled' : ''} size=\${args.size} type="\${args.type}" full-width="\${args.fullWidth}">Primary</pd-button>
    <pd-button class="mt-3" \${args.disabled ? 'disabled' : ''} size=\${args.size} color="success" type="\${args.type}" full-width="\${args.fullWidth}">Success</pd-button>
    <pd-button class="mt-3" \${args.disabled ? 'disabled' : ''} size=\${args.size} color="danger" type="\${args.type}" full-width="\${args.fullWidth}">Danger</pd-button>
    <pd-button class="mt-3" \${args.disabled ? 'disabled' : ''} size=\${args.size} color="warning" type="\${args.type}" full-width="\${args.fullWidth}">Warning</pd-button>
    <pd-button class="mt-3" \${args.disabled ? 'disabled' : ''} size=\${args.size} color="info" type="\${args.type}" full-width="\${args.fullWidth}">Info</pd-button>
    <pd-button class="mt-3" \${args.disabled ? 'disabled' : ''} size=\${args.size} color="light" type="\${args.type}" full-width="\${args.fullWidth}">Light</pd-button>
    <pd-button class="mt-3" \${args.disabled ? 'disabled' : ''} size=\${args.size} color="dark" type="\${args.type}" full-width="\${args.fullWidth}">Dark</pd-button>
\``,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var u,r,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
    <pd-button class="mt-3 ml-3" outline \${args.disabled ? 'disabled' : ''} size=\${args.size} type="\${args.type}" full-width="\${args.fullWidth}">Primary</pd-button>
    <pd-button class="mt-3" outline \${args.disabled ? 'disabled' : ''} size=\${args.size} color="success" type="\${args.type}" full-width="\${args.fullWidth}">Success</pd-button>
    <pd-button class="mt-3" outline \${args.disabled ? 'disabled' : ''} size=\${args.size} color="danger" type="\${args.type}" full-width="\${args.fullWidth}">Danger</pd-button>
    <pd-button class="mt-3" outline \${args.disabled ? 'disabled' : ''} size=\${args.size} color="warning" type="\${args.type}" full-width="\${args.fullWidth}">Warning</pd-button>
    <pd-button class="mt-3" outline \${args.disabled ? 'disabled' : ''} size=\${args.size} color="info" type="\${args.type}" full-width="\${args.fullWidth}">Info</pd-button>
    <pd-button class="mt-3" outline \${args.disabled ? 'disabled' : ''} size=\${args.size} color="light" type="\${args.type}" full-width="\${args.fullWidth}">Light</pd-button>
    <pd-button class="mt-3" outline \${args.disabled ? 'disabled' : ''} size=\${args.size} color="dark" type="\${args.type}" full-width="\${args.fullWidth}">Dark</pd-button>
\``,...(b=(r=l.parameters)==null?void 0:r.docs)==null?void 0:b.source}}};var c,$,y;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
    <div>
        <pd-button class="m-3" icon-location="\${args.location}" full-width="\${args.fullWidth}">
            <pd-icon size="2" style="fill: white" slot="icon" name="link"></pd-icon>
            button
        </pd-button>
    </div>
    <div>
        <pd-button class="m-3" icon-location="\${args.location}" href="http://www.google.ch" target="_blank" full-width="\${args.fullWidth}">
            <pd-icon size="1.2" style="fill: #0b7285" slot="icon" name="link"></pd-icon>
            external link
        </pd-button>
    </div>
\``,...(y=($=s.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var f,h,m;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:'args => `\n    <pd-button class="m-3" href="${args.href}" target="${args.target}">external link</pd-button>\n`',...(m=(h=d.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,z,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
    <pd-button-group class="m-3">
        <pd-button \${args.disabled ? 'disabled' : ''} size=\${args.size} type="\${args.type}">Primary</pd-button>
        <pd-button \${args.disabled ? 'disabled' : ''} size=\${args.size} type="\${args.type}">Success</pd-button>
        <pd-button \${args.disabled ? 'disabled' : ''} size=\${args.size} type="\${args.type}">Danger</pd-button>
    </pd-button-group>
\``,...(w=(z=i.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const x=["States","Outline","Icon","Link","Group"];export{i as Group,s as Icon,d as Link,l as Outline,e as States,x as __namedExportsOrder,I as default};
//# sourceMappingURL=pd-button.stories-4c1f2946.js.map

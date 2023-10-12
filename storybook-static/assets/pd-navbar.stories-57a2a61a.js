const p={title:"Layout/Navbar",parameters:{actions:{handles:["pd-menu"]}},argTypes:{mobileBreakpoint:{control:{type:"number"}}}},a=n=>`
    <pd-navbar mobile-breakpoint="${n.mobileBreakpoint}">
        <pd-navbar-item text="Startseite"></pd-navbar-item>
        <pd-navbar-item text="Geschäfte suchen"></pd-navbar-item>
        <pd-navbar-item href="http://www.google.ch" text="VORSTOSSplus"></pd-navbar-item>
    </pd-navbar>
`;a.args={mobileBreakpoint:800};var e,t,r;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`args => \`
    <pd-navbar mobile-breakpoint="\${args.mobileBreakpoint}">
        <pd-navbar-item text="Startseite"></pd-navbar-item>
        <pd-navbar-item text="Geschäfte suchen"></pd-navbar-item>
        <pd-navbar-item href="http://www.google.ch" text="VORSTOSSplus"></pd-navbar-item>
    </pd-navbar>
\``,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const o=["Navbar"];export{a as Navbar,o as __namedExportsOrder,p as default};
//# sourceMappingURL=pd-navbar.stories-57a2a61a.js.map

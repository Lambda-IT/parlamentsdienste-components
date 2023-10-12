const s={title:"Interactions/Timeline Date",parameters:{},argTypes:{date:{control:{type:"text"}},header:{control:{type:"text"}},href:{control:{type:"text"}},target:{control:{type:"select",options:["_blank",""]}},content:{control:{type:"text"}}}},t=e=>`
    <pd-timeline-date class="m-3" date="${e.date}" header="${e.header}" href="${e.href}" target="${e.target}">
        <span>${e.content}<span>
    </pd-timeline-date>
`;t.args={date:"date",header:"header",href:"http://www.lambda-it.ch",target:"_blank",content:"Content text"};var a,r,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:'args => `\n    <pd-timeline-date class="m-3" date="${args.date}" header="${args.header}" href="${args.href}" target="${args.target}">\n        <span>${args.content}<span>\n    </pd-timeline-date>\n`',...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const o=["Timeline"];export{t as Timeline,o as __namedExportsOrder,s as default};
//# sourceMappingURL=pd-timeline-date.stories-915a049d.js.map

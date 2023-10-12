const i={title:"Forms + Inputs/Pagination",parameters:{actions:{handles:["pd-change"]}},argTypes:{currentPage:{control:{type:"number"}},totalPages:{control:{type:"number"}},visiblePages:{control:{type:"number"}},showPageButtons:{control:{type:"boolean"}},separator:{control:{type:"text"}},items:{controls:{type:"object"}}}},n=t=>{const a=document.createElement("div");a.style.display="flex",a.style.cssText="--pd-dropdown-vertical-padding: 0.125em; display: flex",a.classList=["m-3"];const e=document.createElement("pd-pagination");e.totalPages=t.totalPages,e.visiblePages=t.visiblePages,e.currentPage=t.currentPage,e.separator=t.separator,t.showPageButtons&&(e.showPageButtons=!0),e.classList=["mr-3"];const s=document.createElement("pd-dropdown");return s.items=t.items,s.style.minWidth="100px",a.appendChild(e),a.appendChild(s),a};n.args={currentPage:3,totalPages:10,visiblePages:5,showPageButtons:!1,separator:"von",items:[{id:"1",label:"25",value:25,selected:!0},{id:"2",label:"50",value:50},{id:"3",label:"100",value:100}]};var o,r,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.cssText = '--pd-dropdown-vertical-padding: 0.125em; display: flex';
  wrapper.classList = ['m-3'];
  const pdPagination = document.createElement('pd-pagination');
  pdPagination.totalPages = args.totalPages;
  pdPagination.visiblePages = args.visiblePages;
  pdPagination.currentPage = args.currentPage;
  pdPagination.separator = args.separator;
  if (args.showPageButtons) pdPagination.showPageButtons = true;
  pdPagination.classList = ['mr-3'];
  const pdDropdown = document.createElement('pd-dropdown');
  pdDropdown.items = args.items;
  pdDropdown.style.minWidth = '100px';
  wrapper.appendChild(pdPagination);
  wrapper.appendChild(pdDropdown);
  return wrapper;
}`,...(p=(r=n.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const d=["Pagination"];export{n as Pagination,d as __namedExportsOrder,i as default};
//# sourceMappingURL=pd-pagination.stories-071d20bc.js.map

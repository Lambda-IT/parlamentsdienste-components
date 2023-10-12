const u={title:"Interactions/Table",parameters:{actions:{handles:["pd-selected","pd-edit","pd-view","pd-delete","pd-clicked-row","pd-sort","pd-filter-change","pd-filter-input"]}},argTypes:{rows:{control:{type:"object"}},columns:{control:{type:"object"}},iconConfig:{control:{type:"object"}},showActionColumn:{control:{type:"boolean"}},selectable:{control:{type:"boolean"}},showStatus:{control:{type:"boolean"}},headerStyle:{control:{type:"select",options:["light","dark","gray"]}},menuLabel:{control:{type:"string"}},externalRowHandling:{control:{type:"boolean"}},selectedStatus:{control:{type:"select",options:["all","none","indeterminate"]}},paging:{control:{type:"boolean"}},pagingLocation:{control:{type:"select",options:["left","right"]}},pageSizes:{control:{type:"object"}},disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}}}},l=t=>{const e=document.createElement("pd-table");e.classList=["m-3"],e.rows=t.rows,e.columns=t.columns,e.iconConfig=t.iconConfig,e.showActionColumn=t.showActionColumn,e.setAttribute("header-style",t.headerStyle),e.selectable=t.selectable,e.showStatus=t.showStatus,e.menuLabel=t.menuLabel,e.externalRowHandling=t.externalRowHandling,e.selectedStatus=t.selectedStatus,e.paging=t.paging,e.pagingLocation=t.pagingLocation,e.pageSizes=t.pageSizes,e.disabled=t.disabled,e.readonly=t.readonly,r(t).forEach(o=>e.appendChild(o));const n=document.createElement("div");return n.append(e),n};l.args={rows:[{no:1,column1:"SiK/CPS-19-01",column2:"Mitteilungen",pdIconConfig:{view:!0,delete:!0},pdStatus:"danger"},{no:2,column1:"SiK/CPS-19-34",column2:"Aktuelles as dem VBS, Information und Diskussion",pdStatus:"success"},{no:3,column1:"SiK/CPS-19-12",column2:"NKF, Evaluationsverfahren, Information und Diskussion",pdStatus:"success"},{no:4,column1:"SiK/CPS-19-65",column2:"Gesamtkonzeption Boden, Präsentation und Diskussion",pdIconConfig:{edit:!1,delete:!0},pdStatus:"success"},{no:5,column1:"SiK/CPS-19-101",column2:"Politisches Controlling, Präsentation, Diskussion und Beschluss"},{no:6,column1:"18.445",column2:"Pa.lv. Semadenbi. Fakultatives"},{no:7,column1:"WBK/CSEC-19-02",column2:"Referendum für die Unterstützung Olympischer Spiele durch den Bund"},{no:8,column1:"19.040",column2:"Controlling, Präsentation, Diskussion und Beschluss",pdStatus:"warning"}],columns:[{columnName:"no",label:"#",width:50,bold:!0,fixed:!0,sortable:!0},{columnName:"column1",label:"Referenz",width:150,textAlign:"right"},{columnName:"column2",label:"Thema",width:0,minWidth:500,sortable:!0,sortDir:"asc",textAlign:"left",filter:!0}],menu:[{text:"Drucken",icon:"print"},{text:"Contact",icon:"contact"}],showActionColumn:!0,iconConfig:{edit:!0,select:!1,delete:!0},selectable:!0,showStatus:!0,headerStyle:"dark",menuLabel:"Aktionen",externalRowHandling:!1,selectedStatus:"none",paging:!0,pagingLocation:"right",pageSizes:[{id:"1",value:1,label:"1"},{id:"2",value:5,label:"5",selected:!0},{id:"3",value:10,label:"10"}],disabled:!1,readonly:!1};function r(t){let e=[];return t.menu.forEach(n=>{const o=document.createElement("pd-menu-item"),a=document.createElement("pd-icon");o.text=n.text,a.size=2,a.name=n.icon,o.appendChild(a),e.push(o)}),e}var s,i,c;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const table0 = document.createElement('pd-table');
  table0.classList = ['m-3'];
  table0.rows = args.rows;
  table0.columns = args.columns;
  table0.iconConfig = args.iconConfig;
  table0.showActionColumn = args.showActionColumn;
  table0.setAttribute('header-style', args.headerStyle);
  table0.selectable = args.selectable;
  table0.showStatus = args.showStatus;
  table0.menuLabel = args.menuLabel;
  table0.externalRowHandling = args.externalRowHandling;
  table0.selectedStatus = args.selectedStatus;
  table0.paging = args.paging;
  table0.pagingLocation = args.pagingLocation;
  table0.pageSizes = args.pageSizes;
  table0.disabled = args.disabled;
  table0.readonly = args.readonly;
  generateTableMenu(args).forEach(m => table0.appendChild(m));
  const wrapper = document.createElement('div');
  wrapper.append(table0);
  return wrapper;
}`,...(c=(i=l.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const d=["Table"];export{l as Table,d as __namedExportsOrder,u as default};
//# sourceMappingURL=pd-table.stories-b78cddc1.js.map

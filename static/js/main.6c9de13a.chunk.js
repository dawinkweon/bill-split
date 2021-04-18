(this["webpackJsonpbill-split"]=this["webpackJsonpbill-split"]||[]).push([[0],{21:function(t,n,e){},22:function(t,n,e){},94:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e.n(c),r=e(16),o=e.n(r),i=(e(21),e(14)),s=e(9),u=e(12),l=(e(22),e(23),e(5)),j=e(8),d=e.n(j),b=e(4),m=function(t){var n=Object(c.useState)(""),e=Object(u.a)(n,2),a=e[0],r=e[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.Td,{children:Object(b.jsx)(l.Input,{className:"new-person-input",placeholder:"New Person",value:a,onChange:function(t){r(t.target.value)}})}),Object(b.jsx)(l.Td,{children:Object(b.jsx)(l.Button,{onClick:function(){""!==a&&(t.onNewPersonAdded(a),r(""))},children:"\u2795"})})]})},p=function(t){var n=t.item,e=t.onItemChanged,c=n.rowId,a=n.name,r=n.amount,o=n.splitBy,i=d.a.sortBy(o,"person.colId");return Object(b.jsxs)(l.Tr,{children:[Object(b.jsx)(l.Td,{children:Object(b.jsx)(l.Input,{className:"item-name-input",value:n.name,placeholder:"New item",onChange:function(t){return n=t.target.value,void e(c,n,r,o);var n}})}),Object(b.jsx)(l.Td,{children:Object(b.jsx)(l.Input,{className:"amount-input",value:n.amount,type:"number",onChange:function(t){return function(t){var n=parseFloat(t);e(c,a,n,o)}(t.target.value)}})}),i.map((function(t){return Object(b.jsx)(l.Td,{children:Object(b.jsx)(l.Input,{className:"ratio-input",value:t.ratio,type:"number",onChange:function(n){return function(t,n){var i=parseFloat(n);isNaN(i)&&(i=0),console.log(i);var u=[].concat(Object(s.a)(o.filter((function(n){return n.person.colId!==t.colId}))),[{person:t,ratio:i}]);e(c,a,r,u)}(t.person,n.target.value)}})},t.person.colId)}))]})},O=function(){var t=Object(c.useState)([]),n=Object(u.a)(t,2),e=n[0],a=n[1],r=Object(c.useState)([]),o=Object(u.a)(r,2),j=o[0],O=o[1],h=function(){var t=d.a.max(e.map((function(t){return t.rowId})));return{rowId:void 0!==t?t+1:0,name:"",amount:0,splitBy:j.map((function(t){return{person:t,ratio:0}}))}},f=function(t,n,c,r){if(console.log("onItemChanged with params [".concat(t,", ").concat(n,", ").concat(c,", ").concat(JSON.stringify(r),"]")),d.a.find(e,["rowId",t])){var o={rowId:t,name:n,amount:c,splitBy:r};a([].concat(Object(s.a)(e.filter((function(n){return n.rowId!==t}))),[o]))}},x=d.a.sortBy(e,"rowId"),g=function(){var t=d.a.sum(e.map((function(t){return t.amount}))),n=x.map((function(t){return d.a.sortBy(t.splitBy,"person.colId").map((function(n){return n.ratio/d.a.sum(t.splitBy.map((function(t){return t.ratio})))}))})),c=d.a.zip.apply(d.a,Object(s.a)(n)).map((function(t){var n=t.map((function(t,n){return(void 0===t||isNaN(t)?0:t)*x[n].amount}));return d.a.sum(n)}));return console.log(c),{totalAmount:t,splitTotals:c}}(),v=g.totalAmount!==d.a.sum(g.splitTotals);return Object(b.jsxs)(l.Container,{className:"root",children:[Object(b.jsx)(l.Title,{children:"Split bills"}),Object(b.jsx)(l.Table.Container,{children:Object(b.jsxs)(l.Table,{children:[Object(b.jsxs)(l.Thead,{children:[Object(b.jsx)(l.Td,{children:Object(b.jsx)(l.Label,{children:"Item name"})}),Object(b.jsx)(l.Td,{children:Object(b.jsx)(l.Label,{children:"Amount"})}),j.map((function(t){return Object(b.jsx)(l.Td,{children:t.name},t.colId)})),Object(b.jsx)(m,{onNewPersonAdded:function(t){var n=d.a.max(j.map((function(t){return t.colId}))),c={colId:void 0!==n?n+1:0,name:t},r=e.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{splitBy:[].concat(Object(s.a)(t.splitBy),[{person:c,ratio:0}])})}));a(r),O([].concat(Object(s.a)(j),[c]))}})]}),Object(b.jsx)(l.Tbody,{children:x.map((function(t){return Object(b.jsx)(p,{item:t,onItemChanged:f},t.rowId)}))}),Object(b.jsxs)(l.Tfoot,{children:[Object(b.jsx)(l.Tr,{className:"add-item-row",children:Object(b.jsx)(l.Button,{onClick:function(){a([].concat(Object(s.a)(e),[h()]))},children:"\u2795"})}),g.totalAmount>0&&function(t){return Object(b.jsxs)(l.Tr,{className:"summary-row",hasBackgroundDangerLight:v,hasBackgroundSuccessLight:!v,children:[Object(b.jsx)(l.Td,{children:Object(b.jsx)(l.Label,{children:"Total"})}),Object(b.jsx)(l.Td,{children:Object(b.jsxs)(l.Label,{children:["$",t.totalAmount]})}),t.splitTotals.map((function(t){return Object(b.jsx)(l.Td,{children:Object(b.jsxs)(l.Label,{children:["$",t.toFixed(2)]})})}))]})}(g)]})]})})]})},h=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,95)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),c(t),a(t),r(t),o(t)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),h()}},[[94,1,2]]]);
//# sourceMappingURL=main.6c9de13a.chunk.js.map
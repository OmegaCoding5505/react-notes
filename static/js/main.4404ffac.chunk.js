(this["webpackJsonpreact-notes"]=this["webpackJsonpreact-notes"]||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(9),l=c.n(n),o=(c(8),c(4)),r=c(2),i=c(10),d=c(0),h=function(e){var t=e.id,c=e.text,a=e.date,s=e.deleteNote,n=e.category;return Object(d.jsxs)("div",{className:"note",children:[Object(d.jsx)("span",{className:"note-text",children:c}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsx)("small",{children:a}),Object(d.jsx)("small",{children:n}),Object(d.jsx)("div",{className:"delete-icon",children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{msFilter:""},id:"delete-icon",onClick:function(){return s(t)},children:[Object(d.jsx)("path",{d:"M5 20a2 2 0 002 2h10a2 2 0 002-2V8h2V6h-4V4a2 2 0 00-2-2H9a2 2 0 00-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"}),Object(d.jsx)("path",{d:"M9 10h2v8H9zm4 0h2v8h-2z"}),Object(d.jsx)("title",{children:"Delete note"})]})})]})]},t)},j=function(e){var t=e.handleAddNote,c=e.category,s=e.setCategory,n=e.showHideClassName,l=e.allCategories,o=e.showAlert,i=Object(a.useState)(""),h=Object(r.a)(i,2),j=h[0],b=h[1],m=Object(a.useState)(!1),u=Object(r.a)(m,2),g=u[0],O=u[1],x=Object(a.useState)(""),v=Object(r.a)(x,2),N=v[0],f=v[1];return n=g?"modal display-block":"modal display-none",Object(d.jsxs)("div",{className:"note new",children:[Object(d.jsx)("textarea",{cols:"10",rows:"8",className:"placeholder-dark",placeholder:"Type to add a note..",onChange:function(e){200-e.target.value.length>=0&&b(e.target.value)},value:j,autoFocus:!0}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsxs)("small",{className:"remaining",style:{color:200-j.length==0&&"#c60000"},children:[200-j.length," remaining"]}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{name:c,id:"label",onChange:function(e){return function(e){var t=e.target.value;s(t)}(e)},required:!0,title:"Select a label for your note",defaultValue:"Notes",children:[Object(d.jsx)("option",{value:"Notes",disabled:!0,children:"-- choose --"}),l.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))]})}),Object(d.jsx)("button",{className:"save",onClick:function(){0===j.trim().length&&(f("Text cannot be blank!"),O(!0)),""===c&&(f("Please select a label"),O(!0)),j.trim().length>0&&""!==c&&(o(!0,"Note added","success"),t(j),b(""),O(!1))},title:"Save note",children:Object(d.jsx)("h4",{children:"Save"})})]}),Object(d.jsx)("main",{children:Object(d.jsx)("div",{className:n,children:Object(d.jsxs)("section",{className:"modal-main",children:[Object(d.jsx)("p",{className:"modal-text",children:N}),Object(d.jsx)("button",{type:"button",className:"modal-close-btn",onClick:function(){return O(!1)},children:Object(d.jsx)("p",{children:"Close"})})]})})})]})},b=function(e){var t=e.notesCopy,c=e.handleAddNote,a=e.deleteNote,s=e.category,n=e.setCategory,l=e.showHideClassName,o=e.allCategories,r=e.showAlert;return Object(d.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(d.jsx)(h,{id:e.id,text:e.text,date:e.date,deleteNote:a,category:e.category},e.id)})),Object(d.jsx)(j,{handleAddNote:c,category:s,setCategory:n,showHideClassName:l,allCategories:o,showAlert:r})]},o)},m=function(e){var t=e.handleSearchNote;return Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"search-icon",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(d.jsx)("input",{type:"text",className:"placeholder-light",placeholder:"type to search",onChange:function(e){return t(e.target.value)}})]})},u=c(7),g=function(e){var t=e.notes,c=e.msg,s=e.type,n=e.removeAlert;return Object(a.useEffect)((function(){var e=setTimeout((function(){n()}),3e3);return function(){return clearTimeout(e)}}),[t]),Object(d.jsx)("div",{className:"alert-box ".concat(s),children:c})};function O(e){localStorage.setItem("theme",e),document.documentElement.className=e}var x=function(){var e=Object(a.useState)("dark"),t=Object(r.a)(e,2),c=t[0],s=t[1],n=localStorage.getItem("theme");return Object(a.useEffect)((function(){"theme-dark"===localStorage.getItem("theme")?s("dark"):"theme-light"===localStorage.getItem("theme")&&s("light")}),[n]),Object(d.jsxs)("div",{className:"container--toggle",children:[Object(d.jsx)("label",{htmlFor:"toggle",className:"toggle--label",children:Object(d.jsx)("span",{className:"toggle--label-background"})}),Object(d.jsxs)("div",{className:"mt-normal-navi",style:{fontSize:"10px"},children:[Object(d.jsx)("input",{id:"1",type:"checkbox",onChange:function(){"theme-dark"===localStorage.getItem("theme")?(O("theme-light"),s("light")):(O("theme-dark"),s("dark"))},checked:"light"===c?"":"checked"}),Object(d.jsx)("label",{htmlFor:"1"})]})]})},v=function(e){var t=e.alert,c=e.removeAlert,a=e.notes;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"Notes"}),t.show&&Object(d.jsx)(g,Object(u.a)(Object(u.a)({},t),{},{removeAlert:c,notes:a})),Object(d.jsx)(x,{})]})},N=function(e){var t=e.allCategories,c=e.notesCopy,a=e.handleSidebar;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsxs)("div",{className:"logo-content",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{msFilter:""},children:[Object(d.jsx)("path",{d:"M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"}),Object(d.jsx)("path",{d:"M7 9h10v2H7zm0 4h5v2H7z"})]})}),Object(d.jsx)("div",{className:"logo-name",children:"Notes"}),Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{msFilter:""},className:"btn-menu",children:Object(d.jsx)("path",{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"})})]}),Object(d.jsx)("ul",{className:"nav-list",children:t.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsxs)("a",{onClick:function(){a(e)},children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{msFilter:""},className:"btn-category",children:Object(d.jsx)("path",{d:"M16.813 4.419A.997.997 0 0016 4H3a1 1 0 00-.813 1.581L6.771 12l-4.585 6.419A1 1 0 003 20h13a.997.997 0 00.813-.419l5-7a.997.997 0 000-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 000-1.162L4.943 6h10.542l4.286 6-4.286 6z"})}),Object(d.jsx)("span",{className:"links-name",children:e})]}),Object(d.jsx)("span",{className:"tooltip",children:e})]},e)}))})]},c.id)})},f=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(["Notes"]),l=Object(r.a)(n,2),h=l[0],j=l[1],u=Object(a.useState)(""),g=Object(r.a)(u,2),x=g[0],f=g[1],p=Object(a.useState)({show:!1,msg:"",type:""}),w=Object(r.a)(p,2),y=w[0],S=w[1];Object(a.useEffect)((function(){localStorage.getItem("theme")?"theme-dark"===localStorage.getItem("theme")?O("theme-dark"):"theme-light"===localStorage.getItem("theme")&&O("theme-light"):O("theme-dark")})),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-data"));e&&s(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-notes-data",JSON.stringify(c)),A(Object(o.a)(c))}),[c]);var C=["Notes","Misc","Todo","Lecture Notes","Recipe"],k=Object(a.useState)(Object(o.a)(c)),H=Object(r.a)(k,2),z=H[0],A=H[1],M=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";S({show:e,msg:t,type:c})};return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(N,{allCategories:C,handleSidebar:function(e){A("Notes"===e?Object(o.a)(c):c.filter((function(t){return t.category===e})))},notesCopy:z},c.id),Object(d.jsx)(v,{notes:c,alert:y,removeAlert:M}),Object(d.jsx)(m,{handleSearchNote:f}),Object(d.jsx)(b,{notesCopy:z.filter((function(e){return e.text.toLowerCase().includes(x)||e.category.toString().toLowerCase().includes(x)})),handleAddNote:function(e){var t=new Date,a={id:Object(i.a)(),text:e,date:t.toLocaleDateString(),category:h},n=[].concat(Object(o.a)(c),[a]);s(n)},deleteNote:function(e){M(!0,"Note deleted","warning");var t=c.filter((function(t){return t.id!==e}));s(t)},category:h,setCategory:j,allCategories:C,showAlert:M})]})})};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))},8:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.4404ffac.chunk.js.map
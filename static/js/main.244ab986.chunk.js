(this["webpackJsonpnotepad-app"]=this["webpackJsonpnotepad-app"]||[]).push([[0],{22:function(e,t,n){e.exports={my_notes:"MyNotes_my_notes__2KgNe",note:"MyNotes_note__2iY3I"}},27:function(e,t,n){e.exports={delete:"Button_delete__U1Bpj",save:"Button_save__1wbiH",add:"Button_add__3zBS8",button:"Button_button__3mmbR"}},28:function(e,t,n){e.exports={"title-container":"NotePadItem_title-container__1VII9",title:"NotePadItem_title__1GEvZ"}},37:function(e,t,n){e.exports={note:"InputTextarea_note__14YVR"}},38:function(e,t,n){e.exports={item_wrapper:"NoteItem_item_wrapper__doCG8"}},43:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(18),i=n.n(o),s=(n(43),n(13)),l=n(4),d=n(3),u=n.n(d),p=n(7),b=n(14),f=n(1),j=function(e){var t=e.id,n=e.title;return Object(f.jsx)("div",{children:Object(f.jsx)(s.b,{to:"/".concat(t),children:n})})},h=n(11),v=n(21),O=(null===(a=function(){try{var e=localStorage.getItem("state");return e?JSON.parse(e):void 0}catch(t){return void console.error(t)}}())||void 0===a?void 0:a.notePad)||{list:[],listById:{}},m=Object(v.b)({name:"notePad",initialState:O,reducers:{setListData:function(e,t){var n=[],a={};t.payload.forEach((function(e){n.push(e.id),a[e.id]={id:e.id,description:e.description,files:e.files}})),e.list=n,e.listById=a},setGistData:function(e,t){e.listById[t.payload.id]={id:t.payload.id,description:t.payload.description,files:t.payload.files},!e.list.includes(t.payload.id)&&e.list.push(t.payload.id)},deleteGistData:function(e,t){var n=e.list.indexOf(t.payload);-1!==n&&e.list.splice(n,1),delete e.listById[t.payload]}}}),x=m.actions,g=x.setListData,y=x.setGistData,N=x.deleteGistData,_=m.reducer,k=n(20),w=n.n(k),S="https://api.github.com",C=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,a,c,r,o,i,s,l=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2?l[2]:void 0,c=S+t,r=localStorage.getItem("access_token"),o={Accept:"application/json","Content-Type":"application/json"},r&&(o.Authorization="token ".concat(r)),i={url:c,method:n,headers:o},"GET"===n?i.params=a:i.data=a,e.prev=8,e.next=11,w()(i);case 11:if(s=e.sent,"DELETE"!==n){e.next=14;break}return e.abrupt("return",s);case 14:return e.abrupt("return",null===s||void 0===s?void 0:s.data);case 17:return e.prev=17,e.t0=e.catch(8),console.log(e.t0),e.abrupt("return",{error:e.t0});case 21:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}(),E=n(27),I=n.n(E),T=function(e){var t=e.title,n=e.type,a=e.style,c=void 0===a?{}:a,r=e.onClick,o=e.disabled,i="".concat(I.a.button," ").concat(I.a[n]);return Object(f.jsx)("button",{className:i,style:c,onClick:r,disabled:o,children:t})},F=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,a,c,r,o=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2?o[2]:void 0,c={url:t,method:n,headers:{Accept:"application/json","Content-Type":"application/json"}},"GET"===n?c.params=a:c.data=a,e.prev=5,e.next=8,w()(c);case 8:if(r=e.sent,"DELETE"!==n){e.next=11;break}return e.abrupt("return",r);case 11:return e.abrupt("return",null===r||void 0===r?void 0:r.data);case 14:return e.prev=14,e.t0=e.catch(5),console.log(e.t0),e.abrupt("return",{error:e.t0});case 18:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return[e.notePad.list,e.notePad.listById]})),n=Object(b.a)(t,2),a=n[0],r=n[1],o=Object(l.g)(),i=Object(c.useState)(!!localStorage.getItem("access_token")),s=Object(b.a)(i,2),d=s[0],v=s[1];Object(c.useEffect)((function(){Object(p.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(o.location.search),!(n=t.get("code"))){e.next=8;break}return o.replace({search:""}),e.next=6,F("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token","POST",{client_id:"88a82b9efbcdf9d796b8",client_secret:"115263a129ed15ba484950cd594457d3f5adb696",code:n});case 6:(a=e.sent)&&"object"===typeof a&&"access_token"in a&&(localStorage.setItem("access_token",a.access_token),v(!0));case 8:case"end":return e.stop()}}),e)})))()}),[o]),Object(c.useEffect)((function(){e(function(){var e=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/gists?rev=".concat(Math.random()));case 2:"object"===typeof(n=e.sent)&&!("error"in n)&&Array.isArray(n)&&t(g(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e,d]);var O=function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.replace("https://github.com/login/oauth/authorize?client_id=88a82b9efbcdf9d796b8&scope=gist");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"flex items-center content-between",children:[Object(f.jsx)("h2",{children:" NotePad List Component "}),Object(f.jsxs)("div",{children:[Object(f.jsx)(T,{type:"add",title:"Log In",onClick:O}),Object(f.jsx)(T,{type:"delete",title:"Log Out",onClick:function(){localStorage.removeItem("access_token"),v(!1)}})]}),d&&Object(f.jsx)(T,{type:"add",title:"Create Notepad",onClick:function(){o.push("/create")}})]}),a.map((function(e){return Object(f.jsx)(j,{id:e,title:r[e].description,authorized:d},e)}))]})},B=n(17),D=n(12),V=n(37),L=n.n(V),G=function(e){var t=e.style,n=e.title,a=e.desc,c=e.filename,r=e.changeFieldValue,o=e.add,i=e.disabled;return Object(f.jsxs)("div",{className:"".concat(L.a.note," flex column"),style:t,children:[Object(f.jsx)("input",{type:"text",placeholder:"Enter note title...",disabled:i,value:n,onChange:function(e){return r(c,"filename",e.target.value,o)}}),Object(f.jsx)("textarea",{rows:"6",placeholder:"Enter note",disabled:i,value:a,onChange:function(e){return r(c,"content",e.target.value,o)}})]})},A=n(38),M=n.n(A),R=function(e){var t=e.note,n=e.changeFieldValue,a=e.filename,c=e.deleteNote,r=e.disabled;return Object(f.jsxs)("div",{className:M.a.item_wrapper,children:[Object(f.jsx)(G,{style:{marginRight:"10px"},title:t.filename,desc:t.content,filename:a,changeFieldValue:n,disabled:r}),Object(f.jsx)("div",{children:Object(f.jsx)(T,{type:"delete",title:"Delete",style:{marginTop:"8px"},onClick:function(){return c(a)},disabled:r})})]})},$=function(e){var t=e.notes,n=e.changeFieldValue,a=e.deleteNote,c=e.disabled;return Object(f.jsx)("div",{children:Object.keys(t).filter((function(e){return t[e]})).map((function(e){return Object(f.jsx)(R,{filename:e,note:t[e],changeFieldValue:n,deleteNote:a,disabled:c},e)}))})},z=function(e){var t=e.changeFieldValue,n=e.addNote,a=e.disabled,r=Object(c.useRef)(null);return Object(f.jsxs)("form",{ref:r,onSubmit:function(e){return e.preventDefault()},children:[Object(f.jsx)(G,{changeFieldValue:t,add:!0,disabled:a}),Object(f.jsx)(T,{type:"add",title:"Add",style:{marginTop:"10px"},disabled:a,onClick:function(){return n(r.current)}})]})},J=n(22),q=n.n(J),H=function(e){var t=e.notes,n=e.changeFieldValue,a=e.addNote,c=e.deleteNote,r=e.disabled;return Object(f.jsxs)("div",{className:q.a.my_notes,children:[Object(f.jsx)("div",{className:"h2",children:"My Notes"}),Object(f.jsx)(z,{classes:q.a,changeFieldValue:n,addNote:a,disabled:r}),Object(f.jsx)($,{classes:q.a,notes:t,changeFieldValue:n,deleteNote:c,disabled:r})]})},U=n(28),Y=n.n(U),K=function(e){var t=Object(l.i)().id,n=Object(l.h)().pathname,a=Object(l.g)(),r=Object(h.b)(),o=Object(h.c)((function(e){return e.notePad.listById[t]})),i=Object(c.useState)((null===o||void 0===o?void 0:o.description)||""),s=Object(b.a)(i,2),d=s[0],j=s[1],v=Object(c.useState)({filename:"",content:""}),O=Object(b.a)(v,2),m=O[0],x=O[1],g="/create"===n,_=!!localStorage.getItem("access_token"),k=Object(c.useState)({}),w=Object(b.a)(k,2),S=w[0],E=w[1];Object(c.useEffect)((function(){o&&(j(null===o||void 0===o?void 0:o.description),E(o.files))}),[o]),Object(c.useEffect)((function(){var e;t&&r((e=t,function(){var t=Object(p.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C("/gists/".concat(e));case 2:"object"===typeof(a=t.sent)&&a&&!("error"in a)&&n(y(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[t,r]);return o||g?Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"flex items-end content-between wrap notepad-item-header",children:[Object(f.jsxs)("div",{className:"flex column ".concat(Y.a["title-container"]),children:[Object(f.jsx)("label",{htmlFor:"note-pad-title",children:"Notepad Title"}),Object(f.jsx)("input",{type:"text",id:"note-pad-title",placeholder:"My notepad title...",className:Y.a.title,disabled:!_,value:d,onChange:function(e){return j(e.target.value)}})]}),Object(f.jsxs)("div",{className:"mt-10",children:[Object(f.jsx)(T,{title:g?"Create":"Save",type:"save",style:{marginRight:"10px"},disabled:!_,onClick:function(){var e=!0;/^[\s\S]{1,255}$/.test(d)||(console.log("[NotePad Title]: Non blank, max 255 characters"),e=!1);var n,c=Object.keys(S).filter((function(e){return S[e]}));c.length?c.forEach((function(t){/^[\s\S]{1,255}$/.test(S[t].filename)||(console.log("[Note Title]: Non blank, max 255 characters"),e=!1),/^[\s\S]{1,1000}$/.test(S[t].content)||(console.log("[Note Content]: Non blank, max 1000 characters"),e=!1)})):(console.log("Notes: Array of Notes, at least one note is required"),e=!1),e&&(g?(r(function(e){return function(){var t=Object(p.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C("/gists","POST",e);case 2:"object"===typeof(a=t.sent)&&a&&!("error"in a)&&n(y(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({description:d,files:S})),a.push("/")):r((n={gist_id:t,description:d,files:S},function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/gists/".concat(n.gist_id),"PATCH",n);case 2:a=e.sent,console.log(n),console.log(a),"object"===typeof a&&a&&!("error"in a)&&t(y(a));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())))}}),Object(f.jsx)(T,{title:"Delete",type:"delete",disabled:!_,onClick:function(){var e;r((e=t,function(){var t=Object(p.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C("/gists/".concat(e),"DELETE",{gist_id:e});case 2:"object"===typeof(a=t.sent)&&a&&204===a.status&&n(N(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),a.push("/")}})]})]}),Object(f.jsx)(H,{notes:S,changeFieldValue:function(e,t,n,a){if(a)x(Object(D.a)(Object(D.a)({},m),{},Object(B.a)({},t,n)));else{var c=Object(D.a)({},S[e]);c[t]=n;var r=Object(D.a)({},S);r[e]=c,E(r)}},addNote:function(e){var t=!0;/^[\s\S]{1,255}$/.test(m.filename)||(console.log("[Note Title]: Non blank, max 255 characters"),t=!1),Object.keys(S).filter((function(e){return S[e]})).some((function(e){return e===m.filename}))&&(console.log("[Note Title]: Not`s Titles must be unique"),t=!1),/^[\s\S]{1,1000}$/.test(m.content)||(console.log("[Note Content]: Non blank, max 1000 characters"),t=!1),t&&(E(Object(D.a)(Object(D.a)({},S),{},Object(B.a)({},m.filename,m))),x({filename:"",content:""}),e.reset())},deleteNote:function(e){var t=Object(D.a)({},S);t[e]=null,E(t)},disabled:!_})]}):Object(f.jsx)("h1",{style:{color:"red"},children:"Notepad not found"})};n(69);function Z(){return Object(f.jsxs)(s.a,{basename:"/notepad-app/",children:[Object(f.jsx)("div",{className:"h1",children:"Notepad Application"}),Object(f.jsx)("div",{className:"content-container",children:Object(f.jsxs)(l.d,{children:[Object(f.jsx)(l.b,{path:"/create",component:K}),Object(f.jsx)(l.b,{path:"/:id",component:K}),Object(f.jsx)(l.b,{path:"/",component:P}),Object(f.jsx)(l.a,{to:"/"})]})})]})}var Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},W=Object(v.a)({reducer:{notePad:_}});W.subscribe((function(){!function(e){try{localStorage.setItem("state",JSON.stringify(e))}catch(t){console.error(t)}}(W.getState())}));var X=W;i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(h.a,{store:X,children:Object(f.jsx)(Z,{})})}),document.getElementById("root")),Q()}},[[70,1,2]]]);
//# sourceMappingURL=main.244ab986.chunk.js.map
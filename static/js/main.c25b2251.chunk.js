(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={container:"Container_container__2cgmQ",title:"Container_title__3k-Bn"}},21:function(t,e,n){},30:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var r=n(9),c=n.n(r),a=n(14),s=n(0),u=(n(21),n(3)),o=n(2),i=n.n(o),l=n(6);function b(){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://61984aee164fa60017c22ff5.mockapi.io/contacts/contacts");case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(0),alert(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function p(t){return j.apply(this,arguments)}function j(){return(j=Object(l.a)(i.a.mark((function t(e){var n,r,c,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,r=e.number,t.prev=1,t.next=4,fetch("https://61984aee164fa60017c22ff5.mockapi.io/contacts/contacts",{method:"POST",body:JSON.stringify({Phone:r,name:n}),headers:{"Content-Type":"application/json"}});case 4:return c=t.sent,t.next=7,c.json();case 7:return a=t.sent,t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(1),alert(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://61984aee164fa60017c22ff5.mockapi.io/contacts/contacts/".concat(e),{method:"DELETE"});case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var m=n(5),O=Object(m.c)("contacts/fetchContacts",Object(l.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b();case 3:return e=t.sent,t.abrupt("return",e.reverse());case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))),v=Object(m.c)("contacts/addContact",function(){var t=Object(l.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e);case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),x=Object(m.c)("contact/deleteContact",function(){var t=Object(l.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(e);case 3:return t.abrupt("return",e);case 6:t.prev=6,t.t0=t.catch(0),alert(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()),y=n(1);var w=function(){var t=Object(s.useState)(""),e=Object(a.a)(t,2),n=e[0],r=e[1],c=Object(s.useState)(""),o=Object(a.a)(c,2),i=o[0],l=o[1],b=Object(u.c)((function(t){return t.contacts.items})),f=Object(u.b)(),p=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":l(c);break;default:return}},j=function(){l(""),r("")};return Object(y.jsx)("div",{className:"form__container",children:Object(y.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""!==n.trim()){if(b.some((function(t){return t.name.includes(n)})))return alert("".concat(n," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432")),l(""),void r("");f(v({name:n,number:i})),j()}},children:[Object(y.jsxs)("label",{className:"label",children:["Name",Object(y.jsx)("input",{className:"input",value:n,onChange:p,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Enter Name"})]}),Object(y.jsxs)("label",{className:"label",children:["Number",Object(y.jsx)("input",{className:"input",type:"tel",value:i,onChange:p,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"Enter Number"})]}),Object(y.jsx)("button",{className:"add__button",children:"Add contact"})]})})};n(30);function k(t){var e=Object(u.b)(),n=t.name,r=t.number,c=t.id;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("span",{children:[n,": "]}),Object(y.jsxs)("span",{children:[r," "]}),Object(y.jsx)("button",{className:"button__delete",type:"button",onClick:function(){return e(x(c))},children:"delete"})]})}var C=function(t){var e=function(t){return t.contacts.items}(t),n=function(t){return t.contacts.filter}(t),r=n.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(r)}))},N=function(){var t=Object(u.b)(),e=Object(u.c)(C);return Object(s.useEffect)((function(){t(O())}),[t]),Object(y.jsxs)(y.Fragment,{children:[" ",e.length>0&&Object(y.jsx)("ul",{className:"Contact__list",children:e.map((function(t){var e=t.id,n=t.name,r=t.Phone;return Object(y.jsx)("li",{className:"Contact__item",children:Object(y.jsx)(k,{name:n,number:r,id:e})},e)}))})]})},_=(Object(m.b)("contact/deleteContact"),Object(m.b)("contact/filter")),g=function(){var t=Object(u.c)((function(t){return t.contacts.filter})),e=Object(u.b)();return Object(y.jsxs)("label",{className:"label",children:["Find contacts by name",Object(y.jsx)("input",{className:"input",type:"text",name:"filter",value:t,onChange:function(t){return e(_(t.target.value))},placeholder:"Enter search name"})]})},E=n(13),A=n.n(E);function S(t){var e=t.children;return Object(y.jsxs)("div",{className:A.a.container,children:[Object(y.jsx)("h1",{className:A.a.title,children:"Phonebook"}),e]})}var z,J=function(){return Object(y.jsxs)(S,{children:[Object(y.jsx)(w,{}),Object(y.jsx)("h2",{children:"Contacts"}),Object(y.jsx)(g,{}),Object(y.jsx)(N,{})]})},P=n(8),T=n(16),B=n(4),F=Object(m.d)([],(z={},Object(P.a)(z,O.fulfilled,(function(t,e){return e.payload})),Object(P.a)(z,v.fulfilled,(function(t,e){return[e.payload].concat(Object(T.a)(t))})),Object(P.a)(z,x.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),z)),L=Object(m.d)("",Object(P.a)({},_,(function(t,e){return e.payload}))),Z=Object(B.b)({items:F,filter:L}),q=Object(m.a)({reducer:{contacts:Z}});n(31);c.a.render(Object(y.jsx)(u.a,{store:q,children:Object(y.jsx)(J,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c25b2251.chunk.js.map
(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,a,t){e.exports={jun:"HW5_jun__2IoHN",heart:"HW5_heart__BFLMw",items:"HW5_items__3JeFe",item:"HW5_item__3nIoe",active:"HW5_active__tihBb",but:"HW5_but__UhuZq"}},,function(e,a,t){e.exports={someClass:"Affairs_someClass__2GhrX",homeWork:"Affairs_homeWork__3Yfll",close:"Affairs_close__3XF6N",name:"Affairs_name__1FzXd",botton__styles:"Affairs_botton__styles__29-Jn","pulsate-fwd":"Affairs_pulsate-fwd__3GzS8"}},function(e,a,t){e.exports={message:"Message_message__1QB2W",logo:"Message_logo__g0B54",container:"Message_container__3IFN1","bounce-top":"Message_bounce-top__3OEOI",item:"Message_item__jXIA8",contant:"Message_contant__CkDRs","rotate-scale-up":"Message_rotate-scale-up__3l02G",name:"Message_name__2hFV7",time:"Message_time__2J6Kj",homeWork:"Message_homeWork__gy4Nu"}},,function(e,a,t){e.exports={someClass:"Greeting_someClass__K_oJu",error:"Greeting_error__iLxoe",Total__users:"Greeting_Total__users__18BH6",add:"Greeting_add__3ztow",inp:"Greeting_inp__3b35a",message__error:"Greeting_message__error__2J_Cd",homeWork:"Greeting_homeWork__1na1p"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1FdNr",errorInput:"SuperInputText_errorInput__46G1_","slide-in-blurred-left":"SuperInputText_slide-in-blurred-left__3cjjK",error:"SuperInputText_error__31llN"}},function(e,a,t){e.exports={span:"SuperEditableSpan_span__11yUk",container:"SuperEditableSpan_container__1T9SZ",TextInput:"SuperEditableSpan_TextInput__uPA7_",img:"SuperEditableSpan_img__3D28L"}},function(e,a,t){e.exports={wrapper:"HW6_wrapper__3dTCo",text:"HW6_text__3CUEA",text_black:"HW6_text_black__3NXHL"}},,function(e,a,t){e.exports={blue:"HW4_blue__156GE",column:"HW4_column__11IuT",testSpanError:"HW4_testSpanError__3HdDV",homeWork:"HW4_homeWork__fESAl"}},,function(e,a,t){e.exports={default:"SuperButton_default__38i1t","scale-in-hor-center":"SuperButton_scale-in-hor-center__2C3L7",red:"SuperButton_red__2Zv9s","text-focus-in":"SuperButton_text-focus-in__3--Vq",SuperButton_default__27RSN:"SuperButton_SuperButton_default__27RSN__FUffd"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2hXAU",spanClassName:"SuperCheckbox_spanClassName__2yFlp","text-flicker-in-glow":"SuperCheckbox_text-flicker-in-glow__2X8dp"}},,,,,,function(e,a,t){e.exports={App:"App_App__3rQ3u"}},,,,function(e,a,t){e.exports=t(41)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),s=(t(35),t(26)),o=t.n(s),u=t(1),i=t(7),m=t.n(i);var _=function(e){return r.a.createElement("div",{className:m.a.container},r.a.createElement("img",{className:m.a.logo,src:e.avatar,alt:"logo"}),r.a.createElement("div",{className:m.a.contant},r.a.createElement("div",{className:m.a.name},e.name),r.a.createElement("div",{className:m.a.item},r.a.createElement("div",{className:m.a.message},e.message),r.a.createElement("div",{className:m.a.time},e.time))))},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Artem",E="npm start \u043d\u0438\u0436\u0438\u043c\u0430\u043b ?",f="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:m.a.homeWork},"homeworks 1"),r.a.createElement(_,{avatar:d,name:p,message:E,time:f}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(2),v=t(6),g=t.n(v);var N=function(e){return r.a.createElement("div",null,r.a.createElement("button",{className:g.a.close,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"),r.a.createElement("span",{className:g.a.name},e.affair.name))};var k=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:g.a.botton__styles,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:g.a.botton__styles,onClick:function(){e.setFilter("hight")}},"High"),r.a.createElement("button",{className:g.a.botton__styles,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:g.a.botton__styles,onClick:function(){e.setFilter("low")}},"Low"))},C=[{_id:1,name:"React",priority:"hight"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"hight"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(C),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(b.a)(c,2),o=s[0],u=s[1],i=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("div",{className:g.a.homeWork},"homeworks 2"),r.a.createElement(k,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:o}),r.a.createElement("hr",null),r.a.createElement("hr",null))},S=t(29),j=t(9),O=t.n(j),y=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=(e.users,e.addUserCallback,O.a.error);return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:l?s:O.a.inp}),r.a.createElement("button",{className:O.a.add,onClick:n},"add"),r.a.createElement("span",{className:O.a.Total__users},c),r.a.createElement("span",{className:O.a.message__error},l?"There should not be an empty line here":""))},w=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),s=c[0],o=c[1],u=Object(n.useState)(!1),i=Object(b.a)(u,2),m=i[0],_=i[1],d=a.length;return r.a.createElement(y,{name:s,setNameCallback:function(e){""!==e.currentTarget.value&&(o(e.currentTarget.value.trim()),_(!1))},addUser:function(){""!==s?(t(s),o(""),alert("Hello  "+s)):_(!0)},error:m,totalUsers:d,users:a,addUserCallback:t})},W=t(43);var A=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("div",{className:O.a.homeWork},"homeworks 3"),r.a.createElement(w,{users:t,addUserCallback:function(e){var a={_id:Object(W.a)(),name:e};l([a].concat(Object(S.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=t(8),T=t(13),H=t.n(T),F=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,u=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(H.a.error," ").concat(o||""),m="".concat(H.a.errorInput," ").concat(c?H.a.errorInput:H.a.superInput," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),c&&r.a.createElement("span",{className:i},c))},B=t(17),J=t.n(B),U=t(19),G=t.n(U),M=function(e){var a=e.red,t=e.className,n=Object(I.a)(e,["red","className"]),l="".concat(a?G.a.red:G.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},P=t(20),X=t.n(P),D=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:X.a.spanClassName},l))};var K=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),u=Object(b.a)(o,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("div",{className:J.a.homeWork}," homeworks 4"),r.a.createElement("div",{className:J.a.column},r.a.createElement(F,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(F,{className:J.a.blue}),r.a.createElement(M,null,"default"),r.a.createElement(M,{red:!0,onClick:s},"delete "),r.a.createElement(M,{disabled:!0},"disabled"),r.a.createElement(D,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(D,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var L=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(x,null),r.a.createElement(A,null),r.a.createElement(K,null))};var R=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},Z=t(4),q=t.n(Z),z=function(){return r.a.createElement("div",{className:q.a.jun},"Junior")},V=function(){return r.a.createElement("div",{className:q.a.jun},"Junior_plus")},Q="/pre-junior",Y="/junior",$="/junior_plus";var ee=function(){return r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,render:function(){return r.a.createElement(u.a,{to:Q})}}),r.a.createElement(u.b,{path:Q,render:function(){return r.a.createElement(L,null)}}),r.a.createElement(u.b,{path:Y,render:function(){return r.a.createElement(z,null)}}),r.a.createElement(u.b,{path:$,render:function(){return r.a.createElement(V,null)}}),r.a.createElement(u.b,{render:function(){return r.a.createElement(R,null)}})))},ae=t(10);var te=function(){return r.a.createElement("div",{className:q.a.items},r.a.createElement(ae.b,{to:Q,className:q.a.item,activeClassName:q.a.active}," PRE_JUNIOR "),r.a.createElement(ae.b,{to:$,className:q.a.item,activeClassName:q.a.active}," Junior_plus "),r.a.createElement(ae.b,{to:Y,className:q.a.item,activeClassName:q.a.active}," Junior "),r.a.createElement("button",{className:q.a.but},"hover"))};var ne=function(){return r.a.createElement("div",null,r.a.createElement(ae.a,null,r.a.createElement(te,null),r.a.createElement(ee,null)))},re=t(14),le=t.n(re),ce=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(I.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),o=Object(b.a)(s,2),u=o[0],i=o[1],m=l||{},_=m.children,d=m.onDoubleClick,p=(m.className,Object(I.a)(m,["children","onDoubleClick","className"]));return r.a.createElement("div",{className:le.a.container},u?r.a.createElement(F,Object.assign({className:le.a.TextInput,autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement("div",null,r.a.createElement("span",{className:le.a.img}),r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),d&&d(e)},className:le.a.span},p),_||c.value)))};function se(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function oe(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}se("test",{x:"A",y:1});oe("test",{x:"",y:0});var ue=t(15),ie=t.n(ue);var me=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:ie.a.wrapper},r.a.createElement("h2",{className:ie.a.text},"Homework 6"),r.a.createElement("div",null,r.a.createElement(ce,{value:t,onChangeText:l,spanProps:{children:t?void 0:"...enter text..."}})),r.a.createElement(M,{className:ie.a.text_black,onClick:function(){se("editable-span-value",t)}},"save"),r.a.createElement(M,{className:ie.a.text_black,onClick:function(){l(oe("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var _e=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ne,null),r.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.7cdc86bb.chunk.js.map
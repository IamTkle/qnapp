(this["webpackJsonpqueue-n-a"]=this["webpackJsonpqueue-n-a"]||[]).push([[0],{13:function(u,e,t){},15:function(u,e,t){},16:function(u,e,t){"use strict";t.r(e);var n=t(2),D=t.n(n),r=t(6),o=t.n(r),a=t(3),i=t(4),c=t(7),F=(t(13),t(1)),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MAX_QUESTION_LENGTH||60,E=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MIN_BOX_LENGTH||6,d=2e3,l=function(u){var e=u.mirrored,t=void 0===e?"":e,n=u.goButtonClass,D=Math.max(E,3+t.length/s*35);return Object(F.jsxs)("button",{className:n,style:{width:"".concat(D,"rem")},children:[Object(F.jsx)("span",{id:"mirrored-input",children:t}),Object(F.jsx)(c.a,{id:"go-button-icon",size:30})]})},C=function(u){var e=u.handleRate,t=u.liked,n=u.rated,D=u.reported,r=n&&t,o=n&&!t;return Object(F.jsxs)("div",{className:"rate-bar",children:[Object(F.jsx)("button",{className:"rate-option",id:"like-option",onClick:function(){return e({liked:!0})},style:{opacity:"".concat(r+.3)},children:Object(F.jsx)(i.c,{className:"option-icon",color:"#27c840",size:60})}),Object(F.jsx)("button",{className:"rate-option",id:"dislike-option",onClick:function(){return e({liked:!1})},style:{opacity:"".concat(o+.3)},children:Object(F.jsx)(i.b,{className:"option-icon",color:"#fe5f57",size:60})}),Object(F.jsx)("button",{className:"rate-option",id:"report-option",onClick:function(){return e({reported:!0})},style:{opacity:"".concat(D+.3)},children:Object(F.jsx)(i.a,{className:"option-icon",color:" #ffbc30",size:60})})]})},A=function(u){var e=u.onServerResponse,t=void 0===e?null:e,n=u.style,r=void 0===n?{}:n,o=u.promptType,i=void 0===o?"a":o,c=u.qid,E=void 0===c?0:c,A=D.a.useState(""),p=Object(a.a)(A,2),m=p[0],j=p[1],B=D.a.useState(!1),b=Object(a.a)(B,2),f=b[0],h=b[1],O=D.a.useState(!0),x=Object(a.a)(O,2),v=x[0],S=x[1],y=D.a.useState("go-button"),T=Object(a.a)(y,2),w=T[0],g=T[1],k=D.a.useState(null),N=Object(a.a)(k,2),_=N[0],q=N[1],L=D.a.useState(null),H=Object(a.a)(L,2),R=H[0],M=H[1],P=D.a.useState(null),I=Object(a.a)(P,2),K=I[0],W=I[1],z=D.a.useState({rated:!1,liked:!1,reported:!1}),U=Object(a.a)(z,2),J=U[0],Q=U[1],G=D.a.useRef(),V=function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Error";G.current.innerHTML=u,g("go-button error"),h(!0),S(!1),_&&clearTimeout(_),R&&clearTimeout(R),K||W(setTimeout((function(){W(null),g("go-button")}),305)),q(setTimeout((function(){q(null),h(!1)}),d)),M(setTimeout((function(){S(!0),M(null)}),2500))};return Object(F.jsxs)("div",{className:"user-interact-container",style:r,children:[Object(F.jsxs)("form",{id:"user-input-container",onSubmit:function(u){if(u.preventDefault(),m.trim().length<2)V("Please enter more than 1 character");else{var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_response:m,qid:E,rated:J.rated,liked:J.liked,reported:J.reported})};fetch("/api/questions",e).then((function(u){return t?t(u):u.json().then((function(u){return V(u.error)}))})).catch((function(u){return console.log("Error happened: "+u)})),Q({rated:!1,liked:!1,reported:!1})}j("")},children:[Object(F.jsx)("input",{type:"text",id:"input-bar",className:"input-bar",onChange:function(u){j(u.target.value)},value:m,maxLength:s.toString(),onKeyDown:function(u){u.keyCode>=35&&u.keyCode<=45&&u.preventDefault()}}),Object(F.jsx)(l,{mirrored:m,goButtonClass:w}),Object(F.jsx)("div",{className:"error-message",ref:G,hidden:v,style:{opacity:"".concat(+f)}}),Object(F.jsxs)("span",{id:"word-count",children:[m.length,"/",s]})]}),"a"===i&&Object(F.jsx)(C,{handleRate:function(u){u.reported?Q((function(u){return{rated:u.rated,liked:u.liked,reported:!u.reported}})):Q((function(e){var t=e.liked===u.liked;if(e.rated&&t){return{rated:!e.rated,liked:!1,reported:e.reported}}return{rated:!0,liked:u.liked,reported:e.reported}}))},rateState:J,rated:J.rated,liked:J.liked,reported:J.reported})]})},p=t(8);t(15);var m=function(){var u=D.a.useRef(),e=D.a.useState(""),t=Object(a.a)(e,2),n=t[0],r=t[1],o=D.a.useState("a"),i=Object(a.a)(o,2),c=i[0],s=i[1],E=D.a.useState(!0),d=Object(a.a)(E,2),l=d[0],C=d[1],m=D.a.useState(null),j=Object(a.a)(m,2),B=j[0],b=j[1],f=D.a.useState({}),h=Object(a.a)(f,2),O=h[0],x=h[1],v=D.a.useState("reload-button"),S=Object(a.a)(v,2),y=S[0],T=S[1];D.a.useEffect((function(){window.username&&r(window.username),window.promptType&&window.prompt&&(s(window.promptType),b(window.qid),"q"===window.promptType?u.current.innerHTML=window.prompt:u.current.innerHTML='"'.concat(window.prompt,'?"')),window.username&&!window.sensitive&&C(!1),fetch("/api/answers").then((function(u){return u.json().then((function(u){return x(u)}))})).catch((function(){return console.log("QnApp: Failed to fetch answers")})),document.addEventListener("keydown",w),document.addEventListener("touchend",(function(u){u.preventDefault(),w(u)}))}),[]);var w=function(u){document.querySelector(".input-bar").focus()};return Object(F.jsxs)("div",{className:"App",children:[!n&&Object(F.jsx)("div",{className:"name-input-screen",hidden:n,children:Object(F.jsxs)("form",{className:"name-input-container",onSubmit:function(u){u.preventDefault();var e=document.querySelector(".input-bar").value.trim();if(e.length>0&&!e.match(/(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061E\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B6A\u1B74-\u1B7C\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E52\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC1\uFD3E\uFD3F\uFDFC\uFDFD\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA])/)){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e})};fetch("api/name",t).then((function(u){return 200===u.status?r(e):document.querySelector(".name-input-error").innerHTML="Something went wrong trying to connect... Please reload"})).catch((function(){return document.querySelector(".name-input-error").innerHTML="Could not connect to server"}))}document.querySelector(".name-input-error").hidden=!1,document.querySelector(".input-bar").value=""},children:[Object(F.jsx)("span",{className:"name-input-prompt",children:"What is your name?"}),Object(F.jsx)("input",{className:"input-bar",id:"name-input",type:"text",maxLength:"20"}),Object(F.jsx)("span",{className:"name-input-error",hidden:!0,children:"Name cannot contain special characters"})]})}),n&&Object(F.jsx)("div",{className:"name-display",children:n}),Object(F.jsx)("div",{style:{alignSelf:"center",marginBottom:"15rem",color:"white",filter:"blur(".concat(l?"5px":0,")")},onMouseEnter:function(){return C(!1)},ref:u,children:"*Imagine a question*"}),Object(F.jsx)(A,{style:{filter:"blur(".concat(n?0:"5px",")")},onServerResponse:function(e){console.log(e.status),200===e.status&&e.json().then((function(e){console.log(e),"a"===e.promptType?(e.sensitive?C(!0):C(!1),u.current.innerHTML='"'.concat(e.prompt,'?"'),s("a"),b(e.qid)):"q"===e.promptType&&(C(!1),u.current.innerHTML="".concat(e.prompt),s("q"),b(e.qid))}))},promptType:c,qid:B}),Object(F.jsxs)("div",{className:"answers-tab",onMouseLeave:function(u){return u.target.scrollTo(0,0)},children:[Object(F.jsx)(p.a,{className:y,onClick:function(u){T("reload-button disabled"),setTimeout((function(){T("reload-button")}),3e3),fetch("/api/answers").then((function(u){return u.json().then((function(u){return x(u)}))})).catch((function(){return console.log("QnApp: Failed to fetch answers")}))}}),Object.keys(O).reverse().map((function(u,e){var t=O["".concat(u)],n=t.likes,D=t.dislikes,r=n+D===0?2:n+D;return Object(F.jsxs)("div",{className:"answer-element",children:[Object(F.jsxs)("div",{className:"answer-info",children:[Object(F.jsxs)("b",{children:['"',t.content,'"']}),": ",t.likes," likes/"," ",t.dislikes," dislikes"]}),Object(F.jsx)("div",{className:"dislikes-bar response-bar",style:{width:"35rem"}}),Object(F.jsx)("div",{className:"likes-bar response-bar",style:{width:"".concat(n>D?17.5+n/r*17.5/2:17.5-n/r*17.5/2,"rem"),zIndex:"20"}}),t.answers.map((function(u){return Object(F.jsxs)("div",{className:"question-response",children:['"',u,'"']})}))]},u)}))]})]})},j=function(u){u&&u instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(e){var t=e.getCLS,n=e.getFID,D=e.getFCP,r=e.getLCP,o=e.getTTFB;t(u),n(u),D(u),r(u),o(u)}))};o.a.render(Object(F.jsx)(D.a.StrictMode,{children:Object(F.jsx)(m,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.5813ed56.chunk.js.map
(this["webpackJsonpqueue-n-a"]=this["webpackJsonpqueue-n-a"]||[]).push([[0],{15:function(u,e,t){},17:function(u,e,t){},18:function(u,e,t){"use strict";t.r(e);var n=t(2),D=t.n(n),r=t(8),o=t.n(r),a=t(3),c=t(4),i=(t(7),t(15),t(5)),s=t(1),F=function(u){var e=u.handleRate,t=u.rateState,n=u.buttonSize,D=void 0===n?60:n,r=t.rated&&t.liked,o=t.rated&&!t.liked;return Object(s.jsxs)("div",{className:"rate-bar",children:[Object(s.jsx)("button",{className:"rate-option",id:"like-option",onClick:function(){return e({type:p.liked})},style:{opacity:"".concat(r+.3)},children:Object(s.jsx)(i.c,{className:"option-icon",color:"#27c840",size:D})}),Object(s.jsx)("button",{className:"rate-option",id:"dislike-option",onClick:function(){return e({type:p.disliked})},style:{opacity:"".concat(o+.3)},children:Object(s.jsx)(i.b,{className:"option-icon",color:"#fe5f57",size:D})}),Object(s.jsx)("button",{className:"rate-option",id:"report-option",onClick:function(){return e({type:p.reported})},style:{opacity:"".concat(t.reported+.3)},children:Object(s.jsx)(i.a,{className:"option-icon",color:" #ffbc30",size:D})})]})},E=t(9),l=function(u){var e=u.mirrored,t=void 0===e?"":e,n=u.goButtonClass,D=Math.max(C,3+t.length/d*35);return Object(s.jsxs)("button",{className:n,style:{width:"".concat(D,"rem")},children:[Object(s.jsx)("span",{id:"mirrored-input",children:t}),Object(s.jsx)(E.a,{id:"go-button-icon",size:30})]})},d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MAX_QUESTION_LENGTH||60,C=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MIN_BOX_LENGTH||6,A=2e3,p={liked:"liked",disliked:"disliked",reported:"reported",reset:"reset"},j={rated:!1,liked:!1,reported:!1},b=function(u,e){switch(e.type){case p.liked:return u.rated&&u.liked?Object(c.a)(Object(c.a)({},u),{},{rated:!1,liked:!1}):Object(c.a)(Object(c.a)({},u),{},{rated:!0,liked:!0});case p.disliked:return u.rated&&!u.liked?Object(c.a)(Object(c.a)({},u),{},{rated:!1,liked:!1}):Object(c.a)(Object(c.a)({},u),{},{rated:!0,liked:!1});case p.reported:return Object(c.a)(Object(c.a)({},u),{},{reported:!u.reported});case p.reset:return j;default:throw new Error("Unexpected action type")}},m=function(u){var e=u.onServerResponse,t=void 0===e?null:e,n=u.style,r=void 0===n?{}:n,o=u.promptType,c=void 0===o?"a":o,i=u.qid,E=void 0===i?0:i,C=u.onResponseSent,m=void 0===C?null:C,B=D.a.useState(""),f=Object(a.a)(B,2),h=f[0],O=f[1],v=D.a.useState(!1),x=Object(a.a)(v,2),S=x[0],y=x[1],k=D.a.useState((function(){return"Error"})),N=Object(a.a)(k,2),T=N[0],g=N[1],w=D.a.useState(!0),_=Object(a.a)(w,2),q=_[0],R=_[1],P=D.a.useState("go-button"),L=Object(a.a)(P,2),H=L[0],I=L[1],M=D.a.useState(null),K=Object(a.a)(M,2),W=K[0],z=K[1],U=D.a.useState(null),J=Object(a.a)(U,2),Q=J[0],G=J[1],V=D.a.useState(null),X=Object(a.a)(V,2),Y=X[0],Z=X[1],$=D.a.useReducer(b,j),uu=Object(a.a)($,2),eu=uu[0],tu=uu[1],nu=D.a.useState((function(){return 0})),Du=Object(a.a)(nu,2),ru=Du[0],ou=Du[1],au=function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Error";g(u),I("go-button error"),y(!0),R(!1),W&&clearTimeout(W),Q&&clearTimeout(Q),Y||Z(setTimeout((function(){Z(null),I("go-button")}),305)),z(setTimeout((function(){z(null),y(!1)}),A)),G(setTimeout((function(){R(!0),G(null)}),2500))};return Object(s.jsxs)("div",{className:"user-interact-container",style:r,children:[Object(s.jsxs)("form",{id:"user-input-container",onSubmit:function(u){if(u.preventDefault(),h.trim().length<2)au("Please enter more than 1 character");else{var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_response:h,qid:E,rated:eu.rated,liked:eu.liked,reported:eu.reported})};fetch("/api/questions",e).then((function(u){t&&t(u)})).catch((function(u){return au("Error happened: Could not connect to server!\n            ".concat(u))})),m&&m(),tu({type:p.reset})}O("")},children:[Object(s.jsx)("input",{type:"text",id:"input-bar",className:"input-bar",onChange:function(u){ou(u.target.selectionStart),O(u.target.value)},value:h,maxLength:d.toString(),onKeyDown:function(u){u.keyCode>=35&&u.keyCode<=45&&u.preventDefault()},onFocus:function(u){u.target.selectionStart=ru,u.target.selectionEnd=ru}}),Object(s.jsx)(l,{mirrored:h,goButtonClass:H}),Object(s.jsx)("div",{className:"error-message",hidden:q,style:{opacity:"".concat(+S)},children:T}),Object(s.jsxs)("span",{id:"word-count",children:[h.length,"/",d]})]}),"a"===c&&Object(s.jsx)(F,{handleRate:tu,rateState:eu})]})};function B(u){var e=u.handleNameSubmit,t=void 0===e?function(){}:e,n=u.errorMessage,D=void 0===n?"hi":n;return Object(s.jsx)("div",{className:"name-input-screen",children:Object(s.jsxs)("form",{className:"name-input-container",onSubmit:t,children:[Object(s.jsx)("span",{className:"name-input-prompt",children:"What is your name?"}),Object(s.jsx)("input",{className:"input-bar",id:"name-input",type:"text",maxLength:O}),Object(s.jsx)("span",{className:"name-input-error",children:D})]})})}var f=t(10);function h(u){var e=u.reloadButtonClass,t=void 0===e?"reload-button":e,n=u.handleAnswersReload,D=void 0===n?function(){}:n,r=u.answers,o=void 0===r?{}:r;return Object(s.jsxs)("div",{className:"answers-tab",onMouseLeave:function(u){return u.target.scrollTo(0,0)},children:[Object(s.jsx)(f.a,{className:t,onClick:D}),o&&Object.keys(o).reverse().map((function(u){var e=o["".concat(u)],t=e.likes,n=e.dislikes,D=t+n===0?2:t+n;return Object(s.jsxs)("div",{className:"answer-element",children:[Object(s.jsxs)("div",{className:"answer-info",children:[Object(s.jsxs)("b",{children:['"',e.content,'"']}),": ",e.likes," likes/"," ",e.dislikes," dislikes"]}),Object(s.jsx)("div",{className:"dislikes-bar response-bar",style:{width:"90%"}}),Object(s.jsx)("div",{className:"likes-bar response-bar",style:{width:"".concat(45+(t-n)/D*45,"%"),zIndex:"20"}}),e.answers.map((function(u,e){return Object(s.jsxs)("div",{className:"question-response",children:['"',u,'"']},e)}))]},u)}))]})}t(17);var O="20";var v=function(){var u=D.a.useState((function(){return""})),e=Object(a.a)(u,2),t=e[0],n=e[1],r=D.a.useState((function(){return""})),o=Object(a.a)(r,2),c=o[0],i=o[1],F=D.a.useState("It's your turn to ask a question"),E=Object(a.a)(F,2),l=E[0],d=E[1],C=D.a.useState((function(){return"a"})),A=Object(a.a)(C,2),p=A[0],j=A[1],b=D.a.useState(!0),f=Object(a.a)(b,2),O=f[0],v=f[1],x=D.a.useState(null),S=Object(a.a)(x,2),y=S[0],k=S[1],N=D.a.useState((function(){})),T=Object(a.a)(N,2),g=T[0],w=T[1],_=D.a.useState("reload-button"),q=Object(a.a)(_,2),R=q[0],P=q[1];return D.a.useEffect((function(){var u,e=function(u){"input-bar"===document.activeElement.id&&t||document.querySelector(".input-bar").focus()};document.addEventListener("keydown",e),document.addEventListener("click",e),fetch("/api/name").then((function(u){return u.ok?u.json():new Error(u.statusText)})).then((function(e){n(e.username),u=e.username})).catch((function(u){return console.error(u)})),fetch("/api/initialprompt").then((function(u){return u.ok?u.json():new Error(u.statusText)})).then((function(e){j(e.promptType),k(e.qid),"q"===e.promptType?d(e.prompt):d('"'.concat(e.prompt,'"')),!e.sensitive&&u?v(!1):v(!0)})).catch((function(u){return console.error(u)})),fetch("/api/answers").then((function(u){return u.ok?u.json().then((function(u){return w(u)})):console.error("QnAPP: Failed to fetch answers ".concat(u.error()))})).catch((function(){return console.error("QnApp: Failed to fetch answers")}))}),[]),Object(s.jsxs)("div",{className:"App",children:[!t&&Object(s.jsx)(B,{handleNameSubmit:function(u){u.preventDefault();var e=document.querySelector(".input-bar").value.trim();if(e.length>0&&!e.match(/(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061E\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B6A\u1B74-\u1B7C\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E52\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC1\uFD3E\uFD3F\uFDFC\uFDFD\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA])/)){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e})};fetch("api/name",t).then((function(u){return u.ok?n(e):i("Something went wrong trying to connect... Please reload")})).catch((function(){return i("Could not connect to server")}))}else i("Name cannot contain special characters");document.querySelector(".input-bar").value=""},errorMessage:c}),t&&Object(s.jsx)("div",{className:"name-display",children:t}),Object(s.jsx)("div",{style:{filter:"blur(".concat(O?"5px":0,")")},className:"prompt-container",onMouseEnter:function(){return v(!1)},children:l}),Object(s.jsx)(m,{style:{filter:"blur(".concat(t?0:"5px",")")},onServerResponse:function(u){u.ok&&u.json().then((function(u){"a"===u.promptType?(u.sensitive?v(!0):v(!1),d('"'.concat(u.prompt,'"')),j("a"),k(u.qid)):"q"===u.promptType&&(v(!1),d(u.prompt),j("q"),k(u.qid))}))},promptType:p,qid:y,onResponseSent:function(){d("Sending response...")}}),Object(s.jsx)(h,{reloadButtonClass:R,handleAnswersReload:function(u){P("reload-button disabled"),setTimeout((function(){P("reload-button")}),3e3),fetch("/api/answers").then((function(u){return u.json().then((function(u){return w(u)}))})).catch((function(){return console.log("QnApp: Failed to fetch answers")}))},answers:g})]})},x=function(u){u&&u instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(e){var t=e.getCLS,n=e.getFID,D=e.getFCP,r=e.getLCP,o=e.getTTFB;t(u),n(u),D(u),r(u),o(u)}))};o.a.render(Object(s.jsx)(D.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),x()},7:function(u,e,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.b157ecda.chunk.js.map
(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{102:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n(19),s=n.n(r),i=n(22),o=n(4),d=n(25),l=n(50),j=n.n(l),p=n(51),b=n.n(p),m=n(112),u=n(113),O=n(114),h=n(52),x=function(e){var t=e.passDataUpstream,n=Object(a.useRef)(null),r=document.getElementById("displayMP");return Object(a.useEffect)((function(){h.makeWidget(n.current,"https://z8ivgb8lhnl.typeform.com/to/YbkRDwtc",{hideFooter:!0,hideHeaders:!0,opacity:0,onSubmit:function(e){var n=e.response_id;t({responseId:n}),setTimeout((function(){r&&r.scrollIntoView()}),3e3)}})}),[n,r,t]),Object(c.jsx)("div",{children:Object(c.jsx)("div",{ref:n,className:"typeform-widget ",id:"typeform"})})},f=n(53),v=n(54),y=(n(98),function(e){var t=e.emailBody,n=e.passDataUpstream;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"secondary-header",children:"3.Edit your email"}),Object(c.jsx)(f.a,{viewContainerClassName:"emailBox",type:"textarea",inputProps:{placeholder:"your email will appear here",rows:10},saveButtonContent:"Apply",cancelButtonContent:Object(c.jsx)("strong",{children:"Cancel"}),editButtonContent:"Edit Your Email",value:t,onSave:function(e){n({generatedEmail:e})}}),Object(c.jsx)(v.a,{trigger:function(e){return Object(c.jsx)("button",{className:"btn btn-outline-primary copy-button",children:"Copy"})},closeOnDocumentClick:!0,onOpen:function(){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e),n({copied:!0})},className:"copy-popup",children:Object(c.jsx)("span",{children:" Copied to clipboard "})})]})})}),g=n(33),E=n.n(g),N=n(55),C=n(26),D=function(e){var t=e.passDataUpstream,n=Object(a.useState)({dropDownOpen:!1,postcodeError:""}),r=Object(d.a)(n,2),s=r[0],i=r[1],l=s.dropDownOpen,j=s.postcodeError,p=function(){var e=Object(N.a)(E.a.mark((function e(n){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/postcode/".concat(n),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.error?i(Object(o.a)(Object(o.a)({},s),{},{postcodeError:e.error})):(t({mpData:e}),i(Object(o.a)(Object(o.a)({},s),{},{postcodeError:""})))}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.postcode;/([A-Z][A-HJ-Y]?[0-9][A-Z0-9]? ?[0-9][A-Z]{2}|GIR ?0A{2})$/.test(t.toUpperCase())?p(t):t.length>5&&i(Object(o.a)(Object(o.a)({},s),{},{postcodeError:"Invalid postcode"}))};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"button-container",children:[Object(c.jsx)("button",{className:"btn btn-lg cta btn-outline-primary",type:"submit",onClick:function(){return i(Object(o.a)(Object(o.a)({},s),{},{dropDownOpen:!0}))},children:"Don't see your MP?"}),Object(c.jsx)("a",{href:"#emailBox",children:Object(c.jsx)("button",{className:"btn btn-lg cta btn-primary",type:"submit",onClick:function(){return i(Object(o.a)(Object(o.a)({},s),{},{dropDownOpen:!1}))},children:"Continue with this MP"})})]}),l&&Object(c.jsx)(C.c,{initialValues:{postcode:""},validate:b,onSubmit:b,children:function(e){return Object(c.jsxs)(C.b,{className:"get-MP-form",children:[Object(c.jsx)("label",{htmlFor:"postcode",children:"Postcode:"}),Object(c.jsx)(C.a,{type:"text",name:"postcode"}),Object(c.jsx)("div",{className:"error postcode-error",children:j||""})]})}})]})},w=function(e){var t=e.mpData,n=t.constituency,a=t.full_name,r=t.party,s=t.name,i=t.error,o=e.mpEmailAddress;return Object(c.jsxs)("div",{className:"displayMP",id:"displayMP",children:[Object(c.jsx)("h2",{className:"secondary-header",children:"2. Find Your MP"}),Object(c.jsxs)("div",{className:"mpCard text-center",children:[Object(c.jsx)("div",{className:"error",children:i}),Object(c.jsx)("div",{children:n}),Object(c.jsx)("div",{children:s}),Object(c.jsx)("div",{children:a}),Object(c.jsx)("div",{children:r}),Object(c.jsx)("div",{children:o})]})]})},A=function(e){var t=e.subject,n=e.body,a=e.mpEmailAddress;return Object(c.jsxs)("div",{className:"send-email",children:[Object(c.jsx)("h2",{className:"secondary-header",children:"4. Send your email"}),Object(c.jsx)("p",{className:"explanation",children:"This will open your email service in a different window"}),Object(c.jsx)("a",{href:"mailto:"+a+"?Subject="+encodeURIComponent(t)+"&Body="+encodeURIComponent(n),className:"btn btn-primary btn-lg cta send-button",target:"_blank",rel:"noreferrer",children:"SEND EMAIL"})]})},B=function(){return Object(c.jsxs)("div",{className:"intro-content",children:[Object(c.jsx)("h1",{className:"title",children:"0.7% Campaign"}),Object(c.jsx)("p",{className:"intro-para",children:"Info about our campaign. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("h2",{className:"secondary-header",children:"1. Fill out the form"}),Object(c.jsx)("p",{className:"explanation",children:"This will generate an email to send to your MP"})]})]})};n(102);n(103).config({path:"../.env"});var I=b()(),F=function(){var e=Object(a.useState)({responseId:"",mpData:{error:"Could not find MP"},generatedEmailBody:"Your email will appear here",emailSubject:"",positiveTypeFormResponseReturned:!1,mpEmailAddress:"",greeting:"",emailWithGreeting:""}),t=Object(d.a)(e,2),n=t[0],r=t[1],s=n.responseId,l=n.mpData,p=n.generatedEmailBody,b=n.emailSubject,h=n.mpEmailAddress,f=n.greeting,v=n.emailWithGreeting,g=n.positiveTypeFormResponseReturned;Object(a.useEffect)((function(){I.on("typeform-incoming",(function(e){var t=e.formToken,c=e.generatedEmail;t===s&&(console.log(c),r(Object(o.a)(Object(o.a)({},n),{},{generatedEmailBody:c.body,emailSubject:c.subject,mpData:c.mpData,greeting:c.greeting,positiveTypeFormResponseReturned:c.supportsAid})))}))}),[s]),Object(a.useEffect)((function(){r(Object(o.a)(Object(o.a)({},n),{},{emailWithGreeting:f+p}))}),[p,f]),Object(a.useEffect)((function(){if(l){var e=l.name,t=l.full_name,c=t||e;c&&r(Object(o.a)(Object(o.a)({},n),{},{mpEmailAddress:c.toLowerCase().replace(" ",".")+".mp@parliament.uk",greeting:"Dear ".concat(c,",\n")}))}}),[l]);var E=function(e){Object.keys(e).forEach((function(t){r(Object(o.a)(Object(o.a)({},n),{},Object(i.a)({},t,e[t])))}))};return Object(c.jsx)(j.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(u.a,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)(B,{})})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)("div",{className:"typeform",children:Object(c.jsx)(x,{passDataUpstream:E})})})}),g&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.a,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)("div",{className:"",children:Object(c.jsx)(w,{mpData:l,mpEmailAddress:h})})})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)("div",{id:"mpForm",className:"",children:Object(c.jsx)(D,{passDataUpstream:E})})})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)("div",{id:"emailBox",className:"",children:Object(c.jsx)(y,{passDataUpstream:E,emailBody:v,subject:b})})})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)("div",{className:"",children:Object(c.jsx)(A,{mpEmailAddress:h,body:v,subject:b})})})})]})]})})})},P=n(58),S=n.n(P),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(109);S.a.initialize({gtmId:"GTM-MWBT83W"}),s.a.render(Object(c.jsx)(F,{}),document.getElementById("root")),T()}},[[110,1,2]]]);
//# sourceMappingURL=main.c4bc895d.chunk.js.map
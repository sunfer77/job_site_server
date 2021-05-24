(this.webpackJsonpjobportal=this.webpackJsonpjobportal||[]).push([[0],{219:function(e,t,c){},220:function(e,t,c){},221:function(e,t,c){},222:function(e,t,c){},223:function(e,t,c){},224:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(85),a=c.n(i),s=(c(95),c(6)),r=c(5),o=(c(96),c(8)),j=c.n(o),l=c(16),d=c(2),b=c(7),u=c.n(b),h=(c(60),c(0)),p=Object(n.createContext)({});var m=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),i=c[0],a=c[1],s=Object(n.useState)(!1),r=Object(d.a)(s,2),o=r[0],b=r[1],m=Object(n.useState)(!1),O=Object(d.a)(m,2),x=O[0],v=O[1],f=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("https://job-app-react.herokuapp.com/jobs/jobSearch",t).then((function(e){v(!0),a(e.data),console.log(e.data),b(!0),v(!1)})).catch((function(e){console.log(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(p.Provider,{value:{findJobs:f,jobList:i,fireRedirect:o,setfireRedirect:b,isLoading:x},children:e.children})},O=c(14),x=c(18),v=c(4);var f=function(){var e,t,c,i,a=Object(n.useContext)(p),s=a.findJobs,o=a.fireRedirect,j=v.a().shape({jobName:v.b().required().min(2),city:v.b().required().min(2)}),l=Object(O.b)({mode:"onTouched",resolver:Object(x.a)(j)}),d=l.register,b=l.handleSubmit,u=l.errors;return Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"We help you find your Dream Job!"}),Object(h.jsx)("h3",{children:"Only at Monster. Get insights into real jobs with video job descriptions from hiring managers."})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"text",name:"jobName",ref:d,placeholder:"Keyword"}),"required"===(null===(e=u.jobName)||void 0===e?void 0:e.type)&&Object(h.jsx)("p",{children:"required!"}),"min"===(null===(t=u.jobName)||void 0===t?void 0:t.type)&&Object(h.jsx)("p",{children:"minLength is 2 "}),Object(h.jsx)("input",{type:"text",name:"city",ref:d,placeholder:"city"}),"required"===(null===(c=u.city)||void 0===c?void 0:c.type)&&Object(h.jsx)("p",{children:"required"}),"min"===(null===(i=u.city)||void 0===i?void 0:i.type)&&Object(h.jsx)("p",{children:" minLength is 2 "})]})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"btn",onClick:b(s),children:"Search"}),o&&Object(h.jsx)(r.a,{to:{pathname:"/ListOfJobs"}})]})]})},y=Object(n.createContext)();var g=function(e){var t=e.children;u.a.defaults.withCredentials=!0;var c=Object(n.useState)([]),i=Object(d.a)(c,2),a=i[0],s=i[1];try{Object(n.useEffect)((function(){u.a.get("https://job-app-react.herokuapp.com/jobSeeker/login").then((function(e){s(e.data)})).catch((function(e){console.log(e.message)}))}),[])}catch(r){console.log(r)}return Object(h.jsx)(y.Provider,{value:{submitForm:function(e){u.a.post("https://job-app-react.herokuapp.com/jobSeeker/login",e).then((function(e){s(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))},userData:a},children:t})};c(219);var N=function(){var e=Object(n.useContext)(y).userData;return Object(h.jsxs)("header",{children:[Object(h.jsx)(s.b,{className:"logo",to:"/",children:Object(h.jsx)("h2",{children:"M"})}),Object(h.jsxs)("ul",{className:"navigation",children:[e.isAuthenticated?null:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.b,{style:{textDecoration:"none"},to:"/JobSeekerSignup",children:Object(h.jsx)("li",{children:"Sign Up"})}),Object(h.jsx)(s.b,{style:{textDecoration:"none"},to:"/JobSeekerLogin",children:Object(h.jsx)("li",{children:"login"})})]}),e.isAuthenticated?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.b,{style:{textDecoration:"none"},to:"/ProfilePage",children:Object(h.jsxs)("li",{children:[Object(h.jsxs)("span",{children:["Hello! ",e.userName]}),Object(h.jsx)("i",{className:"fas fa-user-circle"})]})}),Object(h.jsx)("li",{onClick:function(){try{u.a.get("https://job-app-react.herokuapp.com/jobSeeker/logout").then((function(){window.location.assign("/")})).catch((function(e){console.log(e)}))}catch(e){console.log(e)}},children:"Logout"})]}):null]})]})};c(220);var q=function(){var e=Object(r.g)().id,t=Object(n.useState)({}),c=Object(d.a)(t,2),i=c[0],a=c[1];try{Object(n.useEffect)((function(){u.a.get("https://job-app-react.herokuapp.com/jobs/".concat(e)).then((function(e){a(e.data[0])})).catch((function(e){console.log(e)}))}),[e])}catch(s){console.log(s)}return Object(h.jsxs)("div",{className:"job",children:[Object(h.jsxs)("div",{className:"job-description",children:[Object(h.jsx)("h3",{children:i.jobName}),Object(h.jsx)("p",{children:i.companyName}),Object(h.jsx)("p",{children:i.city})]}),Object(h.jsx)("p",{className:"description",children:i.jobDescription}),Object(h.jsxs)("h4",{children:["Please send your CV to ",i.email]})]})};c(221);var C=function(){var e=Object(n.useContext)(p),t=e.isLoading,c=e.jobList,i=e.setfireRedirect;return Object(n.useEffect)((function(){i(!1)})),t?Object(h.jsx)("h3",{children:"Loading...."}):Object(h.jsx)("div",{className:"jobList",children:c.NojobsFound?Object(h.jsxs)("h3",{children:["No Jobs found regarding ",c.jobName]}):c.reverse().map((function(e){return Object(h.jsx)(s.b,{style:{textDecoration:"none"},to:"job/".concat(e.jobId),children:Object(h.jsxs)("div",{className:"singleJob",children:[Object(h.jsx)("h3",{children:e.jobName}),Object(h.jsx)("p",{children:e.companyName}),Object(h.jsx)("p",{children:e.city})]},e.jobId)})}))})};c(38);var S=function(){var e,t,c,i,a,s,o,j=Object(n.useState)([]),l=Object(d.a)(j,2),b=l[0],p=l[1],m=v.a().shape({userName:v.b().required().min(2),email:v.b().email().required(),password:v.b().required().min(8)}),f=Object(O.b)({mode:"onTouched",resolver:Object(x.a)(m)}),y=f.register,g=f.handleSubmit,N=f.errors;return Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("form",{className:"form",onSubmit:g((function(e){u.a.post("https://job-app-react.herokuapp.com/jobSeeker/sign_up",e).then((function(e){console.log(e.data),p(e.data)})).catch((function(e){console.log(e.message)}))})),children:[Object(h.jsx)("h1",{children:"Sign Up "}),Object(h.jsx)("input",{name:"userName",ref:y,placeholder:"user name*"}),"required"===(null===(e=N.userName)||void 0===e?void 0:e.type)&&Object(h.jsx)("span",{children:"Required!"}),"min"===(null===(t=N.userName)||void 0===t?void 0:t.type)&&Object(h.jsx)("span",{children:"too short"}),Object(h.jsx)("input",{type:"text",name:"email",ref:y,placeholder:"email *"}),"required"===(null===(c=N.email)||void 0===c?void 0:c.type)&&Object(h.jsx)("span",{children:"Required!"}),"min"===(null===(i=N.email)||void 0===i?void 0:i.type)&&Object(h.jsx)("span",{children:" too short"}),"email"===(null===(a=N.email)||void 0===a?void 0:a.type)&&Object(h.jsx)("span",{children:"invalid format"}),Object(h.jsx)("input",{type:"password",name:"password",ref:y,placeholder:"password *"}),"required"===(null===(s=N.password)||void 0===s?void 0:s.type)&&Object(h.jsx)("span",{children:"Required!"}),"min"===(null===(o=N.password)||void 0===o?void 0:o.type)&&Object(h.jsx)("span",{children:"too short"}),Object(h.jsx)("input",{id:"submit",type:"submit"}),Object(h.jsx)("span",{children:b.message})]}),b.isRegistered&&Object(h.jsx)(r.a,{to:{pathname:"/JobSeekerLogin"}})]})},k=c(19);var w=function(){var e,t,c,i,a,s,r,o,j,l,b,p,m=Object(n.useContext)(y).userData,f=Object(n.useState)([]),g=Object(d.a)(f,2),N=g[0],q=g[1],C=Object(n.useState)([]),S=Object(d.a)(C,2),w=S[0],D=S[1];try{Object(n.useEffect)((function(){u.a.get("https://job-app-react.herokuapp.com/jobSeeker/".concat(m.id)).then((function(e){q(e.data)})).catch((function(e){console.log(e)}))}),[m.id])}catch(P){console.log(P)}var R=v.a().shape({firstName:v.b().required().min(2).matches(/^[A-Za-z\s]+$/,"Invalid format"),lastName:v.b().required().min(2).matches(/^[A-Za-z\s]+$/,"Invalid format"),city:v.b().required().min(2).matches(/^[A-Za-z\s]+$/,"Invalid format"),region:v.b().required().min(2),aboutMe:v.b().required().min(10).max(5e3)}),L=Object(O.b)({mode:"onTouched",resolver:Object(x.a)(R)}),A=L.register,V=L.handleSubmit,J=L.errors;return Object(h.jsx)("div",{className:"form-container",children:Object(h.jsxs)("form",{className:"form",onSubmit:V((function(e){u.a.put("https://jobsite-app.herokuapp.com/jobSeeker/updateCV",Object(k.a)(Object(k.a)({},e),{},{id:m.id})).then((function(e){D(e.data),console.log(w)})).catch((function(e){console.log(e)}))})),children:[Object(h.jsx)("h2",{children:" Update Your Profile "}),Object(h.jsx)("input",{type:"text",name:"firstName",defaultValue:N.firstName,ref:A,placeholder:"First Name *"}),"required"===(null===(e=J.firstName)||void 0===e?void 0:e.type)&&Object(h.jsx)("span",{children:"Required"}),"min"===(null===(t=J.firstName)||void 0===t?void 0:t.type)&&Object(h.jsx)("span",{children:"Please minLength is 2 "}),"matches"===(null===(c=J.firstName)||void 0===c?void 0:c.type)&&Object(h.jsx)("span",{children:"invalid format"}),Object(h.jsx)("input",{name:"lastName",defaultValue:N.lastName,ref:A,placeholder:"Last Name *"}),"required"===(null===(i=J.lastName)||void 0===i?void 0:i.type)&&Object(h.jsx)("span",{children:"Required"}),"min"===(null===(a=J.lastName)||void 0===a?void 0:a.type)&&Object(h.jsx)("span",{children:"Last name is too short"}),"matches"===(null===(s=J.lastName)||void 0===s?void 0:s.type)&&Object(h.jsx)("span",{children:"invalid format"}),Object(h.jsx)("input",{name:"city",defaultValue:N.city,ref:A,placeholder:"City *"}),"required"===(null===(r=J.city)||void 0===r?void 0:r.type)&&Object(h.jsx)("span",{children:"Required"}),"min"===(null===(o=J.city)||void 0===o?void 0:o.type)&&Object(h.jsx)("span",{children:" too short"}),"matches"===(null===(j=J.city)||void 0===j?void 0:j.type)&&Object(h.jsx)("span",{children:"invalid format"}),Object(h.jsx)("input",{name:"region",defaultValue:N.region,ref:A,placeholder:"Region *"}),"required"===(null===(l=J.region)||void 0===l?void 0:l.type)&&Object(h.jsx)("span",{children:"Required"}),Object(h.jsx)("textarea",{className:"text",wrap:"off",rows:"20",name:"aboutMe",defaultValue:N.aboutMe,ref:A,placeholder:"About you *"}),"required"===(null===(b=J.aboutMe)||void 0===b?void 0:b.type)&&Object(h.jsx)("span",{children:"Required"}),"min"===(null===(p=J.aboutMe)||void 0===p?void 0:p.type)&&Object(h.jsx)("span",{children:"Too Short!"}),Object(h.jsx)("input",{id:"submit",type:"submit"}),Object(h.jsx)("span",{children:w})]})})},D=Object(n.createContext)();var R=function(e){var t=e.children,c=Object(n.useContext)(y).userData,i=Object(n.useState)([]),a=Object(d.a)(i,2),s=a[0],r=a[1];return Object(h.jsx)(D.Provider,{value:{submitForm:function(e){u.a.post("https://job-app-react.herokuapp.com/jobSeeker/createCV",Object(k.a)(Object(k.a)({},e),{},{id:c.id})).then((function(e){r(e.data)}))},cvCreated:s},children:t})};var L=function(){var e,t,c,i,a,s,o,j,l,d,b,u,p=Object(n.useContext)(D),m=p.submitForm,f=p.cvCreated,y=v.a().shape({firstName:v.b().required().min(2).matches(/^[A-Za-z\s]+$/,"Invalid format"),lastName:v.b().required().min(2).matches(/^[A-Za-z\s]+$/,"Invalid format"),city:v.b().required().min(2).matches(/^[A-Za-z\s]+$/,"Invalid format"),region:v.b().required().min(2),aboutMe:v.b().required().min(10).max(5e3)}),g=Object(O.b)({mode:"onTouched",resolver:Object(x.a)(y)}),N=g.register,q=g.handleSubmit,C=g.errors;return Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("form",{className:"form",onSubmit:q(m),children:[Object(h.jsx)("h2",{children:"Create Your CV "}),Object(h.jsx)("input",{type:"text",name:"firstName",ref:N,placeholder:"First Name *"}),"required"===(null===(e=C.firstName)||void 0===e?void 0:e.type)&&Object(h.jsx)("span",{children:"Required"}),"min"===(null===(t=C.firstName)||void 0===t?void 0:t.type)&&Object(h.jsx)("span",{children:"Please minLength is 2 "}),"matches"===(null===(c=C.firstName)||void 0===c?void 0:c.type)&&Object(h.jsx)("span",{children:"invalid format"}),Object(h.jsx)("input",{type:"text",name:"lastName",ref:N,placeholder:"Last Name *"}),"required"===(null===(i=C.lastName)||void 0===i?void 0:i.type)&&Object(h.jsx)("span",{children:"Required"}),"min"===(null===(a=C.lastName)||void 0===a?void 0:a.type)&&Object(h.jsx)("span",{children:"Last name is too short"}),"matches"===(null===(s=C.lastName)||void 0===s?void 0:s.type)&&Object(h.jsx)("span",{children:"invalid format"}),Object(h.jsx)("input",{type:"text",name:"city",ref:N,placeholder:"City *"}),"required"===(null===(o=C.city)||void 0===o?void 0:o.type)&&Object(h.jsx)("span",{children:"Required"}),"min"===(null===(j=C.city)||void 0===j?void 0:j.type)&&Object(h.jsx)("span",{children:" too short"}),"matches"===(null===(l=C.city)||void 0===l?void 0:l.type)&&Object(h.jsx)("span",{children:"invalid format"}),Object(h.jsx)("input",{type:"text",name:"region",ref:N,placeholder:"Region *"}),"required"===(null===(d=C.region)||void 0===d?void 0:d.type)&&Object(h.jsx)("span",{children:"Required"}),Object(h.jsx)("textarea",{className:"text",wrap:"off",cols:"30",rows:"20",name:"aboutMe",ref:N,placeholder:"Please do not forget add your education, experience and skills ;)"}),"required"===(null===(b=C.cv)||void 0===b?void 0:b.type)&&Object(h.jsx)("span",{children:"Required"}),"min"===(null===(u=C.cv)||void 0===u?void 0:u.type)&&Object(h.jsx)("span",{children:"Too Short!"}),Object(h.jsx)("input",{id:"submit",type:"submit"}),Object(h.jsx)("span",{children:f.message})]}),f.cvCreated&&Object(h.jsx)(r.a,{to:{pathname:"/"}})]})};var A=function(){var e,t,c,i,a,s=Object(n.useContext)(y),o=s.submitForm,j=s.userData,l=v.a().shape({userName:v.b().required().matches(/^[A-Za-z\s]+$/,"Invalid format"),password:v.b().required()}),d=Object(O.b)({mode:"onTouched",resolver:Object(x.a)(l)}),b=d.register,u=d.handleSubmit,p=d.errors;return Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("form",{className:"form",onSubmit:u(o),children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)("input",{name:"userName",ref:b,placeholder:"user name*"}),"required"===(null===(e=p.userName)||void 0===e?void 0:e.type)&&Object(h.jsx)("span",{children:"Required!"}),"min"===(null===(t=p.userName)||void 0===t?void 0:t.type)&&Object(h.jsx)("span",{children:"too short"}),"matches"===(null===(c=p.userName)||void 0===c?void 0:c.type)&&Object(h.jsx)("span",{children:"invalid format"}),Object(h.jsx)("input",{type:"password",name:"password",ref:b,placeholder:"password *"}),"required"===(null===(i=p.password)||void 0===i?void 0:i.type)&&Object(h.jsx)("span",{children:"Required!"}),"min"===(null===(a=p.password)||void 0===a?void 0:a.type)&&Object(h.jsx)("span",{children:"too short"}),Object(h.jsx)("input",{id:"submit",type:"submit"}),Object(h.jsx)("span",{children:j.message})]}),j.isAuthenticated&&Object(h.jsx)(r.a,{to:{pathname:"/"}})]})},V=c(90);var J=function(e){var t=e.component,c=Object(V.a)(e,["component"]),i=Object(n.useContext)(y).userData;return Object(h.jsx)(r.b,Object(k.a)(Object(k.a)({},c),{},{render:function(e){return i.isAuthenticated?Object(h.jsx)(t,Object(k.a)({},e)):Object(h.jsx)(r.a,{to:{pathname:"/JobSeekerLogin",state:{from:e.location}}})}}))};c(222);var P=function(){var e=Object(n.useContext)(y).userData,t=Object(n.useState)([]),c=Object(d.a)(t,2),i=c[0],a=c[1];try{Object(n.useEffect)((function(){e.isAuthenticated&&u.a.get("https://job-app-react.herokuapp.com/jobSeeker/".concat(e.id)).then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[e.id,e.isAuthenticated])}catch(r){console.log(r)}return Object(h.jsx)("div",{className:"mainDiv",children:Object(h.jsxs)("div",{className:"profile",children:[e.isAuthenticated&&!i.CvCreated?Object(h.jsx)("div",{className:"actionDiv",children:Object(h.jsx)(s.b,{style:{textDecoration:"none"},to:"/CreateCV",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("i",{className:"fas fa-newspaper"}),"Create CV"]})})}):null,e.isAuthenticated&&i.CvCreated?Object(h.jsx)("div",{className:"actionDiv",children:Object(h.jsx)(s.b,{style:{textDecoration:"none"},to:"/FinalizedUserCV",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("i",{className:"fas fa-newspaper"}),"View Your CV"]})})}):null,e.isAuthenticated&&i.CvCreated?Object(h.jsx)("div",{className:"actionDiv",children:Object(h.jsx)(s.b,{style:{textDecoration:"none"},to:"/JobSeekerEditProfile",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("i",{className:"far fa-edit"})," Edit Your CV"]})})}):null,e.isAuthenticated?Object(h.jsx)("div",{className:"actionDiv",children:Object(h.jsx)(s.b,{style:{textDecoration:"none"},to:"/CreateCV",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("i",{className:"far fa-trash-alt"})," Delete my account"]})})}):null]})})};c(223);var E=function(){var e=Object(n.useContext)(y).userData,t=Object(n.useState)([]),c=Object(d.a)(t,2),i=c[0],a=c[1];try{Object(n.useEffect)((function(){u.a.get("https://job-app-react.herokuapp.com/jobSeeker/".concat(e.id)).then((function(e){a(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[e.id])}catch(r){console.log(r)}return Object(h.jsx)("div",{className:"main_div",children:Object(h.jsxs)("div",{className:"cv",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Name - "}),i.firstName," ",i.lasttName]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"City - "}),i.city]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Region - "}),i.region]}),Object(h.jsx)("div",{className:"aboutMe",children:Object(h.jsx)("p",{children:i.aboutMe})}),Object(h.jsx)(s.b,{style:{textDecoration:"none"},to:"/JobSeekerEditProfile",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("i",{className:"far fa-edit"})," Edit Your CV"]})})]})})};var F=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(s.a,{children:Object(h.jsx)(g,{children:Object(h.jsx)(m,{children:Object(h.jsxs)(R,{children:[Object(h.jsx)(N,{}),Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{exact:!0,path:"/",component:f}),Object(h.jsx)(r.b,{exact:!0,path:"/ListOfJobs",component:C}),Object(h.jsx)(r.b,{exact:!0,path:"/job/:id",component:q}),Object(h.jsx)(r.b,{exact:!0,path:"/JobSeekerSignup",component:S}),Object(h.jsx)(r.b,{exact:!0,path:"/JobSeekerLogin",component:A}),Object(h.jsx)(J,{exact:!0,path:"/ProfilePage",component:P}),Object(h.jsx)(J,{exact:!0,path:"/CreateCV",component:L}),Object(h.jsx)(J,{exact:!0,path:"/FinalizedUserCV",component:E}),Object(h.jsx)(J,{exact:!0,path:"/JobSeekerEditProfile",component:w})]})]})})})})})};a.a.render(Object(h.jsx)(F,{}),document.getElementById("root"))},38:function(e,t,c){},60:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){}},[[224,1,2]]]);
//# sourceMappingURL=main.6897c10c.chunk.js.map
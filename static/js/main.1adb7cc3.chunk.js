(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(9),r=n.n(i),s=n(8),o=n(4),l=n(3),j=n(2),d=n(0);var b=function(e){var t=e.handleInputChange;return Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("h2",{children:"Personal Information"}),Object(d.jsxs)("form",{className:"form-input",children:[Object(d.jsx)("input",{name:"firstName",type:"text",placeholder:"First Name",onChange:t}),Object(d.jsx)("input",{name:"lastName",type:"text",placeholder:"Last Name",onChange:t}),Object(d.jsx)("input",{name:"title",type:"text",placeholder:"Title",onChange:t}),Object(d.jsxs)("label",{name:"photo",className:"photo-input-label",htmlFor:"photo",children:["Photo",Object(d.jsx)("input",{id:"photo",style:{display:"none"},name:"photo",type:"file",placeholder:"Photo",onChange:t})]}),Object(d.jsx)("input",{name:"location",type:"text",placeholder:"Location",onChange:t}),Object(d.jsx)("input",{name:"phoneNumber",type:"text",placeholder:"Phone number",onChange:t}),Object(d.jsx)("input",{name:"email",type:"email",placeholder:"Email",onChange:t}),Object(d.jsx)("textarea",{className:"text-area",name:"description",type:"text",placeholder:"Description",onChange:t})]})]})};var u=function(e){var t=e.mainInfoState,n=t.firstName,c=t.lastName,a=t.title;return Object(d.jsxs)("header",{className:"preview-header",children:[Object(d.jsxs)("h1",{children:[n," ","",c]}),Object(d.jsx)("h4",{children:a})]})},p=n.p+"static/media/anonymous-avatar.3aba3a6d.png";var h=function(e){var t=e.mainInfoState,n=t.photo,c=t.location,a=t.phoneNumber,i=t.email;return Object(d.jsxs)("div",{className:"preview-personal",children:[Object(d.jsx)("img",{className:"preview-photo",src:n||p,alt:""}),Object(d.jsx)("h4",{children:"Personal Details"}),Object(d.jsxs)("div",{className:"personal-details",children:[Object(d.jsxs)("section",{children:[Object(d.jsx)("h4",{children:"Location"}),c]}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h4",{children:"Phone Number"}),a]}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h4",{children:"Email"}),i]})]})]})};var m=function(e){var t=e.experienceArr,n=e.educationArr,c=e.description;return Object(d.jsxs)("div",{className:"preview-main",children:[Object(d.jsxs)("div",{className:"preview-description",children:[Object(d.jsx)("h3",{style:{borderBottom:"1.5px solid dodgerblue"},children:"Description"}),Object(d.jsx)("p",{className:"description",children:c})]}),Object(d.jsx)("h3",{style:{borderBottom:"1.5px solid dodgerblue"},children:"Experience"}),Object(d.jsx)("div",{className:"preview-experience",children:t.map((function(e,t){var n=e.company,c=e.from,a=e.to,i=e.location,r=e.position;return Object(d.jsxs)("div",{className:"experience-obj",children:[Object(d.jsxs)("div",{className:"experience-period",children:[Object(d.jsxs)("p",{children:[c," -"]}),Object(d.jsx)("p",{children:a})]}),Object(d.jsxs)("div",{className:"experience-details",children:[Object(d.jsx)("h3",{children:r}),Object(d.jsx)("p",{children:"".concat(i,", ").concat(n)})]})]},t)}))}),Object(d.jsx)("h3",{style:{borderBottom:"1.5px solid dodgerblue"},children:"Education"}),Object(d.jsx)("div",{className:"preview-education",children:n.map((function(e,t){var n=e.univercity,c=e.city,a=e.degree,i=e.subject,r=e.from,s=e.to;return Object(d.jsxs)("div",{className:"education-obj",children:[Object(d.jsxs)("div",{className:"education-period",children:[Object(d.jsxs)("p",{children:[r," -"]}),Object(d.jsx)("p",{children:s})]}),Object(d.jsxs)("div",{className:"education-details",children:[Object(d.jsx)("h3",{children:"".concat(n,", ").concat(c)}),Object(d.jsx)("p",{children:"".concat(i,", ").concat(a)})]})]},t)}))})]})};var x=function(e){var t=e.handleInputChange,n=e.submitInput,c=e.closeInput;return Object(d.jsxs)("form",{onSubmit:n,className:"form-input",children:[Object(d.jsx)("input",{required:!0,onChange:t,name:"position",placeholder:"Position",type:"text"}),Object(d.jsx)("input",{required:!0,onChange:t,name:"company",placeholder:"Company",type:"text"}),Object(d.jsx)("input",{required:!0,onChange:t,name:"location",placeholder:"Location",type:"text"}),Object(d.jsx)("input",{required:!0,onChange:t,name:"from",placeholder:"From",type:"date"}),Object(d.jsx)("input",{required:!0,onChange:t,name:"to",placeholder:"To",type:"date"}),Object(d.jsx)("button",{type:"submit",className:"add-btn",children:"Submit"}),Object(d.jsx)("button",{onClick:c,type:"button",className:"cancel-btn",children:"Cancel"})]})};var O=function(e){var t=e.handleInputChange,n=e.deletePreviousExperience,a=e.submitExperience,i=Object(c.useState)(!1),r=Object(j.a)(i,2),s=r[0],o=r[1];return Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("h2",{children:"Experience"}),s&&Object(d.jsx)(x,{submitInput:function(e){e.preventDefault(),a(),o(!1)},handleInputChange:t,closeInput:function(){return o(!1)}}),!1===s?Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsx)("button",{onClick:function(){return o(!0)},className:"add-btn",children:"ADD"}),Object(d.jsx)("button",{onClick:n,className:"cancel-btn",children:"Delete The Last"})]}):null]})};var v=function(e){var t=e.handleInputChange,n=e.submitInput,c=e.closeInput;return Object(d.jsxs)("form",{onSubmit:n,className:"form-input",children:[Object(d.jsx)("input",{required:!0,onChange:t,name:"univercity",placeholder:"Univercity Name",type:"text"}),Object(d.jsx)("input",{required:!0,onChange:t,name:"city",placeholder:"City",type:"text"}),Object(d.jsx)("input",{required:!0,onChange:t,name:"degree",placeholder:"Degree",type:"text"}),Object(d.jsx)("input",{required:!0,onChange:t,name:"subject",placeholder:"Subject",type:"text"}),Object(d.jsx)("input",{required:!0,onChange:t,name:"from",placeholder:"From",type:"date"}),Object(d.jsx)("input",{required:!0,onChange:t,name:"to",placeholder:"To",type:"date"}),Object(d.jsx)("button",{type:"submit",className:"add-btn",children:"Submit"}),Object(d.jsx)("button",{onClick:c,type:"button",className:"cancel-btn",children:"Cancel"})]})};var f=function(e){var t=e.handleInputChange,n=e.deletePreviousEducation,a=e.submitEducation,i=Object(c.useState)(!1),r=Object(j.a)(i,2),s=r[0],o=r[1];return Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("h2",{children:"Education"}),s&&Object(d.jsx)(v,{submitInput:function(e){e.preventDefault(),a(),o(!1)},handleInputChange:t,closeInput:function(){return o(!1)}}),!1===s?Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsx)("button",{onClick:function(){return o(!0)},className:"add-btn",children:"ADD"}),Object(d.jsx)("button",{onClick:n,className:"cancel-btn",children:"Delete The Last"})]}):null]})};var N=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({}),r=Object(j.a)(i,2),p=r[0],x=r[1],v=Object(c.useState)([]),N=Object(j.a)(v,2),g=N[0],C=N[1],y=Object(c.useState)({}),I=Object(j.a)(y,2),S=I[0],E=I[1],P=Object(c.useState)([]),D=Object(j.a)(P,2),q=D[0],w=D[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("h1",{children:"CV APP"})}),Object(d.jsxs)("main",{className:"inner-container",children:[Object(d.jsxs)("div",{className:"input-form",children:[Object(d.jsx)(b,{handleInputChange:function(e){var t=e.target.name,c=e.target.value;a(Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},t,"photo"===t?URL.createObjectURL(e.target.files[0]):c)))}}),Object(d.jsx)(O,{handleInputChange:function(e){var t=e.target.name,n=e.target.value;x(Object(l.a)(Object(l.a)({},p),{},Object(o.a)({},t,n)))},submitExperience:function(){C([].concat(Object(s.a)(g),[p])),x({})},deletePreviousExperience:function(){var e=g;e.pop(),C(e)}}),Object(d.jsx)(f,{handleInputChange:function(e){var t=e.target.name,n=e.target.value;E(Object(l.a)(Object(l.a)({},S),{},Object(o.a)({},t,n)))},submitEducation:function(){w([].concat(Object(s.a)(q),[S])),x({})},deletePreviousEducation:function(){var e=q;e.pop(),w(e)}})]}),Object(d.jsxs)("div",{className:"preview",children:[Object(d.jsx)(u,{mainInfoState:n}),Object(d.jsxs)("div",{className:"preview-inner",children:[Object(d.jsx)(m,{experienceArr:g,educationArr:q,description:n.description}),Object(d.jsx)(h,{mainInfoState:n})]})]})]})]})};n(15);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1adb7cc3.chunk.js.map
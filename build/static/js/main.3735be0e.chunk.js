(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{190:function(e,t,a){},214:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(0),c=a.n(s),i=a(24),l=a.n(i),r=(a(190),a(53)),o=a.n(r),j=a(170),d=a(76),b="SET_AUTHENTICATED_STATUS",m={authentication_status:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return e.authentication_status=!e.authentication_status,e;default:return e}},u="AUTH_START",p="AUTH_SUCCESS",x="AUTH_FAIL",O="AUTH_LOGOUT",g=a(26),f=function(e,t){return Object(g.a)(Object(g.a)({},e),t)},y={token:null,error:null,loading:!1},v=function(e,t){return f(e,{error:null,loading:!0})},C=function(e,t){return f(e,{token:t.token,error:null,loading:!1})},w=function(e,t){return f(e,{loading:!1,error:t.error})},I=function(e,t){return f(e,{token:null})},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return v(e);case p:return C(e,t);case x:return w(e,t);case O:return I(e);default:return e}},k=Object(d.c)({unauthenticated:h,authentication:S}),T=a(164),A=Object(d.d)(k,Object(d.a)(T.a)),F=a(84),N=a(27),P=a(35),R=a(319),z=a(320),E=a(62),_=a(305),D=a(323),B=a(324),M=a.p+"static/media/logo.efc196cc.png",L=function(){var e=Object(N.f)(),t=Object(s.useState)(!1),a=Object(P.a)(t,2),c=a[0],i=a[1];return Object(n.jsxs)(_.a,{style:{width:"100%"},children:[Object(n.jsxs)(R.a,{style:{width:"100%",position:"fixed",zIndex:1,display:"flex",fontFamily:"'Cinzel', serif",height:"10vh",alignItems:"center"},mode:"horizontal",children:[Object(n.jsxs)(R.a.Item,{onClick:function(){return e.push("/")},style:{fontSize:"2em",color:"white"},children:[Object(n.jsx)("img",{style:{paddingRight:".5em"},src:M,alt:"logo"}),Object(n.jsx)("b",{style:{color:"white"},children:"Trackify"})]},"mail"),Object(n.jsx)(R.a.Item,{children:Object(n.jsx)(D.a,{style:{fontSize:"2em"},onClick:function(){i(!0)}})})]}),Object(n.jsx)(z.a,{title:"Menu",placement:"right",closable:!1,onClose:function(){i(!1)},visible:c,children:Object(n.jsxs)(R.a,{children:[Object(n.jsx)(R.a.Item,{style:{fontSize:"1.3em"},onClick:function(){e.push("/about")},children:"About Us"},"1"),Object(n.jsx)(R.a.Item,{style:{fontSize:"1.3em"},onClick:function(){e.push("/contact")},children:"Contact US"},"2"),Object(n.jsx)(R.a.Item,{children:Object(n.jsx)("hr",{})}),Object(n.jsxs)(R.a.ItemGroup,{title:"Team",children:[Object(n.jsx)(R.a.Item,{style:{fontSize:"1.3em"},children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/saifur-rehman-khan-5770a9172/",target:"_blank",children:"Saifur Rehman"})},"3"),Object(n.jsx)(R.a.Item,{style:{fontSize:"1.3em"},children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/nihal-ahmad-46042a192",target:"_blank",children:"Nihal Ahmad"})},"4"),Object(n.jsx)(R.a.Item,{children:Object(n.jsx)("hr",{})}),Object(n.jsx)(R.a.Item,{style:{fontSize:"1.3em"},children:localStorage.getItem("token")?Object(n.jsxs)(E.a,{type:"ghost",htmlType:"submit",onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("username"),e.push("/")},children:["Logout ",Object(n.jsx)(B.a,{})]}):Object(n.jsx)("hr",{})},"5")]})]})})]})},U=a.p+"static/media/frame1.81ca4db5.png",q=a.p+"static/media/frame2.88ad417c.png",Y=a(99),G=a(57),V=(a(214),function(){var e=Object(N.f)();Object(s.useEffect)((function(){localStorage.getItem("token")&&e.push("/dashboard")}),[]);var t=function(){e.push("/dashboard")},a=function(){e.push("/login")},c=_.a.Content;return Object(n.jsx)(_.a,{children:Object(n.jsxs)(c,{style:{paddingRight:"1em"},children:[Object(n.jsxs)(Y.a,{style:{display:"flex",justifyContent:"center",height:"100vh",width:"100vw"},children:[Object(n.jsx)(G.a,{style:{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"8vh"},span:12,xs:22,sm:22,lg:12,children:Object(n.jsxs)(Y.a,{style:{display:"flex",justifyContent:"center"},children:[Object(n.jsx)(Y.a,{className:"glow",children:"  Simplify Your Job Hunt!"}),Object(n.jsx)(Y.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"1em"},children:Object(n.jsxs)("h3",{style:{color:"#A0A0A0",fontSize:"1.4em",paddingLeft:".4em"},children:["Track your application progress in a seamless and intuitive way ",Object(n.jsx)("b",{style:{color:"#7BC74D"},children:"\u2714"})]})}),Object(n.jsx)("br",{}),Object(n.jsxs)(Y.a,{style:{display:"flex",justifyContent:"center",paddingTop:"2em"},children:[Object(n.jsx)(E.a,{style:{marginRight:"1em"},onClick:t,size:"large",shape:"round",type:"primary",ghost:!0,disabled:!0,children:"Guest Mode!"}),Object(n.jsx)(E.a,{onClick:a,size:"large",type:"primary",shape:"round",children:"Sign up or Sign in for free"})]})]})}),Object(n.jsx)(G.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},span:12,sm:22,xs:22,lg:12,children:Object(n.jsx)("img",{style:{height:"85%",width:"85%",paddingTop:"3em",borderRadius:"1em"},src:U,alt:"landingimage"})})]}),Object(n.jsxs)(Y.a,{style:{display:"flex",justifyContent:"center",height:"100vh",width:"100vw"},children:[Object(n.jsx)(G.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},span:12,sm:24,xs:24,lg:12,children:Object(n.jsx)("img",{style:{height:"85%",width:"85%",paddingTop:"3em",borderRadius:"1em"},src:q,alt:"landingimage"})}),Object(n.jsx)(G.a,{style:{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"3vh"},span:12,xs:24,sm:24,lg:12,children:Object(n.jsxs)(Y.a,{style:{display:"flex",justifyContent:"center"},children:[Object(n.jsx)(Y.a,{className:"glow",children:"  Create a Card For Each Application!"}),Object(n.jsx)(Y.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"1em"},children:Object(n.jsxs)("h3",{style:{color:"#A0A0A0",fontSize:"1.4em"},children:["Application process is visualized like no spreadsheet can do ",Object(n.jsx)("b",{style:{color:"#7BC74D"},children:"\u2714"})]})}),Object(n.jsx)("br",{}),Object(n.jsxs)(Y.a,{style:{display:"flex",justifyContent:"center",paddingTop:"2em",paddingBottom:"1em"},children:[Object(n.jsx)(E.a,{style:{marginRight:"1em"},onClick:t,size:"large",shape:"round",type:"primary",ghost:!0,disabled:!0,children:"GuestMode!"}),Object(n.jsx)(E.a,{onClick:a,size:"large",type:"primary",shape:"round",children:"Sign up or Sign in for free"})]})]})})]})]})})}),H=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L,{}),Object(n.jsx)(V,{})]})},J=a(56),W=a.n(J),Q=a(315),K=a(313),X=a(316),Z=a(310),$=a(177),ee=Q.a.Option,te=function(e){var t=c.a.useState(void 0),a=Object(P.a)(t,2),s=(a[0],a[1]),i="YYYY/MM/DD";return Object(n.jsxs)(K.a,Object(g.a)(Object(g.a)({},{labelCol:{span:6},wrapperCol:{span:20}}),{},{onFinish:function(t){var a=W()(t.applied_date).format("YYYY-MM-DD"),n=localStorage.getItem("token"),s={company:void 0===t.company?e.company:t.company,role:void 0===t.position?e.position:t.position,status:void 0===t.status?e.status:t.status,notes:void 0===t.notes?e.notes:t.notes,applied_date:a},c={headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"}};if(!1===e.update)o.a.post("/api/create",s,c).then((function(e){window.location.reload()})).catch((function(e){console.log(e.message)}));else{var i=Object(g.a)(Object(g.a)({},s),{},{id:e.id});o.a.post("/api/update",i,c).then((function(e){window.location.reload()})).catch((function(e){console.log(e.message)}))}},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(n.jsx)(K.a.Item,{label:"Company Name",name:"company",rules:[{required:!e.update,message:"Please enter company!"}],children:Object(n.jsx)(X.a,{defaultValue:e.company})}),Object(n.jsx)(K.a.Item,{label:"Position",name:"position",rules:[{required:!e.update,message:"Please enter position!"}],children:Object(n.jsx)(X.a,{defaultValue:e.position})}),Object(n.jsx)(K.a.Item,{label:"Extra Notes",name:"notes",children:Object(n.jsx)(X.a.TextArea,{defaultValue:e.notes})}),Object(n.jsx)(K.a.Item,{label:"Date",name:"applied_date",children:Object(n.jsx)(Z.a,{defaultValue:W()("2021/02/14",i),onChange:function(e,t){console.log(e,t)},format:i})}),Object(n.jsx)(K.a.Item,{label:"Status",name:"status",children:Object(n.jsxs)(Q.a,{defaultValue:e.status,style:{width:120},onChange:function(e){console.log("selected ".concat(e))},children:[Object(n.jsx)(ee,{value:"to apply",children:Object(n.jsx)($.a,{color:"gold",children:"To apply"})}),Object(n.jsx)(ee,{value:"applied",children:Object(n.jsx)($.a,{color:"blue",children:"Applied"})}),Object(n.jsx)(ee,{value:"ongoing",children:Object(n.jsx)($.a,{color:"magenta",children:"On going"})}),Object(n.jsx)(ee,{value:"rejected",children:Object(n.jsx)($.a,{color:"red",children:"Rejected"})}),Object(n.jsx)(ee,{value:"offer",children:Object(n.jsx)($.a,{color:"green",children:"Offer"})})]})}),Object(n.jsx)(K.a.Item,{children:Object(n.jsx)(E.a,{htmlType:"submit",onClick:function(){return s(void 0)},children:"Apply"})})]}))},ae=a(311),ne=a(318),se={width:"100%",textAlign:"center"},ce=function(e){var t=c.a.useState(!1),a=Object(P.a)(t,2),s=a[0],i=a[1];return Object(n.jsx)("div",{style:{width:350,marginLeft:20},children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{onClick:function(){i(!0)},children:Object(n.jsxs)(ae.a.Grid,{style:se,children:[Object(n.jsxs)("p",{children:[e.data.company," | ",Object(n.jsx)("strong",{children:e.data.role})]}),Object(n.jsxs)("i",{children:["Date : ",e.data.applied_date]})]})}),Object(n.jsx)(ne.a,{title:"Enter Details",visible:s,onOk:function(){i(!1)},onCancel:function(){i(!1)},children:Object(n.jsx)(te,{id:e.data.id,company:e.data.company,notes:e.data.notes,position:e.data.role,status:e.data.status,date:e.data.applied_date,update:!0})})]})})},ie=function(e){return Object(n.jsx)("div",{style:{width:350,marginLeft:20},children:e.data.map((function(e,t){return Object(n.jsx)(ce,{data:e},t)}))})},le=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)($.a,{color:e.color,style:{width:350,height:"4vh",fontSize:"2em",textAlign:"center",marginLeft:20},children:e.text})})},re=a(306),oe=a(169),je=a.n(oe),de=function(e){var t=Object(s.useState)(!1),a=Object(P.a)(t,2),c=a[0],i=a[1];return Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"4vh",paddingTop:"3em"},children:[Object(n.jsx)(re.a,{color:"primary","aria-label":"add",children:Object(n.jsx)(je.a,{onClick:function(){i(!0)}})}),Object(n.jsx)(ne.a,{title:"Enter Details",visible:c,onOk:function(){i(!1)},onCancel:function(){i(!1)},children:Object(n.jsx)(te,{status:e.status,update:!1})})]})};var be=function(e){var t=c.a.useState([]),a=Object(P.a)(t,2),s=a[0],i=a[1];return c.a.useEffect((function(){var t=localStorage.getItem("token"),a={headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}};o.a.get("/api/".concat(e.status),a).then((function(e){i(e.data)})).catch((function(e){console.log(e.message)}))}),[]),Object(n.jsxs)(G.a,{span:"20%",style:{height:"90vh",marginTop:"12vh"},children:[Object(n.jsx)(le,{color:e.color,text:e.text}),Object(n.jsx)(G.a,{className:"css",style:{overflowY:"scroll",height:"70vh"},children:Object(n.jsx)(ie,{data:s})}),Object(n.jsx)(de,{status:"toapply"===e.status?"to apply":e.status})]})},me=function(){return Object(n.jsx)(Y.a,{children:Object(n.jsxs)(Y.a,{style:{display:"flex",justifyContent:"center"},children:[Object(n.jsx)(be,{color:"gold",text:"TO APPLY",status:"toapply"}),Object(n.jsx)(be,{color:"blue",text:"APPLIED",status:"applied"}),Object(n.jsx)(be,{color:"magenta",text:"ONGOING",status:"ongoing"}),Object(n.jsx)(be,{color:"green",text:"OFFER",status:"offer"}),Object(n.jsx)(be,{color:"red",text:"REJECTED",status:"rejected"})]})})},he=a(176),ue=a(314),pe=a(307),xe=a(308),Oe=a(317),ge=a(309),fe=a(322),ye={labelCol:{span:6},wrapperCol:{span:16}},ve={wrapperCol:{offset:6,span:16}};var Ce=function(){var e=Object(s.useState)(""),t=Object(P.a)(e,2),a=t[0],c=t[1],i=Object(N.f)();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(K.a,Object(g.a)(Object(g.a)({},ye),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){var t={username:e.username,password:e.password};o.a.post("signin",t).then((function(e){localStorage.setItem("username",e.data.username),localStorage.setItem("token",e.data.token),i.push("/dashboard")})).catch((function(e){console.log(e.response.status),400===e.response.status&&(c("Incorrect confidential!"),setTimeout((function(){c("")}),5e3))}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(n.jsx)(K.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(n.jsx)(X.a,{})}),Object(n.jsx)(K.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(n.jsx)(X.a.Password,{})}),Object(n.jsx)(K.a.Item,Object(g.a)(Object(g.a)({},ve),{},{children:Object(n.jsx)(E.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]})),a&&Object(n.jsx)(fe.a,{message:a,type:"error"})]})},we={labelCol:{span:6},wrapperCol:{span:16}},Ie={wrapperCol:{offset:6,span:16}};var Se=function(){var e=Object(N.f)(),t=c.a.useState(""),a=Object(P.a)(t,2),s=a[0],i=a[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(K.a,Object(g.a)(Object(g.a)({},we),{},{name:"basic",initialValues:{remember:!0},onFinish:function(t){var a={username:t.username,email:t.email,password:t.password};o.a.post("signup",a).then((function(t){console.log(t.data),void 0===t.data.token?i(t.data.username[0]):(localStorage.setItem("username",t.data.username),localStorage.setItem("token",t.data.token),e.push("/dashboard"))})).catch((function(e){console.log(e.message)}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(n.jsx)(K.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(n.jsx)(X.a,{})}),Object(n.jsx)(K.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(n.jsx)(X.a,{})}),Object(n.jsx)(K.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(n.jsx)(X.a.Password,{})}),Object(n.jsx)(K.a.Item,Object(g.a)(Object(g.a)({},Ie),{},{children:Object(n.jsx)(E.a,{type:"primary",htmlType:"submit",children:"Submit"})})),s.length>0&&Object(n.jsx)(K.a.Item,{children:Object(n.jsx)(fe.a,{message:s,type:"error"})})]}))})},ke=function(e){var t=e.children,a=e.value,s=e.index,c=Object(he.a)(e,["children","value","index"]);return Object(n.jsx)("div",Object(g.a)(Object(g.a)({role:"tabpanel",hidden:a!==s,id:"full-width-tabpanel-".concat(s),"aria-labelledby":"full-width-tab-".concat(s)},c),{},{children:a===s&&Object(n.jsx)(ue.a,{p:3,children:Object(n.jsx)(n.Fragment,{children:t})})}))},Te=function(){var e=c.a.useState(0),t=Object(P.a)(e,2),a=t[0],s=t[1];return Object(n.jsxs)(pe.a,{maxWidth:"xs",children:[Object(n.jsx)(xe.a,{square:!0,style:{flexGrow:1},children:Object(n.jsxs)(Oe.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){s(t)},centered:!0,children:[Object(n.jsx)(ge.a,{label:"Login"}),Object(n.jsx)(ge.a,{label:"Register"})]})}),Object(n.jsx)(ke,{value:a,index:0,children:Object(n.jsx)(Ce,{})}),Object(n.jsx)(ke,{value:a,index:1,children:Object(n.jsx)(Se,{})})]})},Ae=_.a.Content,Fe=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L,{}),Object(n.jsx)(_.a,{style:{height:"100vh",width:"100vw"},children:Object(n.jsx)(Ae,{style:{paddingTop:"13vh"},children:Object(n.jsx)(Y.a,{children:Object(n.jsx)(Te,{})})})})]})},Ne=a(321),Pe=a(325),Re=X.a.TextArea;var ze=function(){var e=_.a.Content;return Object(n.jsx)(_.a,{children:Object(n.jsx)(e,{style:{paddingTop:"12vh",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(n.jsx)("div",{id:"contact",className:"block contactBlock",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsxs)("div",{className:"titleHolder",style:{display:"flex",justifyContent:"center"},children:[Object(n.jsx)("span",{style:{fontSize:"2em",marginRight:".5em"},children:Object(n.jsx)(Pe.a,{})}),Object(n.jsx)("h2",{style:{fontSize:"2em",color:"#A0A0A0"},children:"Get in Touch"})]}),Object(n.jsxs)(K.a,Object(g.a)(Object(g.a)({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}}),{},{name:"normal_login",className:"login-form",initialValues:{remember:!0},children:[Object(n.jsx)(K.a.Item,{name:"fullname",rules:[{required:!0,message:"Please enter your full name!"}],label:"Full Name",labelAlign:"left",children:Object(n.jsx)(X.a,{placeholder:"* Full Name"})}),Object(n.jsx)(K.a.Item,{name:"email",label:"Email",labelAlign:"left",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(n.jsx)(X.a,{placeholder:"* Email Address"})}),Object(n.jsx)(K.a.Item,{name:"telephone",label:"Mobile No.",labelAlign:"left",children:Object(n.jsx)(X.a,{placeholder:"Mobile No."})}),Object(n.jsx)(K.a.Item,{name:"subject",label:"Subject.",labelAlign:"left",rules:[{required:!0,message:"Please enter subject of mail!"}],children:Object(n.jsx)(X.a,{placeholder:"* Subject"})}),Object(n.jsx)(K.a.Item,{name:"message",label:"Messege",labelAlign:"left",rules:[{required:!0,message:"Messege cannot be empty!"}],children:Object(n.jsx)(Re,{placeholder:"* Message"})}),Object(n.jsx)(K.a.Item,{children:Object(n.jsx)(K.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,rules:[{validator:function(e,t){return t?Promise.resolve():Promise.reject("Should accept agreement")}}],children:Object(n.jsx)(Ne.a,{children:"I agree with terms and conditions."})})}),Object(n.jsx)(Y.a,{style:{display:"flex",justifyContent:"center",marginBottom:"2em"},children:Object(n.jsx)(E.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Submit"})})]}))]})})})})},Ee=(a(288),a.p+"static/media/nihal-ahmad.fc77b1c5.jpeg"),_e=a.p+"static/media/saifur-rehman.b3e22ce7.jpg",De=a.p+"static/media/github-logo.ec9ca7bb.svg",Be=a.p+"static/media/linkedin.24273993.svg",Me=a.p+"static/media/resume.d4259844.svg";var Le=function(){var e=_.a.Content,t=ae.a.Meta;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(_.a,{style:{display:"flex",justifyContent:"center"},children:Object(n.jsxs)(e,{style:{paddingTop:"12vh"},children:[Object(n.jsx)(Y.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(n.jsx)("b",{style:{fontSize:"1.8em",color:"#3690CC"},children:"Intro :"})}),Object(n.jsx)("br",{}),Object(n.jsx)(Y.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(n.jsx)(Y.a,{style:{fontSize:"2em"},children:"We went through the job application process ourselves and we were not so happy about it."})}),Object(n.jsx)("br",{}),Object(n.jsx)(Y.a,{className:"row",children:"# Messy spreadsheets, lost emails, lack of information."}),Object(n.jsx)("br",{}),Object(n.jsx)(Y.a,{className:"row",children:"# We decided to make a job search simple and data-driven and career advising efficient."}),Object(n.jsx)("br",{}),Object(n.jsxs)(Y.a,{className:"row",children:["# In a nutshell,",Object(n.jsx)("b",{className:"bold",children:"Trackify"})," as a platform,simplifies and manages a student's dream to land jobs."]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(Y.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(n.jsx)("b",{style:{fontSize:"1.8em",color:"#3690CC"},children:"Our Team :"})}),Object(n.jsx)("br",{}),Object(n.jsxs)(Y.a,{style:{display:"flex",justifyContent:"space-around"},children:[Object(n.jsx)(G.a,{xs:22,sm:22,lg:12,style:{display:"flex",justifyContent:"center",marginBottom:"3em"},children:Object(n.jsxs)(Y.a,{children:[Object(n.jsx)(ae.a,{style:{width:350,borderRadius:"4em",marginBottom:"1em"},cover:Object(n.jsx)("img",{alt:"example",src:Ee,style:{borderRadius:"4em"}}),hoverable:!0,children:Object(n.jsx)(t,{style:{display:"flex",justifyContent:"center"},title:"Nihal Ahmad | Software Developer",description:"I am a Software Developer Persuing B.Tech in ECE from Jamia Millia Islamia.\r Worked on Frontend of Trackify. Have keen interest in development and ready to adapt to new technologies."})}),Object(n.jsxs)(Y.a,{style:{paddingLeft:"8em",alignItems:"center"},children:[Object(n.jsx)("span",{style:{marginRight:"1em"},children:Object(n.jsx)("a",{href:"https://github.com/nihal-ahmad",target:"_blank",children:Object(n.jsx)("img",{src:De,className:"img"})})}),Object(n.jsx)("span",{style:{marginRight:"1em"},children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/nihal-ahmad-46042a192",target:"_blank",children:Object(n.jsx)("img",{src:Be,className:"img"})})}),Object(n.jsx)("span",{style:{marginRight:"1em"},children:Object(n.jsx)("a",{href:"https://drive.google.com/file/d/16zKrrpGBQUPRPgiBFboQFOEmaWPwdYsS/view",target:"_blank",children:Object(n.jsx)("img",{src:Me,className:"img"})})})]})]})}),Object(n.jsx)(G.a,{xs:22,sm:22,lg:12,style:{display:"flex",justifyContent:"center",marginBottom:"3em"},children:Object(n.jsxs)(Y.a,{children:[Object(n.jsx)(ae.a,{style:{width:350,borderRadius:"4em",marginBottom:"1em"},cover:Object(n.jsx)("img",{alt:"example",src:_e,style:{borderRadius:"4em"}}),hoverable:!0,children:Object(n.jsx)(t,{style:{display:"flex",justifyContent:"center"},title:"Saifur Rehman | Software Developer",description:"I am a Software Developer Persuing B.Tech in CSE from Jamia Millia Islamia.\r Worked on Backend of Trackify. Have keen interest in development and Data Structures and Algorithms."})}),Object(n.jsxs)(Y.a,{style:{paddingLeft:"8em",alignItems:"center"},children:[Object(n.jsx)("span",{style:{marginRight:"1em"},children:Object(n.jsx)("a",{href:"https://github.com/Saifu0",target:"_blank",children:Object(n.jsx)("img",{src:De,className:"img"})})}),Object(n.jsx)("span",{style:{marginRight:"1em"},children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/saifur-rehman-khan-5770a9172/",target:"_blank",children:Object(n.jsx)("img",{src:Be,className:"img"})})}),Object(n.jsx)("span",{style:{marginRight:"1em"},children:Object(n.jsx)("a",{href:"https://drive.google.com/file/d/1RciXgfhS3qv0lDQMrEpA8cR1_VVuJdS9/view?usp=sharing",target:"_blank",children:Object(n.jsx)("img",{src:Me,className:"img"})})})]})]})})]})]})})})};var Ue=function(){return o.a.defaults.baseURL="https://trackify-us.herokuapp.com/",Object(n.jsx)(j.a,{store:A,children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)(L,{}),Object(n.jsxs)(N.c,{children:[Object(n.jsx)(N.a,{path:"/",exact:!0,component:H}),Object(n.jsx)(N.a,{path:"/dashboard",exact:!0,component:me}),Object(n.jsx)(N.a,{path:"/login",exact:!0,component:Fe}),Object(n.jsx)(N.a,{path:"/contact",exact:!0,component:ze}),Object(n.jsx)(N.a,{path:"/about",exact:!0,component:Le})]})]})})},qe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,328)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Ue,{})}),document.getElementById("root")),qe()}},[[289,1,2]]]);
//# sourceMappingURL=main.3735be0e.chunk.js.map
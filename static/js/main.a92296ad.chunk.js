(this["webpackJsonpreact-auth-template"]=this["webpackJsonpreact-auth-template"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(36),i=a.n(r),c=(a(68),a(48)),o=a(11),l=a(12),d=a(14),h=a(13),u=a(16),m=a(126),j=a(2),b=a(3),g=a(0),p=["user","component","render"],x=function(e){var t=e.user,a=e.component,s=e.render,n=Object(b.a)(e,p);return t&&s?Object(g.jsx)(u.b,Object(j.a)(Object(j.a)({},n),{},{render:s})):Object(g.jsx)(u.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return t?Object(g.jsx)(a,Object(j.a)({},e)):Object(g.jsx)(u.a,{to:"/"})}}))},O=a(67),f=(a(96),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleClose=function(){return s.setState({show:!1})},s.state={show:!0},s.timeoutId=null,s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,a=e.heading,s=e.message,n=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){n(r)}),300),Object(g.jsx)(O.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(O.a.Heading,{className:"alert-body",children:a}),Object(g.jsx)("p",{className:"alert-body",children:s})]})})}}]),a}(n.a.Component)),v=a(82),w=a(49),k=a(10),y=a.p+"static/media/NavBarLogo.6cbb026d.png",N=Object(g.jsxs)(s.Fragment,{children:[Object(g.jsx)(k.c,{to:"/lists",className:"nav-link px-5",children:"View Lists"}),Object(g.jsx)(k.c,{to:"/change-password",className:"nav-link px-5",children:"Change Password"}),Object(g.jsx)(k.c,{to:"/sign-out",className:"nav-link px-5",children:"Sign Out"})]}),C=Object(g.jsxs)(s.Fragment,{children:[Object(g.jsx)(k.c,{to:"/sign-up",className:"nav-link px-5",children:"Sign Up"}),Object(g.jsx)(k.c,{to:"/sign-in",className:"nav-link px-5",children:"Sign In"})]}),S=Object(g.jsx)(s.Fragment,{children:Object(g.jsx)(k.c,{exact:!0,to:"/",className:"nav-link px-5",children:"Home"})}),A=function(e){var t=e.user;return Object(g.jsxs)(w.a,{style:{backdropFilter:"blur(6px)"},className:"fixed-bottom",variant:"dark",expand:"md",children:[Object(g.jsx)(w.a.Brand,{children:Object(g.jsx)(k.b,{to:"/",children:Object(g.jsx)("img",{style:{height:"5vh",marginLeft:"5px"},src:y})})}),Object(g.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"nav-icon"}),Object(g.jsx)(w.a.Collapse,{id:"basic-navbar-nav",className:"text-center d-flex justify-content-md-end justify-content-center",children:Object(g.jsxs)(v.a,{children:[t&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),S,t?N:C]})})]})},T=a(8),L="https://monthly-backend.herokuapp.com/",M="http://localhost:3002",P="localhost"===window.location.hostname?M:L,D=a(21),I=a.n(D),U=function(e){return I()({url:P+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},F=a(6),B=a(15),z=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(T.a)({},e.target.name,e.target.value))},s.onSignUp=function(e){e.preventDefault();var t,a=s.props,n=a.msgAlert,r=a.history,i=a.setUser;(t=s.state,I()({method:"POST",url:P+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return U(s.state)})).then((function(e){return i(e.data.user)})).then((function(){return n({heading:"Signed Up Successfully",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){s.setState({email:"",password:"",passwordConfirmation:""}),n({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},s.state={email:"",password:"",passwordConfirmation:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,s=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{className:"text-white",children:"Sign Up"}),Object(g.jsxs)(F.a,{onSubmit:this.onSignUp,children:[Object(g.jsxs)(F.a.Group,{controlId:"email",children:[Object(g.jsx)(F.a.Label,{className:"text-white",children:"Email address"}),Object(g.jsx)(F.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"password",children:[Object(g.jsx)(F.a.Label,{className:"text-white",children:"Password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(F.a.Label,{className:"text-white",children:"Password Confirmation"}),Object(g.jsx)(F.a.Control,{required:!0,name:"passwordConfirmation",value:s,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(B.a,{variant:"outline-dark",className:"grad",type:"submit",style:{width:"100%",marginTop:"25px"},children:"Submit"})]})]})})}}]),a}(s.Component),J=Object(u.f)(z),G=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(T.a)({},e.target.name,e.target.value))},s.onSignIn=function(e){e.preventDefault();var t=s.props,a=t.msgAlert,n=t.history,r=t.setUser;U(s.state).then((function(e){return r(e.data.user)})).then((function(){return a({heading:"Signed In Successfully",message:"Welcome!",variant:"success"})})).then((function(){return n.push("/")})).then((function(){localStorage.setItem("user",JSON.stringify(s.state))})).catch((function(e){s.setState({email:"",password:""}),a({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},s.state={email:"",password:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{className:"text-white",children:"Sign In "}),Object(g.jsxs)(F.a,{onSubmit:this.onSignIn,children:[Object(g.jsxs)(F.a.Group,{controlId:"email",children:[Object(g.jsx)(F.a.Label,{className:"text-white",children:"Email address"}),Object(g.jsx)(F.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"password",children:[Object(g.jsx)(F.a.Label,{className:"text-white",children:"Password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(B.a,{variant:"outline-dark",className:"grad",type:"submit",style:{width:"100%",marginTop:"25px"},children:"Submit"})]})]})})}}]),a}(s.Component),q=Object(u.f)(G),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,a=e.history,s=e.clearUser;(function(e){return I()({url:P+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return localStorage.clear()})).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return a.push("/")})).finally((function(){return s()}))}},{key:"render",value:function(){return""}}]),a}(s.Component),_=Object(u.f)(E),H=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(T.a)({},e.target.name,e.target.value))},s.onChangePassword=function(e){e.preventDefault();var t=s.props,a=t.msgAlert,n=t.history,r=t.user;(function(e,t){return I()({url:P+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(s.state,r).then((function(){return a({heading:"Changed Password Successfully",message:"Password changed successfully!",variant:"success"})})).then((function(){return n.push("/")})).catch((function(e){s.setState({oldPassword:"",newPassword:""}),a({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},s.state={oldPassword:"",newPassword:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,a=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{className:"text-white",children:"Change Password"}),Object(g.jsxs)(F.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(F.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(F.a.Label,{className:"text-white",children:"Old password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(F.a.Label,{className:"text-white",children:"New Password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"newPassword",value:a,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(B.a,{variant:"outline-dark",className:"grad",type:"submit",style:{width:"100%",marginTop:"25px"},children:"Submit"})]})]})})}}]),a}(s.Component),W=Object(u.f)(H),Y=a(32),Q=function(e,t){return I()({url:P+"/lists/"+e,method:"get",headers:{Authorization:"Bearer ".concat(t.token)}})},V=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).months=["January","February","March","April","May","June","July","August","September","October","November","December"],s.handleChange=function(e){var t=Object.assign(s.state.list);"name"===e.target.name?t[e.target.name]=e.target.value:(t.month=e.target.name,s.setState({dropdownMonth:s.months[e.target.name]})),s.setState({list:t})},s.handleSubmit=function(e){e.preventDefault();var t=s.props,a=t.user,n=t.msgAlert,r=t.history;(function(e,t){return I()({url:P+"/lists",method:"post",data:{list:e},headers:{Authorization:"Bearer ".concat(t.token)}})})(s.state.list,a).then((function(e){return r.push("/lists/"+e.data.list._id)})).then((function(){return n({heading:"List created Successfully",message:"nice work go check out your list",variant:"success"})})).catch((function(e){n({heading:"list creation failed",message:"something went wrong "+e.message,variant:"danger"})}))},s.state={list:{name:"",month:0},dropdownMonth:"Month"},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.list,s=t.dropdownMonth,n=new Date,r=this.months.filter((function(e,t){return t>=n.getMonth()})).map((function(t){return Object(g.jsx)(Y.a.Item,{onClick:e.handleChange,name:e.months.indexOf(t),children:t},t)}));return Object(g.jsx)("div",{children:Object(g.jsxs)(F.a,{onSubmit:this.handleSubmit,className:"text-center",children:[Object(g.jsx)("h3",{className:"text-white",children:"Create List"}),Object(g.jsxs)(F.a.Group,{controlId:"name",children:[Object(g.jsx)(F.a.Label,{className:"text-white",children:"List name"}),Object(g.jsx)(F.a.Control,{required:!0,name:"name",value:a.name,placeholder:"List Name",onChange:this.handleChange}),Object(g.jsxs)("div",{children:[Object(g.jsxs)(Y.a,{className:"p-4",children:[Object(g.jsx)(Y.a.Toggle,{variant:"warning",id:"dropdown-basic",children:s}),Object(g.jsx)(Y.a.Menu,{children:r})]}),Object(g.jsx)(B.a,{type:"submit",className:"grad",variant:"outline-dark",children:"Submit"})]})]})]})})}}]),a}(s.Component),R=Object(u.f)(V),K=a(33),X=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).months=["January","February","March","April","May","June","July","August","September","October","November","December"],s.componentDidMount=function(){(function(e){return I()({url:P+"/lists",method:"get",headers:{Authorization:"Bearer ".concat(e.token)}})})(s.props.user).then((function(e){s.setState({list:e.data.lists})})).catch(console.error)},s.state={list:[],loading:!1},s}return Object(l.a)(a,[{key:"render",value:function(){var e,t=this,a=this.state.list,s=this.props.user;0===a.length?e=Object(g.jsx)("h3",{children:"No list, go create some"}):e=a.filter((function(e){return s._id===e.owner})).map((function(e){return Object(g.jsxs)("h3",{className:"p-3",children:[Object(g.jsx)(k.b,{to:"/lists/".concat(e._id),children:e.name}),Object(g.jsxs)("p",{style:{fontSize:"15px",color:"DarkGray"},children:["- ",t.months[e.month]]})]},e._id)}));return Object(g.jsxs)("div",{className:"text-center",children:[Object(g.jsx)("img",{src:y,className:"img-fluid"})," ",Object(g.jsx)("br",{}),Object(g.jsxs)(K.a,{className:"card-grad m-0",style:{width:"100%",height:"80vh",color:"white"},children:[Object(g.jsx)(K.a.Header,{className:"dark-bg text white",children:Object(g.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(g.jsx)("p",{className:"text-center",style:{margin:"auto",paddingLeft:"6rem"},children:"Lists:"}),Object(g.jsx)(k.b,{className:"link-warning",variant:"outline-dark",to:"/create-list",children:Object(g.jsx)(B.a,{className:"grad",variant:"outline-dark",children:"Create List"})})]})}),Object(g.jsx)(K.a.Body,{className:"dark-bg d-flex justify-content-start justify-content-md-center flex-wrap",children:e})]})]})}}]),a}(s.Component),Z=function(e,t,a,s){return I()({method:"PATCH",url:P+"/tasks/"+t+"/"+s,headers:{Authorization:"Bearer ".concat(a.token)},data:{task:e}})},$=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).complete=function(){var e=s.props,t=e.user,a=e.msgAlert,n=e.history,r=e.match,i=Object.assign(s.state.task);i.done=!i.done,s.setState({task:i}),Z(s.state.task,r.params.id,t,s.state.task._id).then((function(){return n.push("/")})).then((function(){return n.push(r.url)})).then((function(){return a({heading:"Task Updated Successfully",message:"Nice work, go check out your list.",variant:"success"})})).catch((function(e){a({heading:"List update failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},s.deleteTask=function(e){var t=s.props,a=t.match,n=t.user,r=t.msgAlert,i=t.history;(function(e,t,a){return I()({url:P+"/tasks/"+e+"/"+a,method:"delete",headers:{Authorization:"Bearer ".concat(t.token)}})})(a.params.id,n,e).then((function(){return i.push("/")})).then((function(){return i.push(a.url)})).then((function(){return r({heading:"Task Deleted Successfully",message:"Your task no longer exists",variant:"success"})})).catch((function(e){return r({heading:"Failed to Delete Task",message:"Something went wrong: "+e.message,variant:"danger"})}))},s.state={task:{}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.task;this.setState({task:e})}},{key:"render",value:function(){var e=this;if(null===this.state.task)return"Loading...";var t=this.props,a=t.match,s=t.task;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(K.a,{className:"card-grad m-2 ",style:{width:"18rem",height:"20rem",color:"white"},children:[Object(g.jsx)(K.a.Header,{className:"dark-bg text white",children:"Your Task:"}),Object(g.jsxs)(K.a.Body,{className:"dark-bg",children:[Object(g.jsx)(K.a.Title,{className:"text-warning",style:{overflow:"auto"},children:s.item}),Object(g.jsxs)("div",{className:"align-items-end",style:{position:"relative",top:"7rem"},children:[Object(g.jsx)(k.b,{to:{pathname:"/lists/".concat(a.params.id,"/edit-task"),taskId:s._id},children:Object(g.jsx)(B.a,{variant:"dark",style:{width:"50%"},children:"Edit"})}),Object(g.jsx)(B.a,{onClick:function(){return e.deleteTask(s._id)},variant:"dark",style:{width:"50%"},children:"Delete"}),Object(g.jsx)(B.a,{variant:"warning",onClick:this.complete,style:{width:"100%",marginTop:"1rem"},children:s.done?"Completed":"Uncompleted"})]})]})]},s._id)})}}]),a}(s.Component),ee=Object(u.f)($),te=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).months=["January","February","March","April","May","June","July","August","September","October","November","December"],s.destroy=function(){var e=s.props,t=e.match,a=e.user,n=e.msgAlert,r=e.history;(function(e,t){return I()({url:P+"/lists/"+e,method:"delete",headers:{Authorization:"Bearer ".concat(t.token)}})})(t.params.id,a).then((function(){return r.push("/lists")})).then((function(){return n({heading:"List Deleted Successfully",message:"Your list no longer exists",variant:"success"})})).catch((function(e){return n({heading:"Failed to Delete List",message:"Something went wrong: "+e.message,variant:"danger"})}))},s.state={list:null,deleted:!1},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.match,s=t.user,n=t.msgAlert;Q(a.params.id,s).then((function(t){return e.setState({list:t.data.list})})).catch((function(e){return n({heading:"Show list failed",message:"Something went wrong",variant:"danger"})}))}},{key:"render",value:function(){if(null===this.state.list)return"Loading...";var e=this.state.list.owner,t=this.props,a=t.user,s=t.history,n=t.match,r=t.msgAlert,i=this.state.list,c=i.tasks.map((function(e){return Object(g.jsx)(ee,{task:e,user:a,msgAlert:r},e._id)}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"text-center",children:[Object(g.jsx)("h3",{className:"text-white",children:i.name}),Object(g.jsxs)("p",{className:"text-white",children:[" Month: ",this.months[i.month]]}),a._id===e&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(B.a,{onClick:this.destroy,className:"text-white",variant:"dark",children:"Delete List"})," ",Object(g.jsx)(B.a,{onClick:function(){return s.push("/lists/".concat(n.params.id,"/update-list"))},className:"text-white",variant:"dark",children:"Edit List"})," "," ",Object(g.jsx)(B.a,{onClick:function(){return s.push("/lists/".concat(n.params.id,"/create-task"))},className:"text-white",variant:"dark",children:"Create Task"}),Object(g.jsx)("div",{className:"d-flex flex-wrap justify-content-lg-start justify-content-center",children:c})]})]})})}}]),a}(s.Component),ae=Object(u.f)(te),se=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).months=["January","February","March","April","May","June","July","August","September","October","November","December"],s.handleChange=function(e){var t=Object.assign(s.state.list);"name"===e.target.name?t[e.target.name]=e.target.value:(t.month=e.target.name,s.setState({dropdownMonth:s.months[e.target.name]})),s.setState({list:t})},s.handleSubmit=function(e){e.preventDefault();var t=s.props,a=t.user,n=t.msgAlert,r=t.history,i=t.match;(function(e,t,a){return I()({method:"PATCH",url:P+"/lists/"+t,headers:{Authorization:"Bearer ".concat(a.token)},data:{list:e}})})(s.state.list,i.params.id,a).then((function(e){return r.push("/lists/"+i.params.id)})).catch((function(e){n({heading:"List update failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},s.state={list:{name:"",month:0},dropdownMonth:"Month"},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.match,s=t.user,n=t.msgAlert;Q(a.params.id,s).then((function(t){return e.setState({list:t.data.list})})).catch((function(e){return n({heading:"Show list failed, try again!",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.list,s=t.dropdownMonth,n=new Date,r=this.months.filter((function(e,t){return t>=n.getMonth()})).map((function(t){return Object(g.jsx)(Y.a.Item,{onClick:e.handleChange,name:e.months.indexOf(t),children:t},t)}));return Object(g.jsx)("div",{children:Object(g.jsx)(F.a,{onSubmit:this.handleSubmit,className:"text-center",children:Object(g.jsxs)(F.a.Group,{controlId:"name",children:[Object(g.jsx)("h3",{className:"text-white",children:"Edit List"}),Object(g.jsx)(F.a.Label,{className:"text-white",children:"List name"}),Object(g.jsx)(F.a.Control,{required:!0,name:"name",value:a.name,placeholder:"List Name",onChange:this.handleChange,style:{width:"96.5%"},className:"mx-auto"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)(Y.a,{className:"p-4",children:[Object(g.jsx)(Y.a.Toggle,{variant:"warning",id:"dropdown-basic",children:s}),Object(g.jsx)(Y.a.Menu,{children:r})]}),Object(g.jsx)(B.a,{type:"submit",className:"grad",variant:"outline-dark",children:"Update List"})]})]})})})}}]),a}(s.Component),ne=Object(u.f)(se),re=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleChange=function(e){var t=Object.assign(s.state.task);t[e.target.name]=e.target.value,s.setState({task:t})},s.handleSubmit=function(e){e.preventDefault();var t=s.props,a=t.user,n=t.msgAlert,r=t.history;(function(e,t,a){return I()({url:P+"/tasks/"+e,method:"post",data:{task:t},headers:{Authorization:"Bearer ".concat(a.token)}})})(t.match.params.id,s.state.task,a).then((function(e){return r.push("/lists/"+e.data.list._id)})).then((function(){return n({heading:"Task Created Successfully",message:"Nice work, go check out your task.",variant:"success"})})).catch((function(e){n({heading:"Task creation failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},s.state={task:{item:"",done:!1}},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(F.a,{onSubmit:this.handleSubmit,className:"text-center",children:[Object(g.jsx)("h3",{className:"text-white",children:"Create Task"}),Object(g.jsxs)(F.a.Group,{controlId:"item",children:[Object(g.jsx)(F.a.Label,{className:"text-white",children:"Task name"}),Object(g.jsx)(F.a.Control,{required:!0,name:"item",value:this.state.task.item,placeholder:"Task Name",onChange:this.handleChange}),Object(g.jsx)(B.a,{type:"submit",variant:"outline-dark",className:"grad my-3",style:{width:"100%"},children:"Submit"})]})]})})}}]),a}(s.Component),ie=Object(u.f)(re),ce=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleChange=function(e){var t=Object.assign(s.state.task);t[e.target.name]=e.target.value,s.setState({task:t})},s.handleSubmit=function(e){e.preventDefault();var t=s.props,a=t.user,n=t.msgAlert,r=t.history,i=t.match,c=t.location;Z(s.state.task,i.params.id,a,c.taskId).then((function(e){return r.push("/lists/"+i.params.id)})).then((function(){return n({heading:"Task Updated Successfully",message:"Nice work, go check out your updated task.",variant:"success"})})).catch((function(e){n({heading:"Task update failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},s.state={task:{item:"",done:!1}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.match,s=t.user,n=t.location;(function(e,t,a){return I()({url:P+"/tasks/"+e+"/"+a,method:"get",headers:{Authorization:"Bearer ".concat(t.token)}})})(a.params.id,s,n.taskId).then((function(t){return e.setState({task:t.data.task})}))}},{key:"render",value:function(){var e=this.state.task;return Object(g.jsx)("div",{children:Object(g.jsxs)(F.a,{onSubmit:this.handleSubmit,className:"text-center",children:[Object(g.jsxs)(F.a.Group,{controlId:"name",children:[Object(g.jsx)("h3",{className:"text-white",children:"Create Task"}),Object(g.jsx)(F.a.Label,{className:"text-white",children:"New Task Name"}),Object(g.jsx)(F.a.Control,{className:"text-dark",required:!0,name:"item",value:e.item,placeholder:"new task name",onChange:this.handleChange})]}),Object(g.jsx)(B.a,{variant:"outline-dark",className:"grad",type:"submit",style:{width:"100%",marginTop:"25px"},children:"Submit"})]})})}}]),a}(s.Component),oe=Object(u.f)(ce),le=a.p+"static/media/BigLogoM.4d0ec502.png",de=a(125),he=a(81),ue=a.p+"static/media/quiahn.b46c3ff0.jpg",me=a.p+"static/media/nick.b588f2f7.png",je=a.p+"static/media/ivan.dd2dabed.png";function be(){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24",children:Object(g.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"})})}function ge(){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24",children:Object(g.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}function pe(){return Object(g.jsxs)("div",{className:"text-center",children:[Object(g.jsxs)("div",{style:{height:"100vh"},children:[Object(g.jsx)("img",{id:"big-m",src:le,className:"bob-down img-fluid"}),Object(g.jsx)("p",{className:"animated animatedFadeInUp fadeInUp",style:{marginTop:"12vh",color:"lightgray"},children:"The App That Helps You Track Your Monthly Goals And Tasks."})]}),Object(g.jsx)("div",{className:"d-none d-lg-block",style:{height:"100vh"},children:Object(g.jsxs)(de.a,{className:"d-flex align-items-center h-100",children:[Object(g.jsx)(he.a,{xs:6,className:"text-center",children:Object(g.jsx)("p",{className:"grad text-white border border-light border-1 m-0 rounded px-2",style:{fontSize:"54px",paddingTop:"15%",paddingBottom:"15%",width:"75%",transform:"skew(-0.00turn, -5deg)",textShadow:"-1px -1px 0 #222222, 1px -1px 0 #222222, -1px 1px 0 #222222, 1px 4px 0 #222222"},children:"Create Your Monthly Tasks"})}),Object(g.jsx)(he.a,{children:Object(g.jsx)("p",{style:{color:"lightgray",fontSize:"24px"},children:"Get started using monthly! First, create an account to help you keep track of your monthly goals and lists. Next, select \u201cView Lists\u201d and from there you will be able to view, create, or edit your list for the desired month. Additionally, on this screen you will be able to add tasks or goals to any of the lists created. Help yourself get back on track and have fun doing it with Monthly!"})})]})}),Object(g.jsxs)("div",{style:{height:"100vh"},children:[Object(g.jsx)("h1",{className:"text-white pt-5",children:"The Team"}),Object(g.jsxs)(de.a,{className:"d-flex align-items-center justify-content-center",style:{height:"75%"},children:[Object(g.jsx)(he.a,{md:4,children:Object(g.jsxs)(K.a,{children:[Object(g.jsxs)("div",{className:"img2",children:[" ",Object(g.jsx)("img",{src:ue,alt:"Quiahn Ballou"})," "]}),Object(g.jsxs)("div",{className:"main-text",children:[Object(g.jsx)("h2",{children:"Quiahn Ballou"}),Object(g.jsx)("p",{children:"Cohoes, NY"}),Object(g.jsx)("p",{children:"Fullstack Web Developer"}),Object(g.jsx)("hr",{})]}),Object(g.jsxs)("div",{className:"socials",children:[Object(g.jsx)("a",{className:"icon-hover mx-2",href:"https://www.linkedin.com/in/quiahn-ballou/",children:Object(g.jsx)(ge,{})}),Object(g.jsx)("a",{className:"icon-hover mx-2",href:"https://github.com/Quiahn",children:Object(g.jsx)(be,{})})]})]})}),Object(g.jsx)(he.a,{md:4,children:Object(g.jsxs)(K.a,{children:[Object(g.jsxs)("div",{className:"img2",children:[" ",Object(g.jsx)("img",{src:me,alt:"Nick Wilkerson"})," "]}),Object(g.jsxs)("div",{className:"main-text",children:[Object(g.jsx)("h2",{children:"Nick Wilkerson"}),Object(g.jsx)("p",{children:"Golden, Colorado"}),Object(g.jsx)("p",{children:"Fullstack Web Developer"}),Object(g.jsx)("hr",{})]}),Object(g.jsxs)("div",{className:"socials",children:[Object(g.jsx)("a",{className:"icon-hover mx-2",href:"https://www.linkedin.com/in/nickwilkerson/",children:Object(g.jsx)(ge,{})}),Object(g.jsx)("a",{className:"icon-hover mx-2",href:"https://github.com/nickwilkerson",children:Object(g.jsx)(be,{})})]})]})}),Object(g.jsx)(he.a,{md:4,children:Object(g.jsxs)(K.a,{children:[Object(g.jsxs)("div",{className:"img2",children:[" ",Object(g.jsx)("img",{src:je,alt:"Ivan Ly"})," "]}),Object(g.jsxs)("div",{className:"main-text",children:[Object(g.jsx)("h2",{children:"Ivan Ly"}),Object(g.jsx)("p",{children:"College Station, Texas"}),Object(g.jsx)("p",{children:"Fullstack Web Developer"}),Object(g.jsx)("hr",{})]}),Object(g.jsxs)("div",{className:"socials",children:[Object(g.jsx)("a",{className:"icon-hover mx-2",href:"https://www.linkedin.com/in/ivan-ly/",children:Object(g.jsx)(ge,{})}),Object(g.jsx)("a",{className:"icon-hover mx-2",href:"https://github.com/Ivanly25",children:Object(g.jsx)(be,{})})]})]})})]})]})]})}var xe=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).setUser=function(e){return s.setState({user:e})},s.clearUser=function(){return s.setState({user:null})},s.deleteAlert=function(e){s.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},s.componentDidMount=function(){void 0!==localStorage.user&&U(JSON.parse(localStorage.user)).then((function(e){return s.setUser(e.data.user)}))},s.msgAlert=function(e){var t=e.heading,a=e.message,n=e.variant,r=Object(m.a)();s.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:a,variant:n,id:r}])}}))},s.state={user:null,msgAlerts:[]},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.msgAlerts,n=t.user;return Object(g.jsxs)(s.Fragment,{children:[Object(g.jsx)(A,{user:n}),a.map((function(t){return Object(g.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(u.b,{path:"/sign-up",render:function(){return Object(g.jsx)(J,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(u.b,{path:"/sign-in",render:function(){return Object(g.jsx)(q,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(g.jsx)(pe,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(x,{user:n,path:"/sign-out",render:function(){return Object(g.jsx)(_,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:n})}}),Object(g.jsx)(x,{user:n,path:"/change-password",render:function(){return Object(g.jsx)(W,{msgAlert:e.msgAlert,user:n})}}),Object(g.jsx)(x,{user:n,path:"/create-list",render:function(){return Object(g.jsx)(R,{msgAlert:e.msgAlert,user:n})}}),Object(g.jsx)(x,{user:n,path:"/lists/:id/update-list",render:function(){return Object(g.jsx)(ne,{msgAlert:e.msgAlert,user:n})}}),Object(g.jsx)(x,{user:n,exact:!0,path:"/lists",render:function(){return Object(g.jsx)(X,{msgAlert:e.msgAlert,user:n})}}),Object(g.jsx)(x,{user:n,path:"/lists/:id",exact:!0,render:function(){return Object(g.jsx)(ae,{msgAlert:e.msgAlert,user:n})}}),Object(g.jsx)(x,{user:n,path:"/lists/:id/create-task",render:function(){return Object(g.jsx)(ie,{msgAlert:e.msgAlert,user:n})}}),Object(g.jsx)(x,{user:n,path:"/lists/:id/edit-task",render:function(){return Object(g.jsx)(oe,{msgAlert:e.msgAlert,user:n})}})]})]})}}]),a}(s.Component),Oe=Object(g.jsx)(k.a,{basename:"/niq",children:Object(g.jsx)(xe,{})});i.a.render(Oe,document.getElementById("root"))},68:function(e,t,a){},96:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.a92296ad.chunk.js.map
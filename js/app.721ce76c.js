(function(e){function t(t){for(var r,c,o=t[0],u=t[1],i=t[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/werewolf-web-frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08e0":function(e,t,n){},"0d36":function(e,t,n){"use strict";n("e17d")},1606:function(e,t,n){},"18b3":function(e,t,n){"use strict";n("1606")},"18ed":function(e,t,n){"use strict";n("cb7d")},"223e":function(e,t,n){},2568:function(e,t,n){"use strict";n("3b44")},"3b44":function(e,t,n){},"4cf8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),s=n("2f62"),a={class:"container"};function c(e,t,n,s,c,o){var u=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["f"])("div",a,[Object(r["i"])(u)])}var o={data:function(){return{}},setup:function(){}},u=(n("5f83"),n("d959")),i=n.n(u);const l=i()(o,[["render",c]]);var d=l,f=n("6c02"),b={class:"main-site"},p={class:"replace-area"};function g(e,t,n,s,a,c){var o=Object(r["B"])("SideBar"),u=Object(r["B"])("router-view"),i=Object(r["B"])("InputBar"),l=Object(r["B"])("Member");return Object(r["t"])(),Object(r["f"])("div",b,[Object(r["i"])(o),Object(r["g"])("div",p,[Object(r["i"])(u,{info:a.info,messagesRecv:a.messages},null,8,["info","messagesRecv"]),Object(r["i"])(i,{emitSend:c.onSendMsg},null,8,["emitSend"])]),Object(r["i"])(l)])}var m=function(e){return Object(r["w"])("data-v-600687fe"),e=e(),Object(r["u"])(),e},h={class:"sidebar"},O={class:"title"},j=m((function(){return Object(r["g"])("p",null,"List of channels",-1)})),v={class:"backBtn"},w={class:"channels"},y={class:"category"},k={class:"expand"},_={class:"drop-down"},R=m((function(){return Object(r["g"])("p",{class:"category-name"},"Chat Room",-1)})),B={class:"hashtag"},M=m((function(){return Object(r["g"])("p",null,"Lobby",-1)})),S={class:"category-list"},x={class:"hashtag"},I=m((function(){return Object(r["g"])("p",null,"Rules",-1)})),U={class:"category"},$={class:"expand"},C={class:"drop-down"},N=m((function(){return Object(r["g"])("p",{class:"category-name"},"Game Room",-1)})),J={class:"category-list"},G={class:"hashtag"},D=m((function(){return Object(r["g"])("p",null,"Room",-1)})),L={class:"category-list"},q={class:"hashtag"},P=m((function(){return Object(r["g"])("p",null,"Role",-1)}));function z(e,t,n,s,a,c){var o=Object(r["B"])("fa"),u=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])("div",h,[Object(r["g"])("div",O,[j,Object(r["g"])("button",v,[Object(r["i"])(o,{icon:["fas","times"]})])]),Object(r["g"])("div",w,[Object(r["g"])("div",y,[Object(r["g"])("div",null,[Object(r["g"])("button",k,[Object(r["g"])("div",_,[Object(r["i"])(o,{icon:["fas","chevron-down"]})]),R])]),Object(r["g"])("div",null,[Object(r["i"])(u,{to:{name:"Chat"}},{default:Object(r["I"])((function(){return[Object(r["g"])("button",{class:"category-list",onClick:t[0]||(t[0]=function(){return e.active&&e.active.apply(e,arguments)})},[Object(r["g"])("div",B,[Object(r["i"])(o,{icon:["fas","hashtag"]})]),M])]})),_:1})]),Object(r["g"])("div",null,[Object(r["i"])(u,{to:{name:"Rules"}},{default:Object(r["I"])((function(){return[Object(r["g"])("button",S,[Object(r["g"])("div",x,[Object(r["i"])(o,{icon:["fas","hashtag"]})]),I])]})),_:1})])]),Object(r["g"])("div",U,[Object(r["g"])("div",null,[Object(r["g"])("button",$,[Object(r["g"])("div",C,[Object(r["i"])(o,{icon:["fas","chevron-down"]})]),N])]),Object(r["g"])("div",null,[Object(r["g"])("button",J,[Object(r["g"])("div",G,[Object(r["i"])(o,{icon:["fas","hashtag"]})]),D])]),Object(r["g"])("div",null,[Object(r["g"])("button",L,[Object(r["g"])("div",q,[Object(r["i"])(o,{icon:["fas","hashtag"]})]),P])])])]),Object(r["g"])("button",{onClick:t[1]||(t[1]=function(){return c.logout&&c.logout.apply(c,arguments)})},"Log Out")])}var A={methods:{logout:function(){this.$cookies.remove("token"),this.$router.push({name:"LogIn"}),this.$disconnect()}}};n("a1aa");const T=i()(A,[["render",z],["__scopeId","data-v-600687fe"]]);var K=T,F=function(e){return Object(r["w"])("data-v-769e5f52"),e=e(),Object(r["u"])(),e},V={class:"member"},E={class:"users"},W={class:"img-container"},H=["src"],Q=F((function(){return Object(r["g"])("div",{class:"status-circle"},null,-1)})),X={class:"user-info"},Y={class:"username"};function Z(e,t,n,s,a,c){var o=Object(r["B"])("Navbar");return Object(r["t"])(),Object(r["f"])("div",V,[Object(r["i"])(o,{header:"Members"}),Object(r["g"])("div",E,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(a.users,(function(e){return Object(r["t"])(),Object(r["f"])("div",{class:"user",key:e.username},[Object(r["g"])("div",W,[Object(r["g"])("img",{src:e.avatar_url,alt:""},null,8,H),Q]),Object(r["g"])("div",X,[Object(r["g"])("p",Y,Object(r["D"])(e.username),1)])])})),128))])])}var ee=n("1da1"),te=(n("96cf"),n("ac1f"),n("1276"),n("d3b7"),"https://werewolf-web-services.herokuapp.com");function ne(){return re.apply(this,arguments)}function re(){return re=Object(ee["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://aws.random.cat/meow").then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),re.apply(this,arguments)}function se(){return ae.apply(this,arguments)}function ae(){return ae=Object(ee["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breeds/image/random").then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function ce(){return oe.apply(this,arguments)}function oe(){return oe=Object(ee["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(Math.random()<.5)){e.next=4;break}return e.abrupt("return",ne().then((function(e){return e.file})));case 4:return e.abrupt("return",se().then((function(e){return e.message})));case 5:case"end":return e.stop()}}),e)}))),oe.apply(this,arguments)}function ue(e,t){return ie.apply(this,arguments)}function ie(){return ie=Object(ee["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(te,"/users/login"),{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,passwd:n})}).then((function(e){return e.json()})).then((function(e){var t=e.message;if("ok"==t)return e.data.token;throw t}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),ie.apply(this,arguments)}function le(e,t,n){return de.apply(this,arguments)}function de(){return de=Object(ee["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(te,"/users"),{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,passwd:n,avatar_url:r})}).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),de.apply(this,arguments)}function fe(e,t){return be.apply(this,arguments)}function be(){return be=Object(ee["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",ce().then((function(e){return le(t,n,e)})).then((function(e){if("ok"==e.message)return e.data.token;throw e.message})));case 1:case"end":return e.stop()}}),e)}))),be.apply(this,arguments)}function pe(e){var t="; ".concat(document.cookie),n=t.split("; ".concat(e,"="));if(2===n.length)return n.pop().split(";").shift()}function ge(){return me.apply(this,arguments)}function me(){return me=Object(ee["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=pe("token"),e.next=3,fetch("".concat(te,"/users"),{headers:{Authorization:t}}).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),me.apply(this,arguments)}function he(){return Oe.apply(this,arguments)}function Oe(){return Oe=Object(ee["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=pe("token"),e.next=3,fetch("".concat(te,"/users/info"),{headers:{Authorization:t}}).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),Oe.apply(this,arguments)}var je={login:ue,signup:fe,getAllUser:ge,getCookie:pe,getInfo:he},ve={class:"navbar"},we={class:"hashtag"};function ye(e,t,n,s,a,c){var o=Object(r["B"])("fa");return Object(r["t"])(),Object(r["f"])("div",ve,[Object(r["g"])("div",we,[Object(r["i"])(o,{icon:["fas","hashtag"]})]),Object(r["g"])("p",null,Object(r["D"])(n.header),1)])}var ke={props:{header:String}};n("6dd6");const _e=i()(ke,[["render",ye]]);var Re=_e,Be={components:{Navbar:Re},data:function(){return{users:[]}},created:function(){var e=this;je.getAllUser().then((function(t){e.users=t.data}))}};n("2568");const Me=i()(Be,[["render",Z],["__scopeId","data-v-769e5f52"]]);var Se=Me,xe={class:"input"},Ie={class:"chat-area"};function Ue(e,t,n,s,a,c){return Object(r["t"])(),Object(r["f"])("div",xe,[Object(r["g"])("div",Ie,[Object(r["g"])("div",{class:"chat-input",id:"chat-input",contenteditable:"true",onKeyup:t[0]||(t[0]=function(){return c.sendMessage&&c.sendMessage.apply(c,arguments)})},null,32)])])}n("5319");var $e={props:{emitSend:Function},data:function(){return{message:""}},methods:{sendMessage:function(e){if("Enter"==e.key&&!e.shiftKey){var t=document.getElementById("chat-input"),n=t.innerText.replace(/\n/g,"");n&&this.$socket.send(JSON.stringify({SendReq:{channel_id:"1",message:n}})),this.emitSend(n),t.innerHTML=""}}}};n("65dc");const Ce=i()($e,[["render",Ue],["__scopeId","data-v-05a9c5dc"]]);var Ne=Ce,Je=n("5530");n("4de4");function Ge(e,t,n){var r=e.filter((function(e){return e.id==n.user_id}));return t.username=r[0].username,t.avatar_url=r[0].avatar_url,t.message=n.message,t.channel_id=n.channel_id,t.message_id=n.message_id,t}function De(e,t,n){for(var r=[],s=function(s){var a=e.filter((function(e){return e.id==n[s].user_id}));t.channel_id="1",t.username=a[0].username,t.avatar_url=a[0].avatar_url,t.message=n[s].message,t.message_id=n[s].message_id,r.unshift(Object(Je["a"])({},t))},a=0;a<n.length;++a)s(a);return r}var Le={receiveMessage:Ge,getAllMessages:De},qe={components:{SideBar:K,Member:Se,InputBar:Ne},data:function(){return{token:je.getCookie("token"),info:{},users:[],messages:[],channel_id:"1",message:""}},mounted:function(){var e=this;je.getInfo().then((function(t){return e.info=t.data})),console.log("Main Mounted"),this.$cookies.isKey("token")||this.$router.push({name:"LogIn"}),this.token&&(console.log("Connect"),this.$connect("wss://werewolf-web-services.herokuapp.com/ws?token=".concat(this.token)),console.log("Connected"),this.$options.sockets.onopen=function(){console.log("On open"),e.$socket.send(JSON.stringify("GetUsers")),e.$socket.send(JSON.stringify({GetMsg:{channel_id:e.channel_id,offset:0,limit:20}}))}),this.$options.sockets.onmessage=function(t){var n={message:e.message,channel_id:e.channel_id,username:e.info.username,avatar_url:e.info.avatar_url,message_id:""},r=JSON.parse(t.data);r.GetUsersRes&&(e.users=r.GetUsersRes),r.GetMsgRes&&(e.messages=Le.getAllMessages(e.users,n,r.GetMsgRes.messages)),r.SendRes?(n.message_id=r.SendRes.message_id,e.messages.push(n)):r.BroadCastMsg&&e.messages.push(Le.receiveMessage(e.users,n,r.BroadCastMsg))}},methods:{onSendMsg:function(e){this.message=e}}};n("0d36");const Pe=i()(qe,[["render",g]]);var ze=Pe,Ae={class:"login-site"};function Te(e,t,n,s,a,c){var o=Object(r["B"])("SignUpForm"),u=Object(r["B"])("LoginForm");return Object(r["t"])(),Object(r["f"])("div",Ae,[n.signup?(Object(r["t"])(),Object(r["d"])(o,{key:0})):Object(r["e"])("",!0),n.signup?Object(r["e"])("",!0):(Object(r["t"])(),Object(r["d"])(u,{key:1}))])}var Ke=function(e){return Object(r["w"])("data-v-54832a84"),e=e(),Object(r["u"])(),e},Fe={class:"login-form"},Ve=Ke((function(){return Object(r["g"])("label",{for:"username",class:"required"},"User Name",-1)})),Ee=Ke((function(){return Object(r["g"])("label",{for:"passwd",class:"required"},"Password",-1)})),We={key:0,class:"alert"},He=Ke((function(){return Object(r["g"])("div",{class:"button-group"},[Object(r["g"])("button",{class:"signup-btn",type:"submit"},"Sign Up")],-1)}));function Qe(e,t,n,s,a,c){return Object(r["t"])(),Object(r["f"])("div",Fe,[Object(r["g"])("form",{onSubmit:t[4]||(t[4]=Object(r["K"])((function(){return c.signup&&c.signup.apply(c,arguments)}),["prevent"]))},[Ve,Object(r["J"])(Object(r["g"])("input",{type:"text",name:"username",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e}),onChange:t[1]||(t[1]=function(){return c.remove&&c.remove.apply(c,arguments)}),required:""},null,544),[[r["G"],a.username]]),Ee,Object(r["J"])(Object(r["g"])("input",{type:"password",name:"passwd",id:"passwd","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e}),onChange:t[3]||(t[3]=function(){return c.remove&&c.remove.apply(c,arguments)}),required:""},null,544),[[r["G"],a.password]]),""!==a.message?(Object(r["t"])(),Object(r["f"])("div",We,Object(r["D"])(a.message),1)):Object(r["e"])("",!0),He],32)])}var Xe={data:function(){return{username:"",password:"",message:""}},methods:{signup:function(){var e=this;je.signup(this.username,this.password).then((function(t){t&&(e.$cookies.set("token",t,432e3),e.$router.push({name:"Rules"}),e.message="")})).catch((function(t){e.message=t}))},remove:function(){this.message=""}}};n("f18a");const Ye=i()(Xe,[["render",Qe],["__scopeId","data-v-54832a84"]]);var Ze=Ye,et=function(e){return Object(r["w"])("data-v-43b7ac15"),e=e(),Object(r["u"])(),e},tt={class:"login-form"},nt=et((function(){return Object(r["g"])("h1",null,"Welcome Back!!",-1)})),rt=et((function(){return Object(r["g"])("h4",null,"We're so excited to see you again!",-1)})),st=et((function(){return Object(r["g"])("label",{for:"username",class:"required"},"User Name",-1)})),at=et((function(){return Object(r["g"])("label",{for:"passwd",class:"required"},"Password",-1)})),ct={key:0,class:"alert"},ot={class:"button-group"},ut=et((function(){return Object(r["g"])("button",{type:"submit",class:"login-btn"}," Login ",-1)})),it=et((function(){return Object(r["g"])("div",{class:"separator"},"OR",-1)})),lt=et((function(){return Object(r["g"])("button",{type:"button",class:"signup-btn"},"Sign Up",-1)}));function dt(e,t,n,s,a,c){var o=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])("div",tt,[Object(r["g"])("form",{onSubmit:t[4]||(t[4]=Object(r["K"])((function(){return c.authorize&&c.authorize.apply(c,arguments)}),["prevent"]))},[nt,rt,st,Object(r["J"])(Object(r["g"])("input",{type:"text",name:"username",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e}),onChange:t[1]||(t[1]=function(){return c.remove&&c.remove.apply(c,arguments)}),required:""},null,544),[[r["G"],a.username]]),at,Object(r["J"])(Object(r["g"])("input",{type:"password",name:"passwd",id:"passwd","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.passwd=e}),onChange:t[3]||(t[3]=function(){return c.remove&&c.remove.apply(c,arguments)}),required:""},null,544),[[r["G"],a.passwd]]),""!==a.message?(Object(r["t"])(),Object(r["f"])("div",ct,Object(r["D"])(a.message),1)):Object(r["e"])("",!0),Object(r["g"])("div",ot,[ut,it,Object(r["i"])(o,{to:{name:"SignUp"}},{default:Object(r["I"])((function(){return[lt]})),_:1})])],32)])}var ft={data:function(){return{username:"",passwd:"",message:""}},methods:{authorize:function(){var e=this;je.login(this.username,this.passwd).then((function(t){t&&(e.$cookies.set("token",t,432e3),e.$router.push({name:"Rules"}),e.message="")})).catch((function(t){e.message=t}))},remove:function(){this.message=""}}};n("9085");const bt=i()(ft,[["render",dt],["__scopeId","data-v-43b7ac15"]]);var pt=bt,gt={props:{signup:Boolean},components:{LoginForm:pt,SignUpForm:Ze},mounted:function(){this.$cookies.isKey("token")&&this.$router.push({name:"Rules"})}};n("e5a6");const mt=i()(gt,[["render",Te]]);var ht=mt,Ot={class:"chat"},jt={class:"top-navbar"},vt={class:"messages",id:"messages"};function wt(e,t,n,s,a,c){var o=Object(r["B"])("NavBar"),u=Object(r["B"])("DiscordMessage"),i=Object(r["B"])("DiscordMessages");return Object(r["t"])(),Object(r["f"])("div",Ot,[Object(r["g"])("div",jt,[Object(r["i"])(o,{header:"chat-room"})]),Object(r["g"])("div",vt,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(n.messagesRecv,(function(e){return Object(r["t"])(),Object(r["d"])(i,{key:e.message_id},{default:Object(r["I"])((function(){return[Object(r["i"])(u,{author:e.username,avatar:e.avatar_url},{default:Object(r["I"])((function(){return[Object(r["h"])(Object(r["D"])(e.message),1)]})),_:2},1032,["author","avatar"])]})),_:2},1024)})),128))])])}var yt=n("c699"),kt={props:{info:Object,messagesRecv:Array},components:{DiscordMessage:yt["a"],DiscordMessages:yt["b"],NavBar:Re},data:function(){return{channel_id:"1"}},watch:{messagesRecv:{handler:function(e){var t=document.getElementById("messages");e&&setTimeout((function(){t.scrollTop=t.scrollHeight}),0)},deep:!0}}};n("18ed");const _t=i()(kt,[["render",wt],["__scopeId","data-v-185e9dfc"]]);var Rt=_t,Bt=function(e){return Object(r["w"])("data-v-6462d3d1"),e=e(),Object(r["u"])(),e},Mt={class:"rules"},St={class:"rule"},xt={class:"logo"},It=Bt((function(){return Object(r["g"])("h1",null,"Welcome to our website",-1)})),Ut=Bt((function(){return Object(r["g"])("p",null," This is just a test Rules. The real Rule will be update right after i understand the game ",-1)}));function $t(e,t,n,s,a,c){var o=Object(r["B"])("Navbar"),u=Object(r["B"])("fa"),i=Object(r["B"])("InputBar");return Object(r["t"])(),Object(r["f"])("div",Mt,[Object(r["i"])(o,{header:"rules"}),Object(r["g"])("div",St,[Object(r["g"])("div",xt,[Object(r["i"])(u,{icon:["fas","hashtag"],size:"3x"})]),It,Ut]),Object(r["i"])(i)])}var Ct={components:{Navbar:Re,InputBar:Ne}};n("18b3");const Nt=i()(Ct,[["render",$t],["__scopeId","data-v-6462d3d1"]]);var Jt=Nt,Gt=[{path:"/",name:"MainSite",component:ze,children:[{path:"rooms/lobby",name:"Chat",component:Rt},{path:"rooms/rules",name:"Rules",component:Jt}]},{path:"/login",name:"LogIn",component:ht,props:{signup:!1}},{path:"/signup",name:"SignUp",component:ht,props:{signup:!0}},{path:"/:pathMatch(.*)*",redirect:"/rooms/rules"}],Dt=Object(f["a"])({history:Object(f["b"])("/werewolf-web-frontend/"),routes:Gt}),Lt=Dt,qt=n("ecee"),Pt=n("c074"),zt=n("ad3d"),At=n("df85"),Tt=n("a20e"),Kt=n.n(Tt),Ft=(n("2903"),n("ed18")),Vt=n.n(Ft);Vt.a.config();var Et=je.getCookie("token");qt["c"].add(Pt["a"]),Object(r["c"])(d).use(Lt).use(s["a"]).use(At["a"]).use(yt["c"]).use(Kt.a,"wss://werewolf-web-services.herokuapp.com/ws?token=".concat(Et),{reconnection:!0,reconnectionAttempts:100,reconnectionDelay:300,connectManually:!0}).component("fa",zt["a"]).mount("#app")},"5aba":function(e,t,n){},"5f83":function(e,t,n){"use strict";n("223e")},"65dc":function(e,t,n){"use strict";n("a90c")},"6dd6":function(e,t,n){"use strict";n("a8b0")},9085:function(e,t,n){"use strict";n("9aba")},"9aba":function(e,t,n){},a1aa:function(e,t,n){"use strict";n("08e0")},a8b0:function(e,t,n){},a90c:function(e,t,n){},cb7d:function(e,t,n){},e17d:function(e,t,n){},e5a6:function(e,t,n){"use strict";n("4cf8")},f18a:function(e,t,n){"use strict";n("5aba")}});
//# sourceMappingURL=app.721ce76c.js.map
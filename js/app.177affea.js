(function(e){function n(n){for(var s,c,o=n[0],i=n[1],u=n[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],s=!0,o=1;o<t.length;o++){var i=t[o];0!==r[i]&&(s=!1)}s&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var s={},r={app:0},a=[];function c(n){if(s[n])return s[n].exports;var t=s[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=s,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)c.d(t,s,function(n){return e[n]}.bind(null,s));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/werewolf-web-frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var l=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"08a6":function(e,n,t){"use strict";t("7545")},"152a":function(e,n,t){},"223e":function(e,n,t){},"4d5c":function(e,n,t){"use strict";t("152a")},5454:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("7a23"),r=t("2f62"),a={class:"container"};function c(e,n,t,r,c,o){var i=Object(s["C"])("router-view");return Object(s["u"])(),Object(s["f"])("div",a,[Object(s["i"])(i)])}var o={data:function(){return{}},setup:function(){}},i=(t("5f83"),t("d959")),u=t.n(i);const l=u()(o,[["render",c]]);var d=l,f=t("6c02"),h=(t("07ac"),{class:"main-site"}),b={class:"replace-area"};function p(e,n,t,r,a,c){var o=Object(s["C"])("SideBar"),i=Object(s["C"])("router-view"),u=Object(s["C"])("Member");return Object(s["u"])(),Object(s["f"])("div",h,[Object(s["i"])(o,{info:a.info,channels:c.channels},null,8,["info","channels"]),Object(s["g"])("div",b,[Object(s["i"])(i,{per:a.info.per,messages:a.messages[a.channel_id]||[],hasMore:a.hasMore[a.channel_id]||{},onLoadMore:c.onLoadMore,onScroll:c.onScroll,emitChannelId:c.getChannelId,users:a.users,onSendMsg:c.onSendMsg},null,8,["per","messages","hasMore","onLoadMore","onScroll","emitChannelId","users","onSendMsg"])]),Object(s["i"])(u,{online:Object.values(a.online),offline:Object.values(a.offline)},null,8,["online","offline"])])}var g=t("ade3"),m=t("2909"),O=t("5530"),j=(t("b0c0"),t("99af"),t("159b"),t("4de4"),t("d81d"),t("caad"),t("2532"),t("ac1f"),t("1276"),t("4e82"),t("b64b"),function(e){return Object(s["x"])("data-v-f8e15494"),e=e(),Object(s["v"])(),e}),v={class:"sidebar"},_={class:"title"},y=j((function(){return Object(s["g"])("p",null,"List of channels",-1)})),w={class:"backBtn"},M={class:"channels"},k={class:"category"},C={class:"expand"},S={class:"drop-down"},R=j((function(){return Object(s["g"])("p",{class:"category-name"},"Chat Room",-1)})),I={class:"hashtag"},$=j((function(){return Object(s["g"])("p",null,"Rules",-1)})),x={class:"channel"},U={key:0,class:"has-new"},E={class:"hashtag"},G=j((function(){return Object(s["g"])("p",null,"Lobby",-1)})),L={class:"category"},B={class:"expand"},J={class:"drop-down"},T=j((function(){return Object(s["g"])("p",{class:"category-name"},"Game Room",-1)})),N={class:"channel_list"},P={key:0,class:"has-new"},A={class:"category-list"},H={class:"hashtag"},D={class:"info"},F={class:"img-container"},q=["src"],K=j((function(){return Object(s["g"])("div",{class:"status-circle"},null,-1)})),z={class:"user-info"},V={class:"username"},W={class:"win-lose"},Y={class:"setting"};function Q(e,n,t,r,a,c){var o=Object(s["C"])("fa"),i=Object(s["C"])("router-link");return Object(s["u"])(),Object(s["f"])("div",v,[Object(s["g"])("div",_,[y,Object(s["g"])("button",w,[Object(s["i"])(o,{icon:["fas","times"]})])]),Object(s["g"])("div",M,[Object(s["g"])("div",k,[Object(s["g"])("div",null,[Object(s["g"])("button",C,[Object(s["g"])("div",S,[Object(s["i"])(o,{icon:["fas","chevron-down"]})]),R])]),Object(s["g"])("div",null,[Object(s["i"])(i,{to:{name:"Chat",params:{name:"rules"}}},{default:Object(s["J"])((function(){return[Object(s["g"])("button",{class:"category-list",onClick:n[0]||(n[0]=function(){return e.active&&e.active.apply(e,arguments)})},[Object(s["g"])("div",I,[Object(s["i"])(o,{icon:["fas","hashtag"]})]),$])]})),_:1})]),Object(s["g"])("div",x,[a.has_new_msg["1"]?(Object(s["u"])(),Object(s["f"])("div",U)):Object(s["e"])("",!0),Object(s["i"])(i,{to:{name:"Chat",params:{name:"lobby"}}},{default:Object(s["J"])((function(){return[Object(s["g"])("button",{class:"category-list",onClick:n[1]||(n[1]=function(){return e.active&&e.active.apply(e,arguments)})},[Object(s["g"])("div",E,[Object(s["i"])(o,{icon:["fas","hashtag"]})]),G])]})),_:1})])]),Object(s["g"])("div",L,[Object(s["g"])("div",null,[Object(s["g"])("button",B,[Object(s["g"])("div",J,[Object(s["i"])(o,{icon:["fas","chevron-down"]})]),T])]),Object(s["g"])("div",N,[(Object(s["u"])(!0),Object(s["f"])(s["a"],null,Object(s["A"])(Object.keys(t.channels).filter((function(e){return!["0","1"].includes(e)})).sort(),(function(e){return Object(s["u"])(),Object(s["f"])("div",{key:e,class:"channel"},[a.has_new_msg[e]?(Object(s["u"])(),Object(s["f"])("div",P)):Object(s["e"])("",!0),Object(s["i"])(i,{to:{name:"Game Room",params:{id:e}}},{default:Object(s["J"])((function(){return[Object(s["g"])("button",A,[Object(s["g"])("div",H,[Object(s["i"])(o,{icon:["fas","hashtag"]})]),Object(s["g"])("p",null,Object(s["E"])(t.channels[e].channel_name),1)])]})),_:2},1032,["to"])])})),128))])])]),Object(s["g"])("div",D,[Object(s["g"])("div",F,[Object(s["g"])("img",{src:t.info.avatar_url,alt:""},null,8,q),K]),Object(s["g"])("div",z,[Object(s["g"])("p",V,Object(s["E"])(t.info.username),1),Object(s["g"])("p",W,"#"+Object(s["E"])(t.info.win)+"/#"+Object(s["E"])(t.info.lose),1)]),Object(s["g"])("div",Y,[Object(s["i"])(o,{icon:["fas","cog"],class:"cog-btn",onClick:c.logout},null,8,["onClick"])])])])}var X={data:function(){return{has_new_msg:{}}},props:{info:Object,channels:Object},methods:{logout:function(){this.$cookies.remove("token"),this.$router.push({name:"LogIn"}),this.$disconnect()}},watch:{channels:function(e,n){var t=this.$route.params.id||{lobby:"1",rules:"0"}[this.$route.params.name];for(var s in e)if("0"!=s){var r=e[s].last_msg,a=(n[s]||{}).last_msg;r!=a&&s!=t&&(this.has_new_msg[s]=!0)}},$route:function(e){var n=e.params;if(n.id)this.has_new_msg[n.id]=!1;else if(n.name){var t={lobby:"1",rules:"0"};this.has_new_msg[t[n.name]]=!1}}}};t("08a6");const Z=u()(X,[["render",Q],["__scopeId","data-v-f8e15494"]]);var ee=Z,ne=function(e){return Object(s["x"])("data-v-d1be7db4"),e=e(),Object(s["v"])(),e},te={class:"member"},se={class:"users"},re=ne((function(){return Object(s["g"])("br",null,null,-1)}));function ae(e,n,t,r,a,c){var o=Object(s["C"])("Navbar"),i=Object(s["C"])("State");return Object(s["u"])(),Object(s["f"])("div",te,[Object(s["i"])(o,{header:"Members"}),Object(s["g"])("div",se,[Object(s["i"])(i,{title:a.online_state,users:t.online},null,8,["title","users"]),re,Object(s["i"])(i,{title:a.offline_state,users:t.offline},null,8,["title","users"])])])}var ce={class:"navbar"},oe={class:"hashtag"};function ie(e,n,t,r,a,c){var o=Object(s["C"])("fa");return Object(s["u"])(),Object(s["f"])("div",ce,[Object(s["g"])("div",oe,[Object(s["i"])(o,{icon:["fas","hashtag"]})]),Object(s["g"])("p",null,Object(s["E"])(t.header),1)])}var ue={props:{header:String}};t("d48d");const le=u()(ue,[["render",ie]]);var de=le,fe={class:"title"},he=["onClick"],be={class:"img-container"},pe=["src"],ge={key:0,class:"status-circle-online"},me={key:1,class:"status-circle-offline"},Oe={class:"user-info"},je={class:"username"};function ve(e,n,t,r,a,c){var o=Object(s["C"])("Profile");return Object(s["u"])(),Object(s["f"])(s["a"],null,[Object(s["g"])("div",fe,Object(s["E"])(t.title)+" ー "+Object(s["E"])(t.users.length),1),(Object(s["u"])(!0),Object(s["f"])(s["a"],null,Object(s["A"])(t.users,(function(e){return Object(s["u"])(),Object(s["f"])("div",{class:"user",key:e.username,onClick:function(n){return c.showInfo(e.id)}},[Object(s["g"])("div",be,[Object(s["g"])("img",{src:e.avatar_url,alt:""},null,8,pe),e.is_online?(Object(s["u"])(),Object(s["f"])("div",ge)):(Object(s["u"])(),Object(s["f"])("div",me))]),Object(s["g"])("div",Oe,[Object(s["g"])("p",je,Object(s["E"])(e.username),1)]),Object(s["i"])(o,{userInfo:e||{},id:e.id,class:"profile"},null,8,["userInfo","id"])],8,he)})),128))],64)}var _e=function(e){return Object(s["x"])("data-v-a2372622"),e=e(),Object(s["v"])(),e},ye={class:"profile"},we=_e((function(){return Object(s["g"])("div",{class:"banner"},null,-1)})),Me={class:"img-container"},ke=["src"],Ce={key:0,class:"status-circle-online"},Se={key:1,class:"status-circle-offline"},Re={class:"name-and-id"},Ie={class:"name"},$e={class:"id"},xe={class:"win-lose"},Ue={class:"win"},Ee=_e((function(){return Object(s["g"])("span",{style:{color:"white"}},"Win: ",-1)})),Ge={class:"lose"},Le=_e((function(){return Object(s["g"])("span",{style:{color:"white"}},"Lose: ",-1)}));function Be(e,n,t,r,a,c){return Object(s["u"])(),Object(s["f"])("div",ye,[we,Object(s["g"])("div",Me,[Object(s["g"])("img",{src:t.userInfo.avatar_url,alt:""},null,8,ke),t.userInfo.is_online?(Object(s["u"])(),Object(s["f"])("div",Ce)):(Object(s["u"])(),Object(s["f"])("div",Se))]),Object(s["g"])("div",Re,[Object(s["g"])("div",Ie,[Object(s["g"])("p",null,Object(s["E"])(t.userInfo.username),1)]),Object(s["g"])("div",$e,[Object(s["g"])("p",null,"<@"+Object(s["E"])(t.userInfo.id)+">",1)])]),Object(s["g"])("div",xe,[Object(s["g"])("div",Ue,[Object(s["g"])("p",null,[Ee,Object(s["h"])(Object(s["E"])(t.userInfo.win),1)])]),Object(s["g"])("div",Ge,[Object(s["g"])("p",null,[Le,Object(s["h"])(Object(s["E"])(t.userInfo.lose),1)])])])])}var Je={props:{userInfo:Object}};t("8169");const Te=u()(Je,[["render",Be],["__scopeId","data-v-a2372622"]]);var Ne=Te,Pe={components:{Profile:Ne},props:{title:String,users:Array},data:function(){return{tmp:{}}},methods:{showInfo:function(e){for(var n=document.getElementsByClassName("profile"),t=0;t<n.length;++t)"block"==n[t].style.display&&n[t].id!=e&&(n[t].style.display="none");var s=document.getElementById(e);"none"==s.style.display||""==s.style.display?s.style.display="block":s.style.display="none"}}};t("777f");const Ae=u()(Pe,[["render",ve],["__scopeId","data-v-54581fd1"]]);var He=Ae,De={props:{online:Array,offline:Array},data:function(){return{online_state:"online",offline_state:"offline"}},components:{Navbar:de,State:He}};t("6c12");const Fe=u()(De,[["render",ae],["__scopeId","data-v-d1be7db4"]]);var qe=Fe,Ke=t("1da1"),ze=(t("96cf"),t("d3b7"),"https://werewolf-web-services.herokuapp.com");function Ve(){return We.apply(this,arguments)}function We(){return We=Object(Ke["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://aws.random.cat/meow").then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),We.apply(this,arguments)}function Ye(){return Qe.apply(this,arguments)}function Qe(){return Qe=Object(Ke["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breeds/image/random").then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),Qe.apply(this,arguments)}function Xe(){return Ze.apply(this,arguments)}function Ze(){return Ze=Object(Ke["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(Math.random()<.5)){e.next=4;break}return e.abrupt("return",Ve().then((function(e){return e.file})));case 4:return e.abrupt("return",Ye().then((function(e){return e.message})));case 5:case"end":return e.stop()}}),e)}))),Ze.apply(this,arguments)}function en(e,n){return nn.apply(this,arguments)}function nn(){return nn=Object(Ke["a"])(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ze,"/users/login"),{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,passwd:t})}).then((function(e){return e.json()})).then((function(e){var n=e.message;if("ok"==n)return e.data.token;throw n}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),nn.apply(this,arguments)}function tn(e,n,t){return sn.apply(this,arguments)}function sn(){return sn=Object(Ke["a"])(regeneratorRuntime.mark((function e(n,t,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ze,"/users"),{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,passwd:t,avatar_url:s})}).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),sn.apply(this,arguments)}function rn(e,n){return an.apply(this,arguments)}function an(){return an=Object(Ke["a"])(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Xe().then((function(e){return tn(n,t,e)})).then((function(e){if("ok"==e.message)return e.data.token;throw e.message})));case 1:case"end":return e.stop()}}),e)}))),an.apply(this,arguments)}function cn(e){var n="; ".concat(document.cookie),t=n.split("; ".concat(e,"="));if(2===t.length)return t.pop().split(";").shift()}function on(){return un.apply(this,arguments)}function un(){return un=Object(Ke["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=cn("token"),e.next=3,fetch("".concat(ze,"/users"),{headers:{Authorization:n}}).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),un.apply(this,arguments)}function ln(){return dn.apply(this,arguments)}function dn(){return dn=Object(Ke["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=cn("token"),e.next=3,fetch("".concat(ze,"/users/info"),{headers:{Authorization:n}}).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),dn.apply(this,arguments)}function fn(e,n){for(var t=0;t<n.length;++t)if(n[t].id==e.id)return t;return-1}var hn={login:en,signup:rn,getAllUser:on,getCookie:cn,getInfo:ln,containsObject:fn};function bn(e,n,t){var s=e.filter((function(e){return e.id==t.user_id}));return n.username=s[0].username,n.avatar_url=s[0].avatar_url,n.message=t.message.split(/(<[@#]\d+>)/g),n.channel_id=t.channel_id,n.message_id=t.message_id,n}function pn(e,n,t){for(var s=[],r=function(r){var a=e.filter((function(e){return e.id==t[r].user_id}));n.username=a[0].username,n.avatar_url=a[0].avatar_url,n.message=t[r].message.split(/(<[@#]\d+>)/g),n.message_id=t[r].message_id,s.unshift(Object(O["a"])({},n))},a=0;a<t.length;++a)r(a);return s}var gn={receiveMessage:bn,getAllMessages:pn},mn={components:{SideBar:ee,Member:qe},data:function(){return{token:hn.getCookie("token"),ws_url:"wss://werewolf-web-services.herokuapp.com",info:{per:{},username:null,avatar_url:null,id:null,win:0,lose:0,is_online:!0},users:[],messages:{},hasMore:{},channel_id:"1",message:"",online:{},offline:{},position:0}},created:function(){var e=this;console.log("Main Created"),this.$cookies.isKey("token")||this.$router.push({name:"LogIn"}),"MainSite"==this.$route.name&&this.$router.push({name:"Chat",params:{name:"rules"}}),this.token&&(console.log("Connect"),this.$connect("".concat(this.ws_url,"/ws?token=").concat(this.token)),console.log("Connected"),this.$options.sockets.onopen=function(){console.log("On open"),e.$socket.send(JSON.stringify({GetUserInfo:{}})),e.$socket.send(JSON.stringify("GetUsers")),e.$socket.send(JSON.stringify({GetPers:{}}))}),this.$options.sockets.onmessage=function(n){var t={message:e.message,username:e.info.username,avatar_url:e.info.avatar_url,message_id:""},s=JSON.parse(n.data);if(s.GetUserInfoRes)e.info=Object(O["a"])(Object(O["a"])({},e.info),s.GetUserInfoRes);else if(s.GetUsersRes)e.users=s.GetUsersRes,e.users.filter((function(e){return e.is_online})).forEach((function(n){e.online[n.id]=n})),e.users.filter((function(e){return!e.is_online})).forEach((function(n){e.offline[n.id]=n}));else if(s.UserOnline)s.UserOnline.is_online=!0,e.online[s.UserOnline.id]=s.UserOnline,delete e.offline[s.UserOnline.id],0===e.users.filter((function(e){return e.id===s.UserOnline.id})).length&&(e.users=[].concat(Object(m["a"])(e.users),[s.UserOnline]));else if(s.UserOffline)s.UserOffline.is_online=!1,e.offline[s.UserOffline.id]=s.UserOffline,delete e.online[s.UserOffline.id];else if(s.GetMsgRes){var r=!0;s.GetMsgRes.messages.length<20&&(console.log("no more:",s.GetMsgRes.channel_id),r=!1),e.hasMore=Object.assign({},e.hasMore,Object(g["a"])({},s.GetMsgRes.channel_id,Object.assign({},e.hasMore[s.GetMsgRes.channel_id],{hasMore:r,lastFetchMoreDone:!0})));var a=e.messages[s.GetMsgRes.channel_id]||[],c=a.map((function(e){return e.message_id})),o=gn.getAllMessages(e.users,t,s.GetMsgRes.messages).filter((function(e){return!c.includes(e.message_id)}));o=[].concat(Object(m["a"])(o),Object(m["a"])(a)),e.messages=Object.assign({},e.messages,Object(g["a"])({},s.GetMsgRes.channel_id,o))}else if(s.GetPersRes){for(var i in e.info.per=s.GetPersRes,e.info.per)e.messages[i]||e.$socket.send(JSON.stringify({GetMsg:{channel_id:i,offset:0,limit:20}})),e.hasMore=Object.assign({},e.hasMore,Object(g["a"])({},i,Object.assign({},e.hasMore[i],{hasMore:!0,lastFetchMoreDone:!0})));for(var u in e.messages)if(!s.GetPersRes[u]){var l=Object(O["a"])({},e.messages),d=Object(O["a"])({},e.hasMore);delete l[u],delete d[u],e.messages=l,e.hasMore=d}}else if(s.SendRes)t.message_id=s.SendRes.message_id,e.messages=Object.assign({},e.messages,Object(g["a"])({},s.SendRes.channel_id,[].concat(Object(m["a"])(e.messages[s.SendRes.channel_id]||[]),[t])));else if(s.BroadCastMsg){var f=e.messages[s.BroadCastMsg.channel_id]||[];f=f.filter((function(e){return e.message_id!=s.BroadCastMsg.message_id}));var h=[].concat(Object(m["a"])(f),[gn.receiveMessage(e.users,t,s.BroadCastMsg)]);e.messages=Object.assign({},e.messages,Object(g["a"])({},s.BroadCastMsg.channel_id,h))}else s.Error&&null==e.info.username&&(e.$cookies.remove("token"),e.$router.push({name:"LogIn"}),e.$disconnect())}},methods:{onSendMsg:function(e){this.message=e.split(/(<[@#]\d+>)/g)},getChannelId:function(e){this.channel_id=e},onLoadMore:function(e,n){this.$socket.send(JSON.stringify({GetMsg:{channel_id:this.channel_id,offset:n,limit:20}})),this.hasMore=Object.assign({},this.hasMore,Object(g["a"])({},e,Object.assign({},this.hasMore[e],{lastFetchMoreDone:!1})))},onScroll:function(e,n,t){this.hasMore=Object.assign({},this.hasMore,Object(g["a"])({},e,Object.assign({},this.hasMore[e],{scrollTop:n,scrollHeight:t})))}},watch:{$route:function(e){"MainSite"==e.name&&this.$router.push({name:"Chat",params:{name:"rules"}})}},computed:{channels:function(){var e={};for(var n in this.info.per){var t=this.messages[n]||[],s=t[t.length-1];e[n]=e[n]||{},e[n].last_msg=s?s.message_id:void 0,e[n].channel_name=this.info.per[n].channel_name}return e}}};t("b14d");const On=u()(mn,[["render",p]]);var jn=On,vn={class:"login-site"};function _n(e,n,t,r,a,c){var o=Object(s["C"])("SignUpForm"),i=Object(s["C"])("LoginForm");return Object(s["u"])(),Object(s["f"])("div",vn,[t.signup?(Object(s["u"])(),Object(s["d"])(o,{key:0})):Object(s["e"])("",!0),t.signup?Object(s["e"])("",!0):(Object(s["u"])(),Object(s["d"])(i,{key:1}))])}var yn=function(e){return Object(s["x"])("data-v-5db3a75d"),e=e(),Object(s["v"])(),e},wn={class:"login-form"},Mn=yn((function(){return Object(s["g"])("label",{for:"username",class:"required"},"User Name",-1)})),kn=yn((function(){return Object(s["g"])("label",{for:"passwd",class:"required"},"Password",-1)})),Cn={key:0,class:"alert"},Sn=yn((function(){return Object(s["g"])("div",{class:"button-group"},[Object(s["g"])("button",{class:"signup-btn",type:"submit"},"Sign Up")],-1)}));function Rn(e,n,t,r,a,c){return Object(s["u"])(),Object(s["f"])("div",wn,[Object(s["g"])("form",{onSubmit:n[4]||(n[4]=Object(s["L"])((function(){return c.signup&&c.signup.apply(c,arguments)}),["prevent"]))},[Mn,Object(s["K"])(Object(s["g"])("input",{type:"text",name:"username",id:"username","onUpdate:modelValue":n[0]||(n[0]=function(e){return a.username=e}),onChange:n[1]||(n[1]=function(){return c.remove&&c.remove.apply(c,arguments)}),required:""},null,544),[[s["H"],a.username]]),kn,Object(s["K"])(Object(s["g"])("input",{type:"password",name:"passwd",id:"passwd","onUpdate:modelValue":n[2]||(n[2]=function(e){return a.password=e}),onChange:n[3]||(n[3]=function(){return c.remove&&c.remove.apply(c,arguments)}),required:""},null,544),[[s["H"],a.password]]),""!==a.message?(Object(s["u"])(),Object(s["f"])("div",Cn,Object(s["E"])(a.message),1)):Object(s["e"])("",!0),Sn],32)])}var In={data:function(){return{username:"",password:"",message:""}},methods:{signup:function(){var e=this;hn.signup(this.username,this.password).then((function(n){n&&(e.$cookies.set("token",n,432e3),e.$router.push({name:"Chat",params:{name:"rules"}}),e.message="")})).catch((function(n){e.message=n}))},remove:function(){this.message=""}}};t("fdc7");const $n=u()(In,[["render",Rn],["__scopeId","data-v-5db3a75d"]]);var xn=$n,Un=function(e){return Object(s["x"])("data-v-58018698"),e=e(),Object(s["v"])(),e},En={class:"login-form"},Gn=Un((function(){return Object(s["g"])("h1",null,"Welcome Back!!",-1)})),Ln=Un((function(){return Object(s["g"])("h4",null,"We're so excited to see you again!",-1)})),Bn=Un((function(){return Object(s["g"])("label",{for:"username",class:"required"},"User Name",-1)})),Jn=Un((function(){return Object(s["g"])("label",{for:"passwd",class:"required"},"Password",-1)})),Tn={key:0,class:"alert"},Nn={class:"button-group"},Pn=Un((function(){return Object(s["g"])("button",{type:"submit",class:"login-btn"}," Login ",-1)})),An=Un((function(){return Object(s["g"])("div",{class:"separator"},"OR",-1)})),Hn=Un((function(){return Object(s["g"])("button",{type:"button",class:"signup-btn"},"Sign Up",-1)}));function Dn(e,n,t,r,a,c){var o=Object(s["C"])("router-link");return Object(s["u"])(),Object(s["f"])("div",En,[Object(s["g"])("form",{onSubmit:n[4]||(n[4]=Object(s["L"])((function(){return c.authorize&&c.authorize.apply(c,arguments)}),["prevent"]))},[Gn,Ln,Bn,Object(s["K"])(Object(s["g"])("input",{type:"text",name:"username",id:"username","onUpdate:modelValue":n[0]||(n[0]=function(e){return a.username=e}),onChange:n[1]||(n[1]=function(){return c.remove&&c.remove.apply(c,arguments)}),required:""},null,544),[[s["H"],a.username]]),Jn,Object(s["K"])(Object(s["g"])("input",{type:"password",name:"passwd",id:"passwd","onUpdate:modelValue":n[2]||(n[2]=function(e){return a.passwd=e}),onChange:n[3]||(n[3]=function(){return c.remove&&c.remove.apply(c,arguments)}),required:""},null,544),[[s["H"],a.passwd]]),""!==a.message?(Object(s["u"])(),Object(s["f"])("div",Tn,Object(s["E"])(a.message),1)):Object(s["e"])("",!0),Object(s["g"])("div",Nn,[Pn,An,Object(s["i"])(o,{to:{name:"SignUp"}},{default:Object(s["J"])((function(){return[Hn]})),_:1})])],32)])}var Fn={data:function(){return{username:"",passwd:"",message:""}},methods:{authorize:function(){var e=this;hn.login(this.username,this.passwd).then((function(n){n&&(e.$cookies.set("token",n,432e3),e.$router.push({name:"Chat",params:{name:"rules"}}),e.message="")})).catch((function(n){e.message=n}))},remove:function(){this.message=""}}};t("4d5c");const qn=u()(Fn,[["render",Dn],["__scopeId","data-v-58018698"]]);var Kn=qn,zn={props:{signup:Boolean},components:{LoginForm:Kn,SignUpForm:xn},mounted:function(){this.$cookies.isKey("token")&&this.$router.push({name:"Chat",params:{name:"rules"}})}};t("ab9b");const Vn=u()(zn,[["render",_n]]);var Wn=Vn,Yn=(t("466d"),{class:"chat"}),Qn={class:"top-navbar"},Xn={key:2};function Zn(e,n,t,r,a,c){var o=Object(s["C"])("NavBar"),i=Object(s["C"])("DiscordMention"),u=Object(s["C"])("DiscordMessage"),l=Object(s["C"])("DiscordMessages"),d=Object(s["C"])("InputBar");return Object(s["u"])(),Object(s["f"])(s["a"],null,[Object(s["g"])("div",Yn,[Object(s["g"])("div",Qn,[Object(s["i"])(o,{header:"chat-room"})]),Object(s["g"])("div",{class:"messages",id:"messages",onScrollPassive:n[0]||(n[0]=function(){return c.loadMoreMess&&c.loadMoreMess.apply(c,arguments)})},[(Object(s["u"])(!0),Object(s["f"])(s["a"],null,Object(s["A"])(t.messages,(function(e){return Object(s["u"])(),Object(s["d"])(l,{key:e.message_id},{default:Object(s["J"])((function(){return[Object(s["i"])(u,{author:e.username,avatar:e.avatar_url},{default:Object(s["J"])((function(){return[(Object(s["u"])(!0),Object(s["f"])(s["a"],null,Object(s["A"])(e.message,(function(e,n){return Object(s["u"])(),Object(s["f"])(s["a"],{key:n},[null!=e.match(a.r_user)?(Object(s["u"])(),Object(s["d"])(i,{key:0,highlight:!0},{default:Object(s["J"])((function(){return[Object(s["h"])(Object(s["E"])(function(){var n=e.match(a.r_user)[1],s=t.users.filter((function(e){return e.id==n}))[0];return s?s.username:"deleted user"}()),1)]})),_:2},1024)):null!=e.match(a.r_channel)?(Object(s["u"])(),Object(s["d"])(i,{key:1,type:"channel",highlight:!0,onClick:function(n){return c.to_channel(e.match(a.r_channel))}},{default:Object(s["J"])((function(){return[Object(s["h"])(Object(s["E"])(function(){var n=e.match(a.r_channel)[1],s=t.per[n];return s?s.channel_name:"personal channel"}()),1)]})),_:2},1032,["onClick"])):(Object(s["u"])(),Object(s["f"])("span",Xn,Object(s["E"])(e),1))],64)})),128))]})),_:2},1032,["author","avatar"])]})),_:2},1024)})),128))],32)]),Object(s["i"])(d,{emitSend:t.onSendMsg,per:t.per,channel_id:c.channel_id},null,8,["emitSend","per","channel_id"])],64)}var et=t("c699"),nt={class:"input"},tt={class:"chat-area"},st=["placeholder"];function rt(e,n,t,r,a,c){return Object(s["u"])(),Object(s["f"])("div",nt,[Object(s["g"])("div",tt,[Object(s["g"])("div",{class:Object(s["o"])(1==c.allow_check?"chat-input":"chat-input disable-cursor block-blinking"),id:"chat-input",contenteditable:"true",onKeydown:n[0]||(n[0]=function(){return c.sendMessage&&c.sendMessage.apply(c,arguments)}),placeholder:c.allow_check?"Message #"+c.channel_name:"You don't have permission to chat in this channel"},null,42,st)])])}var at={props:{emitSend:Function,per:Object,channel_id:String},data:function(){return{message:""}},methods:{sendMessage:function(e){if(this.allow_check){if("Enter"==e.key&&!e.shiftKey){e.preventDefault();var n=document.getElementById("chat-input"),t=n.innerText;t&&this.$socket.send(JSON.stringify({SendReq:{channel_id:this.channel_id,message:t}})),this.emitSend(t),n.innerHTML=""}}else e.preventDefault()}},computed:{allow_check:function(){return!!this.per&&(!!this.per[this.channel_id]&&this.per[this.channel_id].sendable)},channel_name:function(){return this.per&&this.per[this.channel_id]?this.per[this.channel_id].channel_name:"personal channel"}}};t("f71b");const ct=u()(at,[["render",rt],["__scopeId","data-v-fe9e24c8"]]);var ot=ct,it={components:{DiscordMessage:et["b"],DiscordMessages:et["c"],DiscordMention:et["a"],NavBar:de,InputBar:ot},props:{per:Object,messages:Array,hasMore:Object,onLoadMore:Function,onScroll:Function,emitChannelId:Function,users:Object,onSendMsg:Function},data:function(){var e={rules:"0",lobby:"1",0:"rules",1:"lobby"};return{cids:e,firstLoad:[],r_user:/<@(\d+)>/,r_channel:/<#(\d+)>/}},methods:{loadMoreMess:function(){var e=this.messages.length,n=document.getElementById("messages");this.hasMore.hasMore&&this.hasMore.lastFetchMoreDone&&n.scrollTop<=100?(console.log("get more",this.channel_id),this.onLoadMore(this.channel_id,e)):n.scrollTop<10&&(n.scrollTop=10),this.onScroll(this.channel_id,n.scrollTop,n.scrollHeight)},to_channel:function(e){var n=this,t=Object.keys(this.per).filter((function(e){return"personal channel"===n.per[e].channel_name}))[0],s=e[1]||"1",r=this.per[s]?s:t||"1",a="1"!==r&&"0"!=r?{name:"Game Room",params:{id:r}}:{name:"Chat",params:{name:this.cids[r]}};this.$router.push(a)}},mounted:function(){console.log("Chat Mounted"),this.emitChannelId(this.channel_id)},watch:{per:{handler:function(e){e[this.channel_id]||this.$router.push({name:"Chat",params:{name:"lobby"}})},deep:!0},messages:{handler:function(e,n){var t=this,s=document.getElementById("messages");setTimeout((function(){var r=void 0!==t.hasMore.scrollTop?t.hasMore.scrollHeight-t.hasMore.scrollTop-s.clientHeight:s.scrollHeight-s.scrollTop-s.clientHeight;0==e.length||t.firstLoad[t.channel_id]?r<=200?s.scrollTop=s.scrollHeight:e[e.length-1]!=n[n.length-1]&&(s.scrollTop=t.hasMore.scrollTop):(s.scrollTop=s.scrollHeight,t.firstLoad[t.channel_id]=!0),t.onScroll(t.channel_id,s.scrollTop,s.scrollHeight)}),0)},deep:!0},$route:function(e){var n=this.cids[e.params.name]||e.params.id||"0";this.emitChannelId(n)}},computed:{channel_id:function(){return this.cids[this.$route.params.name]||this.$route.params.id||"0"}}};t("d5e0");const ut=u()(it,[["render",Zn],["__scopeId","data-v-3a7e6b60"]]);var lt=ut,dt=[{path:"/",name:"MainSite",component:jn,children:[{path:"rooms/:name",name:"Chat",component:lt},{path:"games/:id",name:"Game Room",component:lt}]},{path:"/login",name:"LogIn",component:Wn,props:{signup:!1}},{path:"/signup",name:"SignUp",component:Wn,props:{signup:!0}},{path:"/:pathMatch(.*)*",redirect:"/rooms/rules"}],ft=Object(f["a"])({history:Object(f["b"])("/werewolf-web-frontend/"),routes:dt}),ht=ft,bt=t("ecee"),pt=t("c074"),gt=t("ad3d"),mt=t("df85"),Ot=t("a20e"),jt=t.n(Ot),vt=(t("2903"),t("ed18")),_t=t.n(vt);_t.a.config();var yt=hn.getCookie("token");bt["c"].add(pt["a"]),Object(s["c"])(d).use(ht).use(r["a"]).use(mt["a"]).use(et["d"]).use(jt.a,"wss://werewolf-web-services.herokuapp.com/ws?token=".concat(yt),{reconnection:!0,reconnectionAttempts:100,reconnectionDelay:300,connectManually:!0}).component("fa",gt["a"]).mount("#app")},"5f83":function(e,n,t){"use strict";t("223e")},"656b":function(e,n,t){},"65a1":function(e,n,t){},"6c12":function(e,n,t){"use strict";t("7135")},"6e79":function(e,n,t){},7135:function(e,n,t){},7545:function(e,n,t){},"777f":function(e,n,t){"use strict";t("65a1")},8169:function(e,n,t){"use strict";t("e416")},ab9b:function(e,n,t){"use strict";t("656b")},b14d:function(e,n,t){"use strict";t("b195")},b195:function(e,n,t){},cb1c:function(e,n,t){},d48d:function(e,n,t){"use strict";t("5454")},d5e0:function(e,n,t){"use strict";t("cb1c")},e199:function(e,n,t){},e416:function(e,n,t){},f71b:function(e,n,t){"use strict";t("e199")},fdc7:function(e,n,t){"use strict";t("6e79")}});
//# sourceMappingURL=app.177affea.js.map
(function(e){function t(t){for(var a,o,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)o=i[d],n[o]&&p.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("1356"),n=s.n(a);n.a},"03b4":function(e,t,s){"use strict";var a=s("3c15"),n=s.n(a);n.a},1:function(e,t){},1356:function(e,t,s){},1571:function(e,t,s){"use strict";var a=s("955c"),n=s.n(a);n.a},"3c15":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{attrs:{id:"app"}},[s("router-view",{attrs:{id:"main"}})],1)},r=[],o={name:"App",mounted(){},data(){return{}},methods:{}},i=o,c=(s("034f"),s("2877")),l=s("6544"),u=s.n(l),d=s("7496"),p=Object(c["a"])(i,n,r,!1,null,null,null),h=p.exports;u()(p,{VApp:d["a"]});var g=s("8c4f"),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("router-view")},v=[],f={name:"Home"},b=f,y=Object(c["a"])(b,m,v,!1,null,"34d844e4",null),w=y.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"my-container"},[s("div",{staticClass:"about-us",staticStyle:{"margin-top":"10%"}},[s("AboutUs",{staticStyle:{width:"85%",margin:"auto"}})],1),s("div",{staticClass:"chat-box-out"},[s("div",{staticClass:"chat-box-in"},[e._m(0),s("div",{ref:"container",staticClass:"chat-box",attrs:{id:"chat-box"}},[e._m(1),e.currentUserMessage?s("UserSide",{attrs:{"current-user-message":e.currentUserMessage}}):e._e(),e.watsonSide?s("WatsonSide",{attrs:{"watson-message":e.watsonReply}}):e._e(),e.showOptions?s("WatsonOption",{attrs:{"option-value":e.options},on:{"get-option-value":e.getOptionValue}}):e._e()],1),s("div",{staticClass:"chat-box-bottom"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.sendMessage()}}},[e.getDirection?e._e():s("v-text-field",{attrs:{color:"#00CC33",label:"",dark:e.nightMode,autocomplete:"off",autofocus:"",disabled:e.loader,loading:!e.getServiceReply,placeholder:"Type here..."},model:{value:e.getUserMessage,callback:function(t){e.getUserMessage=t},expression:"getUserMessage"}}),e.getDirection?s("v-text-field",{staticClass:"controls",attrs:{color:"#00CC33",dark:e.nightMode,autofocus:"",placeholder:"Type here...",id:"pac-input"},model:{value:e.getUserMessage,callback:function(t){e.getUserMessage=t},expression:"getUserMessage"}}):e._e()],1)])])]),s("div",{staticClass:"quick-reply"},[s("h5",{staticStyle:{"text-align":"center"}},[e._v("Quick Actions")]),s("hr",{staticStyle:{"border-color":"white"}}),s("br"),e._l(e.quickAction,function(t,a){return s("QuickAction",{key:a,attrs:{loader:e.loader,action:t,text:t},on:{"get-quick-reply":function(s){return e.getQuickReply(t)}}})})],2)])},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chat-box-top"},[s("h5",[s("i",{staticClass:"mdi mdi-checkbox-blank-circle",staticStyle:{color:"#00CC33","font-size":"15px",padding:"2px"}}),e._v("Bam Bam\n        ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chat-box-watson"},[s("i",{staticClass:"mdi mdi-dots-vertical"}),s("span",{staticClass:"watson"},[e._v("\n            Hello there, I'm Bam Bam. How can I help you today?\n          ")])])}],x=s("8055"),C=s.n(x);const M="AIzaSyBxH5D8qf-6ndzD_egFZhB5JrajB2LbkLI",S="gmapsCallback";let O,j,$=!!window.google;const E=new Promise((e,t)=>{O=e,j=t});function H(){if($)return E;$=!0,window[S]=()=>O(window.google);const e=document.createElement("script");return e.async=!0,e.defer=!0,e.src=`https://maps.googleapis.com/maps/api/js?key=${M}&libraries=places&callback=${S}`,e.onerror=j,document.querySelector("head").appendChild(e),E}var U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chat-box-user"},[s("span",{staticClass:"user"},[e._v(e._s(e.currentUserMessage))])])},B=[],A={data(){return{}},props:["currentUserMessage"]},R=A,V=(s("d7a52"),Object(c["a"])(R,U,B,!1,null,"6ee7ebe8",null)),T=V.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chat-box-watson"},[s("i",{staticClass:"mdi mdi-dots-vertical"}),s("span",{staticClass:"watson"},[e._v("\n      "+e._s(e.watsonMessage)+"\n    ")])])},W=[],q={data(){return{}},props:["watsonMessage"]},P=q,D=(s("862a"),Object(c["a"])(P,I,W,!1,null,"562adf94",null)),L=D.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:s("d505")}},[a("v-card-title",[e._v("We are here to help")])],1),a("v-card-text",{staticClass:"text--primary"},[a("div",[e._v("Bam Bam is a virtual assistant.")]),a("div",[e._v("It can help with several things. Hit the quick reply button.")])]),a("v-card-actions",[a("v-btn",{attrs:{color:"blue",text:""}},[a("i",{staticClass:"mdi mdi-facebook"}),e._v(" | Hit me up\n        ")])],1)],1)},J=[],N=s("8336"),F=s("b0af"),z=s("99d9"),G=s("adda"),Z={},K=Object(c["a"])(Z,Q,J,!1,null,null,null),X=K.exports;u()(K,{VBtn:N["a"],VCard:F["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VImg:G["a"]});var Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center ma-2 quick-reply-button"},[s("v-btn",{attrs:{dark:"",color:"#00CC33",disabled:e.loader},on:{click:e.getQuickReply}},[e._v(e._s(e.action))]),s("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n        "+e._s(e.text)+"\n        "),s("v-btn",{attrs:{color:"pink",text:""},on:{click:e.closeSnackBar}},[e._v("\n            Close\n        ")])],1)],1)},ee=[],te={data(){return{snackbar:!1}},props:["action","text","loader"],methods:{getQuickReply(){this.snackbar=!1,this.snackbar=!0,setTimeout(function(){this.snackbar=!1},2e3),this.$emit("get-quick-reply")},closeSnackBar(){this.snackbar=!1}}},se=te,ae=(s("03b4"),s("2db4")),ne=Object(c["a"])(se,Y,ee,!1,null,null,null),re=ne.exports;u()(ne,{VBtn:N["a"],VSnackbar:ae["a"]});var oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"options-container"},[s("div",{staticClass:"chat-option-button-outer"},[s("div",{staticClass:"chat-option-button"},e._l(e.optionsArray,function(t,a){return s("v-btn",{key:a,staticStyle:{"margin-right":"5px"},attrs:{outlined:"",rounded:"",elevation:"10",dark:"",color:"#00CC33"},on:{click:function(s){return e.getOptionValue(t.label)}}},[e._v(e._s(t.label))])}),1)])])},ie=[],ce={data(){return{optionsArray:this.optionValue}},props:{optionValue:Array},methods:{getOptionValue(e){this.$emit("get-option-value",e)}}},le=ce,ue=(s("d336"),Object(c["a"])(le,oe,ie,!1,null,"0fcc1d55",null)),de=ue.exports;u()(ue,{VBtn:N["a"]});var pe={name:"WatsonService",async mounted(){this.getWatsonService(),this.initMap()},components:{UserSide:T,WatsonSide:L,AboutUs:X,QuickAction:re,WatsonOption:de},data(){return{userMessage:[],getUserMessage:"",currentUserMessage:"",getServiceReply:"#8c9eff",loader:!1,getDirection:!1,watsonReply:"yeah I'm here",watsonSide:"",socketObj:{},userConversation:[],options:[],showOptions:!1,nightMode:!0,quickAction:["Check school fees","Get directions","Admissions","Post UTME","FAQs"]}},methods:{async initMap(){const e=await H();console.log(e);const t=new e.maps.LatLngBounds(new e.maps.LatLng(9.081999,8.675277),new e.maps.LatLng(9.091999,8.775277)),s={bounds:t},a=document.getElementById("pac-input"),n=new e.maps.places.Autocomplete(a,s);console.log(n)},getQuickReply(e){this.userSide(e),this.socketObj.emit("chat message",e),this.getServiceReply=!1,this.loader=!0;const t=document.getElementById("chat-box");t.scrollTop=t.scrollHeight},async getWatsonService(){this.socketObj=await C()("https://ui-bot-1.herokuapp.com/"),this.socketObj.once("connect",()=>{console.log("user connected"),this.getResponse()}),this.socketObj.on("disconnect",()=>{console.log("user disconnected")});const e="Hello World from client";this.socketObj.emit("join",{handle:e})},sendMessage(){this.socketObj.emit("chat message",this.getUserMessage),this.getServiceReply=!1,this.loader=!0,this.userSide(this.getUserMessage),this.getUserMessage="";const e=document.getElementById("chat-box");e.scrollTop=e.scrollHeight},getResponse(){this.socketObj.on("chat message",async e=>{this.watsonReply="",this.options=[],this.watsonReply=await JSON.parse(e).output.generic[0].text;const t=await JSON.parse(e).output.generic;t.forEach(e=>{"text"===e.response_type?this.serviceSide(e.text):"option"===e.response_type&&(this.showOptions=!0,this.options=e.options)}),this.getServiceReply=await!0,this.loader=await!1;const s=document.getElementById("chat-box");s.scrollTop=s.scrollHeight})},userSide(e){const t=a["a"].extend(T),s=new t({propsData:{currentUserMessage:e}});s.$mount(),this.$refs.container.appendChild(s.$el)},serviceSide(e){const t=a["a"].extend(L),s=new t({propsData:{watsonMessage:e}});s.$mount(),this.$refs.container.appendChild(s.$el)},getOptionValue(e){this.showOptions=!1,this.socketObj.emit("chat message",e),this.userSide(e),this.getServiceReply=!1,this.loader=!0;const t=document.getElementById("chat-box");t.scrollTop=t.scrollHeight}}},he=pe,ge=(s("1571"),s("8654")),me=Object(c["a"])(he,k,_,!1,null,"67746317",null),ve=me.exports;u()(me,{VTextField:ge["a"]});var fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Page Not Found bruhh")]),s("div",{staticStyle:{margin:"auto",width:"70%"}},[s("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"button is-primary"},[e._v("This is a button")]),s("button",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"btn"},[e._v("Click Me")]),s("span",{staticClass:"mdi mdi-account-clock-outline"}),s("span",{staticClass:"mdi mdi-view-dashboard"})])])},be=[],ye={},we=ye,ke=s("269a"),_e=s.n(ke),xe=s("5607"),Ce=Object(c["a"])(we,fe,be,!1,null,"473efa86",null),Me=Ce.exports;_e()(Ce,{Ripple:xe["a"]}),a["a"].use(g["a"]);var Se=new g["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/watson"},{path:"/",component:w,children:[{path:"/watson",name:"Watson Service",component:ve,meta:{breadcrumb:"Watson Service"}}]},{path:"*",component:Me}]}),Oe=s("2f62"),je={getErrorMessage:e=>e.errorMessage,getSuccessMessage:e=>e.successMessage,getHideHeader:e=>e.hideHeader},$e={setErrorMessage:(e,t)=>{e.errorMessage=t},setSuccessMessage:(e,t)=>{e.successMessage=t},setHideHeader:(e,t)=>{e.hideHeader=t}},Ee={hideHeader:"",errorMessage:"",successMessage:""};a["a"].use(Oe["a"]);var He=new Oe["a"].Store({state:Ee,mutations:$e,getters:je}),Ue={methods:{},computed:{hideHeader:function(){return this.$store.getters.getHideHeader},errorMessage:function(){return this.$store.getters.getErrorMessage},successMessage:function(){return this.$store.getters.getSuccessMessage}}},Be=(s("079a"),s("9537"),s("4989"),s("ab8b"),s("41e6"),s("bf40"),s("f309"));a["a"].use(Be["a"]);var Ae=new Be["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,a["a"].mixin(Ue),new a["a"]({router:Se,store:He,vuetify:Ae,render:e=>e(h)}).$mount("#app")},6951:function(e,t,s){},"862a":function(e,t,s){"use strict";var a=s("ab91"),n=s.n(a);n.a},"8f1b":function(e,t,s){},"955c":function(e,t,s){},ab91:function(e,t,s){},d336:function(e,t,s){"use strict";var a=s("8f1b"),n=s.n(a);n.a},d505:function(e,t,s){e.exports=s.p+"img/ui-background.424c836a.jpeg"},d7a52:function(e,t,s){"use strict";var a=s("6951"),n=s.n(a);n.a}});
//# sourceMappingURL=app.f26d5f12.js.map
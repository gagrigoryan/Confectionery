(function(t){function a(a){for(var n,i,s=a[0],c=a[1],l=a[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(a);while(f.length)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(n=!1)}n&&(o.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},r={app:0},o=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-1cffebe8":"b575eab6","chunk-20d07ec8":"385dabc0","chunk-4b49cba8":"3708271a"}[t]+".js"}function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.e=function(t){var a=[],e=r[t];if(0!==e)if(e)a.push(e[2]);else{var n=new Promise((function(a,n){e=r[t]=[a,n]}));a.push(e[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(a){c.onerror=c.onload=null,clearTimeout(u);var e=r[t];if(0!==e){if(e){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,e[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(a)},s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/confectionery/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var d=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"10ab":function(t,a,e){"use strict";e("5dec")},"2e73":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap);"]),a.push([t.i,"*,html{padding:0;margin:0;box-sizing:border-box}body,html{font-size:16px}body{font-family:Montserrat,sans-serif}li{list-style:none}a{text-decoration:none;color:inherit!important}.v-application{font-family:Montserrat,sans-serif!important}.active-link{color:#866167!important}h1,h2,h3{font-weight:700;color:#333}h1{font-size:3.2rem}h2{font-size:2.4rem}h3{font-size:1.8rem}p{color:#1d1d1d;font-size:16px}",""]),t.exports=a},"35af":function(t,a,e){var n=e("2e73");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("499e").default;r("da28cf28",n,!0,{sourceMap:!1,shadowMode:!1})},"4ca0":function(t,a,e){"use strict";e("847b")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticClass:"app",attrs:{id:"app"}},[t.$vuetify.breakpoint.smAndDown?e("navigation-drawer"):t._e(),t.$vuetify.breakpoint.mdAndUp?e("social-bar",{staticClass:"social"}):t._e(),e("router-view",{attrs:{name:"navbar"}}),e("v-main",{staticClass:"wrapper"},[e("router-view")],1)],1)},o=[],i=(e("d3b7"),function(){return e.e("chunk-4b49cba8").then(e.bind(null,"5256"))}),s=function(){return e.e("chunk-1cffebe8").then(e.bind(null,"a20d"))},c={name:"App",components:{NavigationDrawer:i,SocialBar:s},data:function(){return{}},computed:{}},l=c,u=(e("cf25"),e("2877")),d=e("6544"),f=e.n(d),p=e("7496"),m=e("f6c4"),v=Object(u["a"])(l,r,o,!1,null,null,null),b=v.exports;f()(v,{VApp:p["a"],VMain:m["a"]});var h=e("8c4f"),g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section-bar",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}]}),e("section",{staticClass:"main"},[e("main-section")],1)],1)},w=[],x=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"main d-md-flex align-center justify-center mt-8 mt-md-0 px-4"},[n("v-row",{staticClass:"align-start mt-md-10"},[n("v-col",{staticClass:"col-md-5",attrs:{cols:"12"}},[n("h1",[t._v("Торты")]),n("h3",{staticClass:"hidden-md-and-up mt-10"},[t._v('Торт "Какой-то"')]),n("p",{staticClass:"mt-4 mt-md-8"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias animi deserunt earum eveniet facilis fugit incidunt, ipsam mollitia nihil.")]),n("div",{staticClass:"hidden-md-and-up price"},[t._v(" от "),n("span",[t._v("1500")]),t._v(" руб./кг ")]),n("main-btn",{staticClass:"hidden-sm-and-down mt-5"},[t._v(" Подробнее ")])],1),n("v-col",{staticClass:"col-md-7",attrs:{cols:"12"}},[n("v-img",{attrs:{src:e("c8b1"),width:t.$vuetify.breakpoint.mdAndUp?"100%":"90%"}})],1),n("mouse-scroll",{staticClass:"scrollIndicator mt-8"})],1)],1)},y=[],_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-btn",t._b({staticClass:"button",attrs:{color:t.color,width:t.width,rounded:t.rounded,dark:t.dark},on:{click:function(a){return t.$emit("click")}}},"v-btn",t.$attrs,!1),[t._t("default")],2)},k=[],C={name:"MainBtn",props:{width:{type:String,default:"11rem"},color:{type:String,default:"#512026"},rounded:{type:Boolean,default:!0},dark:{type:Boolean,default:!0}}},M=C,O=(e("c881"),e("8336")),j=Object(u["a"])(M,_,k,!1,null,"4f5cf4c8",null),S=j.exports;f()(j,{VBtn:O["a"]});var A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mouse",on:{click:t.mouseClick}},[e("div",{staticClass:"icon-scroll"})])},$=[],I={name:"MouseScroll",methods:{mouseClick:function(){}}},E=I,N=(e("4ca0"),Object(u["a"])(E,A,$,!1,null,"5d2fd9e0",null)),V=N.exports,D={name:"MainSection",components:{MainBtn:S,MouseScroll:V}},B=D,z=(e("dcbe"),e("62ad")),P=e("adda"),T=e("0fd9"),R=Object(u["a"])(B,x,y,!1,null,"920af4a8",null),U=R.exports;f()(R,{VCol:z["a"],VImg:P["a"],VRow:T["a"]});var L=function(){return e.e("chunk-20d07ec8").then(e.bind(null,"685a"))},G={name:"Main",components:{MainSection:U,SectionBar:L}},J=G,W=Object(u["a"])(J,g,w,!1,null,"1063eb86",null),Y=W.exports,q=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-app-bar",{directives:[{name:"scroll",rawName:"v-scroll",value:t.scrollNavbar,expression:"scrollNavbar"}],staticClass:"navbar px-md-10",attrs:{app:"",height:"70",color:t.menuColor,"elevate-on-scroll":""}},[n("router-link",{attrs:{to:"/",tag:"a"}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Cake Logo",contain:"",src:e("cf05"),transition:"scale-transition",width:"54"}})],1),n("v-spacer"),t.$vuetify.breakpoint.smAndUp?n("ul",{staticClass:"navbar__menu d-flex"},t._l(t.menuItems,(function(a,e){return n("li",{key:e,staticClass:"mx-4"},[n("router-link",{attrs:{to:a.url,tag:"a"}},[t._v(" "+t._s(a.title)+" ")])],1)})),0):t._e(),n("v-spacer"),n("div",{staticClass:"navbar__basket"},[n("span",{staticClass:"mr-2 hidden-sm-and-down"},[t._v("Корзина пустая")]),n("v-badge",{attrs:{"offset-x":"12px","offset-y":"12px",color:"#FED39C",content:"0"}},[n("v-btn",{attrs:{fab:"",color:"#512026",small:""}},[n("v-icon",{attrs:{color:"#fff"}},[t._v("mdi-cupcake")])],1)],1)],1),n("v-btn",{staticClass:"ml-6 hidden-md-and-up",attrs:{fab:"",icon:"",width:"55",height:"55"},on:{click:t.clickMenu}},[n("div",{staticClass:"hamburger"},[n("div",{staticClass:"hamburger-1"}),n("div",{staticClass:"hamburger-2"}),n("div",{staticClass:"hamburger-3"})])])],1)},F=[],H={name:"Navbar",computed:{menuItems:function(){return this.$store.getters.getMenuItems}},data:function(){return{menuColor:"#fff"}},methods:{clickMenu:function(){this.$store.dispatch("setNavigationDrawer",!0)},scrollNavbar:function(){}}},K=H,Q=(e("10ab"),e("40dc")),X=e("4ca6"),Z=e("132d"),tt=e("2fa4"),at=e("269a"),et=e.n(at),nt=e("f977"),rt=Object(u["a"])(K,q,F,!1,null,"7c13c312",null),ot=rt.exports;f()(rt,{VAppBar:Q["a"],VBadge:X["a"],VBtn:O["a"],VIcon:Z["a"],VImg:P["a"],VSpacer:tt["a"]}),et()(rt,{Scroll:nt["b"]}),n["a"].use(h["a"]);var it=[{path:"/",name:"Main",components:{default:Y,navbar:ot}}],st=new h["a"]({mode:"history",base:"/confectionery/",routes:it}),ct=st,lt=e("2f62");n["a"].use(lt["a"]);var ut=new lt["a"].Store({modules:{},mutations:{SET_NAVIGATION_DRAWER:function(t,a){t.navigationDrawer=a}},actions:{setNavigationDrawer:function(t,a){var e=t.commit;e("SET_NAVIGATION_DRAWER",a)}},state:{menuItems:[{title:"О нас",url:"/about"},{title:"Торты",url:"/cakes"},{title:"Конфеты",url:"/candy"},{title:"Шоколады",url:"/chocolate"},{title:"Макаронс",url:"/macaron"},{title:"Другое",url:"/other"},{title:"Контакты",url:"/contacts"}],navigationDrawer:!1},getters:{getMenuItems:function(t){return t.menuItems},getNavigationDrawer:function(t){return t.navigationDrawer}}}),dt=e("f309");n["a"].use(dt["a"]);var ft=new dt["a"]({}),pt=e("ecee"),mt=e("f2d1"),vt=e("c074"),bt=e("ad3d");e("35af");pt["c"].add(mt["b"],mt["a"],vt["a"]),n["a"].component("font-awesome-icon",bt["a"]),n["a"].config.productionTip=!1,new n["a"]({router:ct,store:ut,vuetify:ft,render:function(t){return t(b)}}).$mount("#app")},"5a19":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'.navbar__menu li[data-v-7c13c312]{transition:all .3s;position:relative;font-weight:600}.navbar__menu li[data-v-7c13c312]:before{content:"";width:0;height:2px;background-color:#4f2025;position:absolute;right:0;bottom:-5px;transition:.3s}.navbar__menu li:hover a[data-v-7c13c312]{color:#4f2025!important}.navbar__menu li[data-v-7c13c312]:hover:before{width:100%;left:0}.navbar__menu li a[data-v-7c13c312]{color:#866167;transition:all .3s}.navbar__basket[data-v-7c13c312]{font-size:12px;color:#866167}.hamburger[data-v-7c13c312]{transform:rotate(180deg)}.hamburger div[data-v-7c13c312]{width:34px;height:3px;border-radius:30px;background:#4f2025}.hamburger-2[data-v-7c13c312]{width:25px!important;margin-top:6px;margin-bottom:6px}',""]),t.exports=a},"5dec":function(t,a,e){var n=e("5a19");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("499e").default;r("5be5c03c",n,!0,{sourceMap:!1,shadowMode:!1})},"68f3":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".button[data-v-4f5cf4c8]{font-size:12px}",""]),t.exports=a},"75e5":function(t,a,e){var n=e("68f3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("499e").default;r("7e8cdf32",n,!0,{sourceMap:!1,shadowMode:!1})},"847b":function(t,a,e){var n=e("e895");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("499e").default;r("38e27036",n,!0,{sourceMap:!1,shadowMode:!1})},c6e4:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"@media(max-width:600px){.wrapper{margin:0!important;width:100%!important}}.app{height:1000px}.wrapper{margin-left:15vw;margin-right:15vw}",""]),t.exports=a},c881:function(t,a,e){"use strict";e("75e5")},c8b1:function(t,a,e){t.exports=e.p+"img/mainCake.c29f8e24.png"},cf05:function(t,a,e){t.exports=e.p+"img/logo.49e605f6.png"},cf25:function(t,a,e){"use strict";e("daa0")},daa0:function(t,a,e){var n=e("c6e4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("499e").default;r("410f26b6",n,!0,{sourceMap:!1,shadowMode:!1})},dcbe:function(t,a,e){"use strict";e("e749")},ddbe:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".main[data-v-920af4a8]{width:100%;height:calc(100vh - 70px);position:relative}.scrollIndicator[data-v-920af4a8]{transform:scale(.7);margin-left:auto;margin-right:auto}.price[data-v-920af4a8]{color:#4f2025;font-weight:700}.price span[data-v-920af4a8]{font-size:2.5rem}",""]),t.exports=a},e749:function(t,a,e){var n=e("ddbe");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("499e").default;r("879e1bd4",n,!0,{sourceMap:!1,shadowMode:!1})},e895:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'.mouse[data-v-5d2fd9e0]{cursor:pointer}.icon-scroll[data-v-5d2fd9e0]:before{position:absolute;left:50%}.icon-scroll[data-v-5d2fd9e0]{width:30px;height:50px;border:2px solid #4f2025;border-radius:25px;position:relative}@media (max-width:767px){.icon-scroll[data-v-5d2fd9e0]{position:relative}}.icon-scroll[data-v-5d2fd9e0]:before{content:"";width:8px;height:8px;background:#4f2025;margin-left:-4px;top:8px;border-radius:4px;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:scroll-data-v-5d2fd9e0;animation-name:scroll-data-v-5d2fd9e0}@-webkit-keyframes scroll-data-v-5d2fd9e0{0%{opacity:1}to{opacity:0;transform:translateY(26px)}}@keyframes scroll-data-v-5d2fd9e0{0%{opacity:1}to{opacity:0;transform:translateY(26px)}}',""]),t.exports=a}});
//# sourceMappingURL=app.1170e917.js.map
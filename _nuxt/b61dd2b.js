(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{222:function(t,e,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("5db5fa23",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";var n=r(24),o=(r(77),{data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"Ripeng: Ripasso di inglese",terms:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("terms").fetch();case 2:t.terms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),c=r(93),l=r(121),v=r.n(l),d=r(408),f=r(414),m=r(409),_=r(258),h=r(415),w=r(410),V=r(181),x=r(182),k=r(184),y=r(117),D=r(183),L=r(80),N=r(411),P=r(413),A=r(412),C=r(252),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[r("v-list-item",{attrs:{to:"/verbi",router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-apps")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Verbi")])],1)],1),t._v(" "),r("v-list-group",{attrs:{value:!0,"prepend-icon":"mdi-chart-bubble"},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-title",[t._v("Terms")])]},proxy:!0}])},[t._v(" "),t._l(t.terms,(function(e){return r("v-list-item",{key:e.path,attrs:{to:""+e.path}},[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)}))],2)],1)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[r("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[r("v-icon",[t._v("mdi-application")])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[r("v-icon",[t._v("mdi-minus")])],1),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[r("v-list",[r("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[r("v-list-item-action",[r("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),r("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VApp:d.a,VAppBar:f.a,VAppBarNavIcon:m.a,VBtn:_.a,VContainer:h.a,VFooter:w.a,VIcon:V.a,VList:x.a,VListGroup:k.a,VListItem:y.a,VListItemAction:D.a,VListItemContent:L.a,VListItemTitle:L.b,VMain:N.a,VNavigationDrawer:P.a,VSpacer:A.a,VToolbarTitle:C.a})},283:function(t,e,r){r(284),r(285),t.exports=r(289)},306:function(t,e,r){"use strict";r(222)},307:function(t,e,r){var n=r(21)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},82:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(306),r(93)),c=r(121),l=r.n(c),v=r(408),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[283,11,4,12]]]);
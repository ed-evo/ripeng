(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{224:function(t,e,r){var content=r(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("5db5fa23",content,!0,{sourceMap:!1})},258:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"Ripeng: Ripasso di inglese"}}},o=r(93),c=r(120),v=r.n(c),l=r(409),d=r(415),m=r(410),f=r(259),_=r(416),h=r(411),w=r(180),V=r(181),x=r(116),k=r(182),D=r(84),N=r(412),A=r(414),F=r(413),I=r(253),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[r("v-list-item",{attrs:{to:"/verbi",router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-apps")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Verbi")])],1)],1),t._v(" "),r("v-list-item",{attrs:{to:"/terms",router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-chart-bubble")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Terms")])],1)],1)],1)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[r("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[r("v-icon",[t._v("mdi-application")])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[r("v-icon",[t._v("mdi-minus")])],1),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[r("v-list",[r("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[r("v-list-item-action",[r("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),r("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VApp:l.a,VAppBar:d.a,VAppBarNavIcon:m.a,VBtn:f.a,VContainer:_.a,VFooter:h.a,VIcon:w.a,VList:V.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:D.a,VListItemTitle:D.b,VMain:N.a,VNavigationDrawer:A.a,VSpacer:F.a,VToolbarTitle:I.a})},286:function(t,e,r){r(287),r(288),t.exports=r(292)},308:function(t,e,r){"use strict";r(224)},309:function(t,e,r){var n=r(21)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},80:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(308),r(93)),c=r(120),v=r.n(c),l=r(409),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;v()(component,{VApp:l.a})}},[[286,11,4,12]]]);
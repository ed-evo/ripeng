(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{426:function(t,e,r){var content=r(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("3e455b3a",content,!0,{sourceMap:!1})},427:function(t,e,r){var n=r(21)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},453:function(t,e,r){"use strict";r.r(e);var n=r(418),o=r(32),c=function t(e,r,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(o.a)(this,t),this.baseForm=e,this.pastSimple=r,this.pastParticiple=n,this.weight=c},d=[new c("be","was/were","been"),new c("become","became","become"),new c("begin","began","begun"),new c("buy","bought","bought"),new c("catch","caught","caught"),new c("choose","chose","chosen"),new c("come","came","come"),new c("do","did","done"),new c("drink","drank","drunk"),new c("eat","ate","eaten"),new c("get","got","got"),new c("go","went","gone"),new c("have","had","had"),new c("hear","heard","heard"),new c("hide","hid","hidden"),new c("meet","met","met"),new c("sell","sold","sold"),new c("sit","sat","sat"),new c("sleep","slept","slept"),new c("spend","spent","spent"),new c("swim","swam","swum"),new c("take","took","taken"),new c("tell","told","told"),new c("think","thought","thought"),new c("understand","understood","understood"),new c("wake","woke","woken"),new c("wear","wore","worn"),new c("win","won","won"),new c("write","wrote","written")],l=r(2),v=Object(l.d)({data:function(){return{verbi:Object(n.shuffle)(d)}},methods:{check:function(t){return function(e){return e==t}}}}),h=r(93),w=r(121),_=r.n(w),f=(r(11),r(8),r(10),r(14),r(9),r(15),r(3)),m=(r(30),r(189),r(426),r(229)),x=r(424),k=r(92),y=r(13);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=Object(y.a)(x.a,k.a,m.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return j(j({"v-card":!0},k.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},m.a.options.computed.classes.call(this))},styles:function(){var style=j({},m.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=x.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}}),C=r(1),S=(Object(C.g)("v-card__actions"),Object(C.g)("v-card__subtitle"),Object(C.g)("v-card__text"),Object(C.g)("v-card__title")),B=r(430),V=r(431),z=r(452),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{staticClass:"text-center"},t._l(t.verbi,(function(e){return r("v-card",{key:e.baseForm},[r("v-card-title",[t._v(t._s(e.baseForm))]),t._v(" "),r("v-row",[r("v-col",[r("v-text-field",{staticClass:"mt-0 pt-0",attrs:{label:"Past simple",rules:[t.check(e.pastSimple)]}})],1),t._v(" "),r("v-col",[r("v-text-field",{staticClass:"mt-0 pt-0",attrs:{label:"Past participle",rules:[t.check(e.pastParticiple)]}})],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VCard:P,VCardTitle:S,VCol:B.a,VRow:V.a,VTextField:z.a})}}]);
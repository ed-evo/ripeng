(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{421:function(e,t,n){"use strict";n.r(t);var o=n(367),w=n(24),r=function e(t,n,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(w.a)(this,e),this.baseForm=t,this.pastSimple=n,this.pastParticiple=o,this.weight=r},c=[new r("be","was/were","been"),new r("become","became","become"),new r("begin","began","begun"),new r("buy","bought","bought"),new r("catch","caught","caught"),new r("choose","chose","chosen"),new r("come","came","come"),new r("do","did","done"),new r("drink","drank","drunk"),new r("eat","ate","eaten"),new r("get","got","got"),new r("go","went","gone"),new r("have","had","had"),new r("hear","heard","heard"),new r("hide","hid","hidden"),new r("meet","met","met"),new r("sell","sold","sold"),new r("sit","sat","sat"),new r("sleep","slept","slept"),new r("spend","spent","spent"),new r("swim","swam","swum"),new r("take","took","taken"),new r("tell","told","told"),new r("think","thought","thought"),new r("understand","understood","understood"),new r("wake","woke","woken"),new r("wear","wore","worn"),new r("win","won","won"),new r("write","wrote","written")],l=n(363),d=Object(l.a)({data:function(){return{verbi:Object(o.shuffle)(c)}},methods:{check:function(e){return function(t){return t==e}}}}),h=n(83),m=n(111),v=n.n(m),k=n(368),f=n(364),_=n(417),C=n(418),x=n(420),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{staticClass:"text-center"},e._l(e.verbi,(function(t){return n("v-card",{key:t.baseForm},[n("v-card-title",[e._v(e._s(t.baseForm))]),e._v(" "),n("v-row",[n("v-col",[n("v-text-field",{staticClass:"mt-0 pt-0",attrs:{label:"Past simple",rules:[e.check(t.pastSimple)]}})],1),e._v(" "),n("v-col",[n("v-text-field",{staticClass:"mt-0 pt-0",attrs:{label:"Past participle",rules:[e.check(t.pastParticiple)]}})],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VCard:k.a,VCardTitle:f.b,VCol:_.a,VRow:C.a,VTextField:x.a})}}]);
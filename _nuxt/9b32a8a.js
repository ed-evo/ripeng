(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{416:function(e,t,n){"use strict";n.r(t);var r=n(419),o=n(421),c=n(2),l=Object(c.d)({setup:function(){return{$v:Object(r.a)({$lazy:!0})}},props:["def"],data:function(){return{input:null}},computed:{inglese:function(){return this.def?this.def.en:""},italiano:function(){return this.def?this.def.it:""}},validations:function(){return{input:{sameAs:Object(o.a)(this.inglese)}}},mounted:function(){this.$parent.$on("validate",this.$v.$validate)},methods:{check:function(e){return!e||e===this.inglese}}}),f=n(93),d=n(121),v=n.n(d),h=n(452),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",{attrs:{label:e.italiano,error:e.$v.input.$error},on:{focus:function(t){e.$v.$dirty&&e.$v.$reset()}},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})}),[],!1,null,null,null);t.default=component.exports;v()(component,{VTextField:h.a})},454:function(e,t,n){"use strict";n.r(t);var r=n(24),o=(n(77),n(416)),c=n(418),l=n(2),f=Object(l.d)({components:{Definizione:o.default},data:function(){return{terms:[]}},mouted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content(e.$route.path).only("terms").fetch();case 2:n=t.sent,e.terms=Object(c.shuffle)(n.terms);case 4:case"end":return t.stop()}}),t)})))()},methods:{validate:function(){this.$emit("validate")}}}),d=n(93),v=n(121),h=n.n(v),m=n(258),$=n(430),w=n(431),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{staticClass:"text-center"},[e._l(e.terms,(function(t){return n("definizione",{key:t.en,ref:"definizioni",refInFor:!0,attrs:{def:t,bus:e.$refs.done}})})),e._v(" "),n("v-btn",{ref:"done",attrs:{block:"",depressed:"",elevation:"7",fab:"",rounded:""},on:{click:e.validate}},[e._v("Done")])],2)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{Definizione:n(416).default}),h()(component,{VBtn:m.a,VCol:$.a,VRow:w.a})}}]);
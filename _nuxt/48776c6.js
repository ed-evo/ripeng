(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{422:function(e,t,n){"use strict";n.r(t);var o=n(425),r=n(427),l=n(2),f=Object(l.d)({setup:function(){return{$v:Object(o.a)({$lazy:!0})}},props:["def"],data:function(){return{input:null}},computed:{inglese:function(){return this.def?this.def.en:""},italiano:function(){return this.def?this.def.it:""}},validations:function(){return{input:{sameAs:Object(r.a)(this.inglese)}}},mounted:function(){this.$parent.$on("validate",this.$v.$validate)},methods:{check:function(e){return!e||e===this.inglese}}}),c=n(93),d=n(121),v=n.n(d),h=n(458),component=Object(c.a)(f,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",{attrs:{label:e.italiano,error:e.$v.input.$error},on:{focus:function(t){e.$v.$dirty&&e.$v.$reset()}},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})}),[],!1,null,null,null);t.default=component.exports;v()(component,{VTextField:h.a})},460:function(e,t,n){"use strict";n.r(t);var o=n(422),r=n(424),l=n(2),f=n(224),c=Object(l.d)({components:{Definizione:o.default},data:function(){return{definizione:null,value:""}},computed:{defs:function(){return Object(r.shuffle)(f.a[this.$route.params.vocaboli])}},beforeMount:function(){this.refreshDef()},methods:{refreshDef:function(){this.value="",this.definizione=Object(r.sample)(f.a[this.$route.params.vocaboli])},validate:function(){this.$emit("validate")}}}),d=n(93),v=n(121),h=n.n(v),$=n(264),m=n(436),j=n(437),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{staticClass:"text-center"},[e._l(e.defs,(function(t){return n("definizione",{key:t.en,ref:"definizioni",refInFor:!0,attrs:{def:t,bus:e.$refs.done}})})),e._v(" "),n("v-btn",{ref:"done",attrs:{block:"",depressed:"",elevation:"7",fab:"",rounded:""},on:{click:e.validate}},[e._v("Done")])],2)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{Definizione:n(422).default}),h()(component,{VBtn:$.a,VCol:m.a,VRow:j.a})}}]);
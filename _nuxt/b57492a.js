(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{418:function(e,t,n){"use strict";n.r(t);n(276),n(37),n(74),n(420),n(67);var r=n(421),o=n(423),l=n(2),c=Object(l.defineComponent)({setup:function(e){var t=e.def,n=(null==t?void 0:t.en)?o.a.regex(new RegExp("^".concat(t.en,"$"),"i")):function(){return!1};return{sameAs:function(e){return o.a.req(e)&&n(e.trim().replaceAll(/\s+/g," "))},$v:Object(r.a)({$lazy:!0})}},props:["def","bus"],data:function(){return{input:null}},computed:{inglese:function(){return this.def?this.def.en:""},italiano:function(){return this.def?this.def.it:""}},validations:function(){return{input:{required:o.b,sameAs:this.sameAs}}},created:function(){console.log(this.bus),this.bus.$on("validate",this.validate)},methods:{validate:function(){console.log("called"),this.$v.$validate(),this.$emit("validated",this.$v.$error)}}}),d=n(93),f=n(120),v=n.n(f),$=n(472),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",{attrs:{label:e.italiano,error:e.$v.input.$error},on:{focus:function(t){e.$v.$dirty&&e.$v.$reset()}},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})}),[],!1,null,null,null);t.default=component.exports;v()(component,{VTextField:$.a})}}]);
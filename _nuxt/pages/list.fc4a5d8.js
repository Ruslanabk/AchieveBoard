(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{289:function(t,e,r){var content=r(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("59f065a7",content,!0,{sourceMap:!1})},290:function(t,e,r){var content=r(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("094f38aa",content,!0,{sourceMap:!1})},292:function(t,e,r){"use strict";var o=r(289);r.n(o).a},293:function(t,e,r){(e=r(11)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},294:function(t,e,r){"use strict";var o=r(290);r.n(o).a},295:function(t,e,r){(e=r(11)(!1)).push([t.i,".VuetifyLogo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=e},296:function(t,e,r){var content=r(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("7954a469",content,!0,{sourceMap:!1})},298:function(t,e,r){"use strict";r(292);var o=r(60),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.a=component.exports},299:function(t,e,r){"use strict";r(294);var o=r(60),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:"/vuetify-logo.svg"}})}),[],!1,null,null,null);e.a=component.exports},303:function(t,e,r){"use strict";var o=r(296);r.n(o).a},304:function(t,e,r){(e=r(11)(!1)).push([t.i,".achievementImg{width:80px;height:auto;max-width:100%}",""]),t.exports=e},320:function(t,e,r){"use strict";r.r(e);r(170);var o=r(298),n=r(299),l={components:{Logo:o.a,VuetifyLogo:n.a},mounted:function(){var t=window.location.search.slice(1);this.$store.commit("setDocId",t),0==this.$store.state.table.length&&this.$store.commit("getData")}},c=(r(303),r(60)),d=r(96),f=r.n(d),h=r(302),m=r(291),x=r(317),v=r(318),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",t._l(t.$store.state.achievements,(function(e,i){return r("v-col",{key:i,attrs:{cols:"12",md:"4"}},[r("v-card",[r("v-card-title",{staticClass:"text-center"},[t._v(t._s(e.title))]),t._v(" "),r("v-card-text",[r("img",{staticClass:"achievementImg",attrs:{src:e.img}}),t._v(" "),r("p",{staticClass:"mt-4"},[t._v("\n            "+t._s(e.description)+"\n          ")])])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCard:h.a,VCardText:m.a,VCardTitle:m.b,VCol:x.a,VRow:v.a})}}]);
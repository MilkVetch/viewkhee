webpackJsonp([0],{Ba05:function(t,e){},D4uH:function(t,e,i){"use strict";var n={},o={name:"icon",props:{name:{type:String,validator:function(t){return!t||t in n||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?n[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,i=t.height;return Math.max(e,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,i,n){var o="fa-"+(s++).toString(16);return e[n]=o,' id="'+o+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,i,n,o){var s=i||o;return s&&e[s]?"#"+e[s]:t}),t}},mounted:function(){var t=this;if(this.name||0!==this.$children.length){if(!this.icon){var e=0,i=0;this.$children.forEach(function(n){n.outerScale=t.normalizedScale,e=Math.max(e,n.width),i=Math.max(i,n.height)}),this.childrenWidth=e,this.childrenHeight=i,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(i-t.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')},register:function(t){for(var e in t){var i=t[e];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),n[e]=i}},icons:n},s=870711;var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,n){return i("path",t._b({key:"path-"+n},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,n){return i("polygon",t._b({key:"polygon-"+n},"polygon",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[i("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var r=i("VU/8")(o,a,!1,function(t){i("EMrj")},null,null);e.a=r.exports},EMrj:function(t,e){},GFmU:function(t,e){},IM1b:function(t,e){},ISG7:function(t,e){},JUJj:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:{background:this.$route.meta.color},attrs:{id:"app"}},[e("router-view",{staticClass:"view"})],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},o,!1,function(t){i("a5qj")},null,null).exports,a=i("/ocq"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("About Me")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus facilis assumenda voluptates repudiandae enim recusandae vitae perferendis sint optio iusto, ut alias eaque delectus voluptatibus voluptas impedit quidem quasi.")])])}]};var u=i("VU/8")({name:"AboutMe"},r,!1,function(t){i("o24b")},"data-v-4acae6d5",null).exports,l={name:"Close",data:function(){return{crossSize:this.btnSize,crossColor:this.xColor,backColor:this.bgColor,circleColor:this.xColor,barSize:this.xSize}},props:{xColor:String,bgColor:String,btnSize:String,xSize:String},methods:{mouseOver:function(){this.crossColor=this.bgColor,this.backColor=this.xColor},mouseOut:function(){this.crossColor=this.xColor,this.backColor=this.bgColor}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cross-btn",style:{width:t.crossSize+"px",height:t.crossSize+"px",background:t.backColor,borderColor:t.circleColor},on:{mouseover:t.mouseOver,mouseout:t.mouseOut}},[i("div",{staticClass:"bar",style:{width:t.barSize+"px"}},[i("div",{staticClass:"bar1",style:{background:t.crossColor,width:t.barSize+"px"}}),t._v(" "),i("div",{staticClass:"bar2",style:{background:t.crossColor,width:t.barSize+"px"}})])])},staticRenderFns:[]};var d=i("VU/8")(l,c,!1,function(t){i("ttWG")},null,null).exports,p=(i("8AWp"),i("D/Bo"),i("7mFz"),i("4M9W"),i("15Ef"),{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navContainer"},[i("button",{class:{nfp:!t.$route.meta.ifg},style:{background:t.btnColor,color:t.fontColor},on:{click:t.btnClick,mouseover:t.mouseOver,mouseout:t.mouseOut}},[t._v("\n    Discover More\n  ")]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.isShow?i("nav",[i("ul",t._l(t.nav,function(e){return i("li",{key:e.text,attrs:{to:e.link},on:{click:t.navClick}},[i("router-link",{attrs:{to:e.link}},[i("icon",{attrs:{name:e.icon}}),t._v(" "),i("span",[t._v(t._s(e.text))])],1)],1)}))]):t._e()])],1)},staticRenderFns:[]});var v=i("VU/8")({name:"Nav",data:function(){return{isShow:!1,nav:[{icon:"home",text:"Home",link:"/"},{icon:"check",text:"Skills",link:"/Skills"},{icon:"graduation-cap",text:"Education",link:"/Education"},{icon:"briefcase",text:"Work Exp",link:"/WorkExp"},{icon:"user",text:"Contact",link:"/Contact"}],btnColor:this.$route.meta.color,fontColor:"#ecf0f1",borderT:"transparent"}},methods:{mouseOver:function(){this.btnColor="#ecf0f1",this.fontColor=this.$route.meta.color,this.borderT="#ecf0f1",this.$root.$emit("send","#ecf0f1")},mouseOut:function(){this.btnColor=this.$route.meta.color,this.borderT="transparent",this.fontColor="#ecf0f1",this.$root.$emit("send",this.$route.meta.color)},btnClick:function(){this.isShow=!0,!0===this.isShow&&this.$root.$emit("btnclick",!0)},navClick:function(){this.isShow=!1,this.$root.$emit("btnclick",!1)}}},p,!1,function(t){i("Ba05")},"data-v-22fc3808",null).exports,m={name:"Home",data:function(){return{outlineColor:this.$route.meta.color,navOpen:!1}},created:function(){var t=this;this.$root.$on("send",function(e){t.outlineColor=e}),this.$root.$on("btnclick",function(e){t.navOpen=e})},components:{AboutMe:u,Close:d,Nav:v}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",style:{outlineColor:t.outlineColor}},[i("div",{staticClass:"homeview"},[i("section",{staticClass:"hi",class:{bgblur:t.navOpen}},[t._v("\n      Hi"),i("span",[t._v("!")])]),t._v(" "),i("section",{staticClass:"welcome"},[i("div",{class:{bgblur:t.navOpen}},[i("h1",[t._v("I am Khee")]),t._v(" "),i("h2",[t._v("&")]),t._v(" "),i("h1",[t._v("I make Websites")])]),t._v(" "),i("Nav")],1)])])},staticRenderFns:[]};var f=i("VU/8")(m,h,!1,function(t){i("ISG7")},"data-v-c84f4d34",null).exports,_={name:"Education",data:function(){return{outlineColor:this.$route.meta.color}},created:function(){var t=this;this.$root.$on("send",function(e){t.outlineColor=e})},components:{Nav:v}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",style:{outlineColor:this.outlineColor}},[e("Nav")],1)},staticRenderFns:[]};var C=i("VU/8")(_,b,!1,function(t){i("JUJj")},"data-v-5ace5030",null).exports,g={name:"Skills",data:function(){return{msg:"As more and more website platforms are released nowadays, I still prefer to make responsive websites using my own Sass code. ",outlineColor:this.$route.meta.color,navOpen:!1}},created:function(){var t=this;this.$root.$on("send",function(e){t.outlineColor=e}),this.$root.$on("btnclick",function(e){t.navOpen=e})},components:{Nav:v}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",style:{outlineColor:t.outlineColor}},[i("div",{staticClass:"left",class:{bgblur:t.navOpen}},[i("h1",[t._v("Skills and Abilities")]),t._v(" "),i("p",[t._v(t._s(t.msg))]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maxime. Reprehenderit accusamus nemo nam sapiente, ullam doloribus! Nostrum totam aspernatur ea, perferendis, similique dicta veritatis fuga earum, numquam possimus natus?")]),t._v(" "),i("div",{staticClass:"drag"})]),t._v(" "),i("div",{staticClass:"right",class:{bgblur:t.navOpen}},[i("h1",[t._v("I Use..")]),t._v(" "),t._m(0)]),t._v(" "),i("Nav")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",[i("li",[i("i",{staticClass:"fab fa-html5"}),t._v(" "),i("span",[t._v("HTML5")])]),t._v(" "),i("li",[i("i",{staticClass:"fab fa-css3"}),t._v(" "),i("span",[t._v("CSS3")])]),t._v(" "),i("li",[i("ul",[i("li",[i("i",{staticClass:"fab fa-sass"}),t._v(" "),i("span",[t._v("Sass")])]),t._v(" "),i("li",[i("i",{staticClass:"fab fa-less"}),t._v(" "),i("span",[t._v("Less")])])])]),t._v(" "),i("li",[i("i",{staticClass:"fab fa-js"}),t._v(" "),i("span",[t._v("JS")])]),t._v(" "),i("li",[i("ul",[i("li",[i("i",{staticClass:"fab fa-react"}),t._v(" "),i("span",[t._v("React.js")])]),t._v(" "),i("li",[i("i",{staticClass:"fab fa-vuejs"}),t._v(" "),i("span",[t._v("Vue.js")])])])]),t._v(" "),i("li",[i("i",{staticClass:"fab fa-wordpress"}),t._v(" "),i("span",[t._v("wordpress")])]),t._v(" "),i("li",[i("i",{staticClass:"fab fa-github"}),t._v(" "),i("span",[t._v("Github")])])])])}]};var S=i("VU/8")(g,k,!1,function(t){i("GFmU")},"data-v-076ebd70",null).exports,$={name:"WorkExp",data:function(){return{outlineColor:this.$route.meta.color}},created:function(){var t=this;this.$root.$on("send",function(e){t.outlineColor=e})},components:{Nav:v}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",style:{outlineColor:this.outlineColor}},[e("Nav")],1)},staticRenderFns:[]};var w=i("VU/8")($,x,!1,function(t){i("IM1b")},"data-v-1aceeaa8",null).exports,q={name:"Contact",data:function(){return{outlineColor:this.$route.meta.color}},created:function(){var t=this;this.$root.$on("send",function(e){t.outlineColor=e})},components:{Nav:v}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",style:{outlineColor:this.outlineColor}},[e("Nav")],1)},staticRenderFns:[]};var E=i("VU/8")(q,y,!1,function(t){i("k5ca")},"data-v-0edb3e00",null).exports;n.a.use(a.a);var z=new a.a({routes:[{path:"/",name:"Home",component:f,meta:{color:"#2c3e50",ifg:!0}},{path:"/Education",name:"Education",component:C,meta:{color:"#2980b9",ifg:!1}},{path:"/Skills",name:"Skills",component:S,meta:{color:"#8e44ad",ifg:!1}},{path:"/WorkExp",name:"WorkExp",component:w,meta:{color:"#27ae60",ifg:!1}},{path:"/Contact",name:"Contact",component:E,meta:{color:"#16a085",ifg:!1}}]}),N=(i("uMhA"),i("D4uH"));n.a.component("icon",N.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:z,components:{App:s},template:"<App/>"})},a5qj:function(t,e){},k5ca:function(t,e){},o24b:function(t,e){},ttWG:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8184525f2916083ff372.js.map
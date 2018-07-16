webpackJsonp([0],{"3v2w":function(t,e){},"63W+":function(t,e){},"6R4L":function(t,e){},B0V3:function(t,e){},D4uH:function(t,e,n){"use strict";var i={},o={name:"icon",props:{name:{type:String,validator:function(t){return!t||t in i||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,n,i){var o="fa-"+(r++).toString(16);return e[i]=o,' id="'+o+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,n,i,o){var r=n||o;return r&&e[r]?"#"+e[r]:t}),t}},mounted:function(){var t=this;if(this.name||0!==this.$children.length){if(!this.icon){var e=0,n=0;this.$children.forEach(function(i){i.outerScale=t.normalizedScale,e=Math.max(e,i.width),n=Math.max(n,i.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),i[e]=n}},icons:i},r=870711;var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,i){return n("path",t._b({key:"path-"+i},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,i){return n("polygon",t._b({key:"polygon-"+i},"polygon",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var s=n("VU/8")(o,a,!1,function(t){n("EMrj")},null,null);e.a=s.exports},DbTK:function(t,e){},EMrj:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o=(n("8AWp"),n("+NLg"),n("7mFz"),n("4M9W"),n("15Ef"),{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.nav,function(e){return n("li",{key:e.text,staticClass:"hvr-underline-reveal",attrs:{to:e.link}},[n("router-link",{attrs:{to:e.link}},[n("i",{class:e.icon}),t._v(" "),n("span",[t._v(t._s(e.text))])])],1)}))},staticRenderFns:[]});var r={name:"App",data:function(){return{menu:"Discover More",pageColor:this.$route.meta.color,btnColor:this.$route.meta.color,textColor:"#ecf0f1",borderColor:this.$route.meta.color,openNav:!1}},methods:{mouseOver:function(){this.btnColor="#ecf0f1",this.textColor=this.$route.meta.color,this.borderColor="#ecf0f1"},mouseOut:function(){this.btnColor=this.$route.meta.color,this.textColor="#ecf0f1",this.borderColor=this.$route.meta.color},clickNavButton:function(){this.btnColor=this.$route.meta.color,this.borderColor=this.$route.meta.color,this.openNav=!1}},components:{Nav:n("VU/8")({name:"Nav",data:function(){return{isShow:!1,nav:[{icon:"fa fa-home",text:"Home",link:"/"},{icon:"fa fa-user",text:"About Me",link:"about"},{icon:"fas fa-medal",text:"Skills",link:"/Skills"},{icon:"fa fa-graduation-cap",text:"Education",link:"/Education"},{icon:"fa fa-briefcase",text:"Work Exp",link:"/WorkExp"},{icon:"fa fa-comment",text:"Contact",link:"/Contact"}],btnColor:this.$route.meta.color,fontColor:"#ecf0f1",borderT:"transparent"}}},o,!1,function(t){n("DbTK")},"data-v-cc8f935e",null).exports}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{background:t.$route.meta.color},attrs:{id:"app"}},[n("main",{style:{outlineColor:t.borderColor}},[n("router-view",{staticClass:"container"})],1),t._v(" "),n("button",{style:{background:t.btnColor,color:t.textColor},on:{mouseover:t.mouseOver,mouseout:t.mouseOut,click:function(e){t.openNav=!0}}},[t._v("\n  "+t._s(t.menu)+"\n  ")]),t._v(" "),n("transition",{attrs:{name:"nav"}},[t.openNav?n("nav",[n("div",{on:{click:t.clickNavButton}},[n("Nav")],1)]):t._e()])],1)},staticRenderFns:[]};var s=n("VU/8")(r,a,!1,function(t){n("6R4L")},null,null).exports,c=n("/ocq"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",{staticClass:"left"},[this._v("Hi")]),this._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"line1"},[this._v("I am Khee")]),this._v(" "),e("div",{staticClass:"line2"},[this._v("&")]),this._v(" "),e("div",{staticClass:"line3"},[this._v("I make Websites")])])])}]};var u=n("VU/8")({name:"Home"},l,!1,function(t){n("NiYt")},"data-v-42446ee2",null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:this.imgSrc}}),this._v(" "),e("p",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var f=n("VU/8")({name:"About",data:function(){return{msg:"An experienced professional in web development and visual design. I have two years experience in design and two years experience in front-end development. A creative programmer full of passion. I pride myself in good self-learning ability and rich imagination. Two years experience in teaching also gave me ability to communicate well so that I can cooperate perfectly with different people as a team.",imgSrc:"static/khee.png"}}},h,!1,function(t){n("3v2w")},"data-v-1f3889b0",null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var d=n("VU/8")({name:"Education"},p,!1,function(t){n("l2Qv")},"data-v-3ec881a3",null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var m=n("VU/8")({name:"Skills"},v,!1,function(t){n("63W+")},"data-v-4273bfce",null).exports,g={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var _=n("VU/8")({name:"WorkExp"},g,!1,function(t){n("B0V3")},"data-v-1d84b5aa",null).exports,b={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var x=n("VU/8")({name:"Contact"},b,!1,function(t){n("Q9yR")},"data-v-8d265c5a",null).exports;i.a.use(c.a);var k=new c.a({routes:[{path:"/",name:"Home",component:u,meta:{color:"#2c3e50",ifg:!0}},{path:"/About",name:"About",component:f,meta:{color:"#3f51b5",ifg:!1}},{path:"/Education",name:"Education",component:d,meta:{color:"#2980b9",ifg:!1}},{path:"/Skills",name:"Skills",component:m,meta:{color:"#8e44ad",ifg:!1}},{path:"/WorkExp",name:"WorkExp",component:_,meta:{color:"#27ae60",ifg:!1}},{path:"/Contact",name:"Contact",component:x,meta:{color:"#16a085",ifg:!1}}]}),y=(n("uMhA"),n("Pipe"),n("D4uH"));i.a.component("icon",y.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:k,components:{App:s},template:"<App/>"})},NiYt:function(t,e){},Pipe:function(t,e){},Q9yR:function(t,e){},l2Qv:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.72962fbd17e9d3d8197c.js.map
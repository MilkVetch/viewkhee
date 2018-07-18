webpackJsonp([0],{"0xHh":function(t,e){},"63W+":function(t,e){},B0V3:function(t,e){},CUMA:function(t,e){},D4uH:function(t,e,n){"use strict";var i={},o={name:"icon",props:{name:{type:String,validator:function(t){return!t||t in i||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,n,i){var o="fa-"+(r++).toString(16);return e[i]=o,' id="'+o+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,n,i,o){var r=n||o;return r&&e[r]?"#"+e[r]:t}),t}},mounted:function(){var t=this;if(this.name||0!==this.$children.length){if(!this.icon){var e=0,n=0;this.$children.forEach(function(i){i.outerScale=t.normalizedScale,e=Math.max(e,i.width),n=Math.max(n,i.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),i[e]=n}},icons:i},r=870711;var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,i){return n("path",t._b({key:"path-"+i},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,i){return n("polygon",t._b({key:"polygon-"+i},"polygon",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var s=n("VU/8")(o,a,!1,function(t){n("EMrj")},null,null);e.a=s.exports},DbTK:function(t,e){},EMrj:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o=(n("8AWp"),n("+NLg"),n("7mFz"),n("4M9W"),n("15Ef"),{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.nav,function(e){return n("li",{key:e.text,staticClass:"hvr-underline-reveal",attrs:{to:e.link}},[n("router-link",{attrs:{to:e.link}},[n("i",{class:e.icon}),t._v(" "),n("span",[t._v(t._s(e.text))])])],1)}))},staticRenderFns:[]});var r={name:"App",data:function(){return{menu:"Discover More",pageColor:this.$route.meta.color,btnColor:this.$route.meta.color,textColor:"#ecf0f1",borderColor:this.$route.meta.color,openNav:!1}},methods:{mouseOver:function(){this.btnColor="#ecf0f1",this.textColor=this.$route.meta.color,this.borderColor="#ecf0f1"},mouseOut:function(){this.btnColor=this.$route.meta.color,this.textColor="#ecf0f1",this.borderColor=this.$route.meta.color},clickNavButton:function(){this.btnColor=this.$route.meta.color,this.borderColor=this.$route.meta.color,this.openNav=!1}},components:{Nav:n("VU/8")({name:"Nav",data:function(){return{isShow:!1,nav:[{icon:"fa fa-home",text:"Home",link:"/"},{icon:"fa fa-user",text:"About Me",link:"about"},{icon:"fas fa-medal",text:"Skills",link:"/Skills"},{icon:"fa fa-graduation-cap",text:"Education",link:"/Education"},{icon:"fa fa-briefcase",text:"Work Exp",link:"/WorkExp"},{icon:"fa fa-comment",text:"Contact",link:"/Contact"}],btnColor:this.$route.meta.color,fontColor:"#ecf0f1",borderT:"transparent"}}},o,!1,function(t){n("DbTK")},"data-v-cc8f935e",null).exports}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{background:t.$route.meta.color},attrs:{id:"app"}},[n("main",{style:{outlineColor:t.borderColor}},[n("router-view",{staticClass:"container"})],1),t._v(" "),n("button",{style:{background:t.btnColor,color:t.textColor},on:{mouseover:t.mouseOver,mouseout:t.mouseOut,click:function(e){t.openNav=!0}}},[t._v("\n  "+t._s(t.menu)+"\n  ")]),t._v(" "),n("transition",{attrs:{name:"nav"}},[t.openNav?n("nav",[n("div",{on:{click:t.clickNavButton}},[n("Nav")],1)]):t._e()])],1)},staticRenderFns:[]};var s=n("VU/8")(r,a,!1,function(t){n("nXPP")},null,null).exports,c=n("/ocq"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",{staticClass:"left"},[this._v("Hi")]),this._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"line1"},[this._v("I am Khee")]),this._v(" "),e("div",{staticClass:"line2"},[this._v("&")]),this._v(" "),e("div",{staticClass:"line3"},[this._v("I make Websites")])])])}]};var u=n("VU/8")({name:"Home"},l,!1,function(t){n("CUMA")},"data-v-791faa56",null).exports,h={name:"Gap",props:{starNumber:Number,starSize:Number,starColor:String},data:function(){return{stars:this.starNumber,size:this.starSize,color:this.starColor}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.stars,function(e){return n("i",{key:e,staticClass:"fas fa-star fa-spin",style:{fontSize:t.size+"rem",color:t.color}})}))},staticRenderFns:[]};var d={name:"About",data:function(){return{msg:"I'm a web designer / developer based in Auckland, New Zealand. I have a passion for web design and love to create for web and mobile devices.",imgSrc:"static/khee.png"}},components:{Gap:n("VU/8")(h,f,!1,function(t){n("oA6e")},"data-v-22c7db11",null).exports}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:t.imgSrc}}),t._v(" "),n("h1",[t._v("Kia Ora.")]),t._v(" "),n("p",[t._v(t._s(t.msg))]),t._v(" "),n("Gap",{attrs:{starNumber:5,starSize:.5,starColor:"#B7E0D7"}}),t._v(" "),n("h1",[t._v("What I can do.")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iure nulla? Possimus odit blanditiis reiciendis ullam tempore corporis, obcaecati consectetur quasi libero debitis! Vitae laudantium corrupti, dolorum aut illo sed.")]),t._v(" "),n("Gap",{attrs:{starNumber:5,starSize:.5,starColor:"#B7E0D7"}}),t._v(" "),n("h1",[t._v("I can help.")])],1)},staticRenderFns:[]};var v=n("VU/8")(d,p,!1,function(t){n("0xHh")},"data-v-6c1b29b0",null).exports,m={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var _=n("VU/8")({name:"Education"},m,!1,function(t){n("l2Qv")},"data-v-3ec881a3",null).exports,b={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var g=n("VU/8")({name:"Skills"},b,!1,function(t){n("63W+")},"data-v-4273bfce",null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var C=n("VU/8")({name:"WorkExp"},x,!1,function(t){n("B0V3")},"data-v-1d84b5aa",null).exports,k={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var S=n("VU/8")({name:"Contact"},k,!1,function(t){n("Q9yR")},"data-v-8d265c5a",null).exports;i.a.use(c.a);var y=new c.a({routes:[{path:"/",name:"Home",component:u,meta:{color:"#2c3e50",ifg:!0}},{path:"/About",name:"About",component:v,meta:{color:"#4AB19A",ifg:!1}},{path:"/Education",name:"Education",component:_,meta:{color:"#2980b9",ifg:!1}},{path:"/Skills",name:"Skills",component:g,meta:{color:"#8e44ad",ifg:!1}},{path:"/WorkExp",name:"WorkExp",component:C,meta:{color:"#27ae60",ifg:!1}},{path:"/Contact",name:"Contact",component:S,meta:{color:"#16a085",ifg:!1}}]}),E=(n("uMhA"),n("Pipe"),n("D4uH"));i.a.component("icon",E.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:y,components:{App:s},template:"<App/>"})},Pipe:function(t,e){},Q9yR:function(t,e){},l2Qv:function(t,e){},nXPP:function(t,e){},oA6e:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f215b20b6c41377f8b21.js.map
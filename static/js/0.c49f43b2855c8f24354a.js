webpackJsonp([0],{"0eNB":function(t,e){},GAEY:function(t,e,n){t.exports=n.p+"static/img/bar.3c14769.png"},RYrg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"leftMenu",props:["list"],data:function(){return{}},computed:{listResponse:function(){return this.list}},mounted:function(){},methods:{dragStart:function(t,e){console.log("start",t),t.dataTransfer.setData("type",e)},menuShow:function(t){t.isShow=!t.isShow},clickFun:function(t){"background"===t.type&&this.$emit("changeBackground",t.imageUrl)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu w100",attrs:{id:"menus"}},[n("div",{staticClass:"menu-list w100"},t._l(t.listResponse,function(e,i){return n("div",{key:i,staticClass:"menu-item w100"},[n("div",{staticClass:"ub ub-ac menu-item-top w100",on:{click:function(n){return t.menuShow(e)}}},[n("div",{staticClass:"menu-item-icon"},[n("i",{class:[e.icon]})]),t._v(" "),n("div",{staticClass:"ub ub-f1 line1 menu-item-title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"menu-item-right"},[n("i",{class:{"el-icon-arrow-down":!e.isShow,"el-icon-arrow-up":e.isShow}})])]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"item.isShow"}],staticClass:"w100 menu-inner-list",staticStyle:{"padding-left":"20px"}},t._l(e.childs,function(e,i){return n("li",{key:i,staticClass:"ub ub-pc"},["background"===e.type?n("div",{staticClass:"image-box",style:{"background-image":"url("+e.imageUrl+")"},on:{click:function(n){return t.clickFun(e)}}}):n("div",{staticClass:"image-box",style:{"background-image":"url("+e.imageUrl+")"},attrs:{draggable:"true"},on:{dragstart:function(n){return t.dragStart(n,e.type)}}})])}),0)])}),0)])},staticRenderFns:[]};var o={name:"edit",components:{leftMenu:n("C7Lr")(i,s,!1,function(t){n("V6w9")},"data-v-5376d288",null).exports},data:function(){return{previewDiolg:!1,currentIndex:0,image:n("S9lU"),menuData:[{title:"背景设置",isShow:!0,icon:"iconfont icon-charutupian",childs:[{imageUrl:n("S9lU"),type:"background"}]},{title:"图表组件",isShow:!0,icon:"iconfont icon-charutupian",childs:[{imageUrl:n("GAEY"),type:"bar"}]}],currentNodeIndex:"",currentNode:{},nodes:{bgInfo:{url:""},list:[]}}},mounted:function(){var t=this.$getsessionStorage("data");if(console.log("data",t),this.nodes=this.$deepCopy(t),t&&t.list.length>0){var e=this.$getsessionStorage("currentNode");this.nodes.list.some(function(t){return t.id===e.id})&&(this.currentNodeIndex=this.nodes.list.findIndex(function(t){return t.id===e.id}),this.$set(this,"currentNode",this.$deepCopy(e)),console.log("currentNode",this.currentNode),this.currentIndex=e.zIndex)}},methods:{genID:function(t){return Number(Math.random().toString().substr(3,t)+Date.now()).toString(36)},del:function(){var t=this;if(this.nodes.list.some(function(e,n){return e.id===t.currentNode.id})){var e=this.nodes.list.findIndex(function(e,n){return e.id===t.currentNode.id});this.nodes.list.splice(e,1),this.currentIndex=0,this.currentNodeIndex="",this.currentNode={},this.$setsessionStorage("data",this.nodes)}else this.$message({message:"请选中删除的节点",type:"warning"})},preview:function(){this.$setsessionStorage("data",this.nodes),this.$router.push({name:"screen"})},dropFun:function(t){var e=document.getElementById("edit-box").getBoundingClientRect().left,n=document.getElementById("edit-box").getBoundingClientRect().top,i=t.pageX-e-150,s=t.pageY-n-100;console.log(t),console.log(t.dataTransfer.getData("type")),this.nodes.list.push({id:this.genID(10),backgroundColor:"rgba(0,0,0,0)",type:"bar",left:i,top:s,width:300,height:200,isPrevent:!1,zIndex:this.currentIndex+1,apiInfo:{api_name:"",isApi:!1,x_field:"",y_field:""},option:{grid:{show:!0,backgroundColor:"#3f3f3f",borderColor:"#ccc",left:"2%",right:"0",top:"10%",bottom:"0",containLabel:!0},xAxis:{boundaryGap:!0,axisTick:{show:!0,alignWithLabel:!0},axisLine:{lineStyle:{color:"rgba(255,255,255,0.05)",type:"dashed"}},axisLabel:{formatter:function(t,e){return t.split(",")[0]},color:"#fff",fontSize:12,rotate:10},splitLine:{show:!1}},legend:{show:!0,right:"center",top:"top",left:"auto",bottom:"auto",icon:"circle",itemWidth:15,itemHeight:5,textStyle:{color:"rgba(255,255,255,1)",fontSize:10}}},seriesName:"数量",data:[{name:"上海4",value:300},{name:"北京4",value:30},{name:"广州4",value:90},{name:"深圳4",value:23},{name:"河南4",value:200}]})},switchBackground:function(t){this.nodes.bgInfo.url=t},save:function(){this.$setsessionStorage("data",this.nodes),this.$message({message:"本地保存成功",type:"success"})},onActivated:function(t,e){console.log(t,e),this.nodes.list=this.nodes.list.map(function(t){return t.isPrevent=!1,t}),this.currentIndex++,console.log("this.currentIndex",this.currentIndex),t.zIndex=this.currentIndex,this.currentNodeIndex=e,t.isPrevent=!0,this.currentNode=this.$deepCopy(t),this.$setsessionStorage("data",this.nodes),this.$setsessionStorage("currentNode",t)},onResize:function(t,e){e.left=t[0],e.top=t[1],e.width=t[2],e.height=t[3],this.currentNode.width=e.width,this.currentNode.height=e.height,this.currentNode.left=e.left,this.currentNode.top=e.top},onDrag:function(t,e){console.log("x",t[0]),console.log("y",t[1]),e.left=t[0],e.top=t[1],this.currentNode.left=e.left,this.currentNode.top=e.top},update_data:function(t){var e=this;console.log(t),this.nodes.list=this.nodes.list.map(function(n,i){return e.currentNodeIndex===i&&(n=e.$deepCopy(t)),n})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit"},[n("div",{staticClass:"ub ub-ac ub-pj top-tool"},[n("el-form",{ref:"currentNode",attrs:{model:t.currentNode,"label-width":"80px",inline:!0}},[n("el-form-item",{attrs:{label:"top:"}},[n("el-input",{staticStyle:{width:"60px"},attrs:{size:"mini"},model:{value:t.currentNode.top,callback:function(e){t.$set(t.currentNode,"top",e)},expression:"currentNode.top"}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n\t\t\t\tpx\n\t\t\t")])],1),t._v(" "),n("el-form-item",{attrs:{label:"left:"}},[n("el-input",{staticStyle:{width:"60px"},attrs:{size:"mini"},model:{value:t.currentNode.left,callback:function(e){t.$set(t.currentNode,"left",e)},expression:"currentNode.left"}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n\t\t\t\tpx\n\t\t\t")])],1),t._v(" "),n("el-form-item",{attrs:{label:"width:"}},[n("el-input",{staticStyle:{width:"60px"},attrs:{size:"mini"},model:{value:t.currentNode.width,callback:function(e){t.$set(t.currentNode,"width",e)},expression:"currentNode.width"}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n\t\t\t\tpx\n\t\t\t")])],1),t._v(" "),n("el-form-item",{attrs:{label:"height:"}},[n("el-input",{staticStyle:{width:"60px"},attrs:{size:"mini"},model:{value:t.currentNode.height,callback:function(e){t.$set(t.currentNode,"height",e)},expression:"currentNode.height"}}),t._v(" "),n("span",{staticClass:"unit"},[t._v("\n\t\t\t\tpx\n\t\t\t")])],1)],1),t._v(" "),n("div",[n("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:t.save}},[t._v("保存本地")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-delete"},on:{click:t.del}},[t._v("删 除")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-view"},on:{click:t.preview}},[t._v("预 览")])],1)],1),t._v(" "),n("div",{staticClass:"left-tool"},[n("leftMenu",{attrs:{list:t.menuData},on:{changeBackground:t.switchBackground}})],1),t._v(" "),n("div",{staticClass:"right-tool",attrs:{draggable:"false"}},["bar"===t.currentNode.type?n("div",{staticClass:"set-box"},[n("barSet",{attrs:{chartData:t.currentNode},on:{"change-data":t.update_data}})],1):t._e()]),t._v(" "),n("div",{staticClass:"edit-wrapper",style:{"background-image":"url("+t.nodes.bgInfo.url+")"}},[n("div",{staticClass:"edit-box",attrs:{id:"edit-box"},on:{drop:function(e){return t.dropFun(e)},dragover:function(t){t.preventDefault()}}},t._l(t.nodes.list,function(e,i){return n("vue-draggable-resizable",{key:e.id,attrs:{w:e.width,h:e.height,x:e.left,y:e.top,"min-width":50,"min-height":50,parent:!0,grid:[10,10],z:e.zIndex,"prevent-deactivation":e.isPrevent,active:e.isPrevent,"class-name":"dragging1"},on:{activated:function(n){return t.onActivated(e,i)},dragging:function(n){return t.onDrag(arguments,e)},resizing:function(n){return t.onResize(arguments,e)}}},["bar"===e.type?n("bar",{attrs:{chartData:e}}):t._e()],1)}),1)]),t._v(" "),t.previewDiolg?n("div",{staticClass:"fixed-box"}):t._e()])},staticRenderFns:[]};var a=n("C7Lr")(o,r,!1,function(t){n("0eNB")},"data-v-15ac7540",null);e.default=a.exports},S9lU:function(t,e,n){t.exports=n.p+"static/img/BG.03678d6.jpg"},V6w9:function(t,e){}});
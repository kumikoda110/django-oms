webpackJsonp([39],{LOok:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("0xDb"),i=a("nSkA"),o=a("+Yhu"),n={data:function(){return{rowdata:{},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,fullscreen:!0,help:!0},route_path:this.$route.path.split("/"),wikiid:this.$route.params.wikiid,rules:{rules:{title:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]}}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(o.c)(null,this.wikiid).then(function(e){t.rowdata=e.data})},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;Object(o.g)(e.rowdata.id,e.rowdata).then(function(t){e.$message({message:"恭喜你，更新成功",type:"success"}),e.$router.push("/wikis/opswikiadmin")}).catch(function(t){e.$message.error("更新失败"),console.log(t)})})},imgAdd:function(t,e){var a=this.$refs.md,o=new FormData;o.append("username",this.rowdata.create_user),o.append("file",e),o.append("create_time",Object(r.a)(e.lastModified)),o.append("type",e.type),o.append("archive",this.route_path[1]),Object(i.h)(o).then(function(e){a.$imglst2Url([[t,e.data.file]])})}}},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",{staticStyle:{"min-height":"800px"}},[a("el-form",{ref:"ruleForm",attrs:{model:t.rowdata,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:t.rowdata.title,callback:function(e){t.$set(t.rowdata,"title",e)},expression:"rowdata.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"正文",prop:"content"}},[a("mavon-editor",{ref:"md",staticStyle:{"min-height":"500px"},attrs:{code_style:"monokai",toolbars:t.toolbars},on:{imgAdd:t.imgAdd},model:{value:t.rowdata.content,callback:function(e){t.$set(t.rowdata,"content",e)},expression:"rowdata.content"}}),t._v(" "),a("a",{staticClass:"tips"},[t._v(" Tip：截图可以直接 Ctrl + v 粘贴到内容里面")])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("立即更新")])],1)],1)],1)],1)},l=[],c={render:s,staticRenderFns:l},d=c,u=a("VU/8"),m=u(n,d,!1,null,null,null);e.default=m.exports}});
webpackJsonp([5,59],{"0dAt":function(e,t,s){var o=s("E9W3");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);s("rjj0")("2203c5f7",o,!0)},E9W3:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,".jobname{font-weight:600;margin-left:20px}",""])},KnUO:function(e,t,s){"use strict";function o(e){s("0dAt")}Object.defineProperty(t,"__esModule",{value:!0});var n=s("fZjL"),r=s.n(n),a=s("Dd8w"),i=s.n(a),l=s("iVC1"),c=s("QmSG"),u=s("NYxO"),d={components:{},data:function(){return{job_id:this.$route.params.job_id,currentPage:1,listQuery:{limit:c.LIMIT,offset:"",search:"",job__id:""},pagesize:c.pagesize,pageformat:c.pageformat,tableData:[],tabletotal:0,DEPLOY_STATUS:{deploy:{text:"发布中",type:"primary",icon:"el-icon-loading"},success:{text:"发布成功",type:"success",icon:"el-icon-success"},failed:{text:"发布失败",type:"danger",icon:"el-icon-error"}},selectId:[],butstatus:!0,showresult:!1,job_results:[],check_job_status:""}},computed:i()({},Object(u.b)(["role"])),created:function(){this.fetchDeployJobData()},methods:{fetchDeployJobData:function(){var e=this;this.listQuery.job__id=this.job_id,Object(l.f)(this.listQuery).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count,e.tableData.map(function(e){return e.deploy_status}).indexOf("deploy")>-1?e.check_job_status=setInterval(function(){var t={job__id:e.job_id};Object(l.l)(t).then(function(t){0===t.data.count?(clearInterval(e.check_job_status),e.$emit("updateStatus"),e.fetchDeployJobData()):console.log("check job_status 3/s")})},3e3):clearInterval(e.check_job_status)})},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchDeployJobData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*c.LIMIT,this.fetchDeployJobData()},handleSelectionChange:function(e){this.selectId=[];for(var t=0,s=e.length;t<s;t++)this.selectId.push(e[t].id);this.selectId.length>0?this.butstatus=!1:this.butstatus=!0},deleteForm:function(){var e=this;clearInterval(this.check_job_status);for(var t=0,s=this.selectId.length;t<s;t++)Object(l.a)(this.selectId[t]).then(function(s){delete e.selectId[t]});setTimeout(this.fetchDeployJobData,1e3)},showJobResult:function(e){this.showresult=!0;var t=new Function("return "+e)(),s=[];r()(t).map(function(e){s.push({host:e,data:t[e]})}),this.job_results=s},searchClick:function(){this.fetchDeployJobData()}}},h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-card",[s("div",{staticClass:"table-button"},[s("a",{staticClass:"jobname"},[e._v("发布记录")]),e._v(" "),s("el-button",{staticStyle:{padding:"3px 0","margin-left":"20px"},attrs:{type:"danger",plain:"",icon:"el-icon-refresh"},on:{click:e.fetchDeployJobData}},[e._v("刷新\n      ")])],1),e._v(" "),s("div",{staticClass:"table-search"},[s("el-input",{attrs:{placeholder:"search"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.search,callback:function(t){e.$set(e.listQuery,"search",t)},expression:"listQuery.search"}},[s("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:e.searchClick},slot:"suffix"})])],1),e._v(" "),s("div",[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},["super"===e.role?s("el-table-column",{attrs:{type:"selection"}}):e._e(),e._v(" "),s("el-table-column",{attrs:{prop:"version",label:"发布版本"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{attrs:{slot:"reference"},slot:"reference"},[s("el-popover",{attrs:{placement:"top",width:"200",trigger:"hover",content:t.row.content}},[s("el-button",{attrs:{slot:"reference",size:"mini"},slot:"reference"},[e._v(e._s(t.row.version))])],1)],1)]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"deploy_status",label:"发布状态",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{attrs:{slot:"reference"},slot:"reference"},[s("el-button",{attrs:{plain:"",size:"mini",type:e.DEPLOY_STATUS[t.row.deploy_status].type,icon:e.DEPLOY_STATUS[t.row.deploy_status].icon}},[e._v("\n                "+e._s(e.DEPLOY_STATUS[t.row.deploy_status].text)+"\n              ")])],1)]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"env",label:"发布步骤"}}),e._v(" "),s("el-table-column",{attrs:{prop:"action_user",label:"发布人"}}),e._v(" "),s("el-table-column",{attrs:{prop:"create_time",label:"发布时间",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n              "+e._s(e._f("formatTime")(t.row.create_time))+"\n            ")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"success",size:"mini",disabled:!t.row.result},on:{click:function(s){e.showJobResult(t.row.result)}}},[e._v("结果\n            ")])]}}])})],1)],1),e._v(" "),s("div",{staticClass:"table-footer"},["super"===e.role?s("div",{staticClass:"table-button"},[s("el-button",{attrs:{type:"danger",icon:"delete",disabled:e.butstatus},on:{click:e.deleteForm}},[e._v("删除记录")])],1):e._e(),e._v(" "),s("div",{staticClass:"table-pagination"},[s("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:e.pageformat,total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])]),e._v(" "),s("el-dialog",{attrs:{visible:e.showresult},on:{"update:visible":function(t){e.showresult=t}}},[s("div",e._l(e.job_results,function(t){return s("div",{key:t.id,staticClass:"runlog"},[s("p",{staticClass:"host"},[e._v(e._s(t.host))]),e._v(" "),s("pre",[e._v(e._s(t.data))])])}))])],1)},p=[],b={render:h,staticRenderFns:p},_=b,f=s("VU/8"),m=o,v=f(d,_,!1,m,null,null);t.default=v.exports},N3IU:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,".foot_btn{float:right;margin-bottom:30px}.stepitem{margin-top:50px;min-height:200px}",""])},VIhp:function(e,t,s){var o=s("N3IU");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);s("rjj0")("18cc79ac",o,!0)},hB7h:function(e,t,s){"use strict";function o(e){s("VIhp")}Object.defineProperty(t,"__esModule",{value:!0});var n=s("BO1k"),r=s.n(n),a=s("Dd8w"),i=s.n(a),l=s("iVC1"),c=s("NYxO"),u=s("nSkA"),d=s("KnUO"),h={components:{jobRecord:d.default},data:function(){return{route_path:this.$route.path.split("/"),job_id:this.$route.params.job_id,versionForm:{version:"",content:""},ruleForm:{job:"",env:"",deploy_hosts:[],deploy_cmd:"",action_user:localStorage.getItem("username")},svnrules:{version:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},steps:[],cur_env:{},cmds:[],jobs:{},sendnotice:!0,hasversion:!1,stepForm:{cur_step:1,done:!1},onlyread:!1,checkAll:!0,checkedcmds:[]}},computed:i()({},Object(c.b)(["role"])),created:function(){this.fetchJobData()},methods:{fetchJobData:function(){var e=this;Object(l.k)(null,this.job_id).then(function(t){e.jobs=t.data,e.ruleForm.job=e.jobs.name;var s={job__id:e.job_id};Object(l.j)(s).then(function(t){e.steps=t.data});var o={job__id:e.job_id,level:e.jobs.cur_step};e.fetchJobenvData(o)})},fetchJobenvData:function(e){var t=this;Object(l.j)(e).then(function(e){t.cur_env=e.data[0],t.cur_env&&(t.ruleForm.env=t.cur_env.name,t.fetchDeploycmdData(t.cur_env.id))})},fetchDeploycmdData:function(e){var t=this,s={env__id:e};Object(l.i)(s).then(function(e){t.checkedcmds=t.cmds=e.data})},submitForm:function(e){var t=this;this.ruleForm.content=this.jobs.content,this.ruleForm.version=this.jobs.version,this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.ruleForm.deploy_hosts=t.cur_env.deploy_hosts.join();var s=!0,o=!1,n=void 0;try{for(var a,i=r()(t.checkedcmds);!(s=(a=i.next()).done);s=!0){var c=a.value;"svn"===t.ruleForm.env?t.ruleForm.deploy_cmd=c.deploy_cmd.replace(/\$\w+/,t.jobs.deploy_path)+" -r "+t.ruleForm.version:t.ruleForm.deploy_cmd=c.deploy_cmd,Object(l.o)(t.ruleForm).then(function(e){console.log(e.data.j_id),t.$refs.jobrecord.fetchDeployJobData()}).catch(function(e){t.$message.error("构建失败，请检查参数是否正确！"),console.log(e)})}}catch(e){o=!0,n=e}finally{try{!s&&i.return&&i.return()}finally{if(o)throw n}}})},changeCurstep:function(){var e=this;if(this.jobs.cur_step++,this.stepForm.done=this.jobs.done=!1,this.jobs.cur_step>this.jobs.total_step){if(this.jobs.cur_step=this.stepForm.cur_step=0,this.sendnotice){var t={action_user:"ITDept_SkypeID",title:"【"+this.jobs.name+"】更新",message:"版本号: "+this.jobs.version+"\n更新内容: "+this.jobs.content+"\n操作人: "+this.ruleForm.action_user};Object(u.h)(t)}Object(l.n)(this.job_id,this.stepForm).then(function(){e.$router.push("/jobs/jobs")})}else this.stepForm.cur_step=this.jobs.cur_step,Object(l.n)(this.job_id,this.stepForm).then(function(){e.fetchJobData()})},changeCurstepZero:function(){this.onlyread=this.stepForm.done=this.jobs.done=!1,this.jobs.cur_step=this.stepForm.cur_step=0,Object(l.n)(this.job_id,this.stepForm)},changeJobDone:function(){this.onlyread=this.stepForm.done=this.jobs.done=!0,Object(l.n)(this.job_id,this.stepForm)},saveVersion:function(e){var t=this;this.$refs[e].validate(function(e){e&&(Object(l.n)(t.job_id,t.versionForm),t.onlyread=t.stepForm.done=t.jobs.done=!0)})},handleCheckAllChange:function(e){this.checkedcmds=e?this.cmds:[]},handleCheckedcmdsChange:function(e){var t=e.length;this.checkAll=t===this.cmds.length}}},p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:10}},[s("el-card",[s("div",{attrs:{slot:"header"},slot:"header"},[s("a",{staticClass:"jobname"},[e._v("【"+e._s(e.jobs.name)+"】")])]),e._v(" "),[s("el-steps",{attrs:{active:e.jobs.cur_step,"process-status":"finish","finish-status":"success","align-center":""}},[s("el-step",{attrs:{title:"版本信息"}}),e._v(" "),e._l(e.steps,function(e){return s("el-step",{key:e.level,attrs:{title:e.name}})})],2),e._v(" "),s("div",{staticClass:"stepitem"},[0===e.jobs.cur_step?s("el-form",{ref:"versionForm",attrs:{model:e.versionForm,rules:e.svnrules,"label-width":"90px"}},[s("el-form-item",{attrs:{label:"发布版本",prop:"version"}},[s("el-input",{attrs:{disabled:e.onlyread},model:{value:e.versionForm.version,callback:function(t){e.$set(e.versionForm,"version",t)},expression:"versionForm.version"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"更新内容",prop:"content"}},[s("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10},disabled:e.onlyread},model:{value:e.versionForm.content,callback:function(t){e.$set(e.versionForm,"content",t)},expression:"versionForm.content"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.saveVersion("versionForm")}}},[e._v("Submit")])],1)],1):e._e(),e._v(" "),e.jobs.cur_step>0?s("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"90px"}},[s("el-form-item",{attrs:{label:"发布命令",prop:"deploy_cmd"}},[s("el-checkbox",{on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选\n                ")]),e._v(" "),s("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),s("el-checkbox-group",{on:{change:e.handleCheckedcmdsChange},model:{value:e.checkedcmds,callback:function(t){e.checkedcmds=t},expression:"checkedcmds"}},e._l(e.cmds,function(t){return s("el-checkbox",{key:t.deploy_cmd,attrs:{label:t}},[e._v(e._s(t.name))])}))],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("Deploy")])],1)],1):e._e()],1)],e._v(" "),s("hr",{staticClass:"heng"}),e._v(" "),s("div",{staticClass:"foot_btn"},[e.jobs.cur_step===e.jobs.total_step&&e.jobs.done?s("el-checkbox",{staticStyle:{"margin-right":"20px"},model:{value:e.sendnotice,callback:function(t){e.sendnotice=t},expression:"sendnotice"}},[e._v("发送通知")]):e._e(),e._v(" "),s("el-button",{attrs:{type:"danger",plain:""},on:{click:e.changeCurstepZero}},[e._v("Cancel")]),e._v(" "),e.jobs.cur_step===e.jobs.total_step?s("el-button",{attrs:{type:"success",disabled:!e.jobs.done},on:{click:e.changeCurstep}},[e._v("Complete\n          ")]):s("el-button",{attrs:{type:"primary",disabled:!e.jobs.done},on:{click:e.changeCurstep}},[e._v("Next")])],1)],2)],1),e._v(" "),s("el-col",{attrs:{span:14}},[s("job-record",{ref:"jobrecord",on:{updateStatus:e.changeJobDone}})],1)],1)],1)},b=[],_={render:p,staticRenderFns:b},f=_,m=s("VU/8"),v=o,j=m(h,f,!1,v,null,null);t.default=j.exports}});
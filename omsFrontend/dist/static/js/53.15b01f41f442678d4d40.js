webpackJsonp([53],{IwO3:function(t,e,r){"use strict";function s(t){r("K0Zt")}Object.defineProperty(e,"__esModule",{value:!0});var n=r("fZjL"),o=r.n(n),l=r("BO1k"),i=r.n(l),u=r("8TIX"),a=r("wLjJ"),c={components:{sesectHosts:u.default},data:function(){var t=this;return{ruleForm:{hosts:[],cmd:"ls /tmp",user:"admin"},rules:{cmd:[{required:!0,message:"请输入命令",trigger:"blur"},{validator:function(e,r,s){var n=1,o=!0,l=!1,u=void 0;try{for(var a,c=i()(t.denycmd);!(o=(a=c.next()).done);o=!0){var m=a.value;if(r.indexOf(m)>-1){n=0;var d=r.split(" ")[0];t.results=["&#x1f47f;你坏坏！命令【"+d+"】已进入黑名单"]}else n*=n}}catch(t){l=!0,u=t}finally{try{!o&&c.return&&c.return()}finally{if(l)throw u}}0===n?s(new Error(t.results)):s()},trigger:"blur"}]},commands:[{name:"连接数",cmd:"netstat -nt"},{name:"磁盘",cmd:"df -h"},{name:"内存",cmd:"free -m"},{name:"乘法口诀",cmd:'for ((i=1;i<=9;i++)); do for ((j=1;j<=i;j++)); do result=$(($i*$j));echo -n "$i"x"$j"=$result" ";done;echo;done'},{name:"关机",cmd:"init 0"},{name:"删除",cmd:"rm -rf /tmp"},{name:"移动",cmd:"mv aaa /tmp"},{name:"防火墙",cmd:"iptables -I INPUT -p tcp -j DORP"}],denycmd:["rm","rf","shutdown","reboot","init","halt","rmdir","mkdir","iptables","mv","wget","mk",">","dev","&","dd","^"],jid:"",job_results:void 0,running:!1,showresult:!1,cmdrun_result:"",selecthosts:[]}},created:function(){},methods:{submitForm:function(t){var e=this;this.results=[],this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;Object(a.c)(e.ruleForm).then(function(t){e.jid=t.data.results,console.log(e.jid),e.running=e.showresult=!0,e.cmdrun_result=setInterval(function(){console.log("check job_status 3/s"),e.getResult(e.jid)},3e3)})})},getResult:function(t){var e=this;Object(a.d)(t).then(function(t){var r=t.data.results,s=[];o()(r).map(function(t){s.push({host:t,data:r[t]})}),e.job_results=s,t.data.count>0&&(e.running=!1,clearInterval(e.cmdrun_result))})},getHosts:function(t){this.ruleForm.hosts=t},changeCmd:function(t){this.ruleForm.cmd=t}}},m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",{staticClass:"runcmd"},[r("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"选择主机",prop:"hosts"}},[r("sesect-hosts",{attrs:{selecthost:t.ruleForm.hosts},on:{gethosts:t.getHosts}})],1),t._v(" "),r("el-form-item",{attrs:{label:"命令列表"}},t._l(t.commands,function(e){return r("el-button",{key:e.id,attrs:{type:"danger",size:"small"},on:{click:function(r){t.changeCmd(e.cmd)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])})),t._v(" "),r("el-form-item",{attrs:{label:"执行命令",prop:"cmd"}},[r("el-input",{attrs:{placeholder:"防止恶意命令，暂时禁止直接输入"},model:{value:t.ruleForm.cmd,callback:function(e){t.$set(t.ruleForm,"cmd",e)},expression:"ruleForm.cmd"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("执行")]),t._v(" "),t.running?r("el-button",{attrs:{type:"success",loading:t.running}},[t._v("执行中")]):t._e(),t._v(" "),t.showresult&&!t.running?r("el-button",{attrs:{type:"success"}},[t._v("执行成功")]):t._e()],1),t._v(" "),t._l(t.job_results,function(e){return r("div",{key:e.id,staticClass:"runlog"},[r("p",{staticClass:"host"},[t._v(t._s(e.host))]),t._v(" "),r("pre",[t._v(t._s(e.data))])])})],2)],1)],1)},d=[],f={render:m,staticRenderFns:d},h=f,v=r("VU/8"),p=s,_=v(c,h,!1,p,null,null);e.default=_.exports},K0Zt:function(t,e,r){var s=r("pA0i");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r("rjj0")("f131728e",s,!0)},pA0i:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,".runcmd{width:80%}",""])}});
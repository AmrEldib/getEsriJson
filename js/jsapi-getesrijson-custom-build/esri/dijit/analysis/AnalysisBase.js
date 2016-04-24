//>>built
define("esri/dijit/analysis/AnalysisBase","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has dojo/json dojo/Deferred dojo/promise/all dojo/when dojo/data/ItemFileWriteStore dojo/string dojo/Evented dojo/_base/kernel dojo/Stateful ../../kernel ../../lang ../../request ../../tasks/Geoprocessor dojo/i18n!../../nls/jsapi ./utils ../../IdentityManager".split(" "),function(s,n,c,m,k,w,A,p,t,B,C,u,x,y,z,h,f,l,v,q,r){n=n([z,x],{declaredClass:"esri.dijit.analysis.AnalysisBase",
isOutputLayerItemUpdated:!1,analysisGpServer:null,toolName:null,portalUrl:null,jobParams:null,itemParams:null,gp:null,resultParameter:null,signInPromise:null,getResultLyrInfos:!1,checkCreditLimits:!1,_jobInfo:null,_popupInfo:null,_toolServiceUrl:null,_counter:null,constructor:function(a){this.isOutputLayerItemUpdated=!1;this._rids=[];this._counter=0;this._popupInfo=[];a.analysisGpServer?this._signIn(a.analysisGpServer):a.portalUrl&&(this.portalUrl=a.portalUrl,this._signIn(a.portalUrl,!0));this.i18n=
{};c.mixin(this.i18n,q.common);c.mixin(this.i18n,q.analysisTools);c.mixin(this.i18n,q.analysisMsgCodes)},execute:function(a){this.jobParams=a.jobParams;this.itemParams=this.jobParams.OutputName?a.itemParams:null;this.signInPromise.then(c.hitch(this,this._checkUser))},_checkUser:function(){var a;if(a=h.id.findCredential(this.portalUrl).userId)a=this.portalUrl+"/sharing/rest/community/users/"+a,l({url:a,content:{f:"json"}}).then(c.hitch(this,this._handleUserProfileResponse),c.hitch(this,function(a){this.emit("job-fail",
{message:a.message+(a.details?a.details.toString():""),jobParams:this.jobParams})}))},_handleUserProfileResponse:function(a){if(!f.isDefined(a)||!f.isDefined(a.orgId))this.emit("job-fail",{message:this.i18n.orgUsrMsg,jobParams:this.jobParams});else if(-1===m.indexOf(["account_admin","account_publisher","org_admin","org_publisher"],a.role))this.emit("job-fail",{message:this.i18n.pubRoleMsg,messageCode:"AB_0001",jobParams:this.jobParams});else if(f.isDefined(a.availableCredits)&&this.get("checkCreditLimits")){var b,
d={},e;for(b in this.jobParams)this.jobParams.hasOwnProperty(b)&&("object"===typeof this.jobParams[b]?d[b]=k.toJson(this.jobParams[b]):-1!==m.indexOf(["measurementtype"],b.toLowerCase())&&"StraightLine"!==this.jobParams[b]?(e=k.fromJson(this.jobParams[b]),d[b]=e?e.name.replace(/[\s~`!#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?]/g,""):"DrivingTime"):d[b]=this.jobParams[b]);this.getCreditsEstimate(this.toolName,d).then(c.hitch(this,function(b){(b=b&&b.cost||b.maximumCost)&&a.availableCredits>b?f.isDefined(this.itemParams)?
this._checkServiceName(a.orgId):(this._submitGpJob(),this.emit("start",this.jobParams)):this.emit("job-fail",{message:this.i18n.insufficientCreditsMsg,messageCode:"AB_0001",jobParams:this.jobParams})}))}else f.isDefined(this.itemParams)?this._checkServiceName(a.orgId):(this._submitGpJob(),this.emit("start",this.jobParams))},_checkServiceName:function(a){var b;h.id.findCredential(this.portalUrl);a=this.portalUrl+"/sharing/rest/portals/"+a+"/isServiceNameAvailable";b=k.fromJson(this.jobParams.OutputName);
this.isSingleTenant&&(f.isDefined(b.serviceProperties)&&f.isDefined(b.serviceProperties.name))&&(b.serviceProperties.name=b.serviceProperties.name.replace(/[\s~`!#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?]/g,"_"),this.jobParams.OutputName=k.toJson(b));l({url:a,content:{name:b.serviceProperties.name,type:"Feature Service",f:"json"}}).then(c.hitch(this,function(a){a.available?(this._createService(),this.emit("start",this.jobParams)):this.emit("job-fail",{message:this.i18n.servNameExists,type:"warning",messageCode:"AB_0002",
jobParams:this.jobParams})}),c.hitch(this,function(a){this.emit("job-fail",{message:a.message+(a.details?a.details.toString():""),jobParams:this.jobParams})}))},_createService:function(){var a,b,d;a=h.id.findCredential(this.portalUrl).userId;b=k.fromJson(this.jobParams.OutputName);a&&(d=this.itemParams.folder,a=this.portalUrl+"/sharing/rest/content/users/"+a+(d&&"/"!==d?"/"+d:"")+"/createService",b={createParameters:k.toJson({currentVersion:10.2,serviceDescription:"",hasVersionedData:!1,supportsDisconnectedEditing:!1,
hasStaticData:!0,maxRecordCount:2E3,supportedQueryFormats:"JSON",capabilities:"Query",description:"",copyrightText:"",allowGeometryUpdates:!1,syncEnabled:!1,editorTrackingInfo:{enableEditorTracking:!1,enableOwnershipAccessControl:!1,allowOthersToUpdate:!0,allowOthersToDelete:!0},xssPreventionInfo:{xssPreventionEnabled:!0,xssPreventionRule:"InputOnly",xssInputRule:"rejectInvalid"},tables:[],name:b.serviceProperties.name}),outputType:"featureService",f:"json"},l({url:a,content:b},{usePost:!0}).then(c.hitch(this,
this._submitGpJob),c.hitch(this,this._handleCreateServiceError)))},_handleCreateServiceError:function(a){this.emit("job-fail",{message:a.message+(a.details?a.details.toString():""),jobParams:this.jobParams})},_getSelf:function(a){return l({url:a+"/sharing/rest/portals/self",content:{culture:y.locale,f:"json"},callbackParamName:"callback",timeout:0},{})},_submitGpJob:function(a){var b;this.itemParams&&(this.currentGpItemId=a.itemId,b=k.fromJson(this.jobParams.OutputName),b.serviceProperties&&(b.serviceProperties.serviceUrl=
a.serviceurl),b.itemProperties={itemId:a.itemId},this.itemParams.folder&&(b.itemProperties.folderId=this.itemParams.folder),this.jobParams.OutputName=k.toJson(b));this.analysisGpServer?((!this._toolServiceUrl||!this.gp)&&this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName),this.gp.setUpdateDelay(3E3),this.gp.submitJob(this.jobParams,c.hitch(this,this._gpJobComplete),c.hitch(this,this._gpJobStatus),c.hitch(this,this._gpJobFailed)),this.emit("job-submit",this.jobParams)):this._getSelf(this.portalUrl).then(c.hitch(this,
function(a){this.analysisGpServer=a.helperServices.analysis&&a.helperServices.analysis.url?a.helperServices.analysis.url:null;this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName);this.gp.setUpdateDelay(3E3);this.gp.submitJob(this.jobParams,c.hitch(this,this._gpJobComplete),c.hitch(this,this._gpJobStatus),c.hitch(this,this._gpJobFailed));this.emit("job-submit",this.jobParams)}))},_updateItem:function(a){var b,d,e;if(b=h.id.findCredential(this.portalUrl).userId)return d=this.itemParams.folder,
b=this.portalUrl+"/sharing/rest/content/users/"+b+(d&&"/"!==d?"/"+d:"")+"/items/"+this.currentGpItemId+"/update",a&&(e=a.item.properties),f.isDefined(e)||(e={}),f.isDefined(e.jobUrl)||(e.jobUrl=this._toolServiceUrl+"/jobs/"+this._jobInfo.jobId,e.jobType="GPServer",e.jobId=this._jobInfo.jobId,e.jobStatus="processing",this.itemParams.properties=e),a=c.mixin({f:"json"},this.itemParams),a.properties&&(a.properties=k.toJson(a.properties)),a=l({url:b,content:a},{usePost:!0}),a.then(c.hitch(this,this._handleItemUpdate),
c.hitch(this,this._handleUpdateItemError)),a},_handleItemUpdate:function(a){this.isOutputLayerItemUpdated=!0},_handleItemDataUpdate:function(a){},_handleUpdateItemError:function(a){this.isOutputLayerItemUpdated=!0;this.emit("job-fail",{message:a.message+(a.details?a.details.toString():""),jobParams:this.jobParams})},_handleErrorResponse:function(a){this.emit("job-fail",a)},_refreshItem:function(){var a,b;if(a=h.id.findCredential(this.portalUrl).userId)return b=this.itemParams.folder,a=this.portalUrl+
"/sharing/rest/content/users/"+a+(b&&"/"!==b?"/"+b:"")+"/items/"+this.currentGpItemId+"/refresh",l({url:a,content:{f:"json"}},{usePost:!0})},_handleItemRefresh:function(a){},_readItem:function(){var a,b;if(a=h.id.findCredential(this.portalUrl).userId)return b=this.itemParams.folder,a=this.portalUrl+"/sharing/rest/content/users/"+a+(b&&"/"!==b?"/"+b:"")+"/items/"+this.currentGpItemId,a=l({url:a,content:{f:"json"}}),a.then(c.hitch(this,this._updateItem))},_gpJobStatus:function(a){a.jobParams=this.jobParams;
a.resultParameter=this.resultParameter;a.returnProcessInfo=this.jobParams.returnProcessInfo;a.getResultLyrInfos=this.getResultLyrInfos;a.currentGpItemId=this.currentGpItemId;a.itemParams=this.itemParams;"esriJobFailed"===a.jobStatus||"esriJobSucceeded"===a.jobStatus?(a.messages&&(a.message=this._buildErrorMsg(a)),this._checkTimer&&(clearInterval(this._checkTimer),this._checkTimer=null,this._gpJobComplete(a)),"esriJobFailed"===a.jobStatus&&this._deleteItem(!1)):"esriJobCancelled"===a.jobStatus&&(this.itemParams?
this._deleteItem(!0):this.emit("job-cancel",a));this.emit("job-status",a);this._jobInfo=a;this.itemParams&&!this.isOutputLayerItemUpdated&&this._readItem()},_updateRefreshItem:function(a){var b=[],d=a[0];b.push(this._refreshItem());b.push(this._readItem());t(b).then(c.hitch(this,function(a){d.outputLayerName=k.fromJson(this.jobParams.OutputName).serviceProperties.name;d.value.itemId=this.currentGpItemId;d.analysisInfo={toolName:this.toolName,jobParams:this.jobParams};this.emit("job-result",d)}),c.hitch(this,
this._handleDeleteItemError))},_gpJobComplete:function(a){var b;"esriJobSucceeded"===a.jobStatus&&(a.jobParams=this.jobParams,this.emit("job-success",a),t(this._getGpResultData(a)).then(c.hitch(this,function(d){d=m.filter(d,function(a){if(a.value&&!a.value.empty)return a});0===d.length?(this.currentGpItemId&&this._deleteItem(!1),this.emit("job-fail",{message:this.i18n.emptyResultInfoMsg,type:"warning",jobParams:this.jobParams})):(f.isDefined(this.itemParams)&&(this.itemParams.properties&&this.itemParams.properties.jobStatus&&
"processing"===this.itemParams.properties.jobStatus)&&(this.itemParams.properties.jobStatus="completed"),m.forEach(d,function(a){if(a.value.featureSet&&!a.value.url)a.value.featureSet.spatialReference=a.value.layerDefinition.spatialReference;else if(a.value.url&&-1!==a.value.url.indexOf("/FeatureServer/")&&a.value.layerInfo&&a.value.layerInfo.popupInfo){var b=a.value.url.match(/[0-9]+$/g)[0];this._popupInfo[b]=a.value.layerInfo.popupInfo}},this),b=d[0],this.jobParams.returnProcessInfo?this.gp.getResultData(a.jobId,
"ProcessInfo").then(c.hitch(this,function(a){var c=[];m.forEach(a.value,function(a){c.push(k.fromJson(a))},this);this.currentGpItemId?(this.itemParams.description=r.buildReport(c),this._updateRefreshItem(d)):(b.analysisReport=r.buildReport(c),this.emit("job-result",b))})):this.currentGpItemId?this._updateRefreshItem(d):this.emit("job-result",b))})))},_gpJobFailed:function(a){c.clone(a).jobParams=this.jobParams;this._checkTimer&&(clearInterval(this._checkTimer),this._checkTimer=null);a.messages&&(a.message=
this._buildErrorMsg(a));this.emit("job-fail",a)},_getGpResultData:function(a){var b=[],c=[];"string"===typeof this.resultParameter?c.push(this.resultParameter):this.resultParameter instanceof Array&&(c=this.resultParameter);m.forEach(c,function(c,d){b.push(this.gp.getResultData(a.jobId,c))},this);return b},cancel:function(a){this.gp.cancelJob(a.jobId).then(c.hitch(this,function(a){"esriJobCancelled"===a.jobStatus&&(this.itemParams?this._deleteItem(!0):this.emit("job-cancel",a))}),function(a){})},
checkJobStatus:function(a){this.signInPromise.then(c.hitch(this,function(){this.gp.setUpdateDelay(3E3);this._checkTimer=setInterval(c.hitch(this,this._checkStatus,a,c.hitch(this,this._gpJobStatus),c.hitch(this,this._gpJobFailed)),3E3)}))},_checkStatus:function(a,b,c){this.gp.checkJobStatus(a,b,c)},_deleteItem:function(a){var b,d;if((b=h.id.findCredential(this.portalUrl).userId)&&this.itemParams)d=f.isDefined(this.itemParams.folder)?this.itemParams.folder:"",b=this.portalUrl+"/sharing/rest/content/users/"+
b+(d&&"/"!==d?"/"+d:"")+"/items/"+this.currentGpItemId+"/delete",l({url:b,content:{f:"json"}},{usePost:!0}).then(c.hitch(this,this._handleItemDelete,a),c.hitch(this,this._handleDeleteItemError))},_handleItemDelete:function(a,b){a&&this.emit("job-cancel",b)},_handleDeleteItemError:function(a){this.emit("job-fail",{message:a.message+(a.details?a.details.toString():""),jobParams:this.jobParams})},_initFolderStore:function(a,b){this._fportal=this.portalSelf?new a.Portal({url:this.portalUrl,self:this.portalSelf}):
new a.Portal(this.portalUrl);this._fportal.signIn().then(c.hitch(this,function(a){this.portalUser=a;this.portalUser.getFolders().then(c.hitch(this,function(a){a=r.createFolderStore(a,this.portalUser.username);b.resolve(a)}))}))},getFolderStore:function(){var a=new p,b,d,e,g;this.folderStore?a.resolve(this.folderStore):this.signInPromise.then(c.hitch(this,function(c){b=["../../arcgis/Portal"];d=this._counter++;e=this;this._rids&&this._rids.push(d);s(b,function(b){g=e._rids?m.indexOf(e._rids,d):-1;
-1!==g&&(e._rids.splice(g,1),e._initFolderStore(b,a))})}));return a},_checkToolUrl:function(){var a=new p;this.analysisGpServer?((!this._toolServiceUrl||!this.gp)&&this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName),a.resolve({success:!0})):this._getSelf(this.portalUrl).then(c.hitch(this,function(b){(this.analysisGpServer=b.helperServices.analysis&&b.helperServices.analysis.url?b.helperServices.analysis.url:null)&&this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName);a.resolve({success:!0})}));
return a},getCreditsEstimate:function(a,b){var d,e,g,f,h;e=new p;this._checkToolUrl().then(c.hitch(this,function(k){this._toolServiceUrl?h=this._toolServiceUrl:(f=this.portalUrl&&-1!==this.portalUrl.indexOf("dev")?"dev":this.portalUrl&&-1!==this.portalUrl.indexOf("qa")?"qa":"",h="http://analysis"+f+".arcgis.com/arcgis/rest/services/tasks/GPServer/"+this.toolName);d=h.replace("/"+a,"/exts/Estimate/"+a);g=c.mixin({f:"json"},b);l({url:d,content:g},{usePost:!0}).then(function(a){e.resolve(a)},function(a){e.resolve(a)})}));
return e},_signIn:function(a,b){var d,e,g,k,n;this.signInPromise=new p;b?(d=["../../arcgis/Portal"],e=this._counter++,g=this,this._rids&&this._rids.push(e),s(d,c.hitch(this,function(b){k=g._rids?m.indexOf(g._rids,e):-1;-1!==k&&(g._rids.splice(k,1),this._portal=this.portalSelf?new b.Portal({url:a,self:this.portalSelf}):new b.Portal(a),this._portal.signIn().then(c.hitch(this,function(a){this.portalUser=a;this._portal.helperServices&&this._portal.helperServices.analysis&&this._portal.helperServices.analysis.url?
(this.analysisGpServer=this._portal.helperServices.analysis.url,l({url:this.analysisGpServer,content:{f:"json"},callbackParamName:"callback"}).then(c.hitch(this,function(a){n=h.id.findCredential(this.analysisGpServer);this.signInPromise.resolve(n)}),c.hitch(this,function(a){this.signInPromise.reject(a)}))):this.signInPromise.resolve(a)}),c.hitch(this,this._handleSignInError)))}))):l({url:a,content:{f:"json"},callbackParamName:"callback"}).then(c.hitch(this,function(b){var d;b=h.id.findCredential(a);
f.isDefined(b)?(d=h.id.findServerInfo(this._toolServiceUrl),f.isDefined(d)&&f.isDefined(d.owningSystemUrl)&&(this.portalUrl=d.owningSystemUrl),this.signInPromise.resolve(b)):h.id.getCredential(a).then(c.hitch(this,function(b){b=h.id.findCredential(a);d=h.id.findServerInfo(this._toolServiceUrl);f.isDefined(d)&&f.isDefined(d.owningSystemUrl)&&(this.portalUrl=d.owningSystemUrl);this.signInPromise.resolve(b)}),c.hitch(this,this._handleSignInError))}),c.hitch(this,this._handleSignInError));return this.signInPromise},
_handleSignInError:function(a){this.emit("job-fail",{message:this.i18n.analysisSignInErrorMsg,messageCode:"AB_0003"});this.signInPromise.reject(a)},_buildErrorMsg:function(a){var b="",c=[],e,g,c=m.filter(a.messages,function(a){if(("esriJobMessageTypeError"===a.type||"esriJobMessageTypeWarning"===a.type)&&a.description&&-1!==a.description.indexOf("messageCode"))return a.description});0<c.length&&m.forEach(c,function(c){e=k.fromJson(c.description);g="";"esriJobMessageTypeWarning"===c.type&&(a.type=
"warning");e.messageCode?(g=f.isDefined(this.i18n[e.messageCode])?this.i18n[e.messageCode]:e.message,g=f.isDefined(e.params)?u.substitute(g,e.params):g,b+=g+"\x26nbsp;"):e.error&&e.error.messageCode&&(g=f.isDefined(this.i18n[e.error.messageCode])?this.i18n[e.error.messageCode]:e.error.message,g=f.isDefined(e.error.params)?u.substitute(g,e.error.params):g,b+=g+"\x26nbsp;")},this);return b},_toolServiceUrlSetter:function(a){this._toolServiceUrl=a;this.gp=new v(a)},_setToolServiceUrlAttr:function(a){this._toolServiceUrl=
a;this.gp=new v(a)},checkCreditLimitsAttr:function(a){this.checkCreditLimits=a}});w("extend-esri")&&c.setObject("dijit.analysis.AnalysisBase",n,h);return n});
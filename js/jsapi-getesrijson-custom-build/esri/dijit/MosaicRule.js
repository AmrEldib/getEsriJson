//>>built
require({cache:{"url:esri/dijit/templates/MosaicRule.html":'\x3cdiv data-dojo-attach-point\x3d"_mosaicRuleContainer" class\x3d"mosaicRuleContainer"\x3e\r\n  \x3ctable class\x3d"mosaicRuleTable"\x3e\r\n    \x3ccol class\x3d"mosaicRuleColumn1" /\x3e\r\n    \x3ccol class\x3d"mosaicRuleColumn2" /\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd colspan\x3d"2"\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"_mosaicRuleLabel"\x3e${_i18n.widgets.mosaicRule.mosaicMethodLabel}\x3c/label\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd colspan\x3d"2"\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"_mosaicRule" id\x3d"MosaicMethod" class\x3d"mosaicRuleSelectbox"\x3e\r\n          \x3coption\x3e\x26lt;MosaicDefault\x26gt;\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd colspan\x3d"3" class\x3d"mosaicParams"\x3e\r\n      \x3cdiv class\x3d"mosaicParams"\x3e\r\n        \x3ctable class\x3d"mosaicParamsTable" cellpadding\x3d"0" cellspacing\x3d"0" border\x3d"0"\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_orderFieldBlock"\x3e\r\n            \x3ctd\x3e\r\n              \x3clabel\x3e${_i18n.widgets.mosaicRule.orderFieldLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cselect data-dojo-attach-point\x3d"_orderField" class\x3d"mosaicRuleAttributeSelectbox"\x3e\r\n                \x3coption\x3e\x26lt;MosaicDefault\x26gt;\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_orderValueTextBlock"\x3e\r\n            \x3ctd\x3e\r\n              \x3clabel\x3e${_i18n.widgets.mosaicRule.orderValueLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cinput type\x3d"text" value\x3d"0" data-dojo-attach-point\x3d"_orderValueText" class\x3d"mosaicRuleOrderValueTextbox" /\x3e\r\n              \x3cinput type\x3d"text" data-dojo-attach-point\x3d"_orderValueDate" data-dojo-type\x3d"dijit/form/DateTextBox" class\x3d"mosaicRuleOrderValueDate" /\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_lockRasterBlock"\x3e\r\n            \x3ctd\x3e\r\n              \x3clabel\x3e${_i18n.widgets.mosaicRule.lockRasterIdLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cinput type\x3d"text" data-dojo-attach-point\x3d"_lockRaster" class\x3d"mosaicRuleLockRasterTextbox" /\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/DropDownButton" data-dojo-attach-point\x3d"_lockRasterIdSelect"\r\n                iconclass\x3d"mosaicRuleThreedotsIcon" class\x3d"mosaicRuleDropdownIcon" showlabel\x3d\'false\'\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/TooltipDialog" data-dojo-attach-point\x3d"_lockRasterTooltip"\x3e\r\n                  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" class\x3d"mosaicRuleLayerlistTooltip"\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"_layerList"\x3e\r\n                    \x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                  \x3ccenter\x3e\r\n                    \x3cinput data-dojo-attach-point\x3d"_aoi" type\x3d"button" value\x3d"${_i18n.widgets.mosaicRule.refreshLockRasterIdsLabel}"\x3e\x3c/input\x3e\x3c/center\x3e\r\n                  \x3c/br\x3e\r\n                  \x3clabel data-dojo-attach-point\x3d"_lockRasterMsg" /\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_descendingBlock"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3cinput type\x3d"checkbox" data-dojo-attach-point\x3d"_descending" name\x3d"descending"/\x3e\r\n              \x3clabel class\x3d"mosaicRuleDescendingLabel" for\x3d"descending"\x3e${_i18n.widgets.mosaicRule.descendingLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd colspan\x3d"3"\x3e\r\n        \x3cp/\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr data-dojo-attach-point\x3d"_mosaicOperatorLabelBlock"\x3e\r\n      \x3ctd colspan\x3d"2"\x3e\r\n        \x3clabel\x3e${_i18n.widgets.mosaicRule.mosaicOperatorLabel}\x3c/label\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr data-dojo-attach-point\x3d"_mosaicOperatorBlock"\x3e\r\n      \x3ctd colspan\x3d"2"\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"_mosaicOperator" class\x3d"mosaicRuleSelectbox"\x3e\r\n          \x3coption\x3e\x26lt;MosaicDefault\x26gt;\x3c/option\x3e\r\n          \x3coption\x3eFirst\x3c/option\x3e\r\n          \x3coption\x3eBlend\x3c/option\x3e\r\n          \x3coption\x3eLast\x3c/option\x3e\r\n          \x3coption\x3eMin\x3c/option\x3e\r\n          \x3coption\x3eMax\x3c/option\x3e\r\n          \x3coption\x3eMean\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"_whereLabel" for\x3d"where"\x3e\r\n          ${_i18n.widgets.mosaicRule.queryLabel}\x3c/label\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd\x3e\r\n        \x3cinput type\x3d"text" value\x3d"\x3cwhere\x3e" class\x3d"mosaicRuleQueryTextbox" data-dojo-attach-point\x3d"_where" /\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/DropDownButton" iconclass\x3d"mosaicRuleQueryIcon" showlabel\x3d\'false\'\r\n          data-dojo-attach-point\x3d"_queryBlock"\x3e\r\n          \x3cspan\x3eQuery\x3c/span\x3e\r\n          \x3cdiv data-dojo-type\x3d"dijit/TooltipDialog" data-dojo-attach-point\x3d"_queryTooltip"\x3e\r\n            \x3ctable class\x3d"mosaicRuleQueryTable"\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd\x3e\r\n                  \x3clabel\x3e${_i18n.widgets.mosaicRule.queryFieldLabel}\x3c/label\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd\x3e\r\n                  \x3cselect data-dojo-attach-point\x3d"_queryOrderField" class\x3d"mosaicRuleSelectbox"\x3e\r\n                    \x3coption\x3e\x26lt;None\x26gt;\x3c/option\x3e\r\n                  \x3c/select\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd\x3e\r\n                  \x3clabel\x3e${_i18n.widgets.mosaicRule.queryOperatorLabel}\x3c/label\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd\x3e\r\n                  \x3cselect data-dojo-attach-point\x3d"_queryOperator" class\x3d"mosaicRuleSelectbox"\x3e\r\n                    \x3coption\x3e\x26lt;None\x26gt;\x3c/option\x3e\r\n                    \x3coption\x3e\x3d\x3c/option\x3e\r\n                    \x3coption\x3e\x26lt;\x26gt;\x3c/option\x3e\r\n                    \x3coption\x3e\x26gt;\x3c/option\x3e\r\n                    \x3coption\x3e\x26gt;\x3d\x3c/option\x3e\r\n                    \x3coption\x3e\x26lt;\x3c/option\x3e\r\n                    \x3coption\x3e\x26lt;\x3d\x3c/option\x3e\r\n                    \x3coption\x3eLIKE\x3c/option\x3e\r\n                    \x3coption\x3eAND\x3c/option\x3e\r\n                    \x3coption\x3eOR\x3c/option\x3e\r\n                    \x3coption\x3eNOT\x3c/option\x3e\r\n                    \x3coption\x3eIS\x3c/option\x3e\r\n                  \x3c/select\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd\x3e\r\n                  \x3clabel\x3e${_i18n.widgets.mosaicRule.queryValueLabel}\x3c/label\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd\x3e\r\n                  \x3cinput type\x3d"text" data-dojo-attach-point\x3d"_queryValue" class\x3d"mosaicRuleTextbox" /\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/table\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd\x3e\r\n        \x3cinput type\x3d"button" data-dojo-attach-point\x3d"_apply" value\x3d"APPLY" size\x3d"15" class\x3d"mosaicRuleApplyButton" /\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/MosaicRule","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/array dojo/_base/Color dojo/_base/window dojo/dom-construct dojo/i18n!../nls/jsapi dojo/text!./templates/MosaicRule.html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/query dojo/number dojo/has dojo/date/locale dojo/dnd/Source ../kernel ../config ../layers/MosaicRule ../renderers/SimpleRenderer ../symbols/SimpleFillSymbol ../layers/GraphicsLayer ../tasks/ImageServiceIdentifyTask ../tasks/ImageServiceIdentifyParameters ../tasks/QueryTask ../tasks/query ../geometry/Polygon ../geometry/Point ../geometry/Extent dijit/Calendar dijit/form/DropDownButton dijit/form/CheckBox dijit/TooltipDialog dijit/layout/ContentPane".split(" "),
function(t,d,e,q,w,u,n,x,p,y,z,A,h,B,C,D,E,F,P,c,G,H,I,J,K,L,M,N,O,r){p=t([y,z,A],{declaredClass:"esri.dijit.MosaicRule",templateString:p,widgetsInTemplate:!0,layer:null,map:null,parent:null,hideApplyButton:!1,hideLockRasterSelectionIdButton:!1,_MosaicRuleObject:null,_fieldType:null,_identifyTask:null,_identify:null,_queryTask:null,_query:null,_graphicsLayer:null,_app:null,_initialExtent:null,_getpoint:null,_internalApplyMosaic:!1,_previousOrderFieldIndex:-1,constructor:function(a){t.safeMixin(this,
a);this._i18n=x;a=new G((new H).setColor(new w([150,150,150,0.5])));this._graphicsLayer=new I;this._graphicsLayer.setRenderer(a);this.map.addLayer(this._graphicsLayer)},startup:function(){this.inherited(arguments);var a=d.hitch(this,"_onclickTooltip"),b=d.hitch(this,"_oncloseTooltip"),g=d.hitch(this,"_onclickLayerlist"),c=d.hitch(this,"_OnOpenQueryPopup"),f=d.hitch(this,"_OnCloseQueryPopup"),s=d.hitch(this,"_OnChangeMosaicRule"),k=d.hitch(this,"_OnChangeOrderField"),m=d.hitch(this,"_OnChangeLockRaster"),
n=d.hitch(this,"_OnClickCurrentExtent"),l=d.hitch(this,"_OnChangeMosaicOperator"),h=d.hitch(this,"_OnClickDescending"),p=d.hitch(this,"_OnChangeQueryOrderField"),r=d.hitch(this,"_OnChangeQueryOperator"),t=d.hitch(this,"_OnKeyupQueryValue"),q=d.hitch(this,"_OnClickApplyMosaic"),u=d.hitch(this,"_OnClickResetMosaic");e.connect(this._lockRasterTooltip,"onclick",a);e.connect(this._lockRasterTooltip,"onClose",b);e.connect(this._layerList,"onclick",g);e.connect(this._queryTooltip,"onOpen",c);e.connect(this._queryTooltip,
"onClose",f);e.connect(this._mosaicRule,"onchange",s);e.connect(this._orderField,"onchange",k);e.connect(this._lockRaster,"onkeyup",m);e.connect(this._aoi,"onclick",n);e.connect(this._mosaicOperator,"onchange",l);e.connect(this._descending,"onclick",h);e.connect(this._queryOrderField,"onchange",p);e.connect(this._queryOperator,"onchange",r);e.connect(this._queryValue,"onkeyup",t);e.connect(this._apply,"onclick",q);e.subscribe("onMosaicRuleApply",q);e.subscribe("onMosaicRuleReset",u);this._descending.checked=
!1;this.hideApplyButton&&(this._apply.style.display="none");this.hideLockRasterSelectionIdButton&&(this._lockRasterIdSelect.domNode.style.display="none",this._lockRaster.style.width="100%");this._where.style.display="none";this._whereLabel.style.display="none";this._queryBlock.domNode.style.display="none"},_init:function(){this._MosaicRuleObject=new c;this._MosaicRuleObject.ascending=!0;this._getpoint=0;this._fieldType=[];this._app={};n.empty(this._layerList);this._orderValueDate.domNode.style.display=
"none";this._identifyTask=new J(this.layer.url);this._identify=new K;this._queryTask=new L(this.layer.url);this._query=new M},_buildRasterList:function(){this._lockRasterMsg.style.display="";this._lockRasterMsg.innerHTML=this._i18n.widgets.mosaicRule.lockRasterRequestMsg;var a=new r(this.layer.fullExtent.toJson());this.layer.fullExtent.contains(this.map.extent)&&(a=new r(this.map.extent.toJson()));10<=this.layer.version&&this.map.wrapAround180&&(a=a._normalize(!0));var b=N.fromExtent(a),a=new O((a.xmax-
a.xmin)/(2*this.map.width),(a.ymax-a.ymin)/(2*this.map.height),a.spatialReference),g=this._identifyTask,c=this._identify;10.1<this.layer.version&&(g=this._queryTask,c=this._query);c.geometry=b;c.pixelSize=a;c.returnGeometry=!1;var f=d.hitch(this,"_errorRastersInAOI"),s=d.hitch(this,"_showRastersInAOI");g.execute(c,function(a){s(a)},function(a){f(a)})},_setLayerAttr:function(a){this.inherited(arguments);this.layer=a;e.connect(this.layer,"onMosaicRuleChange",d.hitch(this,"_onLayerMosaicRuleChange"));
this._init();var b;for(b=this._mosaicRule.options.length-1;0<=b;b--)this._mosaicRule.remove(b);for(b=this._mosaicOperator.options.length-1;0<=b;b--)this._mosaicOperator.remove(b);for(b=this._orderField.options.length;0<b;)this._orderField.remove(b-1),b=this._orderField.options.length;this._orderValueText.value="";this._where.value="\x3cwhere\x3e";this._orderFieldBlock.style.display="";this._lockRasterBlock.style.display="";this._descendingBlock.style.display="";this._graphicsLayer.clear();b=d.hitch(this,
"_initUsingServiceInfo");this.layer.loaded?this._initUsingServiceInfo(this.layer):e.connect(this.layer,"onLoad",b)},_initUsingServiceInfo:function(a){if(!a.fields||0===a.fields.length)this._mosaicRuleLabel.innerHTML=this._i18n.widgets.mosaicRule.mosaicruleNotApplicable,this._hideAllControls();else{this._initialExtent=new r(a.extent);this.hideLockRasterSelectionIdButton||this._buildRasterList();this._populateOrderFieldsList(a.fields);a.sortField&&(this._MosaicRuleObject.sortField=a.sortField);a.sortValue&&
(this._orderValueText.value=a.sortValue,this._MosaicRuleObject.sortValue=a.sortValue,"esriFieldTypeDate"===this._fieldType[this._orderField.selectedIndex]&&this._orderValueDate.set("value",new Date(this._MosaicRuleObject.sortValue)));var b="None,ByAttribute,Center,Nadir,LockRaster,NorthWest,Seamline";a.hasOwnProperty("currentVersion")&&(10.1<=a.currentVersion&&1<a.allowedMosaicMethods.length)&&(b=a.allowedMosaicMethods,0>b.toLowerCase().indexOf("none")&&(b+=",None"));this._populateMosaicMethodsList(b);
(b=a.defaultMosaicMethod)||(b="northwest");this._MosaicRuleObject.method=this._esriStringMosaicMethodToEnum(b);this._populateMosaicOperatorsList(a.defaultMosaicMethod);this._MosaicRuleObject.operation=this._esriStringMosaicOperatorToEnum(a.mosaicOperator);this._MosaicRuleObject.ascending=!0;this.layer.mosaicRule&&this.layer.mosaicRule.multidimensionalDefinition&&(this._MosaicRuleObject.multidimensionalDefinition=this.layer.mosaicRule.multidimensionalDefinition);this._setDefaultValues(this.layer&&
this.layer.mosaicRule?this.layer.mosaicRule:this._MosaicRuleObject)}},_populateOrderFieldsList:function(a){a.sort(function(a,b){return a.alias.localeCompare(b.alias)});for(var b in a)if("esriFieldTypeDouble"===a[b].type||"esriFieldTypeSingle"===a[b].type||"esriFieldTypeInteger"===a[b].type||"esriFieldTypeSmallInteger"===a[b].type||"esriFieldTypeOID"===a[b].type||"esriFieldTypeDate"===a[b].type)this._orderField.add(new Option(a[b].alias,a[b].name),this._orderField.length),this._queryOrderField.add(new Option(a[b].name),
this._queryOrderField.length),this._fieldType.push(a[b].type);0===this._orderField.children.length&&this._orderField.add(new Option(this._i18n.widgets.mosaicRule.orderFieldNotFound,this._i18n.widgets.mosaicRule.orderFieldNotFound),!0)},_populateMosaicMethodsList:function(a){0<=a.toLowerCase().indexOf("none")&&this._addItemToMosaicMethodList("none");0<=a.toLowerCase().indexOf("byattribute")&&this._addItemToMosaicMethodList("byattribute");0<=a.toLowerCase().indexOf("center")&&this._addItemToMosaicMethodList("center");
0<=a.toLowerCase().indexOf("northwest")&&this._addItemToMosaicMethodList("northwest");0<=a.toLowerCase().indexOf("nadir")&&this._addItemToMosaicMethodList("nadir");0<=a.toLowerCase().indexOf("seamline")&&this._addItemToMosaicMethodList("seamline");0<=a.toLowerCase().indexOf("lockraster")&&this._addItemToMosaicMethodList("lockraster")},_addItemToMosaicMethodList:function(a){var b=this._mosaicMethodNameToAlias(a);this._mosaicRule.add(new Option(b,a),this._mosaicRule.length)},_populateMosaicOperatorsList:function(a){for(var b=
this._mosaicOperator.options.length,g=b?this._mosaicOperator.options[this._mosaicOperator.selectedIndex].value.toLowerCase():null,b=b-1;0<=b;b--)this._mosaicOperator.remove(b);!a||"seamline"!==a.toLowerCase()?(this._mosaicOperator.add(new Option(this._i18n.widgets.mosaicRule.firstAlias,"First"),0),this._mosaicOperator.add(new Option(this._i18n.widgets.mosaicRule.minAlias,"Min"),1),this._mosaicOperator.add(new Option(this._i18n.widgets.mosaicRule.maxAlias,"Max"),2),this._mosaicOperator.add(new Option(this._i18n.widgets.mosaicRule.averageAlias,
"Mean"),3),this._mosaicOperator.add(new Option(this._i18n.widgets.mosaicRule.sumAlias,"Sum"),4),this._mosaicOperator.add(new Option(this._i18n.widgets.mosaicRule.blendAlias,"Blend"),5)):(this._mosaicOperator.add(new Option(this._i18n.widgets.mosaicRule.firstAlias,"First"),0),this._mosaicOperator.add(new Option(this._i18n.widgets.mosaicRule.blendAlias,"Blend"),1));this._mosaicOperator.selectedIndex=0;if(null!==g)for(b=this._mosaicOperator.options.length-1;0<=b;b--)if(this._mosaicOperator.children[b].value.toLowerCase()===
g.toLowerCase()){this._mosaicOperator.selectedIndex=b;break}},_onLayerMosaicRuleChange:function(){this._internalApplyMosaic?this._internalApplyMosaic=!1:this._setDefaultValues(this.layer.mosaicRule)},_setDefaultValues:function(a){if(a){var b,g;if(a.sortField)for(b=0;b<this._orderField.children.length;b++)if(g=this._orderField.children[b].value,a.sortField.toLowerCase()===g.toLowerCase()){this._orderField.selectedIndex=b;this._OnChangeOrderField();break}a.sortValue&&(this._MosaicRuleObject.sortValue=
a.sortValue,this._MosaicRuleObject.sortField=a.sortField,this._orderValueText.value=a.sortValue,"esriFieldTypeDate"===this._fieldType[this._orderField.selectedIndex]&&this._orderValueDate.set("value",new Date(a.sortValue)));var c=this._esriEnumMosaicOperatorToString(a.operation);for(b=0;b<this._mosaicOperator.children.length;b++)if(g=this._mosaicOperator.children[b].value,c.toLowerCase()===g.toLowerCase()){this._mosaicOperator.selectedIndex=b;this._OnChangeMosaicOperator();break}c=this._esriEnumMosaicMethodToString(a.method);
for(b=0;b<this._mosaicRule.children.length;b++)if(g=this._mosaicRule.children[b].value,c.toLowerCase()===g.toLowerCase()){this._mosaicRule.selectedIndex=b;this._OnChangeMosaicRule();break}"lockraster"===c.toLowerCase()&&a.lockRasterIds&&(this._lockRaster.value=a.lockRasterIds);a.where&&(this._where.value=a.where);this._descending.checked=null!==a.ascending?!a.ascending:!1}},_selectAllCheckboxOnChange:function(){var a=d.hitch(this,"_checkboxOnChange"),b=h(".mosaicRuleLayerlistSelectCheckbox",this._layerList),
g=h(".mosaicRuleLayerlistCheckbox",this._layerList);b.forEach(function(b){b.checked?g.forEach(function(b){b.checked=!0;a()}):g.forEach(function(b){b.checked=!1;a()})})},_OnOpenQueryPopup:function(){this._where.disabled=!0},_OnCloseQueryPopup:function(){this._where.disabled=!1;if("\x3cNone\x3e"!==this._queryOrderField.options[this._queryOrderField.selectedIndex].text){try{this._queryOrderField.add(new Option("\x3cNone\x3e"),this._queryOrderField.options[0])}catch(a){this._queryOrderField.add(new Option("\x3cNone\x3e"),
0)}this._queryOrderField.selectedIndex=0}if("\x3cNone\x3e"!==this._queryOperator.options[this._queryOperator.selectedIndex].text){try{this._queryOperator.add(new Option("\x3cNone\x3e"),this._queryOperator.options[0])}catch(b){this._queryOperator.add(new Option("\x3cNone\x3e"),0)}this._queryOperator.selectedIndex=0}this._queryValue.value=""},_onclickLayerlist:function(){this._getpoint=1},_onclickTooltip:function(){0===this._getpoint&&(this._app.dndSource.selectNone(),this._graphicsLayer.clear());this._getpoint=
0},_oncloseTooltip:function(){this._graphicsLayer.clear()},_checkboxOnChange:function(){var a=[],b=0,g=0,c=h(".mosaicRuleLayerlistSelectCheckbox",this._layerList);h(".mosaicRuleLayerlistCheckbox",this._layerList).forEach(function(c){b++;!0===c.checked&&(g++,a.push(parseInt(c.id,10)))});g!==b&&c.forEach(function(a){a.checked=!1});g===b&&c.forEach(function(a){a.checked=!0});this._lockRaster.value=0===a.length?null:a},_selectRaster:function(){this._graphicsLayer.clear();var a=d.hitch(this,"_setGraphicQuery");
this._app.dndSource.getSelectedNodes().forEach(function(b){h(".mosaicRuleLayerlistCheckbox",b).forEach(function(b){a(b.id)})})},_setGraphicQuery:function(a){var b=d.hitch(this,"_addResultsToMap");this._query.geometry=this._initialExtent;this._query.returnGeometry=!0;this._query.where="OBJECTID \x3d "+a;this._queryTask.execute(this._query,b)},_addResultsToMap:function(a){var b=d.hitch(this,"_addEachFeatureToMap");a.features.forEach(b)},_addEachFeatureToMap:function(a){this._graphicsLayer.add(a)},_reorderRaster:function(){var a=
[];h(".mosaicRuleLayerlistCheckbox",this._layerList).forEach(function(b){!0===b.checked&&a.push(parseInt(b.id,10))});var b=a.length,c=0,d;for(d=0;d!==b/2;d++){var c=0,f;for(f=0;f<a.length-1;f++)if(a[a.length-1]===a[f]){a.splice(a.length-1,1);c=1;break}if(0===c)break}this._lockRaster.value=0===a.length?null:a},_showRastersInAOI:function(a){this._graphicsLayer.clear();var b;b=a&&a.catalogItems?a.catalogItems.features:a.features;if((!a||!b||1>b.length)&&!this.hideLockRasterSelectionIdButton)this._lockRasterMsg.innerHTML=
this._i18n.widgets.mosaicRule.lockRasterRequestNoRasterMsg;else{this._lockRasterMsg.innerHTML=this._i18n.widgets.mosaicRule.lockRasterRequestDoneMsg;this._lockRasterMsg.style.display="none";this._app.hasOwnProperty("dndSource")&&(this._app.dndSource.destroy(),n.empty(this._layerList));var c=[];this.layer&&(this.layer.mosaicRule&&this.layer.mosaicRule.lockRasterIds)&&(c=this.layer.mosaicRule.lockRasterIds);var v=[],f=[],s=d.hitch(this,"_checkboxOnChange"),k=d.hitch(this,"_selectAllCheckboxOnChange"),
m;for(m=0;m<b.length;m++){var h=n.create("div"),l=n.create("input");l.type="checkbox";l.className="mosaicRuleLayerlistCheckbox";l.id=b[m].attributes.OBJECTID;b[m].attributes.hasOwnProperty("checked")?b[m].attributes.checked?(l.checked=!0,v.push(b[m].attributes.OBJECTID)):l.checked=!1:(l.checked=0===c.length?!0:-1===q.indexOf(c,b[m].attributes.OBJECTID)?!1:!0,v.push(b[m].attributes.OBJECTID));e.connect(l,"onchange",s);h.appendChild(l);l=n.create("label");l.appendChild(u.doc.createTextNode(b[m].attributes.OBJECTID));
h.appendChild(l);f.push(h)}0<b.length&&(!b[0].attributes.hasOwnProperty("checked")&&0>=c.length)&&(this._lockRaster.value=v);this._MosaicRuleObject.ascending=!0;b=n.create("input");b.type="checkbox";b.id="select";b.name=this._i18n.widgets.mosaicRule.selectAllLabel;b.className="mosaicRuleLayerlistSelectCheckbox";a.hasOwnProperty("selectAll")?b.checked=a.selectAll?!0:!1:b.checked=!0;e.connect(b,"onchange",k);a=n.create("div");a.appendChild(b);k=n.create("label");k.appendChild(u.doc.createTextNode(this._i18n.widgets.mosaicRule.selectAllLabel));
a.appendChild(k);this._layerList.appendChild(a);this._app.dndSource=new E(this._layerList);this._app.dndSource.insertNodes(!1,f);f=d.hitch(this,"_reorderRaster");a=d.hitch(this,"_selectRaster");e.connect(this._app.dndSource,"onDndDrop",f);e.connect(this._app.dndSource,"onMouseUp",a)}},_errorRastersInAOI:function(){this._lockRasterMsg.innerHTML=this._i18n.widgets.mosaicRule.lockRasterRequestErrorMsg},_OnChangeLockRaster:function(){var a={},b=[],c=[],d=this._lockRaster.value.split(",");h(".mosaicRuleLayerlistCheckbox",
this._layerList).forEach(function(a){b.push(a.id);a.checked=!1});var f,e;if(0<d.length)for(f=0;f<d.length;f++)0!==d[f].length&&!isNaN(d[f])&&-1!==q.indexOf(b,d[f])&&(e={attributes:{}},e.attributes.OBJECTID=d[f],e.attributes.checked=1,c.push(e));for(f=0;f<b.length;f++){e=0;var k;for(k=0;k<c.length;k++)b[f]===c[k].attributes.OBJECTID&&(e=1);0===e&&(e={attributes:{}},e.attributes.OBJECTID=b[f],e.attributes.checked=0,c.push(e))}a.catalogItems={};a.catalogItems.features=c;a.selectAll=0;b.length===d.length&&
(a.selectAll=1);this._showRastersInAOI(a)},_OnClickCurrentExtent:function(){this._buildRasterList()},_OnClickApplyMosaic:function(){var a=[];if(this._MosaicRuleObject.method===c.METHOD_LOCKRASTER){var b=this._lockRaster.value.split(",");if(0<b.length){var d;for(d=0;d<b.length;d++)if(0===b[d].length||isNaN(b[d]))b.splice(d,1),d--;if(0===b.length)return;for(d=0;d<b.length;d++)a.push(parseInt(b[d],10));this._MosaicRuleObject.lockRasterIds=a}else return}this._MosaicRuleObject.method===c.METHOD_ATTRIBUTE&&
(this._MosaicRuleObject.sortValue="esriFieldTypeSmallInteger"===this._fieldType[this._orderField.selectedIndex]||"esriFieldTypeInteger"===this._fieldType[this._orderField.selectedIndex]||"esriFieldTypeDouble"===this._fieldType[this._orderField.selectedIndex]||"esriFieldTypeSingle"===this._fieldType[this._orderField.selectedIndex]?B.parse(this._orderValueText.value):D.format(this._orderValueDate.get("value"),{datePattern:"yyyy/MM/dd"}));this._MosaicRuleObject.where="\x3cwhere\x3e"!==this._where.value&&
1<this._where.value.length?this._where.value:null;this.layer.mosaicRule&&this.layer.mosaicRule.multidimensionalDefinition&&(this._MosaicRuleObject.multidimensionalDefinition=this.layer.mosaicRule.multidimensionalDefinition);this._internalApplyMosaic=!0;this.layer.setMosaicRule(this._MosaicRuleObject)},_OnClickResetMosaic:function(){this.layer&&(this.layer.mosaicRule=null,this._mosaicRule.options.length=0,this._orderField.options.length=0,this._previousOrderFieldIndex=-1,this._initUsingServiceInfo(this.layer),
this._OnClickApplyMosaic())},_OnChangeOrderField:function(){var a=this._orderField.children[this._orderField.selectedIndex].value;this._MosaicRuleObject.sortField=a;var b=this._fieldType[this._orderField.selectedIndex];switch(b){case "esriFieldTypeOID":case "esriFieldTypeInteger":case "esriFieldTypeSmallInteger":case "esriFieldTypeDouble":case "esriFieldTypeSingle":this._orderValueTextBlock.style.display="";this._showDateControl(!1);this._orderValueText.value=this._getDefaultOrderFieldValue(b,a);
break;case "esriFieldTypeDate":this._orderValueTextBlock.style.display="";this._showDateControl(!0);a=this._getDefaultOrderFieldValue(b,a);this._orderValueDate.set("value",a);break;default:this._orderValueTextBlock.style.display="none",this._showDateControl(!1)}this._previousOrderFieldIndex=this._orderField.selectedIndex},_getDefaultOrderFieldValue:function(a,b){if(0>this._previousOrderFieldIndex)return"esriFieldTypeDate"===a?this.layer.sortField&&b.toLowerCase()===this.layer.sortField.toLowerCase()&&
this.layer.sortValue?new Date(this.layer.sortValue):new Date:"0";var c=this._fieldType[this._previousOrderFieldIndex],d=this._orderValueText.value;"esriFieldTypeDate"===c&&(d=new Date(this._orderValueDate.get("value")));var e,h,k;this.layer.timeInfo&&(e=this.layer.timeInfo.startTimeField,h=this.layer.timeInfo.endTimeField,this.layer.timeInfo.timeExtent&&(k=this.layer.timeInfo.timeExtent.endTime));return c&&c!==a?this._isFieldNumeric(a)?"0":"esriFieldTypeDate"===a?e&&b.toLowerCase()===e.toLowerCase()||
h&&b.toLowerCase()===h.toLowerCase()?k:this.layer.sortField&&b.toLowerCase()===this.layer.sortField.toLowerCase()&&this.layer.sortValue?new Date(this.layer.sortValue):new Date:"":d},_isFieldNumeric:function(a){var b=!1;if("esriFieldTypeOID"===a||"esriFieldTypeInteger"===a||"esriFieldTypeSmallInteger"===a||"esriFieldTypeDouble"===a||"esriFieldTypeSingle"===a)b=!0;return b},_OnChangeMosaicOperator:function(){this._MosaicRuleObject.operation=this._esriStringMosaicOperatorToEnum(this._mosaicOperator.options[this._mosaicOperator.selectedIndex].value)},
_OnClickDescending:function(){this._MosaicRuleObject.ascending=!1;this._descending.checked||(this._MosaicRuleObject.ascending=!0)},_OnChangeMosaicRule:function(){var a=this._mosaicRule.options[this._mosaicRule.selectedIndex].value;this._populateMosaicOperatorsList(a);this._OnChangeMosaicOperator();this._graphicsLayer.clear();this._lockRasterBlock.style.display="";this._orderFieldBlock.style.display="";this._descendingBlock.style.display="";null===this._MosaicRuleObject.ascending&&(this._MosaicRuleObject.ascending=
!this._descending.checked);this._apply.value="APPLY";switch(a.toLowerCase()){case "none":this._MosaicRuleObject.lockRasterIds=null;this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display="none";this._orderFieldBlock.style.display="none";this._MosaicRuleObject.method=c.METHOD_NONE;break;case "byattribute":this._MosaicRuleObject.sortField=this._orderField.options[this._orderField.selectedIndex].value;
this._MosaicRuleObject.lockRasterIds=null;this._lockRasterBlock.style.display="none";this._OnChangeOrderField();this._MosaicRuleObject.method=c.METHOD_ATTRIBUTE;break;case "center":this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._MosaicRuleObject.lockRasterIds=null;this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display="none";this._orderFieldBlock.style.display="none";this._MosaicRuleObject.method=c.METHOD_CENTER;break;case "nadir":this._MosaicRuleObject.sortField=
null;this._MosaicRuleObject.sortValue=null;this._MosaicRuleObject.lockRasterIds=null;this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display="none";this._orderFieldBlock.style.display="none";this._MosaicRuleObject.method=c.METHOD_NADIR;break;case "viewpoint":this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._MosaicRuleObject.lockRasterIds=null;this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display="none";this._orderFieldBlock.style.display=
"none";this._MosaicRuleObject.method=c.METHOD_VIEWPOINT;break;case "lockraster":this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._orderValueTextBlock.style.display="none";this._orderFieldBlock.style.display="none";this._MosaicRuleObject.method=c.METHOD_LOCKRASTER;break;case "northwest":this._MosaicRuleObject.sortField=null;this._MosaicRuleObject.sortValue=null;this._MosaicRuleObject.lockRasterIds=null;this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display=
"none";this._orderFieldBlock.style.display="none";this._MosaicRuleObject.method=c.METHOD_NORTHWEST;break;case "seamline":this._MosaicRuleObject.ascending=null,this._MosaicRuleObject.sortField=null,this._MosaicRuleObject.sortValue=null,this._MosaicRuleObject.lockRasterIds=null,this._orderValueTextBlock.style.display="none",this._lockRasterBlock.style.display="none",this._orderFieldBlock.style.display="none",this._descendingBlock.style.display="none",this._MosaicRuleObject.method=c.METHOD_SEAMLINE}},
_OnChangeQueryOrderField:function(){this._where.value="";var a=this._queryOrderField.children[0].innerText;a||(a=this._queryOrderField.children[0].text);"\x3cNone\x3e"===a&&this._queryOrderField.remove(0);this._where.value=this._queryOrderField.options[this._queryOrderField.selectedIndex].text;"\x3cNone\x3e"!==this._queryOperator.options[this._queryOperator.selectedIndex].text&&(this._where.value=this._where.value+" "+this._queryOperator.options[this._queryOperator.selectedIndex].text);0<this._queryValue.value.length&&
(this._where.value=this._where.value+" "+this._queryValue.value)},_OnChangeQueryOperator:function(){this._where.value="";var a=this._queryOperator.children[0].innerText;a||(a=this._queryOperator.children[0].text);"\x3cNone\x3e"===a&&this._queryOperator.remove(0);"\x3cNone\x3e"!==this._queryOrderField.options[this._queryOrderField.selectedIndex].text&&(this._where.value=this._queryOrderField.options[this._queryOrderField.selectedIndex].text);this._where.value=this._where.value+" "+this._queryOperator.options[this._queryOperator.selectedIndex].text;
0<this._queryValue.value.length&&(this._where.value=this._where.value+" "+this._queryValue.value)},_OnKeyupQueryValue:function(){this._where.value="";"\x3cNone\x3e"!==this._queryOrderField.options[this._queryOrderField.selectedIndex].text&&(this._where.value=this._queryOrderField.options[this._queryOrderField.selectedIndex].text);"\x3cNone\x3e"!==this._queryOperator.options[this._queryOperator.selectedIndex].text&&(this._where.value=this._where.value+" "+this._queryOperator.options[this._queryOperator.selectedIndex].text);
this._where.value=this._where.value+" "+this._queryValue.value},_esriEnumMosaicMethodToString:function(a){var b="none";switch(a){case c.METHOD_ATTRIBUTE:b="byattribute";break;case c.METHOD_CENTER:b="center";break;case c.METHOD_LOCKRASTER:b="lockraster";break;case c.METHOD_NADIR:b="nadir";break;case c.METHOD_NORTHWEST:b="northwest";break;case c.METHOD_SEAMLINE:b="seamline";break;case c.METHOD_VIEWPOINT:b="viewpoint"}return b},_esriStringMosaicMethodToEnum:function(a){if(a){var b=c.METHOD_NONE;switch(a.toLowerCase()){case "byattribute":b=
c.METHOD_ATTRIBUTE;break;case "center":b=c.METHOD_CENTER;break;case "lockraster":b=c.METHOD_LOCKRASTER;break;case "nadir":b=c.METHOD_NADIR;break;case "northwest":b=c.METHOD_NORTHWEST;break;case "seamline":b=c.METHOD_SEAMLINE;break;case "viewpoint":b=c.METHOD_VIEWPOINT}return b}},_esriStringMosaicOperatorToEnum:function(a){if(a)switch(a.toLowerCase()){case "first":return c.OPERATION_FIRST;case "last":return c.OPERATION_LAST;case "max":return c.OPERATION_MAX;case "min":return c.OPERATION_MIN;case "blend":return c.OPERATION_BLEND;
case "mean":return c.OPERATION_MEAN;case "sum":return c.OPERATION_SUM}},_esriEnumMosaicOperatorToString:function(a){var b="first";switch(a){case c.OPERATION_FIRST:b="first";break;case c.OPERATION_LAST:b="last";break;case c.OPERATION_MAX:b="max";break;case c.OPERATION_MIN:b="min";break;case c.OPERATION_BLEND:b="blend";break;case c.OPERATION_MEAN:b="mean";break;case c.OPERATION_SUM:b="sum"}return b},_mosaicMethodNameToAlias:function(a){if(a){var b="";switch(a.toLowerCase()){case "none":b=this._i18n.widgets.mosaicRule.noneAlias;
break;case "byattribute":b=this._i18n.widgets.mosaicRule.byAttributeAlias;break;case "center":b=this._i18n.widgets.mosaicRule.centerAlias;break;case "lockraster":b=this._i18n.widgets.mosaicRule.lockRasterAlias;break;case "nadir":b=this._i18n.widgets.mosaicRule.nadirAlias;break;case "northwest":b=this._i18n.widgets.mosaicRule.northWestAlias;break;case "seamline":b=this._i18n.widgets.mosaicRule.seamlineAlias;break;case "viewpoint":b=this._i18n.widgets.mosaicRule.viewPointAlias}return b}},_hideAllControls:function(){this._mosaicRule.style.display=
"none";this._mosaicOperatorLabelBlock.style.display="none";this._mosaicOperatorBlock.style.display="none";this._orderFieldBlock.style.display="none";this._orderValueTextBlock.style.display="none";this._lockRasterBlock.style.display="none";this._descendingBlock.style.display="none";this._apply.style.display="none"},_showDateControl:function(a){a?(this._orderValueDate.domNode.style.display="",this._orderValueText.style.display="none"):(this._orderValueDate.domNode.style.display="none",this._orderValueText.style.display=
"")}});C("extend-esri")&&d.setObject("dijit.MosaicRule",p,F);return p});
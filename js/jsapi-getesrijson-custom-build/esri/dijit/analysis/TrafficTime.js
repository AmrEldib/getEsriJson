//>>built
require({cache:{"url:esri/dijit/analysis/templates/TrafficTime.html":'\x3ctable style\x3d"width:100%" class\x3d"esriFormTable"\x3e\r\n  \x3ctbody\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd class\x3d"shortTextInput" colspan\x3d"3" style\x3d"padding-bottom:0;"\x3e\r\n        \x3cdiv class\x3d"esriLeadingMargin1"\x3e\r\n          \x3clabel\x3e\r\n            \x3cinput id\x3d"${id}_usetrafficcheck" type\x3d"checkbox" data-dojo-attach-point\x3d"_useTrafficCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-event\x3d"onChange:_handleUseTrafficCheckChange" data-dojo-props\x3d"checked:false" style\x3d"margin-bottom:0.25em;"\x3e\r\n            \x3c/input\x3e\r\n            \x3clabel for\x3d"${id}_usetrafficcheck" data-dojo-attach-point\x3d"_useTrafficLabel" class\x3d"esriLeadingMargin025"\x3e${i18n.trafficLabel}\x3c/label\x3e\r\n         \x3c/label\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr data-dojo-attach-point\x3d"_liveTrafficRadioRow"\x3e\r\n      \x3ctd colspan\x3d"3"\x3e\r\n        \x3cdiv class\x3d"esriLeadingMargin2"\x3e\r\n          \x3clabel\x3e\r\n            \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"trafficSelect" data-dojo-attach-event\x3d"onChange:_handleLifeTrafficRadioChange"  data-dojo-props\x3d"checked:true" data-dojo-attach-point\x3d"_liveTrafficRadioBtn"\x3e\x3c/input\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_liveTraficLabel"\x3e${i18n.liveTrafficLabel}\x3c/label\x3e\r\n          \x3c/label\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr data-dojo-attach-point\x3d"_liveTrafficCtrlRow"\x3e\r\n      \x3ctd colspan\x3d"3"\x3e\r\n        \x3cdiv class\x3d"esriLeadingMargin2 longInput" value\x3d"0" data-dojo-props\x3d"intermediateChanges:true,showButtons:false,minimum:0, maximum:12,discreteValues:49" data-dojo-attach-point\x3d"_liveTimeSlider" data-dojo-attach-event\x3d"onChange:_handleLiveTimeSliderChange" type\x3d"range" data-dojo-type\x3d"dijit/form/HorizontalSlider"\x3e\r\n          \x3cdiv data-dojo-type\x3d"dijit/form/HorizontalRule"  style\x3d"width:86%" data-dojo-props\x3d"container: \'topDecoration\',count: 13,style: \'height: 0.55em;\'"\x3e\x3c/div\x3e\r\n           \x3col data-dojo-type\x3d"dijit/form/HorizontalRuleLabels"  data-dojo-attach-point\x3d"_liveTimeRuleLabels" data-dojo-props\x3d"container: \'bottomDecoration\', count:5" style\x3d"margin-top:5px;height: 1em;"\x3e\r\n              \x3cli\x3e${i18n.nowLabel}\x3c/li\x3e\r\n              \x3cli\x3e+3\x3c/li\x3e\r\n              \x3cli\x3e+6\x3c/li\x3e\r\n              \x3cli\x3e+9\x3c/li\x3e\r\n              \x3cli\x3e+12 ${i18n.hoursSmall}\x3c/li\x3e\r\n            \x3c/ol\x3e  \r\n        \x3c/div\x3e\r\n         \x3c!-- create rules and labels below horizontal slider --\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e    \r\n    \x3ctr data-dojo-attach-point\x3d"_typicalTrafficRadioRow"\x3e\r\n      \x3ctd colspan\x3d"3"\x3e\r\n        \x3cdiv class\x3d"esriLeadingMargin2"\x3e\r\n          \x3clabel\x3e\r\n            \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"trafficSelect" data-dojo-attach-point\x3d"_typicalTrafficRadioBtn"\x3e\x3c/input\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_typicalTraficLabel"\x3e${i18n.typicalTraffCdtnLabel}\x3c/label\x3e\r\n          \x3c/label\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr data-dojo-attach-point\x3d"_driveTimeRow"\x3e\r\n      \x3ctd colspan\x3d"3" style\x3d"padding-top:0;padding-bottom:0"\x3e\r\n        \x3cselect class\x3d"esriLeadingMargin2 mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_trafficDay" style\x3d"width:46%;table-layout:fixed;"\x3e\r\n          \x3coption value\x3d"1/1/1990"\x3e${i18n.monday}\x3c/option\x3e\r\n          \x3coption value\x3d"1/2/1990"\x3e${i18n.tuesday}\x3c/option\x3e\r\n          \x3coption value\x3d"1/3/1990"\x3e${i18n.wednesday}\x3c/option\x3e\r\n          \x3coption value\x3d"1/4/1990"\x3e${i18n.thursday}\x3c/option\x3e\r\n          \x3coption value\x3d"1/5/1990"\x3e${i18n.friday}\x3c/option\x3e\r\n          \x3coption value\x3d"1/6/1990"\x3e${i18n.saturday}\x3c/option\x3e\r\n          \x3coption value\x3d"1/7/1990"\x3e${i18n.sunday}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n        \x3cinput  type\x3d"text" data-dojo-type\x3d"dijit/form/TimeTextBox" data-dojo-props\x3d"value:\'T12:00:00\', required:true,intermediateChanges:true,constraints:{formatLength:\'short\',selector:\'time\'}"  data-dojo-attach-point\x3d"_trafficTime" style\x3d"height:24px;width:37%;margin-top:0;"\x3e\r\n        \x3c/input\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr data-dojo-attach-point\x3d"_availabilityRow"\x3e\r\n      \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n        \x3ca class\x3d"esriLeadingMargin3 esriSmallFont" href\x3d"http://www.arcgis.com/home/item.html?id\x3db7a893e8e1e04311bd925ea25cb8d7c7" target\x3d"_available"\x3e${i18n.seeAvailability}\x3c/a\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/tbody\x3e\r\n\x3c/table\x3e\r\n'}});
define("esri/dijit/analysis/TrafficTime","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/event dojo/_base/kernel dojo/dom-attr dojo/string dojo/dom-style dojo/dom-class dojo/has dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/form/CheckBox dijit/form/RadioButton dijit/form/TimeTextBox dijit/form/Select dijit/form/HorizontalSlider dijit/form/HorizontalRule dijit/form/HorizontalRuleLabels ../../kernel dojo/i18n!../../nls/jsapi dojo/text!./templates/TrafficTime.html".split(" "),
function(f,l,g,v,w,x,h,d,e,b,m,n,p,q,r,s,y,z,A,B,C,D,E,t,k,u){f=l([n,p,q,r,s],{declaredClass:"esri.dijit.analysis.TrafficTime",i18n:null,templateString:u,widgetsInTemplate:!0,_liveOffset:0,showLiveTraffic:!0,postMixInProperties:function(){this.i18n={};g.mixin(this.i18n,k.common);g.mixin(this.i18n,k.driveTimes)},postCreate:function(){this.inherited(arguments);this._handleUseTrafficCheckChange(this._useTrafficCheck.get("value"))},_handleUseTrafficCheckChange:function(a){this._typicalTrafficRadioBtn.set("disabled",
!a);this._liveTrafficRadioBtn.set("disabled",!a);a?this._handleLifeTrafficRadioChange(this._liveTrafficRadioBtn.get("value")&&this.showLiveTraffic):(this._liveTimeSlider.set("disabled",!a),this._trafficTime.set("disabled",!a),this._trafficDay.set("disabled",!a));a?(b.remove(this._liveTraficLabel,"esriAnalysisTextDisabled"),b.remove(this._typicalTraficLabel,"esriAnalysisTextDisabled"),b.remove(this._liveTimeRuleLabels,"esriAnalysisTextDisabled")):(b.add(this._liveTraficLabel,"esriAnalysisTextDisabled"),
b.add(this._typicalTraficLabel,"esriAnalysisTextDisabled"),b.add(this._liveTimeRuleLabels,"esriAnalysisTextDisabled"))},_handleLifeTrafficRadioChange:function(a){this._liveTimeSlider.set("disabled",!a);this._trafficTime.set("disabled",a);this._trafficDay.set("disabled",a)},_setDisabledAttr:function(a){this._useTrafficCheck.set("disabled",a)},_setResetAttr:function(a){a&&this._useTrafficCheck.set("checked",!1)},_getCheckedAttr:function(){return this._useTrafficCheck.get("checked")},_setCheckedAttr:function(a){this._useTrafficCheck.set("checked",
a)},_getTimeOfDayAttr:function(){var a;this._liveTrafficRadioBtn.get("value")?a=(new Date).getTime()+6E4*this._liveOffset:(a=new Date(this._trafficDay.get("value")),a=a.getTime()-6E4*a.getTimezoneOffset()+this._trafficTime.get("value").getTime()-6E4*this._trafficTime.get("value").getTimezoneOffset());return a},_getTimeZoneForTimeOfDayAttr:function(){return this._liveTrafficRadioBtn.get("value")?"UTC":""},_handleLiveTimeSliderChange:function(a){var b,c;b=60*a;a=Math.floor(a);c=b-60*a;a=0===a&&0===
c?this.i18n.liveTrafficLabel:0===a?d.substitute(this.i18n.liveTimeMinutesLabel,{minute:c}):1===a?0===c?this.i18n.liveSingularHourTimeLabel:d.substitute(this.i18n.liveSingularTimeLabel,{minute:c}):0===c?d.substitute(this.i18n.liveTimeHoursLabel,{hour:a,minute:c}):d.substitute(this.i18n.liveTimeLabel,{hour:a,minute:c});this._liveOffset=b;h.set(this._liveTraficLabel,"innerHTML",a)},_setShowLiveTrafficAttr:function(a){this._set("showLiveTraffic",a);this._liveTrafficRadioRow&&e.set(this._liveTrafficRadioRow,
"display",a?"table-row":"none");this._liveTrafficCtrlRow&&e.set(this._liveTrafficCtrlRow,"display",a?"table-row":"none");this._typicalTrafficRadioRow&&e.set(this._typicalTrafficRadioRow,"display",a?"table-row":"none");this._typicalTrafficRadioBtn&&this._typicalTrafficRadioBtn.set("checked",!a);this._availabilityRow&&e.set(this._availabilityRow,"display",a?"table-row":"none");this._useTrafficLabel&&h.set(this._useTrafficLabel,"innerHTML",this.i18n.typicalTraffCdtnLabel)}});m("extend-esri")&&g.setObject("dijit.analysis.TrafficTime",
f,t);return f});
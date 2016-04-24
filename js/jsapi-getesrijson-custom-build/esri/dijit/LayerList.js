//>>built
require({cache:{"url:esri/dijit/LayerList/templates/LayerList.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n  \x3cdiv role\x3d"menu" data-dojo-attach-point\x3d"_container" class\x3d"${css.container}"\x3e\r\n    \x3cul role\x3d"group" class\x3d"${css.list}" data-dojo-attach-point\x3d"_layersNode"\x3e\x3c/ul\x3e\r\n    \x3cdiv class\x3d"${css.noLayersText}" data-dojo-attach-point\x3d"_noLayersNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/LayerList","dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/_base/kernel ../kernel dojo/uacss dojo/Deferred dojo/on dojo/query dojo/dom-class dojo/dom-style dojo/dom-construct dojo/dom-attr dojo/i18n!../nls/jsapi dijit/a11yclick dijit/_WidgetBase dijit/_TemplatedMixin ../promiseList ../layerUtils dojo/text!./LayerList/templates/LayerList.html".split(" "),function(m,u,l,J,K,L,A,n,D,h,B,k,p,v,C,M,N,O,P,Q){var R=m.some(["ar","he"],function(a){return-1!==J.locale.indexOf(a)});
u=u([M,N],{templateString:Q,defaults:{theme:"esriLayerList",map:null,layers:null,showSubLayers:!0,showOpacitySlider:!1,showLegend:!1,removeUnderscores:!0,visible:!0},constructor:function(a){a=l.mixin({},this.defaults,a);this.set(a);this.css={container:"esriContainer",noLayers:"esriNoLayers",noLayersText:"esriNoLayersText",slider:"esriSlider",sliderLabels:"esriSliderLabels",legend:"esriLegend",tabContainer:"esriTabContainer",tabs:"esriTabs",tabMenu:"esriTabMenu",tabMenuItem:"esriTabMenuItem",tabMenuSelected:"esriTabMenuSelected",
tabMenuVisible:"esriTabMenuVisible",tab:"esriTab",tabSelected:"esriTabSelected",toggleButton:"esriToggleButton",iconCollapse:"esri-icon-down",iconExpand:R?"esri-icon-left":"esri-icon-right",list:"esriList",listExpand:"esriListExpand",subListExpand:"esriSubListExpand",listVisible:"esriListVisible",subList:"esriSubList",hasSubList:"esriHasSubList",hasButton:"esriHasButton",hasTabContent:"esriHasTabContent",subListLayer:"esriSubListLayer",layer:"esriLayer",layerScaleInvisible:"esriScaleInvisible",title:"esriTitle",
titleContainer:"esriTitleContainer",checkbox:"esriCheckbox",label:"esriLabel",button:"esriButton",content:"esriContent",clearFix:"esriClearFix",clear:"esriClear"}},postCreate:function(){this.inherited(arguments);var a=this;this.own(n(this._layersNode,n.selector("."+this.css.checkbox,"change"),function(){var c,b;c=p.get(this,"data-layer-index");b=p.get(this,"data-sublayer-index");a._toggleLayer(c,b);a._toggleState(c,b)}));this.own(n(this._layersNode,n.selector("."+this.css.tabMenuItem,C.press),function(){var c=
p.get(this,"data-layer-index"),b=p.get(this,"data-tab-id");a._toggleTab(c,b)}));this.own(n(this._layersNode,n.selector("."+this.css.toggleButton,C.press),function(){var c=p.get(this,"data-layer-index");a._toggleExpand(c)}))},startup:function(){this.inherited(arguments);this._mapLoaded(this.map).then(l.hitch(this,this._init))},destroy:function(){this._removeEvents();this.inherited(arguments)},refresh:function(){var a=this.layers;this._nodes=[];var c=[];if(a&&a.length)for(var b=0;b<a.length;b++)c.push(this._layerLoaded(b));
return O(c).always(l.hitch(this,function(a){this._loadedLayers=a;this._removeEvents();this._createLayerNodes();this._setLayerEvents();this.emit("refresh")}))},_mapLoaded:function(a){var c=new A;if(a)if(a.loaded)c.resolve();else n.once(a,"load",l.hitch(this,function(){c.resolve()}));else c.resolve();return c.promise},_toggleExpand:function(a){a=parseInt(a,10);if(a=this._nodes[a]){var c=a.layer;h.toggle(c,this.css.listExpand);c=h.contains(c,this.css.listExpand);p.set(a.toggle,"title",c?v.widgets.layerList.collapse:
v.widgets.layerList.expand);h.toggle(a.toggle,this.css.iconCollapse,c);h.toggle(a.toggle,this.css.iconExpand,!c)}},_toggleTab:function(a,c){a=parseInt(a,10);var b=this._nodes[a];if(b){var d=b.tabMenu,b=D("[data-tab-id]",b.tabs),d=D("[data-tab-id]",d),e;for(e=0;e<b.length;e++){var f=p.get(b[e],"data-tab-id");h.toggle(b[e],this.css.tabSelected,c===f)}for(e=0;e<d.length;e++)b=p.get(d[e],"data-tab-id"),h.toggle(d[e],this.css.tabMenuSelected,c===b)}},_layerLoaded:function(a){var c=this.layers[a],b=c.layer,
d={layer:b,layerInfo:c,layerIndex:a},e=new A;if(b)if(b.loaded)e.resolve(d);else if(b.loadError)e.reject(b.loadError);else{var f,g;f=n.once(b,"load",l.hitch(this,function(){g.remove();e.resolve(d)}));g=n.once(b,"error",l.hitch(this,function(a){f.remove();e.reject(a)}))}else e.resolve(d);return e.promise},_checkboxStatus:function(a){return!!a.visibility},_WMSVisible:function(a,c){var b=[];a&&a.layer&&(b=a.layer.visibleLayers);return-1<m.indexOf(b,c.name)},_subCheckboxStatus:function(a,c){var b;switch(a.layer.declaredClass){case "esri.layers.KMLLayer":b=
c.visible;break;case "esri.layers.WMSLayer":b=this._WMSVisible(a,c);break;default:a.layer&&a.layer.visibleLayers&&-1!==a.layer.visibleLayers.indexOf(c.id)?c.defaultVisibility=!0:c.defaultVisibility=!1,b=c.defaultVisibility}return b},_getLayerTitle:function(a){var c="",b=a.layer;(a=a.layerInfo)&&a.title?c=a.title:b&&b.arcgisProps&&b.arcgisProps.title?c=b.arcgisProps.title:b&&b.name?c=b.name:a&&a.id?c=a.id:b&&b.id&&(c=b.id);return this.removeUnderscores?c.replace(/_/g," "):c},_showSublayers:function(a){return a.hasOwnProperty("showSubLayers")?
a.showSubLayers:this.showSubLayers},_opacityChange:function(a){if(this.layer)this.layer.setOpacity(a);else if(this.layers)for(var c=0;c<this.layers.length;c++)this.layers[c].layerObject&&this.layers[c].layerObject.setOpacity(a)},_legend:function(a,c,b){var d=k.create("div",{role:"tabpanel","data-tab-id":"legend",className:this.css.tab+" "+this.css.legend},a);require(["esri/dijit/Legend"],l.hitch(this,function(a){var f=[c];if(c&&c.featureCollection&&c.featureCollection.layers)for(var f=c.featureCollection.layers,
g=0;g<f.length;g++)f[g].layer=f[g].layerObject;a=new a({map:this.map,layerInfos:f},k.create("div"));k.place(a.domNode,d);a.startup();this._nodes[b].legend=a}))},_slider:function(a,c,b,d){a=k.create("div",{role:"tabpanel","data-tab-id":"opacity",className:this.css.tab+" "+this.css.slider},a);var e=k.create("div",{},a),f=k.create("div",{},a);require(["dijit/form/HorizontalSlider","dijit/form/HorizontalRuleLabels"],l.hitch(this,function(a,h){var k=new a({showButtons:!1,minimum:0.1,maximum:1,layer:c,
layers:b,discreteValues:0.1,intermediateChanges:!0,value:d,onChange:this._opacityChange},e),p=new h({container:"bottomDecoration",count:0,className:this.css.sliderLabels,labels:["0","50","100"]},f);k.startup();p.startup()}))},_createLayerNodes:function(){this._layersNode.innerHTML="";this._noLayersNode.innerHTML="";h.remove(this._container,this.css.noLayers);var a=this._loadedLayers;if(a&&a.length)for(var c=0;c<a.length;c++){var b=a[c];if(b){var d=b.layer,e=b.layerIndex,f=b.layerInfo;if(f){if(f.featureCollection&&
!f.hasOwnProperty("visibility")){var g=f.featureCollection.layers[0];g&&g.layerObject&&(f.visibility=g.layerObject.visible)}d&&!f.hasOwnProperty("visibility")&&(f.visibility=f.layer.visible);d&&!f.hasOwnProperty("id")&&(f.id=f.layer.id);var l,g=k.create("li",{role:"menuitem",className:this.css.layer});d&&!d.visibleAtMapScale&&h.add(g,this.css.layerScaleInvisible);k.place(g,this._layersNode,"first");l=k.create("div",{className:this.css.title},g);var m=k.create("div",{className:this.css.tabContainer},
g),n=k.create("ul",{role:"tablist",className:this.css.tabMenu+" "+this.css.clearFix},m),m=k.create("div",{className:this.css.tabs},m),u=[],w;d&&(w=d.declaredClass);var t=this._checkboxStatus(f),r=k.create("div",{className:this.css.titleContainer},l),q=this.id+"_checkbox_"+e,x=k.create("input",{type:"checkbox",id:q,"data-layer-index":e,className:this.css.checkbox},r);p.set(x,"checked",t);var s=k.create("div",{tabindex:0,role:"button","data-layer-index":e,title:v.widgets.layerList.expand,className:this.css.toggleButton+
" "+this.css.iconExpand},r),E;f.button&&(E=f.button,h.add(g,this.css.hasButton),h.add(E,this.css.button),k.place(E,r));b=this._getLayerTitle(b);b=k.create("label",{className:this.css.label,textContent:b},r);p.set(b,"for",q);var q=k.create("div",{className:this.css.clear},r),F;f.content&&(F=f.content,h.add(F,this.css.content),k.place(F,l));this._nodes[e]={checkbox:x,title:l,tabMenu:n,tabs:m,titleContainer:r,label:b,layer:g,toggle:s,clear:q,button:E,content:F,subNodes:u};h.toggle(g,this.css.listVisible,
t);if(d&&(l=d.layerInfos,"esri.layers.KMLLayer"===w&&(l=d.folders),this._showSublayers(f)&&"esri.layers.ArcGISTiledMapServiceLayer"!==w&&l&&l.length)){k.create("li",{tabindex:0,"data-tab-id":"sublayers","data-layer-index":e,role:"tab",className:this.css.tabMenuItem,textContent:v.widgets.layerList.sublayers},n);h.add(g,this.css.hasSubList);h.toggle(g,this.css.subListExpand,t);for(var t=k.create("div",{className:this.css.tab,"data-tab-id":"sublayers",role:"tabpanel"},m),t=k.create("ul",{role:"group",
className:this.css.subList},t),A,r=[],x=0;x<l.length;x++){var b=l[x],y,q=-1,s=null;"esri.layers.ArcGISDynamicMapServiceLayer"===w?(y=b.id,q=b.parentLayerId):"esri.layers.KMLLayer"===w?(y=b.id,q=b.parentFolderId):"esri.layers.WMSLayer"===w&&(y=b.name,q=-1);if(-1!==q)if(s=this._nodes[e].subNodes[q],r[q])s=r[q];else{var z=s.subLayer,s=k.create("ul",{role:"group",className:this.css.subList},z);h.add(z,this.css.hasSubList);h.toggle(z,[this.css.listVisible,this.css.subListExpand],I);r[q]=s}var I=this._subCheckboxStatus(f,
b);I&&!A&&(A=!0);var G=this.id+"_checkbox_sub_"+e+"_"+y,q=k.create("li",{role:"menuitem",className:this.css.subListLayer},s||t),z=k.create("div",{className:this.css.title},q),H=k.create("div",{className:this.css.titleContainer},z),B=k.create("input",{type:"checkbox",id:G,"data-layer-index":e,"data-sublayer-index":y,className:this.css.checkbox},H);p.set(B,"checked",I);b=k.create("label",{className:this.css.label,textContent:b.title||b.name||""},H);p.set(b,"for",G);G=k.create("div",{className:this.css.clear},
H);u[y]={subList:t,subSubList:s,subLayer:q,subTitle:z,subTitleContainer:H,subCheckbox:B,subLabel:b,subClear:G}}}if(f.hasOwnProperty("showLegend")?f.showLegend:this.showLegend)k.create("li",{tabindex:0,role:"tab",className:this.css.tabMenuItem,"data-layer-index":e,"data-tab-id":"legend",textContent:v.widgets.layerList.legend},n),this._legend(m,f,e);if(f.hasOwnProperty("showOpacitySlider")?f.showOpacitySlider:this.showOpacitySlider){var C;!d&&f.featureCollection?(C=f.featureCollection.layers,f=f.featureCollection.layers[0].opacity):
f=d.opacity;k.create("li",{tabindex:0,"data-tab-id":"opacity",role:"tab",className:this.css.tabMenuItem,"data-layer-index":e,textContent:v.widgets.layerList.opacity},n);this._slider(m,d,C,f)}d=D("."+this.css.tab,m);if(e=d.length)h.add(g,[this.css.hasTabContent]),h.add(d[0],this.css.tabSelected);1<e&&(h.add(g,this.css.tabMenuVisible),g=D("li",n),g.length&&h.add(g[0],this.css.tabMenuSelected))}}}else h.add(this._container,this.css.noLayers),p.set(this._noLayersNode,"textContent",v.widgets.layerList.noLayers)},
_removeEvents:function(){if(this._layerEvents&&this._layerEvents.length)for(var a=0;a<this._layerEvents.length;a++)this._layerEvents[a].remove();this._layerEvents=[]},_emitToggle:function(a,c,b){this.emit("toggle",{layerIndex:a,subLayerIndex:c,visible:b})},_toggleVisible:function(a,c){var b=this._nodes[a].checkbox;h.toggle(this._nodes[a].layer,this.css.listVisible,c);var d=p.get(b,"checked");h.contains(this._nodes[a].layer,this.css.hasSubList)&&h.toggle(this._nodes[a].layer,this.css.subListExpand,
d);d!==c&&(p.set(b,"checked",c),this._emitToggle(a,null,c))},_layerVisChangeEvent:function(a,c,b){b=c?a.layerInfo.featureCollection.layers[b].layer:a.layer;var d=n(b,"visibility-change",l.hitch(this,function(b){c?this._featureCollectionVisible(a.layerIndex,b.visible):this._toggleVisible(a.layerIndex,b.visible)}));this._layerEvents.push(d);c||(d=n(b,"scale-visibility-change",l.hitch(this,function(b){h.toggle(this._nodes[a.layerIndex].layer,this.css.layerScaleInvisible,!b.target.visibleAtMapScale)})),
this._layerEvents.push(d),"esri.layers.ArcGISDynamicMapServiceLayer"===b.declaredClass&&(b=n(this.map,"zoom-end",l.hitch(this,function(){this._subLayerScale(a)})),this._layerEvents.push(b),this._subLayerScale(a)))},_subLayerScale:function(a){var c=a.layer.createDynamicLayerInfosFromLayerInfos(),b=P._getLayersForScale(this.map.getScale(),c);m.forEach(c,l.hitch(this,function(c){if(!c.subLayerIds){c=c.id;var e=this._nodes[a.layerIndex].subNodes[c];if(e){var e=e.subLayer,f=!1;-1===m.indexOf(b,c)&&(f=
!0);h.toggle(e,this.css.layerScaleInvisible,f)}}}))},_layerEvent:function(a){var c=a.layerInfo;if(c.featureCollection&&c.featureCollection.layers&&c.featureCollection.layers.length){if((c=c.featureCollection.layers)&&c.length)for(var b=0;b<c.length;b++)this._layerVisChangeEvent(a,!0,b)}else this._layerVisChangeEvent(a)},_getVisibleLayers:function(a,c){var b=a.layerInfos,d,e=[-1];"undefined"!==typeof c&&(b[c].defaultVisibility=!b[c].defaultVisibility);for(d=0;d<b.length;d++){var f=b[d];f.defaultVisibility&&
(e.push(f.id),f=m.lastIndexOf(e,-1),-1!==f&&e.splice(f,1))}b=[];for(d=0;d<e.length;d++)f=e[d],this._allIdsPresent(a,f,e)&&b.push(f);d=[];for(e=0;e<b.length;e++)(f=this._getLayerInfo(a,b[e]))&&null===f.subLayerIds&&d.push(b[e]);d.length||(d=[-1]);return d},_toggleState:function(a,c){var b,d;a=parseInt(a,10);d=this._nodes[a];d.legend&&d.legend.refresh();null!==c?(c=parseInt(c,10),b=d.subNodes[c].subLayer,d=d.subNodes[c].subCheckbox):(b=d.layer,d=d.checkbox);d=p.get(d,"checked");h.contains(b,this.css.hasSubList)&&
h.toggle(b,this.css.subListExpand,d);h.toggle(b,this.css.listVisible,d)},_toggleLayer:function(a,c){if(this.layers&&this.layers.length){var b;a=parseInt(a,10);var d=this.layers[a],e=d.layer,f;e&&(f=e.declaredClass);var g=d.featureCollection;if(g){b=!d.visibility;d.visibility=b;for(d=0;d<g.layers.length;d++)g.layers[d].layerObject.setVisibility(b)}else if(e)if(null!==c)if("esri.layers.ArcGISDynamicMapServiceLayer"===f)c=parseInt(c,10),g=this._getVisibleLayers(e,c),e.setVisibleLayers(g);else if("esri.layers.KMLLayer"===
f){c=parseInt(c,10);g=e.folders;for(d=0;d<g.length;d++)if(f=g[d],f.id===c){e.setFolderVisibility(f,!f.visible);break}}else"esri.layers.WMSLayer"===f&&(g=e.visibleLayers,d=m.indexOf(g,c),-1===d?g.push(c):g.splice(d,1),e.setVisibleLayers(g));else"esri.layers.ArcGISDynamicMapServiceLayer"===f&&(g=this._getVisibleLayers(e),e.setVisibleLayers(g)),b=!e.visible,d.visibility=b,e.setVisibility(b);else b=!d.visible,d.setVisibility(b);this._emitToggle(a,c,b)}},_featureCollectionVisible:function(a,c){var b=this.layers[a],
d=b.visibleLayers,e=b.featureCollection.layers;(d&&d.length?m.every(d,function(a){return e[a].layer.visible===c}):m.every(e,function(a){return a.layer.visible===c}))&&this._toggleVisible(a,c)},_setLayerEvents:function(){var a=this._loadedLayers;if(a&&a.length)for(var c=0;c<a.length;c++){var b=a[c];b.layer&&this._layerEvent(b)}},_allIdsPresent:function(a,c,b){a=this._walkUpLayerIds(a,c);return m.every(a,function(a){return-1<m.indexOf(b,a)})},_walkUpLayerIds:function(a,c){var b=this._getLayerInfo(a,
c),d=[];if(b)for(;-1!==b.parentLayerId;)(b=this._getLayerInfo(a,b.parentLayerId))&&d.push(b.id);return d},_getLayerInfo:function(a,c){for(var b,d=0;d<a.layerInfos.length;d++){var e=a.layerInfos[d];if(e.id===c){b=e;break}}return b},_isSupportedLayerType:function(a){return a&&!a._basemapGalleryLayerType||a&&"basemap"!==a._basemapGalleryLayerType},_createLayerInfo:function(a){return{layer:a}},_updateAllMapLayers:function(){if(this.map&&(!this.layers||!this.layers.length)){var a=[];m.forEach(this.map.layerIds,
function(c){c=this.map.getLayer(c);this._isSupportedLayerType(c)&&a.push(this._createLayerInfo(c))},this);m.forEach(this.map.graphicsLayerIds,function(c){c=this.map.getLayer(c);this._isSupportedLayerType(c)&&(c._params&&c._params.drawMode)&&a.push(this._createLayerInfo(c))},this);this._set("layers",a)}},_init:function(){this._visible();this._updateAllMapLayers();this.refresh().always(l.hitch(this,function(){this.set("loaded",!0);this.emit("load")}))},_visible:function(){this.visible?B.set(this.domNode,
"display","block"):B.set(this.domNode,"display","none")},_setThemeAttr:function(a){this.domNode&&(h.remove(this.domNode,this.theme),h.add(this.domNode,a));this._set("theme",a)},_setMapAttr:function(a){this._set("map",a);this._created&&this._mapLoaded(this.map).then(l.hitch(this,function(){this._updateAllMapLayers();this.refresh()}))},_setLayersAttr:function(a){this._set("layers",a);this._created&&this.refresh()},_setRemoveUnderscoresAttr:function(a){this._set("removeUnderscores",a);this._created&&
this.refresh()},_setShowSubLayersAttr:function(a){this._set("showSubLayers",a);this._created&&this.refresh()},_setShowOpacitySliderAttr:function(a){this._set("showOpacitySlider",a);this._created&&this.refresh()},_setShowLegendAttr:function(a){this._set("showLegend",a);this._created&&this.refresh()},_setVisibleAttr:function(a){this._set("visible",a);this._created&&this._visible()}});L("extend-esri")&&l.setObject("dijit.LayerList",u,K);return u});
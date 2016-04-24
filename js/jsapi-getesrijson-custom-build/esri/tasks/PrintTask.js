//>>built
define("esri/tasks/PrintTask","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/_base/Deferred dojo/has ../kernel ../lang ../layerUtils ../deferredUtils ../Color ../urlUtils ./Task ../geometry/Polygon ../renderers/SimpleRenderer ../geometry/scaleUtils ../symbols/FillSymbol ./Geoprocessor ./PrintTemplate dojo/dom-attr dojo/dom-construct dojox/gfx/_base dojox/gfx/canvas dojox/json/query dojo/has!extend-esri?./PrintParameters dojo/has!extend-esri?./LegendLayer".split(" "),function(u,
m,r,x,B,y,C,w,z,D,E,F,G,H,I,J,K,L,M,N,O,s,A,P){u=u(G,{declaredClass:"esri.tasks.PrintTask",constructor:function(b,f){this.url=b;this.printGp=new L(this.url);this._handler=m.hitch(this,this._handler);f&&f.async&&(this.async=f.async);this._colorEvaluator=P("$..color")},_handler:function(b,f,k,a,d){try{var c;this.async?"esriJobSucceeded"===b.jobStatus&&this.printGp.getResultData(b.jobId,"Output_File",m.hitch(this,function(a){c=a.value;this._successHandler([c],"onComplete",k,d)})):(c=b[0].value,this._successHandler([c],
"onComplete",k,d))}catch(h){this._errorHandler(h,a,d)}},execute:function(b,f,k){var a=this._handler,d=this._errorHandler,c=b.template||new M;c.hasOwnProperty("showLabels")||(c.showLabels=!0);var h=c.exportOptions,e;h&&(e={outputSize:[h.width,h.height],dpi:h.dpi});var h=c.layoutOptions,g,l=[];if(h){this.legendAll=!1;h.legendLayers?r.forEach(h.legendLayers,function(a){var b={};b.id=a.layerId;a.subLayerIds&&(b.subLayerIds=a.subLayerIds);l.push(b)}):this.legendAll=!0;var n,q;if("Miles"===h.scalebarUnit||
"Kilometers"===h.scalebarUnit)n="esriKilometers",q="esriMiles";else if("Meters"===h.scalebarUnit||"Feet"===h.scalebarUnit)n="esriMeters",q="esriFeet";g={esriMiles:"mi",esriKilometers:"km",esriFeet:"ft",esriMeters:"m"};g={titleText:h.titleText,authorText:h.authorText,copyrightText:h.copyrightText,customTextElements:h.customTextElements,scaleBarOptions:{metricUnit:n,metricLabel:g[n],nonMetricUnit:q,nonMetricLabel:g[q]},legendOptions:{operationalLayers:l}}}n=this._getPrintDefinition(b.map,c);b.outSpatialReference&&
(n.mapOptions.spatialReference=b.outSpatialReference.toJson());b.template&&w.isDefined(b.template.showAttribution)&&(n.mapOptions.showAttribution=b.template.showAttribution);m.mixin(n,{exportOptions:e,layoutOptions:g});this.allLayerslegend&&m.mixin(n.layoutOptions,{legendOptions:{operationalLayers:this.allLayerslegend}});if(n.operationalLayers){e=n.operationalLayers;var p,v=function(a){return w.fixJson(m.mixin(a,{type:"esriSLS",cap:void 0,join:void 0,meterLimit:void 0}))};for(g=0;g<e.length;g++)if(e[g].featureCollection&&
e[g].featureCollection.layers)for(q=0;q<e[g].featureCollection.layers.length;q++){var t=e[g].featureCollection.layers[q];t.layerDefinition&&(t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.renderer&&t.layerDefinition.drawingInfo.renderer.symbol)&&(p=t.layerDefinition.drawingInfo.renderer,"esriCLS"===p.symbol.type?p.symbol=v(p.symbol):p.symbol.outline&&"esriCLS"===p.symbol.outline.type&&(p.symbol.outline=v(p.symbol.outline)));if(t.featureSet&&t.featureSet.features)for(h=0;h<t.featureSet.features.length;h++)p=
t.featureSet.features[h],p.symbol&&("esriCLS"===p.symbol.type?p.symbol=v(p.symbol):p.symbol.outline&&"esriCLS"===p.symbol.outline.type&&(p.symbol.outline=v(p.symbol.outline)))}}c={Web_Map_as_JSON:x.toJson(w.fixJson(n)),Format:c.format,Layout_Template:c.layout};b.extraParameters&&(c=m.mixin(c,b.extraParameters));var s=new B(D._dfdCanceller);b=function(b,c){a(b,c,f,k,s)};n=function(a){d(a,k,s)};s._pendingDfd=this.async?this.printGp.submitJob(c,b,null,n):this.printGp.execute(c,b,n);return s},onComplete:function(){},
_createMultipointLayer:function(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}},_createPolygonLayer:function(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}},_createPointLayer:function(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",
drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}},_createPolylineLayer:function(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}},_convertSvgSymbol:function(b){if(!(8>=y("ie"))&&b.path){this._canvasHolder||(this._canvasHolder=O.create("div"),this._canSurface=A.createSurface(this._canvasHolder,200,200));var f=this._canSurface.createObject(A.Path,
b.path).setFill(b.color).setStroke(b.outline);"pendingRender"in this._canSurface&&this._canSurface._render(!0);var k=this._canSurface.rawNode.getContext("2d"),a=Math.ceil(f.getBoundingBox().width+f.getBoundingBox().x),d=Math.ceil(f.getBoundingBox().height+f.getBoundingBox().y),c=k.getImageData(f.getBoundingBox().x,f.getBoundingBox().y,a,d);k.canvas.width=a;k.canvas.height=d;k.putImageData(c,0,0);k=k.canvas.toDataURL("image/png");return{type:"esriPMS",imageData:k.substr(22,k.length),angle:b.angle,
contentType:"image/png",height:b.size?b.size:d-f.getBoundingBox().y,width:b.size?b.size:a-f.getBoundingBox().x,xoffset:b.xoffset,yoffset:b.yoffset}}},_convertSvgRenderer:function(b){"simple"===b.type&&b.symbol&&b.symbol.path?b.symbol=this._convertSvgSymbol(b.symbol):"uniqueValue"===b.type?(b.defaultSymbol&&b.defaultSymbol.path&&(b.defaultSymbol=this._convertSvgSymbol(b.defaultSymbol)),b.uniqueValueInfos&&r.forEach(b.uniqueValueInfos,function(b){b.symbol.path&&(b.symbol=this._convertSvgSymbol(b.symbol))},
this)):"classBreaks"===b.type&&(b.defaultSymbol&&b.defaultSymbol.path&&(b.defaultSymbol=this._convertSvgSymbol(b.defaultSymbol)),b.classBreakInfos&&r.forEach(b.classBreakInfos,function(b){b.symbol.path&&(b.symbol=this._convertSvgSymbol(b.symbol))},this))},_createFeatureCollection:function(b,f,k){var a=this._createPolygonLayer(),d=this._createPolylineLayer(),c=this._createPointLayer(),h=this._createMultipointLayer(),e=this._createPointLayer();e.layerDefinition.name="textLayer";delete e.layerDefinition.drawingInfo;
if("esri.layers.FeatureLayer"===b.declaredClass||"esri.layers.StreamLayer"===b.declaredClass)a.layerDefinition.name=d.layerDefinition.name=c.layerDefinition.name=h.layerDefinition.name=m.getObject("arcgisProps.title",!1,b)||b.name||b.id;if(b.renderer&&!m.isFunction(b.renderer.attributeField)){var g=b.renderer.toJson();if("temporal"===g.type){var g={latestObservationRenderer:g.latestObservationRenderer,trackLinesRenderer:g.trackRenderer,observationAger:g.observationAger,renderer:g.observationRenderer},
l={};b._trackIdField&&(l.trackIdField=b._trackIdField);b._startTimeField&&(l.startTimeField=b._startTimeField);b._endTimeField&&(l.endTimeField=b._endTimeField);a.layerDefinition.drawingInfo=g;a.layerDefinition.timeInfo=l;d.layerDefinition.drawingInfo=g;d.layerDefinition.timeInfo=l;c.layerDefinition.drawingInfo=g;c.layerDefinition.timeInfo=l;h.layerDefinition.drawingInfo=g;h.layerDefinition.timeInfo=l}else a.layerDefinition.drawingInfo.renderer=g,d.layerDefinition.drawingInfo.renderer=g,c.layerDefinition.drawingInfo.renderer=
g,h.layerDefinition.drawingInfo.renderer=g}else delete a.layerDefinition.drawingInfo,delete d.layerDefinition.drawingInfo,delete c.layerDefinition.drawingInfo,delete h.layerDefinition.drawingInfo;g=b.fields;!g&&(b.renderer&&!m.isFunction(b.renderer.attributeField))&&("esri.renderer.ClassBreaksRenderer"===b.renderer.declaredClass?(g=[{name:b.renderer.attributeField,type:"esriFieldTypeDouble"}],b.renderer.normalizationField&&g.push({name:b.renderer.normalizationField,type:"esriFieldTypeDouble"})):"esri.renderer.UniqueValueRenderer"===
b.renderer.declaredClass&&(g=[{name:b.renderer.attributeField,type:"esriFieldTypeString"}],b.renderer.attributeField2&&g.push({name:b.renderer.attributeField2,type:"esriFieldTypeString"}),b.renderer.attributeField3&&g.push({name:b.renderer.attributeField3,type:"esriFieldTypeString"})));g&&(a.layerDefinition.fields=g,d.layerDefinition.fields=g,c.layerDefinition.fields=g,h.layerDefinition.fields=g);var g=b.graphics.length,n;for(n=0;n<g;n++){var q=b.graphics[n];if(!1!==q.visible&&q.geometry){l=q.toJson();
l.symbol&&(l.symbol.outline&&l.symbol.outline.color&&l.symbol.outline.color[3])&&(l.symbol.outline.color[3]=255);if(b.renderer&&!l.symbol&&(m.isFunction(b.renderer.attributeField)||this._isFeatureCollectionRequired(b.renderer)||"esri.renderer.DotDensityRenderer"===b.renderer.declaredClass||k)){k=k||b.renderer;var p=k.getSymbol(q);if(!p)continue;l.symbol=p.toJson();this._isFeatureCollectionRequired(k)&&this._applyVisualVariables(l.symbol,{renderer:k,graphic:q,symbol:p,mapResolution:f&&f.getResolutionInMeters(),
mapScale:f&&f.getScale()})}l.symbol&&(l.symbol.path?l.symbol=this._convertSvgSymbol(l.symbol):l.symbol.text&&delete l.attributes);switch(q.geometry.type){case "polygon":a.featureSet.features.push(l);break;case "polyline":d.featureSet.features.push(l);break;case "point":l.symbol&&l.symbol.text?e.featureSet.features.push(l):c.featureSet.features.push(l);break;case "multipoint":h.featureSet.features.push(l);break;case "extent":l.geometry=H.fromExtent(q.geometry).toJson(),a.featureSet.features.push(l)}}}f=
[];0<a.featureSet.features.length&&f.push(a);0<d.featureSet.features.length&&f.push(d);0<h.featureSet.features.length&&f.push(h);0<c.featureSet.features.length&&f.push(c);0<e.featureSet.features.length&&f.push(e);r.forEach(f,function(a){a.layerDefinition.drawingInfo&&a.layerDefinition.drawingInfo.renderer&&r.every(a.featureSet.features,function(a){return a.symbol})&&delete a.layerDefinition.drawingInfo});r.forEach(f,function(a){a.layerDefinition.drawingInfo&&a.layerDefinition.drawingInfo.renderer&&
this._convertSvgRenderer(a.layerDefinition.drawingInfo.renderer)},this);return{id:b.id,opacity:b.opacity,minScale:b.minScale||0,maxScale:b.maxScale||0,featureCollection:{layers:f}}},_getPrintDefinition:function(b,f){var k={operationalLayers:this._createOperationalLayers(b,f)},a=b.extent,d=b.spatialReference;b.spatialReference._isWrappable()&&(a=a._normalize(!0),d=a.spatialReference);a={mapOptions:{showAttribution:b.showAttribution,extent:a.toJson(),spatialReference:d.toJson()}};f.preserveScale&&m.mixin(a.mapOptions,
{scale:f.outScale||J.getScale(b)});b.timeExtent&&m.mixin(a.mapOptions,{time:[b.timeExtent.startTime.getTime(),b.timeExtent.endTime.getTime()]});d={};m.mixin(d,a,k);return d},_createOperationalLayers:function(b,f){var k,a,d,c,h=[];this.allLayerslegend=this.legendAll?[]:null;var e=r.map(b.layerIds,b.getLayer,b);b._mapImageLyr&&e.push(b._mapImageLyr);for(k=0;k<e.length;k++)if(a=e[k],a.loaded&&a.visible)switch(d=a.declaredClass,c={id:a.id,title:m.getObject("arcgisProps.title",!1,a)||a.id,opacity:a.opacity,
minScale:a.minScale||0,maxScale:a.maxScale||0},c=m.mixin(c,this._getUrlAndToken(a)),a.getNode()&&N.get(a.getNode(),"data-reference")&&(c._isRefLayer=!0),d){case "esri.layers.ArcGISDynamicMapServiceLayer":var g=[];d=!!a._params.layers;if(a._params.dynamicLayers)d=x.fromJson(a._params.dynamicLayers),r.forEach(d,function(a){g.push({id:a.id,name:a.name,layerDefinition:a});delete a.id;delete a.name;delete a.maxScale;delete a.minScale});else if(a.supportsDynamicLayers){if(d||a.layerDefinitions||a.layerTimeOptions){var l=
a.createDynamicLayerInfosFromLayerInfos(),n=null;d&&(n=a.visibleLayers);var n=z._getVisibleLayers(l,n),q=z._getLayersForScale(f.outScale||b.getScale(),l);r.forEach(l,function(b){if(!b.subLayerIds){var c=b.id;-1<r.indexOf(n,c)&&-1<r.indexOf(q,c)&&(b={source:b.source.toJson()},a.layerDefinitions&&a.layerDefinitions[c]&&(b.definitionExpression=a.layerDefinitions[c]),a.layerTimeOptions&&a.layerTimeOptions[c]&&(b.layerTimeOptions=a.layerTimeOptions[c].toJson()),g.push({id:c,layerDefinition:b}))}});0===
g.length&&(c.visibleLayers=[-1])}}else r.forEach(a.layerInfos,function(b){var c={id:b.id,layerDefinition:{}};a.layerDefinitions&&a.layerDefinitions[b.id]&&(c.layerDefinition.definitionExpression=a.layerDefinitions[b.id]);a.layerTimeOptions&&a.layerTimeOptions[b.id]&&(c.layerDefinition.layerTimeOptions=a.layerTimeOptions[b.id].toJson());(c.layerDefinition.definitionExpression||c.layerDefinition.layerTimeOptions)&&g.push(c)}),d&&(c.visibleLayers=a.visibleLayers);g.length&&(c.layers=g);h.push(c);this.allLayerslegend&&
this.allLayerslegend.push({id:a.id,subLayerIds:a.visibleLayers});break;case "esri.layers.ArcGISImageServiceLayer":c=m.mixin(c,{url:a.url,bandIds:a.bandIds,compressionQuality:a.compressionQuality,format:a.format,interpolation:a.interpolation});a.mosaicRule&&m.mixin(c,{mosaicRule:a.mosaicRule.toJson()});a.renderingRule&&m.mixin(c,{renderingRule:a.renderingRule.toJson()});h.push(c);this.allLayerslegend&&this.allLayerslegend.push({id:a.id});break;case "esri.layers.WMSLayer":c=m.mixin(c,{url:a.url,title:a.title,
type:"wms",version:a.version,transparentBackground:a.imageTransparency,visibleLayers:a.visibleLayers});h.push(c);this.allLayerslegend&&this.allLayerslegend.push({id:a.id,subLayerIds:a.visibleLayers});break;case "esri.virtualearth.VETiledLayer":d=a.mapStyle;"aerialWithLabels"===d&&(d="Hybrid");c=m.mixin(c,{visibility:a.visible,type:"BingMaps"+d,culture:a.culture,key:a.bingMapsKey});h.push(c);break;case "esri.layers.OpenStreetMapLayer":c=m.mixin(c,{credits:a.copyright,type:"OpenStreetMap",url:F.getAbsoluteUrl(a.tileServers[0])});
h.push(c);break;case "esri.layers.WMTSLayer":c=m.mixin(c,{url:a.url,type:"wmts",layer:a._identifier,style:a._style,format:a.format,tileMatrixSet:a._tileMatrixSetId});h.push(c);break;case "esri.layers.MapImageLayer":d=a.getImages();r.forEach(d,function(b,d){b.href&&(c={id:a.id+"_image"+d,type:"image",title:a.id,minScale:a.minScale||0,maxScale:a.maxScale||0,opacity:a.opacity*b.opacity,extent:b.extent.toJson()},"data:image/png;base64,"===b.href.substr(0,22)?c.imageData=b.href.substr(22):c.url=b.href,
h.push(c))});break;case "esri.layers.VectorTileLayer":d=/^https?:\/\/basemaps(dev)?\.arcgis\.com\/arcgis\/rest\/services\/World_Basemap\/VectorTileServer/i;!c._isRefLayer&&d.test(a.serviceUrl)&&(c.url="http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",h.push(c));break;case "esri.layers.WebTiledLayer":d=a.url.replace(/\$\{/g,"{");c=m.mixin(c,{type:"WebTiledLayer",urlTemplate:d,credits:a.copyright});a.subDomains&&0<a.subDomains.length&&(c.subDomains=a.subDomains);h.push(c);
break;default:if(a.getTileUrl||a.getImageUrl)c=m.mixin(c,{url:a.url}),h.push(c)}for(k=0;k<b.graphicsLayerIds.length;k++)if(a=b.getLayer(b.graphicsLayerIds[k]),a.loaded&&a.visible)switch(d=a.declaredClass,d){case "esri.layers.FeatureLayer":case "esri.layers.LabelLayer":case "esri.layers.CSVLayer":case "esri.layers.StreamLayer":if("esri.layers.LabelLayer"===d&&!f.showLabels||a.renderer&&"esri.renderer.HeatmapRenderer"===a.renderer.declaredClass)continue;e=null;a.url&&a.renderer&&("esri.renderer.ScaleDependentRenderer"===
a.renderer.declaredClass?"scale"===a.renderer.rangeType?e=a.renderer.getRendererInfoByScale(b.getScale())&&a.renderer.getRendererInfoByScale(b.getScale()).renderer:"zoom"===a.renderer.rangeType&&(e=a.renderer.getRendererInfoByZoom(b.getZoom())&&a.renderer.getRendererInfoByZoom(b.getZoom()).renderer):e=a.renderer);if(e&&("esri.renderer.SimpleRenderer"===e.declaredClass||"esri.renderer.TemporalRenderer"===e.declaredClass||m.isString(e.attributeField)&&a._getField(e.attributeField,!0))&&!this._isFeatureCollectionRequired(e)&&
"esri.renderer.DotDensityRenderer"!==e.declaredClass&&"esri.layers.CSVLayer"!==a.declaredClass&&"esri.layers.StreamLayer"!==a.declaredClass)if(c={id:a.id,title:m.getObject("arcgisProps.title",!1,a)||a.id,opacity:a.opacity,minScale:a.minScale||0,maxScale:a.maxScale||0,layerDefinition:{drawingInfo:{renderer:e.toJson()}}},c=m.mixin(c,this._getUrlAndToken(a)),"esri.renderer.TemporalRenderer"===e.declaredClass&&(d=c.layerDefinition.drawingInfo,d.latestObservationRenderer=d.renderer.latestObservationRenderer,
d.trackLinesRenderer=d.renderer.trackRenderer,d.observationAger=d.renderer.observationAger,d.renderer=d.renderer.observationRenderer,a._trackIdField&&(c.layerDefinition.timeInfo={trackIdField:a._trackIdField})),this._convertSvgRenderer(c.layerDefinition.drawingInfo.renderer),1>a.opacity||"esri.renderer.TemporalRenderer"===e.declaredClass||this._updateLayerOpacity(c))if(a._params.source&&(e=a._params.source.toJson(),m.mixin(c.layerDefinition,{source:e})),a.getDefinitionExpression()&&m.mixin(c.layerDefinition,
{definitionExpression:a.getDefinitionExpression()}),2!==a.mode)0<a.getSelectedFeatures().length&&(e=r.map(a.getSelectedFeatures(),function(b){return b.attributes[a.objectIdField]}),0<e.length&&a.getSelectionSymbol()&&m.mixin(c,{selectionObjectIds:e,selectionSymbol:a.getSelectionSymbol().toJson()}));else{e=r.map(a.getSelectedFeatures(),function(b){return b.attributes[a.objectIdField]});if(0===e.length||!a._params.drawMode)break;m.mixin(c.layerDefinition,{objectIds:e});e=null;a.getSelectionSymbol()&&
(e=new I(a.getSelectionSymbol()));m.mixin(c.layerDefinition.drawingInfo,{renderer:e&&e.toJson()})}else c=this._createFeatureCollection(a,b);else c=e&&(this._isFeatureCollectionRequired(e)||"esri.renderer.DotDensityRenderer"===e.declaredClass)?this._createFeatureCollection(a,b,e):this._createFeatureCollection(a,b);h.push(c);this.allLayerslegend&&this.allLayerslegend.push({id:a.id});break;case "esri.layers.GraphicsLayer":c=this._createFeatureCollection(a,b),h.push(c),this.allLayerslegend&&this.allLayerslegend.push({id:a.id})}b.graphics&&
0<b.graphics.graphics.length&&(c=this._createFeatureCollection(b.graphics,b),h.push(c));b._labels&&f.showLabels&&(c=this._createFeatureCollection(b._labels,b),h.push(c));r.forEach(h,function(a,b,c){a._isRefLayer&&(delete a._isRefLayer,c.splice(b,1),c.push(a))});return h},_getUrlAndToken:function(b){return{token:b._getToken(),url:b._url?b._url.path:null}},_updateLayerOpacity:function(b){var f=this._colorEvaluator(b),f=r.filter(f,function(a){return m.isArray(a)&&4===a.length}),k=!0;if(f.length){var a=
f[0][3],d;for(d=1;d<f.length;d++)if(a!==f[d][3]){k=!1;break}if(k){b.opacity=a/255;for(d=0;d<f.length;d++)f[d][3]=255}}return k},_isFeatureCollectionRequired:function(b){return b.hasVisualVariables("sizeInfo")||b.hasVisualVariables("colorInfo")||b.hasVisualVariables("opacityInfo")},_getVariable:function(b,f,k){var a;b&&(a=(b=b.getVisualVariablesForType(f,k))&&b[0]);return a},_applyVisualVariables:function(b,f){var k=f.renderer,a=f.graphic,d=f.symbol,c=f.mapResolution,h=f.mapScale,e=d.type;if(!("textsymbol"===
e||"shieldlabelsymbol"===e)){var g=this._getVariable(k,"sizeInfo",!1),l=this._getVariable(k,"colorInfo",!1),m=this._getVariable(k,"opacityInfo",!1);d instanceof K&&(g=this._getVariable(k,"sizeInfo","outline")||g);g&&(d=k.getSize(a,{sizeInfo:g,shape:"simplemarkersymbol"===e?d.style:null,resolution:c,scale:h}),null!=d&&("simplemarkersymbol"===e?b.size=s.px2pt(d):"picturemarkersymbol"===e?(b.width=s.px2pt(d),b.height=s.px2pt(d)):"simplelinesymbol"===e?b.width=s.px2pt(d):b.outline&&(b.outline.width=s.px2pt(d))));
if(l&&(l=k.getColor(a,{colorInfo:l}))&&("simplemarkersymbol"===e||"simplelinesymbol"===e||"simplefillsymbol"===e))b.color=E.toJsonColor(l);m&&(k=k.getOpacity(a,{opacityInfo:m}),null!=k&&b.color&&(b.color[3]=Math.round(255*k)))}}});y("extend-esri")&&m.setObject("tasks.PrintTask",u,C);return u});
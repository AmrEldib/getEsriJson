//>>built
define("esri/dijit/VisibleScaleRangeSlider","../kernel ./_EventedWidget ./_Tooltip ./VisibleScaleRangeSlider/_RecommendedScaleRangeBounds ./VisibleScaleRangeSlider/_SlideEvent ./VisibleScaleRangeSlider/ScaleMenu ./VisibleScaleRangeSlider/ScalePreview ./VisibleScaleRangeSlider/ScaleRanges dijit/form/DropDownButton dijit/popup dojo/_base/array dojo/_base/lang dojo/aspect dojo/debounce dojo/Deferred dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/on dojo/string dojox/form/HorizontalRangeSlider dojo/i18n!../nls/jsapi".split(" "),
function(q,f,r,s,t,l,u,m,n,h,v,c,g,w,x,y,p,k,z,A,B,C,D,E){f=f.createSubclass([r],{declaredClass:"esri.dijit.VisibleScaleRangeSlider",baseClass:"esriVisibleScaleRangeSlider",css:{currentScaleIndicator:"esriCurrentScaleIndicator",currentScaleIndicatorContainer:"esriCurrentScaleIndicatorContainer",scaleIndicator:"esriScaleIndicator",scaleIndicatorContainer:"esriScaleIndicatorContainer"},map:null,layer:null,region:"en-US",minScale:0,maxScale:0,intermediateChanges:!1,labels:E.widgets.visibleScaleRangeSlider,
_slider:null,_currentScaleIndicator:null,_scalePreview:null,_maxScaleButton:null,_minScaleButton:null,_mapUpdateHandler:null,_scaleRanges:null,_scheduleScaleRangeChangeEmit:null,_getSliderIndexRange:function(a){a=Math.floor(a);return{min:a,max:a+0.99999}},_setMapAttr:function(a){this._set("map",a);this._mapUpdateHandler&&this._mapUpdateHandler.remove();this._slider.set("disabled",!0);this._ensureMapIsReady().then(this._updateFromMap)},_updateFromMap:function(a){var b=a.getMinScale(),d=a.getMaxScale(),
e;this._slider.set("disabled",!1);this._scaleRanges.set("scaleRangeBounds",{minScale:b,maxScale:d});e=this._getSliderIndexRange(this._scaleRanges.length-1);this._slider.set("maximum",e.max);this._silentSliderUpdate({maxScale:d,minScale:b});this._updateCurrentScaleIndicator();a=a.on("zoom-end",c.hitch(this,function(){this._updateCurrentScaleIndicator()}));this.own(a);this._mapUpdateHandler=a},_ensureMapIsReady:function(){return this._ensureLoadedResource(this.map)},_ensureLoadedResource:function(a){var b=
new x;if(a)if(a.loaded)b.resolve(a);else a.on("load",function(){b.resolve(a)});else b.reject(Error("could not load resource"));return b.promise},_updateCurrentScaleIndicator:function(){var a=this._scaleRanges.clampScale(this.map.getScale()),a=this._mapScaleToSlider(a)/this._slider.maximum;this.isLeftToRight()||(a=1-a);z.set(this._currentScaleIndicator,{left:100*a+"%"})},_setLayerAttr:function(a){this._set("layer",a);this._ensureMapIsReady().then(this._ensureLayerIsReady).then(this._updateMinMaxScaleFromLayer)},
_ensureLayerIsReady:function(){return this._ensureLoadedResource(this.layer)},_updateMinMaxScaleFromLayer:function(a){this.set({minScale:a.minScale,maxScale:a.maxScale})},_mapSliderToScale:function(a){var b=this._getSliderIndexRange(a),d=this._scaleRanges.findScaleRangeByIndex(a);return this._mapToRange(a,b.min,b.max,d.minScale,d.maxScale)},_mapToRange:function(a,b,d,e,c){return e+(a-b)*(c-e)/(d-b)},_setRegionAttr:function(a){this._set("region",a);this._scalePreview.set("source",m.getScalePreviewSource(a))},
_getMinimumAttr:function(){return this._mapSliderToScale(this._slider.minimum)},_getMaximumAttr:function(){return this._mapSliderToScale(this._slider.maximum)},_getActualMaxScaleAttr:function(){return this._scaleRanges.clampMaxScale(this.maxScale)},_setMaxScaleAttr:function(a){this._set("maxScale",a);this._ensureMapIsReady().then(c.hitch(this,function(){a=this._scaleRanges.clampMaxScale(a);this._set("maxScale",this._layerConstrainedMaxScale(a));this._silentSliderUpdate({maxScale:a});this._scheduleScaleRangeChangeEmit()}))},
_silentSliderUpdate:function(a){var b=a.minScale,d=a.maxScale,c=this._scaleRanges;a=this._slider;void 0!==b&&(b=this._mapScaleToSlider(c.clampMinScale(b)),a.set("value",b,!1,!1));void 0!==d&&(b=this._mapScaleToSlider(c.clampMaxScale(d)),a.set("value",b,!1,!0))},_mapScaleToSlider:function(a){var b=this._scaleRanges.scaleToRangeIndex(a),d=this._getSliderIndexRange(b),b=this._scaleRanges.findScaleRangeByIndex(b);return this._mapToRange(a,b.minScale,b.maxScale,d.min,d.max)},_getActualMinScaleAttr:function(){return this._scaleRanges.clampMinScale(this.minScale)},
_setMinScaleAttr:function(a){this._set("minScale",a);this._ensureMapIsReady().then(c.hitch(this,function(){a=this._scaleRanges.clampMinScale(a);this._set("minScale",this._layerConstrainedMinScale(a));this._silentSliderUpdate({minScale:a});this._scheduleScaleRangeChangeEmit()}))},_emitScaleRangeChange:function(){this.emit("scale-range-change",{minScale:this.minScale,maxScale:this.maxScale})},_layerConstrainedMinScale:function(a){var b=c.getObject("tileInfo.lods",!1,this.layer)||[];return 0<b.length?
(b=b[0].scale,a>b?b:a):this._scaleRanges.beyondMinScale(a)?0:a},_layerConstrainedMaxScale:function(a){var b=c.getObject("tileInfo.lods",!1,this.layer)||[];return 0<b.length?(b=b[b.length-1].scale,a<b?b:a):this._scaleRanges.beyondMaxScale(a)?0:a},constructor:function(){this._scaleRanges=new (m.createSubclass([s]));this._scheduleScaleRangeChangeEmit=w(c.hitch(this,this._emitScaleRangeChange),0);this._ensureMapIsReady=c.hitch(this,this._ensureMapIsReady);this._ensureLayerIsReady=c.hitch(this,this._ensureLayerIsReady);
this._updateMinMaxScaleFromLayer=c.hitch(this,this._updateMinMaxScaleFromLayer);this._updateFromMap=c.hitch(this,this._updateFromMap)},buildRendering:function(){this.inherited(arguments);this._initSlider();this._initScalePreview();this._initScaleIndicators();this._initScaleMenus()},_initSlider:function(){var a=new (D.createSubclass([t]))({baseClass:"esriHorizontalSlider",showButtons:!1,intermediateChanges:this.intermediateChanges,disabled:!0});this._slider=a;a.placeAt(this.domNode);a.startup();this.own(a.on("slide-onmousemove, slidemax-onmousemove",
c.hitch(this,function(a){this._updateScalePreview(a.movable.handle)})),a.on("slide-onmovestop, slidemax-onmovestop",c.hitch(this,function(a){y.contains(a.movable.handle,"dijitSliderThumbHover")||this._closeScalePreview()})),a.on("change",c.hitch(this,function(){var a=Math.round(this._mapSliderToScale(this._getSliderMin())),d=Math.round(this._mapSliderToScale(this._getSliderMax()));this.set("minScale",a);this.set("maxScale",d)})),g.after(a,"_setValueAttr",c.hitch(this,this._updateLabelMenus)))},_getSliderMin:function(){var a=
this._slider.get("value");return this.isLeftToRight()?a[0]:a[1]},_getSliderMax:function(){var a=this._slider.get("value");return this.isLeftToRight()?a[1]:a[0]},_updateLabelMenus:function(){var a=this._maxScaleButton;this._minScaleButton.set("label",this._scaleRanges.getScaleRangeLabel(this._getSliderMin()));a.set("label",this._scaleRanges.getScaleRangeLabel(this._getSliderMax()))},_initScalePreview:function(){var a=new u;a.startup();h.moveOffScreen(a);v.forEach([this._slider._movable.handle,this._slider._movableMax.handle],
function(a){a.onmouseenter=c.hitch(this,function(){this._updateScalePreview(a)});a.onmouseleave=c.hitch(this,function(){this._closeScalePreview()})},this);this.own(a);this._scalePreview=a},_closeScalePreview:function(){h.close(this._scalePreview)},_updateScalePreview:function(a){var b=this._slider,d=this._scalePreview,c=a===b.sliderHandle?this._getSliderMin():this._getSliderMax(),F=k.position(a),f=k.position(d.domNode),b=k.position(b.sliderBarContainer),g=this.isLeftToRight();d.set("backgroundPosition",
this._scaleRanges.getScalePreviewSpriteBackgroundPosition(c));c=F.x-b.x;f=0.5*f.w;h.open({parent:this,popup:d,around:a,orient:c<f?g?["above","below"]:["above-alt","below-alt"]:c<b.w-f?["above-centered","below-centered"]:g?["above-alt","below-alt"]:["above","below"]})},_initScaleIndicators:function(){var a=p.create("div",{className:this.css.scaleIndicatorContainer+" "+this.css.currentScaleIndicatorContainer},this._slider.sliderBarContainer),b=p.create("div",{className:this.css.scaleIndicator+" "+this.css.currentScaleIndicator},
a);this._currentScaleIndicator=b;this.createTooltip(b);a=B(b,"mouseover",c.hitch(this,function(){var a=C.substitute(this.labels.currentScaleTooltip,{scaleLabel:this._scaleRanges.getScaleRangeLabel(this._mapScaleToSlider(this.map.getScale()))});this.findTooltip(b).set("label",a)}));this.own(a)},_initScaleMenus:function(){var a=new l,b=new l,d,e;this.own(a.on("scale-selected",c.hitch(this,function(a){d.closeDropDown();this.set("minScale",a.scale)})));this.own(b.on("scale-selected",c.hitch(this,function(a){e.closeDropDown();
this.set("maxScale",a.scale)})));d=new n({baseClass:"esriScaleMenuButton esriMinScaleMenuButton",dropDown:a,dropDownPosition:["below","above"]});d.toggleDropDown();d.toggleDropDown();e=new n({baseClass:"esriScaleMenuButton esriMaxScaleMenuButton",dropDown:b,dropDownPosition:["below","above"]});e.toggleDropDown();e.toggleDropDown();this.own(g.before(d,"openDropDown",c.hitch(this,function(){var b=this._scaleRanges.findScaleRange(this.get("actualMaxScale")).minScale;a.set("options",{label:d.label,scale:{current:this.get("actualMinScale"),
map:this.map.getScale(),min:this.get("minimum"),max:b}})})));this.own(g.before(e,"openDropDown",c.hitch(this,function(){var a=this._scaleRanges.findScaleRange(this.get("actualMinScale")).maxScale;b.set("options",{label:e.label,scale:{current:this.get("actualMaxScale"),map:this.map.getScale(),min:a,max:this.get("maximum")}})})));d.placeAt(this.domNode);e.placeAt(this.domNode);a.startup();b.startup();d.startup();e.startup();this._minScaleButton=d;this._maxScaleButton=e},startup:function(){this.inherited(arguments);
this.watch("intermediateChanges",function(a,b,c){this._slider.set(a,c)})}});A("extend-esri")&&c.setObject("dijit.VisibleScaleRangeSlider",f,q);return f});
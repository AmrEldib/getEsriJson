//>>built
define("esri/renderers/smartMapping","require module dojo/_base/array dojo/_base/lang dojo/has dojo/Deferred dojo/DeferredList dojo/promise/all dojo/when dojo/on ../kernel ../Color ../numberUtils ../promiseList ../styles/type ../styles/size ../styles/choropleth ../styles/heatmap ../styles/predominance ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ./UniqueValueRenderer ./ClassBreaksRenderer ./HeatmapRenderer ./BlendRenderer ./utils dojo/i18n!../nls/jsapi".split(" "),
function(W,ra,s,D,sa,q,B,ta,X,ua,va,w,F,wa,Y,G,H,Z,O,xa,P,ya,za,I,Aa,Ba,A,Ca){function h(a,c){a.reject(Error(c))}function $(a,c){if(a.loaded)c.call();else ua.once(a,"load",c)}function y(a,c,b,d){var e;switch(b){case "point":e=new xa;e.setColor(c);e.setSize(null!=d?d:a.size);c=new P;c.setColor(a.outline.color);c.setWidth(a.outline.width);e.setOutline(c);break;case "line":e=new P;e.setColor(c);e.setWidth(null!=d?d:a.width);break;case "polygon":e=new ya,e.setColor(c),c=new P,c.setColor(a.outline.color),
c.setWidth(a.outline.width),e.setOutline(c)}return e}function C(a){a=a.geometryType;"esriGeometryPoint"===a||"esriGeometryMultipoint"===a?a="point":"esriGeometryPolyline"===a?a="line":"esriGeometryPolygon"===a&&(a="polygon");return a}function Q(a,c){var b=a.scheme;b=b?Y.cloneScheme(b):(b=Y.getSchemes({theme:a.theme||aa,basemap:a.basemap,geometryType:c}))&&b.primaryScheme;return b}function ba(a,c){return a.label<c.label?-1:a.label>c.label?1:0}function ca(a,c){return a.value<c.value?-1:a.value>c.value?
1:0}function Da(a,c){var b=c.count-a.count;0===b&&(b=ba(a,c));return b}function Ea(a,c){var b=c.count-a.count;0===b&&(b=ca(a,c));return b}function Fa(a,c,b){var d;D.isFunction(c)?d=c:"count"===c?(d=Ea,b&&b.codedValues&&(d=Da)):"value"===c&&(d=ca,b&&b.codedValues&&(d=ba));d&&a.sort(d)}function da(a,c,b){var d=b.layer,e=b.field,f=D.isFunction(e),g=e&&!f?d.getField(e):null,k=g?d.getDomain(g.name):null,m,l=-1,p,u=null==b.numTypes?10:-1===b.numTypes?a.length:b.numTypes,f=null==b.showOthers?!0:b.showOthers,
n=null==b.sortBy?"count":b.sortBy,h=b&&b.labelCallback,t=C(d),r=Q(b,t),d=new za(null,e),e=b.predominanceScheme,q=b.useSizeInfo,w,R;if(e){var S=(w="polygon"===t)&&q,v=e.sizeInfo,q=q?w?v.marker:v:null;if(v=S&&v?v.background:null)d.backgroundFillSymbol=y(v,v.color,"polygon");w=R=w?S?q.size:null:"line"===t?e.width:e.size;r=e;t=S?"point":t}var B={domain:k,fieldInfo:g};s.forEach(a,function(a,c){B.value=a.value;a.label=A.createUniqueValueLabel(B);h&&(a.label=h(a));null===a.value&&(l=c)});-1<l&&(p=a.splice(l,
1)[0]);Fa(a,n,k);g&&"esriFieldTypeDate"===g.type&&(B.dateFormatInterval=A.calculateDateFormatInterval(s.map(s.filter(a,function(a,c){return c<u}),function(a){return a.value})));m=z.createColors(r.colors,a.length);s.forEach(a,function(a,c){B.value=a.value;a.label=A.createUniqueValueLabel(B);h&&(a.label=h(a));a.symbol=y(r,m[c],t,R)});b.valueExpression&&d.setValueExpression(b.valueExpression);m=z.createColors(r.colors,u);for(g=0;g<u;g++)(k=a[g])&&d.addValue({value:k.value,label:k.label,symbol:y(r,m[g],
t,R)});f&&(d.defaultSymbol=y(r,r.noDataColor,t,w),d.defaultLabel=E.other);p&&(p.symbol=y(r,r.noDataColor,t,w),a.push(p));c&&c.widthInfo&&d.setVisualVariables([c.widthInfo]);return{renderer:d,uniqueValueInfos:a,othersStartIndex:d.infos.length===a.length?-1:d.infos.length,scheme:e?O.cloneScheme(e):Q(b,t)}}function J(a,c,b){var d=a.scheme;d=d?H.cloneScheme(d):(d=H.getSchemes({theme:b||a.theme||Ga,basemap:a.basemap,geometryType:c}))&&d.primaryScheme;return d}function T(a){var c=a.avg,b=c-a.stddev,d=c+
a.stddev;b<a.min&&(b=a.min);d>a.max&&(d=a.max);a=F.round([b,d],{strictBounds:!0});b=a[0];d=a[1];a=[b,b+(c-b)/2,c,c+(d-c)/2,d];return F.round(a,{strictBounds:!0})}function Ha(a,c,b){var d=(c-a)/(b-1),e,f=[a];for(e=1;e<=b-2;e++)f.push(a+e*d);f.push(c);return F.round(f,{strictBounds:!0})}function K(a,c){var b,d;if(null==a.min)b=0,d=100;else if(a.min===a.max)0>a.min?(b=2*a.min,d=0):0<a.min?(b=0,d=2*a.min):(b=0,d=100);else if(c&&(null==a.avg||!a.stddev))b=a.min,d=a.max;return null!=b?[b,d]:null}function ea(a,
c,b,d,e){var f=null==d.useDefaultStatistics?!0:d.useDefaultStatistics;if(a&&!a.count&&!f)h(e,"smartMapping.createColorInfo: cannot create renderer when statistics.count is 0.");else{var g=d.field,k=C(d.layer),m=J(d,k),l=d.semiContinuous,p,u,n,x=c&&c.classBreakInfos,t=x&&x.length,r=c?t:5;if(m){var q=c&&-1<m.id.indexOf("seq-")?fa(m,{length:r}):z.createColors(m.colors,r);if(q.length<r)h(e,"smartMapping.createColorInfo: not enough colors in the scheme.");else{if(c){p=[];var v;1===t?(u=[x[0].minValue,
x[0].maxValue],p=[0,1],v=z.createColors(q,r)[0],n=[v,new w(v)]):l?(u=[],n=[],s.forEach(x,function(a,c){var d=0.1*(a.maxValue-a.minValue);0===c?u.push(a.minValue):u.push(a.minValue+d);c===t-1?u.push(a.maxValue):u.push(a.maxValue-d);v=new w(q[c]);n.push(v);n.push(new w(v));p.push(2*c);p.push(2*c+1)})):(u=s.map(x,function(a,c){p.push(c);return(a.minValue+a.maxValue)/2}),n=z.createColors(q,r));u=F.round(u,{strictBounds:!0})}else u=(f=f?K(a,!0):null)?Ha(f[0],f[1],5):T(a),p=[0,2,4],n=z.createColors(q,r);
b={type:"colorInfo",field:g,normalizationField:b,stops:A.createColorStops({values:u,colors:n,labelIndexes:p})};e.resolve({colorInfo:b,statistics:a,classBreaks:c,scheme:J(d,k)})}}else h(e,"smartMapping.createColorInfo: unable to find the specified scheme.")}}function ga(a,c,b,d){var e=null==b.useDefaultStatistics?!0:b.useDefaultStatistics;if(a&&!a.count&&!e)h(d,"smartMapping.createOpacityInfo: cannot create opacityInfo when statistics.count is 0.");else{var f=b.useStdDev,g=f?T(a):null,f=(e=e?K(a,f):
null)||(f?[g[0],g[4]]:[a.min,a.max]);d.resolve({opacityInfo:{type:"opacityInfo",field:b.field,normalizationField:c,stops:[{value:f[0],opacity:0.3},{value:f[1],opacity:0.7}]},statistics:a,defaultStatistics:!!e})}}function L(a,c){var b=a.scheme;b=b?G.cloneScheme(b):(b=G.getSchemes({theme:a.theme||Ia,basemap:a.basemap,geometryType:c}))&&b.primaryScheme;return b}function ha(a,c){var b;switch(c){case "point":b=[a.minSize,a.maxSize];break;case "line":b=[a.minWidth,a.maxWidth];break;case "polygon":b=[a.marker.minSize,
a.marker.maxSize]}return b}function ia(a,c,b,d,e){var f=null==d.useDefaultStatistics?!0:d.useDefaultStatistics,g=c&&[c.minSize,c.maxSize];if(a&&!a.count&&!f)h(e,"smartMapping.createSizeInfo: cannot create renderer when statistics.count is 0.");else{var k=C(d.layer),m=L(d,k),g=g||ha(m,k),l=(m=d.useStdDev)?T(a):null,m=(f=f?K(a,m):null)||(m?[l[0],l[4]]:[a.min,a.max]);e.resolve({sizeInfo:{type:"sizeInfo",field:d.field,valueExpression:d.valueExpression,valueUnit:"unknown",normalizationField:b,minSize:g[0],
maxSize:g[1],minDataValue:m[0],maxDataValue:m[1]},statistics:a,defaultStatistics:!!f,suggestedSizeRange:c,scheme:L(d,k)})}}function M(a,c,b){var d,e=[],f=1/(b+1);for(d=1;d<=b;d++)e.push(w.blendColors(a,c,f*d));return e}function ja(a,c){var b=[];if(1===c)b=[a[0]];else if(2===c)b=[a[0],a[2]];else if(3===c)b=a;else{var d=c-a.length,b=d/2;0===d%2?(d=M(a[0],a[1],b),b=M(a[1],a[2],b)):(d=M(a[0],a[1],Math.floor(b)),b=M(a[1],a[2],Math.ceil(b)));b=[a[0]].concat(d).concat([a[1]]).concat(b).concat([a[2]])}return b}
function fa(a,c,b){var d,e=c.length,f=-1;b&&s.some(c,function(a,c){a.hasAvg&&(f=c);return-1<f});if(-1<f){var g=a.colors;a=f+1;c=e-f;b=g.slice(0,3);g=g.slice(2);b.reverse();b=ja(b,a);g=ja(g,c);b.reverse();d=[].concat(b).concat(g.slice(1))}else if((a=a.colorsForClassBreaks)&&0<a.length)if(s.some(a,function(a){a.numClasses===e&&(d=a.colors);return!!d}),!d&&(b=a[a.length-1],a=e-b.numClasses,0<a)){c=b.colors[b.numClasses-1];d=b.colors.splice(0);for(b=1;b<=a;b++)d.push(c)}d&&(d=z.createColors(d,d.length));
return d}function Ja(a,c,b,d){var e=b.field,f=C(b.layer),g=null==b.showOthers?!0:b.showOthers,k=b.classificationMethod||"equal-interval",m="standard-deviation"===k,l=b.normalizationType,p,u,n,x=a.classBreakInfos;(p=J(b,f,"high-to-low"))?(u=fa(p,x),!u||u.length!=x.length?h(d,"smartMapping.createClassedColorRenderer: unable to find suitable colors for number of classes."):(n=new I(null,e),n.classificationMethod=k,n.normalizationType=l,n.normalizationField="field"===l?b.normalizationField:void 0,n.normalizationTotal=
"percent-of-total"===l?a.normalizationTotal:void 0,g&&(n.defaultSymbol=y(p,p.noDataColor,f),n.defaultLabel=E.other),s.forEach(x,function(a,c){n.addBreak({minValue:a.minValue,maxValue:a.maxValue,symbol:y(p,u[c],f),label:a.label})}),m||A.setLabelsForClassBreaks({classBreaks:n.infos,classificationMethod:k,normalizationType:l,round:!0}),c&&c.widthInfo&&n.setVisualVariables([c.widthInfo]),a.renderer=n,a.scheme=J(b,f,"high-to-low"),d.resolve(a))):h(d,"smartMapping.createClassedColorRenderer: unable to find suitable style scheme.")}
function ka(a){var c=new q,b=a.layer,d=null==a.useDefaultBreaks?!0:a.useDefaultBreaks,e=a.optimizeOutline,f=[b.statisticsPlugin.getClassBreaks(a)];e&&f.push(b.statisticsPlugin.getSuggestedOutline("object"===typeof e?e:null));(new B(f)).then(function(f){var k=f[0];f=f[1];var m=e&&f[0]?f[1]:null;if(k[0]||d&&!b.graphics.length){var k=k[1],l=d?K(k?{min:k.minValue,max:k.maxValue}:{}):null;l&&(k=a.layer.statisticsPlugin.getClassBreaks(D.mixin(a,{classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,
minValue:l[0],maxValue:l[1],normalizationTotal:l[0]+l[1]})));X(k).then(function(a){a.defaultStatistics=!!l;c.resolve({cbResponse:a,suggestedOutline:m})}).otherwise(function(){h(c,"smartMapping: error when calculating default class breaks.")})}else h(c,"smartMapping: error when calculating class breaks.")});return c.promise}function Ka(a,c,b,d){c=d||ha(a,c);a=c[0];c=(c[1]-a)/(4<=b?b-1:b);var e=[];for(d=0;d<b;d++)e.push(a+c*d);return e}function U(a,c,b,d,e){var f=d.field,g=C(d.layer),k=null==d.showOthers?
!0:d.showOthers,m=d.classificationMethod||"equal-interval",l=d.normalizationType,p=a.classBreakInfos,h=L(d,g),n=Ka(h,g,p.length,c),x="polygon"===g,t=x?h.marker:h;c=x?h.background:null;var r;r=new I(null,f);r.classificationMethod=m;r.normalizationType=l;r.normalizationField="field"===l?d.normalizationField:void 0;r.normalizationTotal="percent-of-total"===l?a.normalizationTotal:void 0;k&&(r.defaultSymbol=y(t,t.noDataColor,x?"point":g),r.defaultLabel=E.other);c&&(r.backgroundFillSymbol=y(c,c.color,g));
s.forEach(p,function(a,c){r.addBreak({minValue:a.minValue,maxValue:a.maxValue,symbol:y(t,t.color,x?"point":g,n[c]),label:a.label})});"standard-deviation"!==m&&A.setLabelsForClassBreaks({classBreaks:r.infos,classificationMethod:m,normalizationType:l,round:!0});b&&b.widthInfo&&r.setVisualVariables([b.widthInfo]);a.renderer=r;a.scheme=L(d,g);e.resolve(a)}function V(a){var c=a.scheme;c=c?Z.cloneScheme(c):(c=Z.getSchemes({theme:a.theme||La,basemap:a.basemap}))&&c.primaryScheme;return c}function la(a,c,
b){var d=null==c.useDefaultStatistics?!0:c.useDefaultStatistics;if(!a.count&&!d)h(b,"smartMapping.createHeatmapRenderer: cannot create renderer when statistics.count is 0.");else{var e=a.fieldOffset,f=null==c.blurRadius?10:c.blurRadius,g=null==c.minRatio?0.01:c.minRatio,k=null==c.maxRatio?1:c.maxRatio,m=null==c.fadeToTransparent?!0:c.fadeToTransparent,l=V(c).colors,p=l.length,u=(d=!a.count&&d)?[0,100]:[a.min,a.max],n=new Aa;n.setBlurRadius(f);n.setField(c.field);null!=e&&n.setFieldOffset(e);n.setMinPixelIntensity(u[0]);
n.setMaxPixelIntensity(u[1]);var e=l[0],x=[{ratio:0,color:new w([e.r,e.g,e.b,0])},{ratio:ma,color:new w([e.r,e.g,e.b,0])},{ratio:m?g:ma,color:e}],t=(k-g)/(p-1),l=z.createColors(l,p);s.forEach(l,function(a,c){x.push({ratio:g+t*c,color:a})});n.setColorStops(x);b.resolve({renderer:n,statistics:a,defaultStatistics:d,scheme:V(c)})}}function Ma(a,c){var b=a.scheme;b=b?O.cloneScheme(b):(b=O.getSchemes({theme:a.theme||aa,basemap:a.basemap,geometryType:c}))&&b.primaryScheme;return b}function Na(a,c){var b=
{};s.forEach(a,function(a){var e=c.getField(a.name);b[a.name]=a.label||e&&e.alias||a.name});return function(a){return b[a.value]}}function Oa(a){return function(c,b){var d=s.indexOf(a,c.value),e=s.indexOf(a,b.value);return d-e}}function Pa(a,c,b,d,e){var f=new q,g=a.layer;g.statisticsPlugin.getPredominantCategories({fields:c}).always(function(k){if(!k||!k.predominantCategoryInfos)k={predominantCategoryInfos:s.map(c,function(a){return{value:a,count:0}})};var m=da(k.predominantCategoryInfos,e,{layer:g,
valueExpression:d.valueExpression,labelCallback:Na(a.fields,g),numTypes:-1,showOthers:a.showOthers,sortBy:Oa(c),predominanceScheme:b,useSizeInfo:a.includeSizeInfo});m.predominantCategoryInfos=m.uniqueValueInfos;delete m.uniqueValueInfos;m.source=k.source;f.resolve(m)});return f.promise}function Qa(a,c,b,d){var e=new q;z.createSizeInfo({layer:a.layer,valueExpression:d.valueExpression,sqlExpression:d.statisticsQuery.sqlExpression,sqlWhere:d.statisticsQuery.sqlWhere,scheme:b,optimizeForScale:a.optimizeForScale}).then(function(a){a.sizeInfo.legendOptions=
{title:E.sumOfCategories};e.resolve(a)}).otherwise(function(a){h(e,"smartMapping.createPredominanceRenderer: error when calculating statistics for visual variable(size).")});return e.promise}function Ra(a,c,b){var d=new q;a.layer.statisticsPlugin.getFieldStatistics({valueExpression:b.valueExpression,sqlExpression:b.statisticsQuery.sqlExpression,sqlWhere:b.statisticsQuery.sqlWhere}).then(function(a){var f=null==a.avg||null==a.stddev,g=100*(1/c.length),k=f?100:a.avg+1.285*a.stddev;100<k&&(k=100);g=
F.round([g,k],{strictBounds:!0});d.resolve({opacityInfo:{type:"opacityInfo",valueExpression:b.valueExpression,stops:[{value:g[0],opacity:0.15},{value:g[1],opacity:1}],legendOptions:{title:E.strengthOfPredominance}},statistics:a,defaultStatistics:f})}).otherwise(function(a){h(d,"smartMapping.createPredominanceRenderer: error when calculating statistics for visual variable(opacity).")});return d.promise}function Sa(a,c,b,d){var e=C(a.layer),f=Ma(a,e);a.layer.statisticsPlugin.getPredominanceExpressions({fields:c}).then(function(e){var k=
Pa(a,c,f,e.predominantCategory,b),m,l;a.includeSizeInfo&&(m=Qa(a,c,f.sizeInfo,e.size));a.includeOpacityInfo&&(l=Ra(a,c,e.opacity));wa([k,m,l]).then(function(a){var c=a[0],b=a[1],e=a[2];a=[];if(c instanceof Error)h(d,"smartMapping.createPredominanceRenderer: unable to create unique-value renderer.");else{if(m){if(b instanceof Error){h(d,"smartMapping.createPredominanceRenderer: unable to create visual variable for symbol size.");return}a.push(A.cloneSizeInfo(b.sizeInfo));delete b.scheme;c.size=b}if(l){if(e instanceof
Error){h(d,"smartMapping.createPredominanceRenderer: unable to create visual variable for symbol opacity.");return}a.push(A.cloneOpacityInfo(e.opacityInfo));c.opacity=e}if(a.length){if(b=c.renderer.visualVariables)Array.prototype.push.apply(b,a),a=b;c.renderer.setVisualVariables(a)}d.resolve(c)}})}).otherwise(function(a){h(d,"smartMapping.createPredominanceRenderer: unable to generate expressions.")})}function na(a,c){var b,d,e,f,g,k,m,l,h={};b=s.filter(a,function(a){d=a.name;e=d.toLowerCase();if(k=
d!==c&&-1===s.indexOf(oa,e))m=m||(-1<s.indexOf(pa,a.type)?d:null),l=l||("esriFieldTypeString"===a.type?d:null);return k});s.forEach(b,function(a){d=a.name;e=d.toLowerCase();(f=-1<s.indexOf(pa,a.type))&&(h=qa(d,e,Ta,h,"number"));if(!h.rank||"string"===h.fieldType)(g="esriFieldTypeString"===a.type)&&(h=qa(d,e,Ua,h,"string"))});return h.fieldName||m||l}function qa(a,c,b,d,e){var f,g=-1;f=-1;var k,g=s.indexOf(b,c);for(k=0;k<b.length;k++)if(-1<c.indexOf(b[k])){f=k;break}c=g;if(-1<c&&(!d.rank||d.fieldType!==
e||"exact"===d.matchType&&d.fieldType===e&&d.rank>c))d={rank:c,matchType:"exact",fieldType:e,fieldName:a};else if(-1<f&&(!d.rank||d.fieldType===e&&"contains"===d.matchType&&d.rank>f))d={rank:f,matchType:"contains",fieldType:e,fieldName:a};return d}var z={},N=Math.pow(2,53)-1,E=Ca.smartMapping,aa="default",Ga="high-to-low",Ia="default",La="default",ma=0.01,Va=/https?:\/\/services.*\.arcgis\.com/i,oa="id fips fid objectid _objectid __objectid x y lat long latitude longitude shape shape_length shape_leng shape_area perimeter stretched_value fnode_ tnode_ lpoly_ rpoly_ poly_ subclass rings_ok rings_nok st_length(shape) st_area(shape)".split(" "),
Ta="count percent sum elevation value valore valoare total gesamt score income age expected average median size cost expenditure revenue profit growth sale quantity population price unit length width difference distance".split(" "),Ua="type name status class category code value label zone symbol color owner district group species rating score party".split(" "),pa=["esriFieldTypeInteger","esriFieldTypeDouble","esriFieldTypeSingle","esriFieldTypeSmallInteger"],v=W.toAbsMid?W.toAbsMid("../plugins/FeatureLayerStatistics"):
ra.id.replace(/\/[^\/]*$/ig,"/")+"../plugins/FeatureLayerStatistics";D.mixin(z,{createColors:function(a,c){var b=[],d=a.length,e;for(e=0;e<c;e++)b.push(new w(a[e%d]));return b},createTypeRenderer:function(a){var c=new q;if(!a||!a.layer||!a.field||!a.scheme&&!a.basemap)return h(c,"smartMapping.createTypeRenderer: missing parameters."),c.promise;var b=a.layer,d=a.optimizeOutline;b.addPlugin(v).then(function(){var e=[b.statisticsPlugin.getUniqueValues({field:a.field,includeAllCodedValues:a.includeAllCodedValues})];
d&&e.push(b.statisticsPlugin.getSuggestedOutline("object"===typeof d?d:null));(new B(e)).then(function(b){var e=b[0];b=b[1];b=d&&b[0]?b[1]:null;e[0]?(e=e[1],b=da(e.uniqueValueInfos,b,a),b.source=e.source,c.resolve(b)):h(c,"smartMapping.createTypeRenderer: error when calculating unique values.")})}).otherwise(function(a){h(c,"smartMapping.createTypeRenderer: error when adding feature layer statistics plugin.")});return c.promise},createColorInfo:function(a){var c=new q;if(!a||!a.layer||!a.field)return h(c,
"smartMapping.createColorInfo: missing parameters."),c.promise;var b=a.layer,d=a.normalizationField,e=d?"field":void 0;a.statistics?ea(a.statistics,null,d,a,c):b.addPlugin(v).then(function(){var f="group-similar"===a.theme||a.scheme&&0===a.scheme.id.indexOf("group-similar/");(f?b.statisticsPlugin.getClassBreaks({field:a.field,classificationMethod:"natural-breaks",numClasses:a.numGroups||5,normalizationType:e,normalizationField:d,minValue:a.minValue,maxValue:a.maxValue}):b.statisticsPlugin.getFieldStatistics({field:a.field,
normalizationType:e,normalizationField:d,minValue:a.minValue,maxValue:a.maxValue})).then(function(b){var e,m;f?e=b:m=b;ea(m,e,d,a,c)}).otherwise(function(a){h(c,f?"smartMapping.createColorInfo: error when calculating class breaks.":"smartMapping.createColorInfo: error when calculating field statistics.")})}).otherwise(function(a){h(c,"smartMapping.createColorInfo: error when adding feature layer statistics plugin.")});return c.promise},createColorRenderer:function(a){var c=new q;if(!a||!a.layer||
!a.field)return h(c,"smartMapping.createColorRenderer: missing parameters."),c.promise;var b=a.layer,d=a.normalizationField,e=d?"field":void 0,f=a.optimizeOutline;b.addPlugin(v).then(function(){var g=[z.createColorInfo(a)];f&&g.push(b.statisticsPlugin.getSuggestedOutline("object"===typeof f?f:null));(new B(g)).then(function(b){var g=b[0];b=b[1];b=f&&b[0]?b[1]:null;if(g[0]){var g=g[1],l=a.field,p=C(a.layer),u=null==a.showOthers?!0:a.showOthers,n=H.cloneScheme(g.scheme),l=new I(null,l);u&&(l.defaultSymbol=
y(n,n.noDataColor,p),l.defaultLabel=E.other);l.addBreak({minValue:-N,maxValue:N,symbol:y(n,n.noDataColor,p)});l.normalizationType=e;l.normalizationField=d;p=[A.cloneColorInfo(g.colorInfo)];b&&b.widthInfo&&p.push(b.widthInfo);l.setVisualVariables(p);c.resolve({renderer:l,colorInfo:A.cloneColorInfo(g.colorInfo),statistics:g.statistics,classBreaks:g.classBreaks,scheme:H.cloneScheme(g.scheme)})}else h(c,"smartMapping.createColorRenderer: error when calculating colorInfo.")})}).otherwise(function(a){h(c,
"smartMapping.createColorRenderer: error when adding feature layer statistics plugin.")});return c.promise},createOpacityInfo:function(a){var c=new q;if(!a||!a.layer||!a.field)return h(c,"smartMapping.createOpacityInfo: missing parameters."),c.promise;var b=a.layer,d=a.normalizationField,e=d?"field":void 0;a.statistics?ga(a.statistics,d,a,c):b.addPlugin(v).then(function(){b.statisticsPlugin.getFieldStatistics({field:a.field,normalizationType:e,normalizationField:d,minValue:a.minValue,maxValue:a.maxValue,
features:a.features}).then(function(b){ga(b,d,a,c)}).otherwise(function(a){h(c,"smartMapping.createOpacityInfo: error when calculating field statistics.")})}).otherwise(function(a){h(c,"smartMapping.createOpacityInfo: error when adding feature layer statistics plugin.")});return c.promise},createBlendRenderer:function(a){var c=new q,b=this,d,e=[],f={},g=[],k=[],m=a.opacityValueCombinationMethod||"avg",l={};if(!a||!a.layer||!a.blendedFields)return h(c,"smartMapping.createBlendRenderer: missing parameters."),
c.promise;a.basemap=a.basemap||"topo";e=C(a.layer);d=Q({basemap:a.basemap},e);d.colors=[new w("#e60000"),new w("#0000e6"),new w("#00e600"),new w("#e67300"),new w("#a900e6")];l.fields=[];l.normalizationField=a.normalizationField;l.blendMode=a.blendMode||"source-over";l.symbol=y(d,d.noDataColor,a.markers?"point":e);f.layer=a.layer;f.normalizationField=a.normalizationField;f.useStdDev=a.useStdDev||!1;e=s.map(a.blendedFields,function(a,c){l.fields.push({field:a,color:d.colors[c]});f.field=a;return b.createOpacityInfo(f)});
ta(e).then(function(b){k[0]=b[0].opacityInfo.stops[0].value;k[1]=b[1].opacityInfo.stops[1].value;s.forEach(b.slice(0,1),function(a){var c=a.opacityInfo.stops[0].value,b=a.opacityInfo.stops[1].value;"union"===m?(k[0]=c<k[0]?c:k[0],k[1]=b>k[1]?b:k[1]):"avg"===m&&(k[0]+=a.opacityInfo.stops[0].value,k[1]+=a.opacityInfo.stops[1].value)});g[0]={value:"avg"===m?k[0]/b.length:k[0],opacity:a.minOpacity?a.minOpacity:b[0].opacityInfo.stops[0].opacity};g[1]={value:"avg"===m?k[1]/b.length:k[1],opacity:a.maxOpacity?
a.maxOpacity:b[0].opacityInfo.stops[1].opacity};l.opacityStops=g;c.resolve({renderer:new Ba(l),scheme:d,opacityInfos:b})});return c.promise},createSizeInfo:function(a){var c=new q;if(!a||!a.layer||!a.field&&!a.valueExpression&&!a.sqlExpression)return h(c,"smartMapping.createSizeInfo: missing parameters."),c.promise;var b=a.layer,d=a.normalizationField,e=d?"field":void 0,f=a.optimizeForScale;a.statistics?ia(a.statistics,null,d,a,c):b.addPlugin(v).then(function(){var g=[b.statisticsPlugin.getFieldStatistics({field:a.field,
valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,normalizationType:e,normalizationField:d,minValue:a.minValue,maxValue:a.maxValue})];f&&g.push(b.statisticsPlugin.getSuggestedSizeRange({optimizeForScale:!0===f?"map-scale":f}));(new B(g)).then(function(b){var e=b[0];b=f&&b[1];b=f&&b[0]?b[1]:null;e[0]?ia(e[1],b,d,a,c):h(c,"smartMapping.createSizeInfo: error when calculating field statistics.")})}).otherwise(function(a){h(c,"smartMapping.createSizeInfo: error when adding feature layer statistics plugin.")});
return c.promise},createSizeRenderer:function(a){var c=new q;if(!a||!a.layer||!a.field)return h(c,"smartMapping.createSizeRenderer: missing parameters."),c.promise;var b=a.layer,d=a.normalizationField,e=d?"field":void 0,f=a.optimizeOutline;b.addPlugin(v).then(function(){var g=[z.createSizeInfo(a)];f&&g.push(b.statisticsPlugin.getSuggestedOutline("object"===typeof f?f:null));(new B(g)).then(function(b){var g=b[0];b=b[1];b=f&&b[0]?b[1]:null;if(g[0]){var g=g[1],l=a.field,p=C(a.layer),s=null==a.showOthers?
!0:a.showOthers,n=G.cloneScheme(g.scheme),q="polygon"===p,t=q?n.marker:n,n=q?n.background:null,r="line"===p?t.noDataWidth:t.noDataSize,l=new I(null,l);s&&(l.defaultSymbol=y(t,t.noDataColor,q?"point":p,r),l.defaultLabel=E.other);l.addBreak({minValue:-N,maxValue:N,symbol:y(t,t.color,q?"point":p)});n&&(l.backgroundFillSymbol=y(n,n.color,p));l.normalizationType=e;l.normalizationField=d;p=[A.cloneSizeInfo(g.sizeInfo)];b&&b.widthInfo&&p.push(b.widthInfo);l.setVisualVariables(p);c.resolve({renderer:l,sizeInfo:A.cloneSizeInfo(g.sizeInfo),
statistics:g.statistics,defaultStatistics:g.defaultStatistics,suggestedSizeRange:g.suggestedSizeRange,scheme:G.cloneScheme(g.scheme)})}else h(c,"smartMapping.createSizeRenderer: error when calculating sizeInfo.")})}).otherwise(function(a){h(c,"smartMapping.createSizeRenderer: error when adding feature layer statistics plugin.")});return c.promise},createClassedColorRenderer:function(a){var c=new q,b=a.minValue,d=a.maxValue,e;if(!a||!a.layer||!a.field)return h(c,"smartMapping.createClassedColorRenderer: missing parameters."),
c.promise;e=null!=b&&null!=d;if(!e&&(null!=b||null!=d))return h(c,"smartMapping.createClassedColorRenderer: both minValue and maxValue are required when specifying custom data range."),c.promise;a=D.mixin({analyzeData:!e},a);a.layer.addPlugin(v).then(function(){ka(a).then(function(b){Ja(b.cbResponse,b.suggestedOutline,a,c)}).otherwise(function(a){h(c,"smartMapping.createClassedColorRenderer: error when calculating class breaks.")})}).otherwise(function(a){h(c,"smartMapping.createClassedColorRenderer: error when adding feature layer statistics plugin.")});
return c.promise},createClassedSizeRenderer:function(a){var c=new q,b=a.minValue,d=a.maxValue,e;if(!a||!a.layer||!a.field)return h(c,"smartMapping.createClassedSizeRenderer: missing parameters."),c.promise;e=null!=b&&null!=d;if(!e&&(null!=b||null!=d))return h(c,"smartMapping.createClassedColorRenderer: both minValue and maxValue are required when specifying custom data range."),c.promise;a=D.mixin({analyzeData:!e},a);var f=a.layer;f.addPlugin(v).then(function(){ka(a).then(function(b){a.optimizeForScale?
f.statisticsPlugin.getSuggestedSizeRange().then(function(d){U(b.cbResponse,[d.minSize,d.maxSize],b.suggestedOutline,a,c)}).otherwise(function(d){U(b.cbResponse,null,b.suggestedOutline,a,c)}):U(b.cbResponse,null,b.suggestedOutline,a,c)}).otherwise(function(a){h(c,"smartMapping.createClassedSizeRenderer: error when calculating class breaks.")})}).otherwise(function(a){h(c,"smartMapping.createClassedSizeRenderer: error when adding feature layer statistics plugin.")});return c.promise},createHeatmapRenderer:function(a){var c=
new q;if(!a||!a.layer)return h(c,"smartMapping.createHeatmapRenderer: missing parameters."),c.promise;var b=a.layer;a.statistics?la(a.statistics,a,c):b.addPlugin(v).then(function(){b.statisticsPlugin.getHeatmapStatistics(a).then(function(b){la(b,a,c)}).otherwise(function(a){h(c,"smartMapping.createHeatmapRenderer: error when calculating heatmap statistics.")})}).otherwise(function(a){h(c,"smartMapping.createHeatmapRenderer: error when adding feature layer statistics plugin.")});return c.promise},
applyHeatmapScheme:function(a){if(a&&a.renderer&&a.scheme){var c=V({scheme:a.scheme});a=a.renderer;var b=a.colorStops,c=c.colors;if(b.length===c.length+3){var d;d=new w(c[0]);b=s.map(b,function(a){return D.mixin({},a)});b[0].color=new w([d.r,d.g,d.b,0]);b[1].color=new w([d.r,d.g,d.b,0]);b[2].color=d;for(d=3;d<b.length;d++)b[d].color=c[d-3];a.setColorStops(b)}}},sampleSize:500,createPredominanceRenderer:function(a){var c=new q;if(!a||!a.layer||!(a.fields&&1<a.fields.length))return h(c,"smartMapping.createPredominanceRenderer: missing parameters."),
c.promise;if(5<a.fields.length)return h(c,"smartMapping.createPredominanceRenderer: too many fields. Maximum supported is 5."),c.promise;var b=a.layer;b.addPlugin(v).then(function(){var d=s.map(a.fields,function(a){return a.name});$(b,function(){var e=b.getOutFields()||[],f=-1!==s.indexOf(e,"*"),g=a.optimizeOutline,f=f?null:s.filter(d,function(a){return-1===s.indexOf(e,a)}),k=b.advancedQueryCapabilities&&b.advancedQueryCapabilities.supportsSqlExpression;b.url?!k||!b.useStandardizedQueries&&!Va.test(b.url)?
h(c,"smartMapping.createPredominanceRenderer: predominance renderer is not supported for this layer. Make sure the layer supports advanced SQL expressions and standardized queries."):f&&f.length?h(c,"smartMapping.createPredominanceRenderer: make sure the layer is configured to fetch all fields specified in parameters."):(g=g?b.statisticsPlugin.getSuggestedOutline("object"===typeof g?g:null):null,X(g).always(function(b){b&&!b.widthInfo&&(b=null);Sa(a,d,b,c)})):h(c,"smartMapping.createPredominanceRenderer: feature collection is not supported.")})}).otherwise(function(a){h(c,
"smartMapping.createPredominanceRenderer: error when adding feature layer statistics plugin.")});return c.promise},excludedFields:oa,getSuggestedField:function(a){var c=new q;if(!a||!(a.layer||a.fields&&a.objectIdField))return h(c,"smartMapping.getSuggestedField: missing parameters."),c.promise;a.layer?$(a.layer,function(){c.resolve(na(a.layer.fields,a.layer.objectIdField))}):c.resolve(na(a.fields,a.objectIdField));return c.promise}});sa("extend-esri")&&D.setObject("renderer.smartMapping",z,va);return z});
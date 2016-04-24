//>>built
define("esri/layers/Raster","require dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/array dojo/_base/config dojo/json dojo/sniff ../kernel ../Evented ../request ../geometry/Extent ../SpatialReference ../deferredUtils ./PixelBlock ./rasterFormats/LercCodec".split(" "),function(y,n,k,u,v,w,z,q,A,B,C,D,E,x,m,F){var r,s,p;n=n(B,{declaredClass:"esri.layers.Raster",imageServiceUrl:null,validPixelTypes:"U1 U2 U4 U8 U16 U32 S8 S16 S32 F32".split(" "),validFormats:"lerc jpeg jpg jpgpng png png8 png24 png32 bip bsq".split(" "),
_eventMap:{"raster-read-complete":["pixelData","params"]},constructor:function(a){if(!a)throw"Image Service URL is not defined";this.imageServiceUrl=a;this.registerConnectEvents();this._loadRasterFormatModules()},read:function(a,b,c){var e=this,d=new u(x._dfdCanceller);if(10>q("ie"))throw"This browser is not supported.";if(!a.imageServiceParameters)throw"Insufficient parameters to read data";var f=k.clone(a.imageServiceParameters),g=a.pixelType;v.some(this.validPixelTypes,function(a){return a===g})||
(f.pixelType="F32");v.some(this.validFormats,function(a){return a.toLowerCase()===f.format.toLowerCase()})||(f.format="lerc");var h=a.decodeFunc,l;this._prepareGetImageParameters(f);d._pendingDfd=C({url:this.imageServiceUrl+"/exportImage",handleAs:"arraybuffer",content:k.mixin(f,{f:"image"}),load:function(a){var k=f.format.toUpperCase();"BSQ"!==k&&"BIP"!==k&&(k=e._getFormat(a));if("ERROR"===k)a=Error(String.fromCharCode.apply(null,new Uint8Array(a))),a.log=w.isDebug,e._resolve([a],null,c,d,!0);else{if(void 0===
h||null===h)h=e._getFormatDecoderDfd(k);h?h(a,{width:f.width,height:f.height,planes:null,pixelType:g,noDataValue:f.noData}).then(function(a){l={pixelBlock:a,extent:f.extent};e._resolve([l,f],"onRasterReadComplete",b,d)},function(a){e._resolve([a],null,c,d,!0)}):(a=Error("Format '"+f.format+"' is not supported."),a.log=w.isDebug,e._resolve([a],null,c,d,!0))}},error:function(a){e._resolve([a],null,c,d,!0)}});return d.promise},onRasterReadComplete:function(){},_prepareGetImageParameters:function(a){if(a.size&&
a.bbox){var b=a.size.split(",");a.width=parseFloat(b[0]);a.height=parseFloat(b[1]);a.extent||(b=a.bbox.split(","),a.extent=new D(parseFloat(b[0]),parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3]),new E(a.bboxSR)))}else{if(!a.width||Math.floor(a.width)!==a.width||!a.height||Math.floor(a.height)!==a.height)throw"Incorrect Image Dimensions";if(!a.extent||"esri.geometry.Extent"!==a.extent.declaredClass)throw"Incorrect extent";var b=a.extent,c=b.spatialReference.wkid||z.toJson(b.spatialReference.toJson());
delete a._ts;k.mixin(a,{bbox:b.xmin+","+b.ymin+","+b.xmax+","+b.ymax,imageSR:c,bboxSR:c,size:a.width+","+a.height},a.disableClientCaching?{_ts:(new Date).getTime()}:{})}},_adjustExtent:function(a,b,c){var e=a.ymax-a.ymin,d=a.xmax-a.xmin;c>=b?a.ymax=a.ymin+d*b/c:(d=e*c/b,a.xmax=a.xmin+d);return a},_resolve:function(a,b,c,e,d){b&&this[b].apply(this,a);c&&c.apply(null,a);e&&x._resDfd(e,a,d)},_getFormatDecoderDfd:function(a){var b=null;switch(a){case "LERC":b=this._decodeLerc;break;case "JPEG":b=this._decodeJpeg;
break;case "PNG":b=this._decodePng;break;case "BSQ":b=this._decodeBsq;break;case "BIP":b=this._decodeBip}b=k.hitch(this,b);return function(a,e){var d=new u;try{var f=b(a,e);d.resolve(f)}catch(g){d.reject(g)}return d}},_getFormat:function(a){a=new Uint8Array(a,0,10);var b="";255===a[0]&&216===a[1]?b="JPEG":137===a[0]&&80===a[1]&&78===a[2]&&71===a[3]?b="PNG":67===a[0]&&110===a[1]&&116===a[2]&&90===a[3]&&73===a[4]&&109===a[5]&&97===a[6]&&103===a[7]&&101===a[8]&&32===a[9]?b="LERC":-1<String.fromCharCode.apply(null,
a).toLowerCase().indexOf("error")&&(b="ERROR");return b},_validateDecodeParams:function(a){if(!a.height||Math.floor(a.height)!==a.height)throw"Height not provided.";if(!a.width||Math.floor(a.width)!==a.width)throw"Width not provided.";},_decodeJpeg:function(a,b){if(!r)throw"The jpeg decoder module is not loaded.";this._validateDecodeParams(b);var c=(new r).decode(a);if(c.height!==b.height||c.width!==b.width)throw"The decoded image dimensions are incorrect.";var e=[],d,f;for(d=0;d<c.pixels.length;d++)f=
c.pixels[d],e.push(this._calculateBandStatistics(f));return new m({width:c.width,height:c.height,pixels:c.pixels,pixelType:"U8",mask:c.mask,statistics:e})},_decodePng:function(a,b){if(!s)throw"The png decoder module is not loaded.";this._validateDecodeParams(b);var c=new Uint8Array(a),e=new s(c),c=new Uint8Array(4*b.width*b.height);e.copyToImageData(c,e.decodePixels());for(var d=e=0,f,d=new Uint8Array(b.width*b.height),e=0;e<b.width*b.height;e++)d[e]=c[4*e+3];for(var g=new m({width:b.width,height:b.height,
pixels:[],pixelType:"U8",mask:d,statistics:[]}),e=0;3>e;e++){f=new Uint8Array(b.width*b.height);for(d=0;d<b.width*b.height;d++)f[d]=c[4*d+e];g.addData({pixels:f,statistics:this._calculateBandStatistics(f)})}return g},_decodeBsq:function(a,b){if(!p)throw"The bsq decoder module is not loaded.";this._validateDecodeParams(b);g=b.noDataValue;b.pixelType=t(b.pixelType);var c=p.decodeBSQ(a,{bandCount:b.planes,width:b.width,height:b.height,pixelType:l,noDataValue:g}),e=[],d,f=null;for(d=0;d<c.pixels.length;d++)f=
c.pixels[d],e.push(this._calculateBandStatistics(f));return new m({width:b.width,height:b.height,pixels:c.pixels,pixelType:b.pixelType,mask:c.maskData,statistics:e})},_decodeBip:function(a,b){this._validateDecodeParams(b);g=b.noDataValue;b.pixelType=t(b.pixelType);var c=p.decodeBIP(a,{bandCount:b.planes,width:b.width,height:b.height,pixelType:l,noDataValue:g}),e=[],d,f=null;for(d=0;d<c.pixels.length;d++)f=c.pixels[d],e.push(this._calculateBandStatistics(f));return new m({width:b.width,height:b.height,
pixels:c.pixels,pixelType:b.pixelType,mask:c.maskData,statistics:e})},_decodeLerc:function(a,b){this._validateDecodeParams(b);g=b.noDataValue;b.pixelType=t(b.pixelType);for(var c=0,e,d=0,f,k=a.byteLength-10;d<k;){var h=F.decode(a,{inputOffset:d,encodedMaskData:e,returnMask:0===c?!0:!1,returnEncodedMask:0===c?!0:!1,returnFileInfo:!0,pixelType:l,noDataValue:g}),d=h.fileInfo.eofOffset;0===c&&(e=h.encodedMaskData,f=new m({width:b.width,height:b.height,pixels:[],pixelType:b.pixelType,mask:h.maskData,statistics:[]}));
c++;if(h.height!==b.height||h.width!==b.width)throw"The decoded image dimensions are incorrect";f.addData({pixels:h.pixelData,statistics:{minValue:h.minValue,maxValue:h.maxValue,noDataValue:h.noDataValue}})}return f},_calculateBandStatistics:function(a){var b=Infinity,c=-Infinity,e=a.length,d,f=0;for(d=0;d<e;d++)f=a[d],b=f<b?f:b,c=f>c?f:c;return{minValue:b,maxValue:c}},_loadRasterFormatModules:function(){10>q("ie")||y(["./rasterFormats/JpgPlus","./rasterFormats/Png","./rasterFormats/Raw"],function(a,
b,c){r=a;s=b;p=c})}});var l=null,g=null,t=function(a){"U1"===a||"U2"===a||"U4"===a||"U8"===a?(a="U8",g=Math.pow(2,8)-1,l=Uint8Array):"U16"===a?(g=g||Math.pow(2,16)-1,l=Uint16Array):"U32"===a?(g=g||Math.pow(2,32)-1,l=Uint32Array):"S8"===a?(g=g||0-Math.pow(2,7),l=Int8Array):"S16"===a?(g=g||0-Math.pow(2,15),l=Int16Array):"S32"===a?(g=g||0-Math.pow(2,31),l=Int32Array):l=Float32Array;return a};q("extend-esri")&&k.setObject("layers.Raster",n,A);return n});
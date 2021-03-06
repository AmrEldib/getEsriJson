//>>built
define("dojox/gfx/vml","dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/_base/Color dojo/_base/sniff dojo/_base/config dojo/dom dojo/dom-geometry dojo/dom-style dojo/_base/kernel ./_base ./shape ./path ./arc ./gradient ./matrix".split(" "),function(n,l,u,v,r,s,z,A,B,C,k,m,t,D,E,p){function w(a,b,c){c=c||C.global;b.call(c,a);(a instanceof k.Surface||a instanceof k.Group)&&u.forEach(a.children,function(a){w(a,b,c)})}var h=k.vml={},x=function(){h.xmlns="urn:schemas-microsoft-com:vml";try{document.namespaces.add("v",
h.xmlns);var a="* group roundrect oval shape rect imagedata path textpath text".split(" "),b=0,c=1,d=document.createStyleSheet();8<=r("ie")&&(b=1,c=a.length);for(;b<c;++b)d.addRule("v\\:"+a[b],"behavior:url(#default#VML); display:inline-block")}catch(f){setTimeout(x,10)}};x();h.text_alignment={start:"left",middle:"center",end:"right"};h._parseFloat=function(a){return a.match(/^\d+f$/i)?parseInt(a)/65536:parseFloat(a)};h._bool={t:1,"true":1};h._reparentEvents=function(a,b){for(var c in b)"on"==c.substr(0,
2).toLowerCase()&&(a[c]=b[c],b[c]=null)};h.Shape=l("dojox.gfx.vml.Shape",m.Shape,{setFill:function(a){if(!a)return this.fillStyle=null,this.rawNode.filled="f",this;var b,c,d;if("object"==typeof a&&"type"in a){switch(a.type){case "linear":var f=this._getRealMatrix(),e=this.getBoundingBox(),g=this._getRealBBox?this._getRealBBox():this.getTransformedBoundingBox();d=[];this.fillStyle!==a&&(this.fillStyle=k.makeParameters(k.defaultLinearGradient,a));a=k.gradient.project(f,this.fillStyle,{x:e.x,y:e.y},
{x:e.x+e.width,y:e.y+e.height},g[0],g[2]);c=a.colors;"0.00000"!=c[0].offset.toFixed(5)&&d.push("0 "+k.normalizeColor(c[0].color).toHex());for(b=0;b<c.length;++b)d.push(c[b].offset.toFixed(5)+" "+k.normalizeColor(c[b].color).toHex());b=c.length-1;"1.00000"!=c[b].offset.toFixed(5)&&d.push("1 "+k.normalizeColor(c[b].color).toHex());b=this.rawNode.fill;b.colors.value=d.join(";");b.method="sigma";b.type="gradient";b.angle=(270-p._radToDeg(a.angle))%360;b.on=!0;break;case "radial":this.fillStyle=a=k.makeParameters(k.defaultRadialGradient,
a);var f=parseFloat(this.rawNode.style.left),e=parseFloat(this.rawNode.style.top),g=parseFloat(this.rawNode.style.width),h=parseFloat(this.rawNode.style.height),l=isNaN(g)?1:2*a.r/g;c=[];0<a.colors[0].offset&&c.push({offset:1,color:k.normalizeColor(a.colors[0].color)});u.forEach(a.colors,function(a,b){c.push({offset:1-a.offset*l,color:k.normalizeColor(a.color)})});for(b=c.length-1;0<=b&&0>c[b].offset;)--b;if(b<c.length-1){d=c[b];var m=c[b+1];m.color=v.blendColors(d.color,m.color,d.offset/(d.offset-
m.offset));for(m.offset=0;2<c.length-b;)c.pop()}b=c.length-1;d=[];for(0<c[b].offset&&d.push("0 "+c[b].color.toHex());0<=b;--b)d.push(c[b].offset.toFixed(5)+" "+c[b].color.toHex());b=this.rawNode.fill;b.colors.value=d.join(";");b.method="sigma";b.type="gradientradial";isNaN(g)||isNaN(h)||isNaN(f)||isNaN(e)?b.focusposition="0.5 0.5":b.focusposition=((a.cx-f)/g).toFixed(5)+" "+((a.cy-e)/h).toFixed(5);b.focussize="0 0";b.on=!0;break;case "pattern":this.fillStyle=a=k.makeParameters(k.defaultPattern,a),
b=this.rawNode.fill,b.type="tile",b.src=a.src,a.width&&a.height&&(b.size.x=k.px2pt(a.width),b.size.y=k.px2pt(a.height)),b.alignShape="f",b.position.x=0,b.position.y=0,b.origin.x=a.width?a.x/a.width:0,b.origin.y=a.height?a.y/a.height:0,b.on=!0}this.rawNode.fill.opacity=1;return this}this.fillStyle=k.normalizeColor(a);(b=this.rawNode.fill)||(b=this.rawNode.ownerDocument.createElement("v:fill"));b.method="any";b.type="solid";b.opacity=this.fillStyle.a;if(d=this.rawNode.filters["DXImageTransform.Microsoft.Alpha"])d.opacity=
Math.round(100*this.fillStyle.a);this.rawNode.fillcolor=this.fillStyle.toHex();this.rawNode.filled=!0;return this},setStroke:function(a){if(!a)return this.strokeStyle=null,this.rawNode.stroked="f",this;if("string"==typeof a||n.isArray(a)||a instanceof v)a={color:a};a=this.strokeStyle=k.makeParameters(k.defaultStroke,a);a.color=k.normalizeColor(a.color);var b=this.rawNode;b.stroked=!0;b.strokecolor=a.color.toCss();b.strokeweight=a.width+"px";b.stroke&&(b.stroke.opacity=a.color.a,b.stroke.endcap=this._translate(this._capMap,
a.cap),"number"==typeof a.join?(b.stroke.joinstyle="miter",b.stroke.miterlimit=a.join):b.stroke.joinstyle=a.join,b.stroke.dashstyle="none"==a.style?"Solid":a.style);return this},_capMap:{butt:"flat"},_capMapReversed:{flat:"butt"},_translate:function(a,b){return b in a?a[b]:b},_applyTransform:function(){var a=this._getRealMatrix();if(a){var b=this.rawNode.skew;if("undefined"==typeof b)for(var c=0;c<this.rawNode.childNodes.length;++c)if("skew"==this.rawNode.childNodes[c].tagName){b=this.rawNode.childNodes[c];
break}if(b){b.on="f";var c=a.xx.toFixed(8)+" "+a.xy.toFixed(8)+" "+a.yx.toFixed(8)+" "+a.yy.toFixed(8)+" 0 0",a=Math.floor(a.dx).toFixed()+"px "+Math.floor(a.dy).toFixed()+"px",d=this.rawNode.style,f=parseFloat(d.left),e=parseFloat(d.top),g=parseFloat(d.width),d=parseFloat(d.height);isNaN(f)&&(f=0);isNaN(e)&&(e=0);if(isNaN(g)||!g)g=1;if(isNaN(d)||!d)d=1;f=(-f/g-0.5).toFixed(8)+" "+(-e/d-0.5).toFixed(8);b.matrix=c;b.origin=f;b.offset=a;b.on=!0}}this.fillStyle&&"linear"==this.fillStyle.type&&this.setFill(this.fillStyle);
this.clip&&this.setClip(this.clip);return this},_setDimensions:function(a,b){return this},setRawNode:function(a){a.stroked="f";a.filled="f";this.rawNode=a;this.rawNode.__gfxObject__=this},_moveToFront:function(){this.rawNode.parentNode.appendChild(this.rawNode);return this},_moveToBack:function(){var a=this.rawNode,b=a.parentNode,c=b.firstChild;b.insertBefore(a,c);"rect"==c.tagName&&c.swapNode(a);return this},_getRealMatrix:function(){return this.parentMatrix?new p.Matrix2D([this.parentMatrix,this.matrix]):
this.matrix},setClip:function(a){this.inherited(arguments);var b=this.rawNode.style;if(a){if("width"in a){var c=this._getRealMatrix(),d=parseFloat(b.left),f=parseFloat(b.top);isNaN(d)&&(d=0);isNaN(f)&&(f=0);var e=p.multiplyRectangle(c,a),c=p.multiplyPoint(c,{x:d,y:f});b.clip="rect("+Math.round(e.y-c.y)+"px "+Math.round(e.x-c.x+e.width)+"px "+Math.round(e.y-c.y+e.height)+"px "+Math.round(e.x-c.x)+"px)"}}else b.position="absolute",b.clip="rect(0px "+b.width+" "+b.height+" 0px)";return this}});(function(){var a=
h.Shape,b=a.prototype.setStroke,c=a.prototype.setFill;a.prototype.setStroke=function(){var a=b.apply(this,arguments),c=this.rawNode,c=c&&c.stroke,e=this.getParent();c&&e&&(c.opacity*=void 0!==e._esriIeOpacity&&null!==e._esriIeOpacity?e._esriIeOpacity:1);return a};a.prototype.setFill=function(){var a=c.apply(this,arguments),b=this.rawNode,e=b&&b.fill,g=this.getParent();e&&g&&(g=void 0!==g._esriIeOpacity&&null!==g._esriIeOpacity?g._esriIeOpacity:1,"tile"===e.type?B.set(b,"opacity",g):e.opacity*=g);
return a}})();h.Group=l("dojox.gfx.vml.Group",h.Shape,{constructor:function(){m.Container._init.call(this)},_applyTransform:function(){for(var a=this._getRealMatrix(),b=0;b<this.children.length;++b)this.children[b]._updateParentMatrix(a);this.clip&&this.setClip(this.clip);return this},_setDimensions:function(a,b){var c=this.rawNode,d=c.style,f=this.bgNode.style;d.width=a;d.height=b;c.coordsize=a+" "+b;f.width=a;f.height=b;for(c=0;c<this.children.length;++c)this.children[c]._setDimensions(a,b);return this},
setClip:function(a){this.clip=a;var b=this.rawNode.style;if(a){if("width"in a){var c=this._getRealMatrix();a=p.multiplyRectangle(c,a);var d=this.getBoundingBox(),c=(d=d?p.multiplyRectangle(c,d):null)&&0>d.x?d.x:0,d=d&&0>d.y?d.y:0;b.position="absolute";b.clip="rect("+Math.round(a.y-d)+"px "+Math.round(a.x+a.width-c)+"px "+Math.round(a.y+a.height-d)+"px "+Math.round(a.x-c)+"px)"}}else b.position="absolute",b.clip="rect(0px "+b.width+" "+b.height+" 0px)";return this},destroy:function(){this.clear(!0);
h.Shape.prototype.destroy.apply(this,arguments)}});h.Group.nodeType="group";h.Rect=l("dojox.gfx.vml.Rect",[h.Shape,m.Rect],{setShape:function(a){a=this.shape=k.makeParameters(this.shape,a);this.bbox=null;var b=Math.min(1,a.r/Math.min(parseFloat(a.width),parseFloat(a.height))).toFixed(8),c=this.rawNode.parentNode,d=null;if(c){if(c.lastChild!==this.rawNode)for(var f=0;f<c.childNodes.length;++f)if(c.childNodes[f]===this.rawNode){d=c.childNodes[f+1];break}c.removeChild(this.rawNode)}7<r("ie")?(f=this.rawNode.ownerDocument.createElement("v:roundrect"),
f.arcsize=b,f.style.display="inline-block",h._reparentEvents(f,this.rawNode),this.rawNode=f,this.rawNode.__gfxObject__=this):this.rawNode.arcsize=b;c&&(d?c.insertBefore(this.rawNode,d):c.appendChild(this.rawNode));b=this.rawNode.style;b.left=a.x.toFixed();b.top=a.y.toFixed();b.width="string"==typeof a.width&&0<=a.width.indexOf("%")?a.width:Math.max(a.width.toFixed(),0);b.height="string"==typeof a.height&&0<=a.height.indexOf("%")?a.height:Math.max(a.height.toFixed(),0);return this.setTransform(this.matrix).setFill(this.fillStyle).setStroke(this.strokeStyle)}});
h.Rect.nodeType="roundrect";h.Ellipse=l("dojox.gfx.vml.Ellipse",[h.Shape,m.Ellipse],{setShape:function(a){a=this.shape=k.makeParameters(this.shape,a);this.bbox=null;var b=this.rawNode.style;b.left=(a.cx-a.rx).toFixed();b.top=(a.cy-a.ry).toFixed();b.width=(2*a.rx).toFixed();b.height=(2*a.ry).toFixed();return this.setTransform(this.matrix)}});h.Ellipse.nodeType="oval";h.Circle=l("dojox.gfx.vml.Circle",[h.Shape,m.Circle],{setShape:function(a){a=this.shape=k.makeParameters(this.shape,a);this.bbox=null;
var b=this.rawNode.style;b.left=(a.cx-a.r).toFixed();b.top=(a.cy-a.r).toFixed();b.width=(2*a.r).toFixed();b.height=(2*a.r).toFixed();return this}});h.Circle.nodeType="oval";h.Line=l("dojox.gfx.vml.Line",[h.Shape,m.Line],{constructor:function(a){a&&a.setAttribute("dojoGfxType","line")},setShape:function(a){a=this.shape=k.makeParameters(this.shape,a);this.bbox=null;this.rawNode.path.v="m"+a.x1.toFixed()+" "+a.y1.toFixed()+"l"+a.x2.toFixed()+" "+a.y2.toFixed()+"e";return this.setTransform(this.matrix)}});
h.Line.nodeType="shape";h.Polyline=l("dojox.gfx.vml.Polyline",[h.Shape,m.Polyline],{constructor:function(a){a&&a.setAttribute("dojoGfxType","polyline")},setShape:function(a,b){a&&a instanceof Array?(this.shape=k.makeParameters(this.shape,{points:a}),b&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.shape=k.makeParameters(this.shape,a);this.bbox=null;this._normalizePoints();var c=[],d=this.shape.points;if(0<d.length&&(c.push("m"),c.push(d[0].x.toFixed(),d[0].y.toFixed()),
1<d.length)){c.push("l");for(var f=1;f<d.length;++f)c.push(d[f].x.toFixed(),d[f].y.toFixed())}c.push("e");this.rawNode.path.v=c.join(" ");return this.setTransform(this.matrix)}});h.Polyline.nodeType="shape";h.Image=l("dojox.gfx.vml.Image",[h.Shape,m.Image],{setShape:function(a){a=this.shape=k.makeParameters(this.shape,a);this.bbox=null;this.rawNode.firstChild.src=a.src;return this.setTransform(this.matrix)},_applyTransform:function(){var a=this._getRealMatrix(),b=this.rawNode,c=b.style,d=this.shape,
a=a?p.multiply(a,{dx:d.x,dy:d.y}):p.normalize({dx:d.x,dy:d.y});if(0==a.xy&&0==a.yx&&0<a.xx&&0<a.yy)c.filter="",c.width=Math.floor(a.xx*d.width),c.height=Math.floor(a.yy*d.height),c.left=Math.floor(a.dx),c.top=Math.floor(a.dy);else{var f=b.parentNode.style;c.left="0px";c.top="0px";c.width=f.width;c.height=f.height;a=p.multiply(a,{xx:d.width/parseInt(c.width),yy:d.height/parseInt(c.height)});(b=b.filters["DXImageTransform.Microsoft.Matrix"])?(b.M11=a.xx,b.M12=a.xy,b.M21=a.yx,b.M22=a.yy,b.Dx=a.dx,b.Dy=
a.dy):c.filter="progid:DXImageTransform.Microsoft.Matrix(M11\x3d"+a.xx+", M12\x3d"+a.xy+", M21\x3d"+a.yx+", M22\x3d"+a.yy+", Dx\x3d"+a.dx+", Dy\x3d"+a.dy+")"}return this},_setDimensions:function(a,b){var c=this.rawNode;return c.filters["DXImageTransform.Microsoft.Matrix"]?(c=c.style,c.width=a,c.height=b,this._applyTransform()):this}});h.Image.nodeType="rect";h.Text=l("dojox.gfx.vml.Text",[h.Shape,m.Text],{constructor:function(a){a&&a.setAttribute("dojoGfxType","text");this.fontStyle=null},_alignment:{start:"left",
middle:"center",end:"right"},setShape:function(a){this.shape=k.makeParameters(this.shape,a);this.bbox=null;var b=this.rawNode;a=this.shape;var c=a.x,d=a.y.toFixed();switch(a.align){case "middle":c-=5;break;case "end":c-=10}for(var d="m"+c.toFixed()+","+d+"l"+(c+10).toFixed()+","+d+"e",f=null,c=null,e=b.childNodes,g=0;g<e.length;++g){var y=e[g].tagName;if("path"==y){if(f=e[g],c)break}else if("textpath"==y&&(c=e[g],f))break}f||(f=b.ownerDocument.createElement("v:path"),b.appendChild(f));c||(c=b.ownerDocument.createElement("v:textpath"),
b.appendChild(c));f.v=d;f.textPathOk=!0;c.on=!0;b=h.text_alignment[a.align];c.style["v-text-align"]=b?b:"left";c.style["text-decoration"]=a.decoration;c.style["v-rotate-letters"]=a.rotated;c.style["v-text-kern"]=a.kerning;c.string=a.text;return this.setTransform(this.matrix)},_setFont:function(){for(var a=this.fontStyle,b=this.rawNode.childNodes,c=0;c<b.length;++c)if("textpath"==b[c].tagName){b[c].style.font=k.makeFontString(a);break}this.setTransform(this.matrix)},_getRealMatrix:function(){var a=
this.inherited(arguments);a&&(a=p.multiply(a,{dy:0.35*-k.normalizedLength(this.fontStyle?this.fontStyle.size:"10pt")}));return a},getTextWidth:function(){var a=this.rawNode,b=a.style.display;a.style.display="inline";var c=k.pt2px(parseFloat(a.currentStyle.width));a.style.display=b;return c}});h.Text.nodeType="shape";h.Path=l("dojox.gfx.vml.Path",[h.Shape,t.Path],{constructor:function(a){a&&!a.getAttribute("dojoGfxType")&&a.setAttribute("dojoGfxType","path");this.vmlPath="";this.lastControl={}},_updateWithSegment:function(a){var b=
n.clone(this.last);this.inherited(arguments);1<arguments.length||(b=this[this.renderers[a.action]](a,b),"string"==typeof this.vmlPath?(this.vmlPath+=b.join(""),this.rawNode.path.v=this.vmlPath+" r0,0 e"):Array.prototype.push.apply(this.vmlPath,b))},setShape:function(a){this.vmlPath=[];this.lastControl.type="";this.inherited(arguments);this.vmlPath=this.vmlPath.join("");this.rawNode.path.v=this.vmlPath+" r0,0 e";return this},_pathVmlToSvgMap:{m:"M",l:"L",t:"m",r:"l",c:"C",v:"c",qb:"Q",x:"z",e:""},
renderers:{M:"_moveToA",m:"_moveToR",L:"_lineToA",l:"_lineToR",H:"_hLineToA",h:"_hLineToR",V:"_vLineToA",v:"_vLineToR",C:"_curveToA",c:"_curveToR",S:"_smoothCurveToA",s:"_smoothCurveToR",Q:"_qCurveToA",q:"_qCurveToR",T:"_qSmoothCurveToA",t:"_qSmoothCurveToR",A:"_arcTo",a:"_arcTo",Z:"_closePath",z:"_closePath"},_addArgs:function(a,b,c,d){for(b=b instanceof Array?b:b.args;c<d;++c)a.push(" ",b[c].toFixed())},_adjustRelCrd:function(a,b,c){b=b instanceof Array?b:b.args;var d=b.length,f=Array(d),e=0,g=
a.x;a=a.y;"number"!=typeof g&&(f[0]=g=b[0],f[1]=a=b[1],e=2);if("number"==typeof c&&2!=c)for(var h=c;h<=d;){for(;e<h;e+=2)f[e]=g+b[e],f[e+1]=a+b[e+1];g=f[h-2];a=f[h-1];h+=c}else for(;e<d;e+=2)f[e]=g+=b[e],f[e+1]=a+=b[e+1];return f},_adjustRelPos:function(a,b){for(var c=b instanceof Array?b:b.args,d=c.length,f=Array(d),e=0;e<d;++e)f[e]=a+=c[e];return f},_moveToA:function(a){var b=[" m"];a=a instanceof Array?a:a.args;var c=a.length;this._addArgs(b,a,0,2);2<c&&(b.push(" l"),this._addArgs(b,a,2,c));this.lastControl.type=
"";return b},_moveToR:function(a,b){return this._moveToA(this._adjustRelCrd(b,a))},_lineToA:function(a){var b=[" l"];a=a instanceof Array?a:a.args;this._addArgs(b,a,0,a.length);this.lastControl.type="";return b},_lineToR:function(a,b){return this._lineToA(this._adjustRelCrd(b,a))},_hLineToA:function(a,b){for(var c=[" l"],d=" "+b.y.toFixed(),f=a instanceof Array?a:a.args,e=f.length,g=0;g<e;++g)c.push(" ",f[g].toFixed(),d);this.lastControl.type="";return c},_hLineToR:function(a,b){return this._hLineToA(this._adjustRelPos(b.x,
a),b)},_vLineToA:function(a,b){for(var c=[" l"],d=" "+b.x.toFixed(),f=a instanceof Array?a:a.args,e=f.length,g=0;g<e;++g)c.push(d," ",f[g].toFixed());this.lastControl.type="";return c},_vLineToR:function(a,b){return this._vLineToA(this._adjustRelPos(b.y,a),b)},_curveToA:function(a){var b=[];a=a instanceof Array?a:a.args;for(var c=a.length,d=this.lastControl,f=0;f<c;f+=6)b.push(" c"),this._addArgs(b,a,f,f+6);d.x=a[c-4];d.y=a[c-3];d.type="C";return b},_curveToR:function(a,b){return this._curveToA(this._adjustRelCrd(b,
a,6))},_smoothCurveToA:function(a,b){var c=[],d=a instanceof Array?a:a.args,f=d.length,e=this.lastControl,g=0;"C"!=e.type&&(c.push(" c"),this._addArgs(c,[b.x,b.y],0,2),this._addArgs(c,d,0,4),e.x=d[0],e.y=d[1],e.type="C",g=4);for(;g<f;g+=4)c.push(" c"),this._addArgs(c,[2*b.x-e.x,2*b.y-e.y],0,2),this._addArgs(c,d,g,g+4),e.x=d[g],e.y=d[g+1];return c},_smoothCurveToR:function(a,b){return this._smoothCurveToA(this._adjustRelCrd(b,a,4),b)},_qCurveToA:function(a){var b=[];a=a instanceof Array?a:a.args;for(var c=
a.length,d=this.lastControl,f=0;f<c;f+=4)b.push(" qb"),this._addArgs(b,a,f,f+4);d.x=a[c-4];d.y=a[c-3];d.type="Q";return b},_qCurveToR:function(a,b){return this._qCurveToA(this._adjustRelCrd(b,a,4))},_qSmoothCurveToA:function(a,b){var c=[],d=a instanceof Array?a:a.args,f=d.length,e=this.lastControl,g=0;"Q"!=e.type&&(c.push(" qb"),this._addArgs(c,[e.x=b.x,e.y=b.y],0,2),e.type="Q",this._addArgs(c,d,0,2),g=2);for(;g<f;g+=2)c.push(" qb"),this._addArgs(c,[e.x=2*b.x-e.x,e.y=2*b.y-e.y],0,2),this._addArgs(c,
d,g,g+2);return c},_qSmoothCurveToR:function(a,b){return this._qSmoothCurveToA(this._adjustRelCrd(b,a,2),b)},_arcTo:function(a,b){for(var c=[],d=a.args,f=d.length,e="a"==a.action,g=0;g<f;g+=7){var h=d[g+5],k=d[g+6];e&&(h+=b.x,k+=b.y);for(var l=D.arcAsBezier(b,d[g],d[g+1],d[g+2],d[g+3]?1:0,d[g+4]?1:0,h,k),m=0;m<l.length;++m){c.push(" c");var n=l[m];this._addArgs(c,n,0,n.length);this._updateBBox(n[0],n[1]);this._updateBBox(n[2],n[3]);this._updateBBox(n[4],n[5])}b.x=h;b.y=k}this.lastControl.type="";
return c},_closePath:function(){this.lastControl.type="";return["x"]},_getRealBBox:function(){this._confirmSegmented();if(this.tbbox)return this.tbbox;"string"==typeof this.shape.path&&(this.shape.path="");return this.inherited(arguments)}});h.Path.nodeType="shape";h.EsriPath=l("dojox.gfx.vml.EsriPath",h.Path,{setShape:function(a){this.rawNode.path.v=this.vmlPath=a;return this}});h.EsriPath.nodeType="shape";h.TextPath=l("dojox.gfx.vml.TextPath",[h.Path,t.TextPath],{constructor:function(a){a&&a.setAttribute("dojoGfxType",
"textpath");this.fontStyle=null;"text"in this||(this.text=n.clone(k.defaultTextPath));"fontStyle"in this||(this.fontStyle=n.clone(k.defaultFont))},setText:function(a){this.text=k.makeParameters(this.text,"string"==typeof a?{text:a}:a);this._setText();return this},setFont:function(a){this.fontStyle="string"==typeof a?k.splitFontString(a):k.makeParameters(k.defaultFont,a);this._setFont();return this},_setText:function(){this.bbox=null;for(var a=this.rawNode,b=this.text,c=null,d=null,f=a.childNodes,
e=0;e<f.length;++e){var g=f[e].tagName;if("path"==g){if(c=f[e],d)break}else if("textpath"==g&&(d=f[e],c))break}c||(c=this.rawNode.ownerDocument.createElement("v:path"),a.appendChild(c));d||(d=this.rawNode.ownerDocument.createElement("v:textpath"),a.appendChild(d));c.textPathOk=!0;d.on=!0;a=h.text_alignment[b.align];d.style["v-text-align"]=a?a:"left";d.style["text-decoration"]=b.decoration;d.style["v-rotate-letters"]=b.rotated;d.style["v-text-kern"]=b.kerning;d.string=b.text},_setFont:function(){for(var a=
this.fontStyle,b=this.rawNode.childNodes,c=0;c<b.length;++c)if("textpath"==b[c].tagName){b[c].style.font=k.makeFontString(a);break}}});h.TextPath.nodeType="shape";h.Surface=l("dojox.gfx.vml.Surface",m.Surface,{constructor:function(){m.Container._init.call(this)},destroy:function(){this.clear(!0);this.inherited(arguments)},setDimensions:function(a,b){this.width=k.normalizedLength(a);this.height=k.normalizedLength(b);if(!this.rawNode)return this;var c=this.clipNode.style,d=this.rawNode,f=d.style,e=
this.bgNode.style,g=this._parent.style;g.width=a;g.height=b;c.width=a;c.height=b;c.clip="rect(0px "+a+"px "+b+"px 0px)";f.width=a;f.height=b;d.coordsize=a+" "+b;e.width=a;e.height=b;for(c=0;c<this.children.length;++c)this.children[c]._setDimensions(a,b);return this},getDimensions:function(){var a=this.rawNode?{width:k.normalizedLength(this.rawNode.style.width),height:k.normalizedLength(this.rawNode.style.height)}:null;0>=a.width&&(a.width=this.width);0>=a.height&&(a.height=this.height);return a}});
h.createSurface=function(a,b,c){if(!b&&!c){var d=A.position(a);b=b||d.w;c=c||d.h}"number"==typeof b&&(b+="px");"number"==typeof c&&(c+="px");d=new h.Surface;a=z.byId(a);var f=d.clipNode=a.ownerDocument.createElement("div"),e=d.rawNode=a.ownerDocument.createElement("v:group"),g=f.style,l=e.style;7<r("ie")&&(l.display="inline-block");d._parent=a;d._nodes.push(f);a.style.width=b;a.style.height=c;g.position="absolute";g.width=b;g.height=c;g.clip="rect(0px "+b+" "+c+" 0px)";l.position="absolute";l.width=
b;l.height=c;e.coordsize=("100%"===b?b:parseFloat(b))+" "+("100%"===c?c:parseFloat(c));e.coordorigin="0 0";var g=d.bgNode=e.ownerDocument.createElement("v:rect"),m=g.style;m.left=m.top=0;m.width=l.width;m.height=l.height;g.filled=g.stroked="f";e.appendChild(g);f.appendChild(e);a.appendChild(f);d.width=k.normalizedLength(b);d.height=k.normalizedLength(c);return d};l=function(a){if(this!=a.getParent()){var b=a.getParent();b&&b.remove(a);this.rawNode.appendChild(a.rawNode);q.add.apply(this,arguments);
w(this,function(a){"function"==typeof a.getFont&&(a.setShape(a.getShape()),a.setFont(a.getFont()));"function"==typeof a.setFill&&(a.setFill(a.getFill()),a.setStroke(a.getStroke()))})}return this};t=function(a){this!=a.getParent()&&(this.rawNode.appendChild(a.rawNode),a.getParent()||(a.setFill(a.getFill()),a.setStroke(a.getStroke())),q.add.apply(this,arguments));return this};var q=m.Container;s={add:!0===s.fixVmlAdd?l:t,remove:function(a,b){this==a.getParent()&&(this.rawNode==a.rawNode.parentNode&&
this.rawNode.removeChild(a.rawNode),q.remove.apply(this,arguments));return this},clear:function(){for(var a=this.rawNode;a.firstChild!=a.lastChild;)a.firstChild!=this.bgNode&&a.removeChild(a.firstChild),a.lastChild!=this.bgNode&&a.removeChild(a.lastChild);return q.clear.apply(this,arguments)},getBoundingBox:q.getBoundingBox,_moveChildToFront:q._moveChildToFront,_moveChildToBack:q._moveChildToBack};l={createGroup:function(){var a=this.createObject(h.Group,null),b=a.rawNode.ownerDocument.createElement("v:rect");
b.style.left=b.style.top=0;b.style.width=a.rawNode.style.width;b.style.height=a.rawNode.style.height;b.filled=b.stroked="f";a.rawNode.appendChild(b);a.bgNode=b;return a},createImage:function(a){if(!this.rawNode)return null;var b=new h.Image,c=this.rawNode.ownerDocument,d=c.createElement("v:rect");d.stroked="f";d.style.width=this.rawNode.style.width;d.style.height=this.rawNode.style.height;c=c.createElement("v:imagedata");d.appendChild(c);b.setRawNode(d);this.rawNode.appendChild(d);b.setShape(a);this.add(b);
return b},createRect:function(a){if(!this.rawNode)return null;var b=new h.Rect,c=this.rawNode.ownerDocument.createElement("v:roundrect");7<r("ie")&&(c.style.display="inline-block");b.setRawNode(c);this.rawNode.appendChild(c);b.setShape(a);this.add(b);return b},createObject:function(a,b){if(!this.rawNode)return null;var c=new a,d=this.rawNode.ownerDocument.createElement("v:"+a.nodeType);c.setRawNode(d);this.rawNode.appendChild(d);switch(a){case h.Group:case h.Line:case h.Polyline:case h.Image:case h.Text:case h.Path:case h.TextPath:this._overrideSize(d)}c.setShape(b);
this.add(c);return c},_overrideSize:function(a){var b=this.rawNode.style,c=b.width,b=b.height;a.style.width=c;a.style.height=b;a.coordsize=parseInt(c)+" "+parseInt(b)}};n.extend(h.Group,s);n.extend(h.Group,m.Creator);n.extend(h.Group,l);n.extend(h.Surface,s);n.extend(h.Surface,m.Creator);n.extend(h.Surface,l);h.fixTarget=function(a,b){a.gfxTarget||(a.gfxTarget=a.target.__gfxObject__);return!0};return h});
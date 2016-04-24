//>>built
define("esri/arcade/languageUtils",["require","exports","../moment","dojo/number"],function(n,c,e,m){function f(a){return"string"===typeof a||a instanceof String}function g(a){return"boolean"===typeof a}function h(a){return"number"===typeof a}function d(a){return a instanceof Date}function k(a,b){return!1===isNaN(a)?void 0===b||null===b||""===b?a.toString():m.format(a,{pattern:b}):a.toString()}function l(a,b){var c=e(a);return void 0===b||null===b||""===b?c.format():c.format(b)}c.defaultUndefined=
function(a,b){return void 0===a?b:a};c.isString=f;c.isBoolean=g;c.isNumber=h;c.isArray=function(a){return a instanceof Array};c.isDate=d;c.pcCheck=function(a,b,c){if(a.length<b||a.length>c)throw Error("Function called with wrong number of Parameters");};c.formatNumber=k;c.formatDate=l;c.equalityTest=function(a,b){return a===b?!0:d(a)&&d(b)?a.getTime()===b.getTime():!1};c.toString=function(a,b){return f(a)?a:null===a?"":h(a)?k(a,b):g(a)?a.toString():d(a)?l(a,b):""};c.toNumber=function(a,b){return h(a)?
a:null===a||d(a)||g(a)||""===a||void 0===a?NaN:Number(a)};c.toDate=function(a,b){if(d(a))return a;if(f(a)){var c=e(a,[void 0===b||null===b||""===b?e.ISO_8601:b]);if(c.isValid())return c.toDate()}return null};c.toDateM=function(a,b){if(d(a))return e(a);if(f(a)){var c=e(a,[void 0===b||null===b||""===b?e.ISO_8601:b]);if(c.isValid())return c}return null};c.toBoolean=function(a){if(g(a))return a;f(a)&&(a=a.toLowerCase());switch(a){case !0:case "true":case 1:case "1":case "on":case "yes":return!0;default:return!1}};
c.fixSpatialReference=function(a,b){if(null===a)return null;if(null===a.spatialReference||void 0===a.spatialReference)a.spatialReference=b;return a}});
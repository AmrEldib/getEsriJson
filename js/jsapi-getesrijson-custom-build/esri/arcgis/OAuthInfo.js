//>>built
define("esri/arcgis/OAuthInfo",["../kernel","../lang","dojo/_base/declare","dojo/_base/lang","dojo/has"],function(c,d,a,b,e){a=a(null,{declaredClass:"esri.arcgis.OAuthInfo",constructor:function(a){b.mixin(this,{expiration:20160,minTimeUntilExpiration:30,portalUrl:"https://www.arcgis.com",authNamespace:"/",forceLogin:!1,showSocialLogins:!1,popup:!1,popupCallbackUrl:"oauth-callback.html",popupWindowFeatures:"height\x3d480,width\x3d800,location,resizable,scrollbars,status"},a)},_oAuthCred:null,toJson:function(){return d.fixJson({appId:this.appId,
expiration:this.expiration,locale:this.locale,minTimeUntilExpiration:this.minTimeUntilExpiration,portalUrl:this.portalUrl,authNamespace:this.authNamespace,forceLogin:this.forceLogin,showSocialLogins:this.showSocialLogins,popup:this.popup,popupCallbackUrl:this.popupCallbackUrl,popupWindowFeatures:this.popupWindowFeatures})}});e("extend-esri")&&b.setObject("arcgis.OAuthInfo",a,c);return a});
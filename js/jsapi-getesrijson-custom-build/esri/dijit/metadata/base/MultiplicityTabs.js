//>>built
require({cache:{"url:esri/dijit/metadata/base/templates/MultiplicityTabs.html":'\x3cdiv class\x3d"gxeMultiplicityTabs" style\x3d"display:none;"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/metadata/base/MultiplicityTabs","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/dom-construct dojo/has ./Templated dojo/text!./templates/MultiplicityTabs.html ./TabButton ../../../kernel".split(" "),function(c,f,e,d,g,h,k,l,m,n){c=c([k],{multiplicityHeader:null,templateString:l,postCreate:function(){this.inherited(arguments)},activateTab:function(a){if(a){this.highlightTab(a);var b=a.tabIndex;this._setCurrentIndex(b);a=this.getElements();e.forEach(a,function(a,
d){a.domNode.style.display=d===b?"block":"none"});this._updateTools(a)}},addTabButton:function(){var a=this.getCurrentIndex(),b=this.getChildren().length,b=new m({label:""+(b+1),tabIndex:b,onClick:f.hitch(this,function(a){this.activateTab(a)})});g.place(b.domNode,this.containerNode,"last");-1===a&&(this._setCurrentIndex(0),d.add(b.domNode,"current"));this.updateUI();return b},ensureTabButton:function(){0===this.getChildren().length&&this.addTabButton()},getCurrentIndex:function(){return this.multiplicityHeader._currentIndex},
_setCurrentIndex:function(a){this.multiplicityHeader._currentIndex=a},getElements:function(){return this.multiplicityHeader.getElements()},getMultiplicityInfo:function(){return this.multiplicityHeader.getMultiplicityInfo(null)},getTabButton:function(a){return this.getChildren()[a]},highlightTab:function(a){e.forEach(this.getChildren(),function(a){d.remove(a.domNode,"current")});d.add(a.domNode,"current")},initialize:function(a){this.multiplicityHeader=a;this.updateUI()},sync:function(){var a=this.getCurrentIndex(),
b=this.getChildren();e.forEach(b,function(b,c){b.tabIndex=c;b.setLabel(""+(c+1));c===a?d.add(b.domNode,"current"):d.remove(b.domNode,"current")});a<b.length&&this.activateTab(this.getTabButton(a));this.updateUI()},_updateTools:function(a){this.multiplicityHeader.tools.updateUI(a)},updateUI:function(){1<this.getMultiplicityInfo().numElements?this.domNode.style.display="inline-block":this.domNode.style.display="none"}});h("extend-esri")&&f.setObject("dijit.metadata.base.MultiplicityTabs",c,n);return c});
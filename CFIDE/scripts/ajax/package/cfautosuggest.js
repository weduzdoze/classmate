/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Autosuggest){
ColdFusion.Autosuggest={};
}
var staticgifpath=_cf_ajaxscriptsrc+"/resources/cf/images/static.gif";
var dynamicgifpath=_cf_ajaxscriptsrc+"/resources/cf/images/loading.gif";
ColdFusion.Autosuggest.loadAutoSuggest=function(_587,_588){
var _589=ColdFusion.objectCache[_588.autosuggestid];
if(typeof (_587)=="string"){
_587=_587.split(",");
}else{
var _58a=false;
if(_587&&ColdFusion.Util.isArray(_587)){
_58a=true;
if(_587.length>0&&(typeof (_587[0])!="string"&&typeof (_587[0])!="number")){
_58a=false;
}
}
if(!_58a){
ColdFusion.handleError(_589.onbinderror,"autosuggest.loadautosuggest.invalidvalue","widget",[_588.autosuggestid]);
return;
}
}
var _58b=document.getElementById(_588.autosuggestid).value;
if(_58b.length==1&&_587.length==0){
var _58c=new Array();
_589.dataSource.flushCache();
_589.dataSource=new YAHOO.widget.DS_JSArray(_58c);
_589.autosuggestitems=_58c;
}
if(_587.length>0){
var i=0;
var _58e=false;
var _58c=new Array();
for(i=0;i<_587.length;i++){
if(_587[i]){
if(typeof (_587[i])=="string"){
_58c[i]=_587[i];
}else{
if(typeof (_587[i])=="number"){
_58c[i]=_587[i]+"";
}else{
_58c[i]=new String(_587[i]);
}
}
if(_58c[i].indexOf(_58b)==0){
_58e=true;
}
}
}
if(_58e==false&&_589.showloadingicon==true){
document.getElementById(_588.autosuggestid+"_cf_button").src=staticgifpath;
}
_589.dataSource.flushCache();
_589.dataSource=new YAHOO.widget.DS_JSArray(_58c);
_589.autosuggestitems=_58c;
if(_589.queryMatchContains){
_589.dataSource.queryMatchContains=_589.queryMatchContains;
}
_589._sendQuery(_58b);
}else{
if(_589.showloadingicon==true){
document.getElementById(_588.autosuggestid+"_cf_button").src=staticgifpath;
_589.showloadingicon==false;
}
}
};
ColdFusion.Autosuggest.checkToMakeBindCall=function(arg,_590,_591,_592,_593){
var _592=document.getElementById(_590).value;
if(!_591.isContainerOpen()&&_592.length>0&&arg.keyCode!=39&&(arg.keyCode>31||(arg.keyCode==8&&_591.valuePresent==true))){
_591.valuePresent=false;
if(_591.showloadingicon==true){
document.getElementById(_590+"_cf_button").src=dynamicgifpath;
}
ColdFusion.Log.info("autosuggest.checktomakebindcall.fetching","widget",[_590,_592]);
if(_591.cfqueryDelay>0){
var _594=setTimeout(_593,_591.cfqueryDelay*1000,this);
if(_591._nDelayID!=-1){
clearTimeout(_591._cf_nDelayID);
}
_591._cf_nDelayID=_594;
}else{
_593.call(this);
}
}
};
ColdFusion.Autosuggest.checkValueNotInAutosuggest=function(_595,_596){
if(_595.autosuggestitems){
for(var i=0;i<_595.autosuggestitems.length;i++){
if(_596==_595.autosuggestitems[i]){
return false;
}
}
}
return true;
};
ColdFusion.Autosuggest.triggerOnChange=function(type,args){
var _59a=args[0];
var _59b=document.getElementById(_59a.id);
ColdFusion.Event.callBindHandlers(_59a.id,null,"change");
};
ColdFusion.Autosuggest.init=function(_59c,_59d,_59e){
return new YAHOO.widget.AutoComplete(_59c,_59d,_59e);
};
ColdFusion.Autosuggest.initJS_ARRAY=function(_59f){
return new YAHOO.widget.DS_JSArray(_59f);
};

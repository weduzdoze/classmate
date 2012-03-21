/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.ProgressBar){
ColdFusion.ProgressBar={};
}
var $P=ColdFusion.ProgressBar;
ColdFusion.ProgressBar.create=function(_38,_39,_3a,_3b,_3c,_3d,_3e,_3f,_40,_41){
var _42={renderTo:_38,interval:_3b,onComplete:_3f,autodisplay:_3e,onError:_41};
var _43={renderTo:_38};
if(_3d!=null&&typeof (_3d)!=undefined){
_42.width=_3d;
_43.width=_3d;
}else{
_43.width=400;
}
if(_3c!=null&&typeof (_3c)!=undefined){
_42.height=_3c;
_43.height=_3c;
}else{
_42.autoHeight=true;
_43.autoHeight=true;
}
if(_39!=null){
_42.manual=true;
_42.status_retrieval_fn=_39;
}else{
_42.manual=false;
_42.duration=_3a;
}
_42.hidden=!_3e;
_43.hidden=_42.hidden;
if(_40!=null&&typeof _40!="undefined"){
_42.cls=_40;
_43.cls=_40;
}
var _44=new Ext.ProgressBar(_43);
_42.progressBarComp=_44;
ColdFusion.objectCache[_38]=_42;
ColdFusion.Log.info("progressbar.create.created","widget",[_38]);
};
$P.start=function(_45){
var _46=$P.getProgressBarObject(_45);
var _47=ColdFusion.objectCache[_45];
if(!_46.isVisible()){
_46=_46.show();
}
_47.started=true;
if(_47.manual==false){
var _48=_47.interval;
var _49=_47.duration;
var _4a=_49/_48+1;
_46.wait({interval:_48,duration:_49,increment:_4a,fn:$P.automaticPBCompleteHandler,scope:_47});
}else{
var _4b=setInterval(_47.status_retrieval_fn,_47.interval);
_47.processId=_4b;
}
ColdFusion.Log.info("progressbar.start.started","widget",[_45]);
};
$P.stop=function(_4c,_4d){
var _4e=$P.getProgressBarObject(_4c);
var _4f=ColdFusion.objectCache[_4c];
var _50=_4f.processId;
if(typeof _4f.started!="undefined"&&_4f.started==true){
_4f.started=false;
}else{
ColdFusion.Log.info("progressbar.stop.nonrunning","widget",[_4c]);
return;
}
if(_50!=null&&typeof (_50)!="undefined"){
clearInterval(_50);
}
if(typeof _4f.manual!="undefined"&&_4f.manual==false){
_4e.reset();
}
if(_4d&&_4d==true){
var _51=_4f.onComplete;
if(_51!=null&&_51.call){
_51.call();
}
}
ColdFusion.Log.info("progressbar.stop.stopped","widget",[_4c]);
};
$P.hide=function(_52){
var _53=$P.getProgressBarObject(_52);
if(_53.isVisible()){
_53.hide();
}
ColdFusion.Log.info("progressbar.hide.hidden","widget",[_52]);
};
$P.show=function(_54){
var _55=$P.getProgressBarObject(_54);
if(!_55.isVisible()){
_55.show();
}
ColdFusion.Log.info("progressbar.show.shown","widget",[_54]);
};
$P.reset=function(_56){
var _57=$P.getProgressBarObject(_56);
if(typeof _57!="undefined"){
_57.reset();
}
ColdFusion.Log.info("progressbar.reset.reset","widget",[_56]);
};
$P.updateStatus=function(_58,_59,_5a){
var _5b=$P.getProgressBarObject(_58);
if(typeof (_59)=="undefined"||typeof (_59)!="number"){
ColdFusion.handleError(null,"progressbar.updatestatus.invalidstatus","widget",[_58,_59],null,null,true);
return;
}
if(typeof _5b!="undefined"){
_5b.updateProgress(_59,_5a);
}
ColdFusion.Log.info("progressbar.updatestatus.updated","widget",[_58]);
};
$P.update=function(_5c,_5d){
var _5e={};
var _5f=ColdFusion.objectCache[_5c];
if(_5f==null||typeof (_5f)=="undefined"){
ColdFusion.handleError(null,"progressbar.update.notfound","widget",[_5c],null,null,true);
return;
}
if(_5d.duration){
if(typeof _5d.duration==="number"||typeof _5d.duration=="object"){
_5e.duration=_5d.duration;
}else{
ColdFusion.handleError(null,"progressbar.update.invalidduration","widget",[_5c],null,null,true);
return;
}
}
if(_5d.interval){
if(typeof _5d.interval==="number"||typeof _5d.interval=="object"){
_5e.interval=_5d.interval;
}else{
ColdFusion.handleError(null,"progressbar.update.invalidinterval","widget",[_5c],null,null,true);
return;
}
}
if(_5d.oncomplete){
if(typeof _5d.oncomplete==="function"||typeof _5d.oncomplete=="object"){
_5e.onComplete=_5d.oncomplete;
}else{
ColdFusion.handleError(null,"progressbar.update.invalidoncomplete","widget",[_5c],null,null,true);
return;
}
}
for(key in _5e){
_5f[key]=_5e[key];
}
ColdFusion.Log.info("progressbar.update.updated","widget",[_5c]);
};
$P.loadStatus=function(_60,_61){
var _62=ColdFusion.AjaxProxy.JSON.decode(_60);
var _63=_62.MESSAGE;
var _64=_62.STATUS;
var _65=$P.getProgressBarObject(_61._cf_progressbarid);
_65.updateProgress(_64,_63);
if(_64&&(_64===1||_64==1||_64>1)){
$P.stop(_61._cf_progressbarid,true);
}
};
$P.automaticPBCompleteHandler=function(){
var _66=this.progressBarComp;
_66.updateProgress(1);
if(this.onComplete&&typeof this.onComplete=="function"){
this.onComplete.call(_66,_66);
}
};
$P.errorHandler=function(_67,_68,_69){
var _6a=_69.bindToParams._cf_progressbarid;
var _6b=ColdFusion.objectCache[_6a];
var _6c=_6b.onError;
if(_6c!=null&&typeof _6c==="function"){
_6c.call(null,_67,_68);
}
$P.stop(_6a);
};
$P.getProgressBarObject=function(_6d){
var _6e=ColdFusion.objectCache[_6d];
if(_6e==null||typeof (_6e)=="undefined"){
ColdFusion.handleError(null,"progressbar.getProgressBarObject.missingprogressbarid","widget",[_6d],null,null,true);
return;
}
if(_6e.progressBarComp&&typeof _6e.progressBarComp!="undefined"){
return _6e.progressBarComp;
}else{
ColdFusion.handleError(null,"progressbar.getProgressBarObject.missingprogressbarcomponent","widget",[_6d],null,null,true);
return;
}
};

/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Mediaplayer){
ColdFusion.Mediaplayer={};
}
var $MP=ColdFusion.Mediaplayer;
$MP.defaultSWFLocation="/CFIDE/scripts/ajax/resources/cf/assets/mediaplayer.swf";
var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;
var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;
var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;
ColdFusion.Mediaplayer.init=function(_d4,_d5,_d6,_d7,_d8,_d9,_da,_db,_dc,_dd,_de,_df,_e0,_e1,_e2,_e3,_e4,_e5,_e6,_e7,_e8,_e9,_ea,_eb,_ec,_ed,_ee,_ef,_f0){
var _f1={divId:_d4,playerName:_d5,source:_d6,align:_d9,quality:_da,fullScreen:_db,onFinish:_dd,onLoad:_de,onStart:_df,hideControlBar:_e0,hideBorder:_e1,hideTitle:_ef,autoplay:_e3,pageURL:_f0};
if(_d8!=null&&typeof (_d8)!="undefined"){
_f1.width=_d8;
}else{
_f1.width=480;
}
if(_e4==null||typeof _e4=="undefined"){
_e4="window";
}
_f1.wmode=_e4;
_f1.wmode=_e4;
if(_d7!=null&&typeof (_d7)!="undefined"){
_f1.height=_d7;
}else{
_f1.height=360;
}
if(_d9!=null&&typeof (_d9)!="undefined"){
_f1.align=_d9;
}else{
_f1.align="center";
}
if(_da!=null&&typeof (_da)!="undefined"){
_f1.quality=_da;
}else{
_f1.quality="high";
}
if(_dc==null||typeof _dc=="undefined"){
_dc="#4444444";
}
if(_e2!=null&&typeof (_e2)!="undefined"&&_e2!="/"){
_f1.swfLocation=_e2+$MP.defaultSWFLocation;
}else{
_f1.swfLocation=$MP.defaultSWFLocation;
}
if(_e5==null){
_e5="";
}
if(_e6==null){
_e6="";
}
if(_e7==null){
_e7="";
}
if(_e8==null){
_e8="";
}
if(_e9==null){
_e9="";
}
if(_ea==null){
_ea="";
}
if(_eb==null){
_eb="";
}
if(_ec==null){
_ec="";
}
if(_ed==null){
_ed="";
}
if(_ee==null){
_ee="";
}
_f1.bgcolor=_dc;
_f1.controlscolor=_e5;
_f1.controlbarbgcolor=_e6;
_f1.titletextcolor=_e7;
_f1.titlebgcolor=_e8;
_f1.progresscolor=_e9;
_f1.progressbgcolor=_ea;
_f1.bordertop=_eb;
_f1.borderleft=_ed;
_f1.borderright=_ee;
_f1.borderbottom=_ec;
ColdFusion.objectCache[_d5]=_f1;
var _f2=$MP.constructMarkup(_f1);
var _f3=document.getElementById(_d4);
_f3.innerHTML=_f2;
ColdFusion.Log.info("mediaplayer.initialized","widget",[_d5]);
};
var defaultURL="";
$MP.constructMarkup=function(_f4){
var str="";
if(isIE&&isWin&&!isOpera){
str+="<object width=\""+_f4.width+"\" height=\""+_f4.height+"\"";
str+=" id=\""+_f4.playerName+"\" name=\""+_f4.playerName+"\" type=\"application/x-shockwave-flash\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" ";
str+=" data=\""+_f4.swfLocation+"\">";
str+="<param name=\"movie\" value=\""+_f4.swfLocation+"\" />";
str+="<param name=\"quality\" value=\""+_f4.quality+"\" />";
str+="<param name=\"backgroundColor\" value=\""+_f4.bgcolor+"\" />";
str+="<param name=\"allowFullScreen\" value=\""+_f4.fullScreen+"\" />";
str+="<param name=\"wmode\" value=\""+_f4.wmode+"\" />";
str+="<param name=\"allowScriptAccess\" value=\"sameDomain\" />";
str+="<param name=\"flashvars\" value=\"uniqueid="+_f4.playerName+"&autoPlay="+_f4.autoplay+"&bgcolor="+_f4.bgcolor+"&src="+_f4.source+"&hideBorder="+_f4.hideBorder+"&hideControlBar="+_f4.hideControlBar+"&allowFullScreen="+_f4.fullScreen;
str+="&controlscolor="+_f4.controlscolor+"&controlbarbgcolor="+_f4.controlbarbgcolor+"&titletextcolor="+_f4.titletextcolor+"&titlebgcolor="+_f4.titlebgcolor+"&progresscolor="+_f4.progresscolor+"&progressbgcolor="+_f4.progressbgcolor;
str+="&bordertop="+_f4.bordertop+"&borderbottom="+_f4.borderbottom+"&borderleft="+_f4.borderleft+"&borderright="+_f4.borderright+"&hideTitle="+_f4.hideTitle+"\" />";
str+="</object>";
}else{
str="<embed src=\""+_f4.swfLocation+"\" allowScriptAccess=\"samedomain\" pluginspage=\"http://www.adobe.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" wmode=\""+_f4.wmode+"\" "+"allowFullScreen=\""+_f4.fullScreen+"\"";
str+=" name=\""+_f4.playerName+"\" width=\""+_f4.width+"\" height=\""+_f4.height+"\" quality=\" "+_f4.quality+"\"";
str+=" flashvars=\"uniqueid="+_f4.playerName+"&autoPlay="+_f4.autoplay+"&bgcolor="+_f4.bgcolor+"&src="+_f4.source+"&hideBorder="+_f4.hideBorder+"&hideControlBar="+_f4.hideControlBar+"&allowFullScreen="+_f4.fullScreen;
str+="&controlscolor="+_f4.controlscolor+"&controlbarbgcolor="+_f4.controlbarbgcolor+"&titletextcolor="+_f4.titletextcolor+"&titlebgcolor="+_f4.titlebgcolor+"&progresscolor="+_f4.progresscolor+"&progressbgcolor="+_f4.progressbgcolor;
str+="&bordertop="+_f4.bordertop+"&borderbottom="+_f4.borderbottom+"&borderleft="+_f4.borderleft+"&borderright="+_f4.borderright+"&hidetitle="+_f4.hideTitle+"\" />";
}
return str;
};
$MP.setSource=function(_f6,src){
var _f8=$MP.getVideoComponent(_f6);
if(_f8==null||typeof (_f8)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.setsource.notfound","widget",[_f6],null,null,true);
}
if(!src||src.length==0){
ColdFusion.handleError(null,"mediaplayer.setsource.invalidsource","widget",[_f6],null,null,true);
}
var _f9=ColdFusion.objectCache[_f6];
if(src.charAt(0)!="/"&&src.indexOf("://")<0){
var _fa=_f9.pageURL;
var _fb="";
if(_fa||_fa.indexOf("/")>-1){
_fb=_fa.substring(0,_fa.lastIndexOf("/")+1);
}
var _fc=_fb+src;
var _fd=_fc.split("/");
var _fe=new Array();
var _ff=0;
for(var i=0;i<_fd.length;i++){
if(_fd[i]==".."){
_fe[--_ff]="";
}else{
_fe[_ff++]=_fd[i];
}
}
src=_fe[0];
for(var i=1;i<_ff;i++){
src=src+"/"+_fe[i];
}
}
_f8.setSrc(src);
ColdFusion.Log.info("mediaplayer.setsource.sourceset","widget",[_f6,src]);
};
$MP.resize=function(_101,_102,_103){
var _104=$MP.getVideoComponent(_101);
var _105=ColdFusion.objectCache[_101];
if(_104==null||typeof (_104)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.resize.notfound","widget",[_101],null,null,true);
}
if(_105==null||typeof (_105)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.resize.notfound","widget",[_101],null,null,true);
}
var _106=_105.divId;
if(_106==null||typeof (_106)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.resize.divnotfound","widget",[_101,_106],null,null,true);
}
var _107=document.getElementById(_106);
var _108;
if(navigator.appName.indexOf("Microsoft")!=-1){
_108=_107.getElementsByTagName("object")[0];
}else{
_108=_107.getElementsByTagName("embed")[0];
}
_108.height=_102;
_108.width=_103;
};
$MP.stopPlay=function(_109){
var _10a=$MP.getVideoComponent(_109);
if(_10a==null||typeof (_10a)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.stopplay.notfound","widget",[_109],null,null,true);
}
_10a.stopVideo(true);
};
$MP.setMute=function(_10b,mute){
var _10d=$MP.getVideoComponent(_10b);
if(_10d==null||typeof (_10d)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.setmute.notfound","widget",[_10b],null,null,true);
}
_10d.setVideoMute(mute);
};
$MP.setVolume=function(_10e,_10f){
var _110=$MP.getVideoComponent(_10e);
if(_110==null||typeof (_110)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.setvolume.playerNotFound","widget",[_10e],null,null,true);
}
_110.setVideoVolume(_10f);
};
$MP.startPlay=function(_111){
var _112=$MP.getVideoComponent(_111);
if(_112==null||typeof (_112)=="undefined"){
ColdFusion.handleError(null,"mediaplayer.startplay.playerNotFound","widget",[_111],null,null,true);
}
_112.startVideo();
};
coldfusion_mediaplayer_initPlayer=function(_113){
var _114=$MP.getVideoComponent(_113);
var _115=ColdFusion.objectCache[_113];
var _116=_115.onLoad;
if(_116!=null&&typeof _116=="function"){
_116.call(this);
}
ColdFusion.Log.info("mediaplayer.onload.called","widget",[_113]);
};
$MP.getVideoComponent=function(name){
if(navigator.appName.indexOf("Microsoft")!=-1){
return window[name];
}else{
return document[name];
}
};
coldfusion_FileUploadSwf_videoReadyHandler=function(_118){
var _119=$MP.getVideoComponent(_118);
var _11a=ColdFusion.objectCache[_118];
var _11b=_11a.onStart;
if(_11b!=null&&typeof _11b=="function"){
_11b.call(this);
}
ColdFusion.Log.info("mediaplayer.onstart.called","widget",[_118]);
};
coldfusion_mediaplayer_videoCompleteHandler=function(_11c){
var _11d=$MP.getVideoComponent(_11c);
var _11e=ColdFusion.objectCache[_11c];
var _11f=_11e.onFinish;
if(_11f!=null&&typeof _11f=="function"){
_11f.call(this);
}
ColdFusion.Log.info("mediaplayer.onfinish.called","widget",[_11c]);
};

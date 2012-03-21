/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.FileUpload){
ColdFusion.FileUpload={};
}
var $FS=ColdFusion.FileUpload;
$FS.defaultSWFLocation="/CFIDE/scripts/ajax/resources/cf/assets/MultiFileUpload.swf";
var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;
var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;
var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;
var defaultAddButtonLabel="Add Files";
var defaultUploadButtonLabel="Upload";
var defaultClearButtonLabel="Clear All";
var defaultDeleteButtonLabel="Delete";
var defaultAddIcon="/CFIDE/scripts/ajax/resources/cf/images/fileupload/addfile.png";
var defaultUploadIcon="/CFIDE/scripts/ajax/resources/cf/images/fileupload/upload.png";
var defaultClearIcon="/CFIDE/scripts/ajax/resources/cf/images/fileupload/clear.gif";
var defaultDeleteIcon="/CFIDE/scripts/ajax/resources/cf/images/fileupload/delete.png";
var defaultUploadSize=10*1024*1024;
var fileUploadPrefix="cf_fileUpload_";
ColdFusion.FileUpload.create=function(_95,url,_97,_98,_99,_9a,_9b,_9c,_9d,_9e,_9f,_a0,_a1,_a2,_a3,_a4,_a5,_a6,_a7,_a8,_a9,_aa,_ab,_ac,_ad,_ae,_af,_b0){
this.uploadDivId=_95;
this.fileUploadName=fileUploadPrefix+_95;
this.url=url;
this.onCompleteHandler=_9e;
this.onUploadCompleteHandler=_9f;
this.onErrorHandler=_a0;
this.progressbar=_ab;
if(_a3==null){
_a3="";
}
this.bgcolor=_a3;
if(_a4==null){
_a4="";
}
this.selectcolor=_a4;
if(_a5==null){
_a5="";
}
this.rollovercolor=_a5;
if(_a6==null){
_a6="";
}
this.textcolor=_a6;
if(_a9==null){
_a9="left";
}
this.titletextalign=_a9;
if(_a7==null){
_a7="";
}
this.titletextcolor=_a7;
if(_a8==null){
_a8="";
}
this.headercolor=_a8;
this.bgcolor=_a3;
this.bgcolor=_a3;
if(_aa==null){
_aa="";
}
this.fileFilter=_aa;
this.disableUploadButton=_ad;
if(_af==null||typeof _af=="undefined"){
_af="window";
}
this.wmode=_af;
this.stopOnError=_ae;
if(_97==null||typeof _97==="undefined"){
_97=defaultAddButtonLabel;
}
if(_ac!=null&&typeof (_ac)!="undefined"&&_ac!="/"){
this.addIcon=_ac+defaultAddIcon;
}else{
this.addIcon=defaultAddIcon;
}
this.addButtonLabel=_97;
if(_99==null||typeof _99==="undefined"){
_99=defaultUploadButtonLabel;
}
var _b1;
if(_ac!=null&&typeof (_ac)!="undefined"&&_ac!="/"){
_b1=_ac+defaultUploadIcon;
}else{
_b1=defaultUploadIcon;
}
this.uploadButtonLabel=_99;
this.uploadIcon=_b1;
if(_9b==null||typeof _9b==="undefined"){
_9b="File Upload ";
}
this.title=_9b;
if(_ac!=null&&typeof (_ac)!="undefined"&&_ac!="/"){
this.swfLocation=_ac+$FS.defaultSWFLocation;
}else{
this.swfLocation=$FS.defaultSWFLocation;
}
if(_98==null||typeof _98==="undefined"){
_98=defaultClearButtonLabel;
}
var _b2;
if(_ac!=null&&typeof (_ac)!="undefined"&&_ac!="/"){
_b2=_ac+_b2;
}else{
_b2=_b2;
}
this.clearButtonLabel=_98;
this.clearIcon=_b2;
if(_9a==null||typeof _9a==="undefined"){
_9a=defaultDeleteButtonLabel;
}
this.deleteButtonLabel=_9a;
var _b3;
if(_ac!=null&&typeof (_ac)!="undefined"&&_ac!="/"){
_b3=_ac+defaultDeleteIcon;
}else{
_b3=defaultDeleteIcon;
}
this.deleteIcon=_b3;
if(_9c==null||!typeof _9c==="Number"){
_9c=-1;
}
this.maxFileSelect=_9c;
if(_9d==null||!typeof _9d==="number"){
_9d=defaultUploadSize;
}
this.maxUploadSize=_9d;
if(_a1==null||typeof _a1==="undefined"){
_a1=420;
}
this.widthInPx=_a1+"px";
this.width=_a1;
if(_a2==null||typeof _a2==="undefined"){
_a2=300;
}
this.heightInPx=_a2+"px";
this.height=_a2;
this.align=_b0;
ColdFusion.objectCache[_95]=this;
ColdFusion.objectCache[this.fileUploadName]=this;
var _b4=$FS.constructMarkup(this);
var _b5=document.getElementById(_95);
_b5.innerHTML=_b4;
ColdFusion.Log.info("fileupload.initialized","widget",[_95]);
};
$FS.constructMarkup=function(_b6){
var str="";
if(isIE&&isWin&&!isOpera){
str+="<object width=\""+_b6.width+"\" height=\""+_b6.height+"\"";
str+=" id=\""+_b6.fileUploadName+"\" name=\""+_b6.playerName+"\" type=\"application/x-shockwave-flash\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" ";
str+=" data=\""+_b6.swfLocation+"\">";
str+="<param name=\"movie\" value=\""+_b6.swfLocation+"\" />";
str+="<param name=\"quality\" value=\""+_b6.quality+"\" />";
str+="<param name=\"allowFullScreen\" value=\""+_b6.fullScreen+"\" />";
str+="<param name=\"allowScriptAccess\" value=\"sameDomain\" />";
str+="<param name=\"wmode\" value=\""+_b6.wmode+"\" />";
str+="<param name=\"flashvars\" value=\"uniqueid="+_b6.fileUploadName+"&url="+_b6.url+"&addLabel="+_b6.addButtonLabel+"&deleteLabel="+_b6.deleteButtonLabel;
str+="&clearLabel="+_b6.clearButtonLabel+"&uploadLabel="+_b6.uploadButtonLabel+"&maxUploadSize="+_b6.maxUploadSize+"&maxFileSelect="+_b6.maxFileSelect+"&progress="+_b6.progressbar;
str+="&stopOnError="+_b6.stopOnError+"&hideUpload="+_b6.disableUploadButton+"&bgcolor="+_b6.bgcolor+"&fileFilter="+_b6.fileFilter+"&deleteIcon="+_b6.deleteIcon+"&title="+_b6.title;
str+="&uploadIcon="+_b6.uploadIcon+"&textcolor="+_b6.textcolor+"&titletextcolor="+_b6.titletextcolor+"&headercolor="+_b6.headercolor+"&titletextalign="+_b6.titletextalign+"&rollovercolor="+_b6.rollovercolor+"&selectcolor="+_b6.selectcolor+"\" />";
str+="</object>";
}else{
str="<embed src=\""+_b6.swfLocation+"\" allowScriptAccess=\"samedomain\" pluginspage=\"http://www.adobe.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" wmode=\""+_b6.wmode+"\"";
str+=" name=\""+_b6.fileUploadName+"\" width=\""+_b6.width+"\" height=\""+_b6.height+"\" quality=\" "+_b6.quality+"\"";
str+=" flashvars=\"uniqueid="+_b6.fileUploadName+"&url="+_b6.url+"&addLabel="+_b6.addButtonLabel+"&deleteLabel="+_b6.deleteButtonLabel;
str+="&clearLabel="+_b6.clearButtonLabel+"&uploadLabel="+_b6.uploadButtonLabel+"&maxUploadSize="+_b6.maxUploadSize+"&maxFileSelect="+_b6.maxFileSelect+"&progress="+_b6.progressbar;
str+="&stopOnError="+_b6.stopOnError+"&hideUpload="+_b6.disableUploadButton+"&bgcolor="+_b6.bgcolor+"&fileFilter="+_b6.fileFilter+"&deleteIcon="+_b6.deleteIcon+"&title="+_b6.title;
str+="&uploadIcon="+_b6.uploadIcon+"&textcolor="+_b6.textcolor+"&titletextcolor="+_b6.titletextcolor+"&headercolor="+_b6.headercolor+"&titletextalign="+_b6.titletextalign+"&rollovercolor="+_b6.rollovercolor+"&selectcolor="+_b6.selectcolor+"\" />";
}
return str;
};
coldfusion_FileUploadSwf_complete=function(_b8,_b9){
var _ba=$FS.getFileUploadComponent(_b8);
var _bb=ColdFusion.objectCache[_b8];
var _bc=_bb.onCompleteHandler;
if(_bc!=null&&typeof _bc=="function"){
_bc.call(this,_b9);
}
$FS.addResultToArray(_b9,_bb);
};
coldfusion_FileUploadSwf_onError=function(_bd,_be){
var _bf=$FS.getFileUploadComponent(_bd);
var _c0=ColdFusion.objectCache[_bd];
var _c1=_c0.onErrorHandler;
if(_c1!=null&&typeof _c1=="function"){
_c1.call(this,_be);
}
$FS.addResultToArray(_be,_c0);
};
coldfusion_FileUploadSwf_UploadCompete=function(_c2){
var _c3=$FS.getFileUploadComponent(_c2);
var _c4=ColdFusion.objectCache[_c2];
var _c5=_c4.onUploadCompleteHandler;
var _c6=_c4.resultArray;
if(_c5!=null&&typeof _c5=="function"){
_c5.call(this,_c6);
}
_c4.resultArray=new Array();
};
$FS.addResultToArray=function(_c7,_c8){
var _c9=_c8.resultArray;
if(_c9==null||typeof _c9=="undefined"){
_c9=_c8.resultArray=new Array();
}
_c9.push(_c7);
};
$FS.cancelUpload=function(_ca){
var _cb=fileUploadPrefix+_ca;
var _cc=$FS.getFileUploadComponent(_cb);
if(_cc!=null){
_cc.cancelFileUpload();
}else{
ColdFusion.handleError(null,"fileupload.cancelupload.notfound","widget",[_ca],null,null,true);
}
ColdFusion.Log.info("fileupload.cancelupload.cancelled","widget",[_ca]);
};
$FS.clearAllFiles=function(_cd){
var _ce=fileUploadPrefix+_cd;
var _cf=$FS.getFileUploadComponent(_ce);
if(_cf!=null){
_cf.clearAllUpload();
}else{
ColdFusion.handleError(null,"fileupload.clearallfiles.notfound","widget",[_cd],null,null,true);
}
ColdFusion.Log.info("fileupload.clearallfiles.cleared","widget",[_cd]);
};
$FS.startUpload=function(_d0){
var _d1=fileUploadPrefix+_d0;
var _d2=$FS.getFileUploadComponent(_d1);
if(_d2!=null){
_d2.submitUploadForm();
}else{
ColdFusion.handleError(null,"fileupload.startupload.notfound","widget",[_d0],null,null,true);
}
ColdFusion.Log.info("fileupload.startupload.started","widget",[_d0]);
};
$FS.getFileUploadComponent=function(_d3){
if(navigator.appName.indexOf("Microsoft")!=-1){
return window[_d3];
}else{
return document[_d3];
}
};

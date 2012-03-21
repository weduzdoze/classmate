/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.MessageBox){
ColdFusion.MessageBox={};
}
var $MB=ColdFusion.MessageBox;
var $XB=Ext.MessageBox;
var DEFAULT_OK=$XB.buttonText.ok;
var DEFAULT_NO=$XB.buttonText.no;
var DEFAULT_CANCEL=$XB.buttonText.cancel;
var DEFAULT_YES=$XB.buttonText.yes;
var DEFAULT_ALERT_BUTTON_TYPE=$XB.OK;
var DEFAULT_CONFIRM_BUTTON_TYPE=$XB.YESNO;
var DEFAULT_PROMPT_BUTTON_TYPE=$XB.OKCANCEL;
var CF_BEFORE_SHOW_HANDLER_ADDED=false;
var CURRENT_MESSAGEBOX_ID;
ColdFusion.MessageBox.init=function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,x,y,_10,_11){
var _12={messageBoxId:_1,type:_2,callBack_Fn:_b,multiline:_9,modal:_a,width:_d,bodyStyle:_11};
if(_3==null||typeof (_3)=="undefined"){
_3="";
}
_3=ColdFusion.Util.replaceAll(_3,"\n","<br>");
_12.messageText=_3;
if(_5!=null&&typeof (_5)!="undefined"){
_12.label_OK=_5;
}
if(_6!=null&&typeof (_6)!="undefined"){
_12.label_NO=_6;
}
if(_8!=null&&typeof (_8)!="undefined"){
_12.label_YES=_8;
}
if(_7!=null&&typeof (_7)!="undefined"){
_12.label_CANCEL=_7;
}
if(_4==null||typeof (_4)=="undefined"){
_2=_2.toLowerCase();
if(_2=="alert"){
_4="Alert";
}else{
if(_2=="confirm"){
_4="Confirm";
}else{
if(_2=="prompt"){
_4="Prompt";
}
}
}
}
_12.title=_4;
if(_10&&typeof (_10)=="string"){
_12.buttonType=_10;
}
if(_c&&typeof (_c)=="string"){
_12.icon=_c;
}
if(typeof x=="number"&&x>=0){
_12.x=x;
}
if(typeof y=="number"&&y>=0){
_12.y=y;
}
ColdFusion.objectCache[_1]=_12;
};
$MB.show=function(_13){
var _14=$MB.getMessageBoxObject(_13);
var _15=_14.type;
_15=(new String(_15)).toLowerCase();
if(!CF_BEFORE_SHOW_HANDLER_ADDED){
var _16=Ext.MessageBox.getDialog();
_16.addListener("beforeshow",$MB.beforeShowHandler,_14);
CF_BEFORE_SHOW_HANDLER_ADDED=true;
}
CURRENT_MESSAGEBOX_ID=_13;
var _17=_14.buttonType;
var _18={ok:DEFAULT_OK,no:DEFAULT_NO,cancel:DEFAULT_CANCEL,yes:DEFAULT_YES};
if(_14.label_OK){
_18.ok=_14.label_OK;
}
if(_14.label_YES){
_18.yes=_14.label_YES;
}
if(_14.label_NO){
_18.no=_14.label_NO;
}
if(_14.label_CANCEL){
_18.cancel=_14.label_CANCEL;
}
Ext.MessageBox.buttonText=_18;
if(typeof _17!="undefined"){
_17=_17.toUpperCase();
if(_17&&_17!=="OKCANCEL"&&_17!=="OK"&&_17!=="YESNOCANCEL"&&_17!=="YESNO"){
ColdFusion.handleError(null,"messagebox.show.invalidbuttontype","widget",[messagebox,_17],null,null,true);
}
switch(_17){
case "OK":
_17=$XB.OK;
break;
case "OKCANCEL":
_17=$XB.OKCANCEL;
break;
case "YESNOCANCEL":
_17=$XB.YESNOCANCEL;
break;
case "YESNO":
_17=$XB.YESNO;
break;
}
}
var _19=_14.icon;
var _1a="";
if(_19&&typeof (_19)==="string"){
_19=_19.toUpperCase();
switch(_19){
case "ERROR":
_1a=$XB.ERROR;
break;
case "INFO":
_1a=$XB.INFO;
break;
case "QUESTION":
_1a=$XB.QUESTION;
break;
case "WARNING":
_1a=$XB.WARNING;
break;
}
}
var _1b={title:_14.title,msg:_14.messageText,fn:_14.callBack_Fn,modal:_14.modal,icon:_1a,scope:null};
if(_14.width){
_1b.width=_14.width;
if(_1b.width>600){
_1b.maxWidth=_1b.width;
}
if(_1b.width<100){
_1b.minWidth=_1b.width;
}
}
if(_15==="alert"){
if(!_17){
_17=DEFAULT_ALERT_BUTTON_TYPE;
}
_1b.buttons=_17;
$XB.show(_1b);
}
if(_15==="confirm"){
if(!_17){
_17=DEFAULT_CONFIRM_BUTTON_TYPE;
}
_1b.buttons=_17;
$XB.show(_1b);
}
if(_15==="prompt"){
if(!_17){
_17=DEFAULT_PROMPT_BUTTON_TYPE;
}
_1b.buttons=_17;
_1b.prompt=true;
_1b.multiline=_14.multiline;
_1b.value="",$XB.show(_1b);
}
ColdFusion.Log.info("messagebox.show.shown","widget",[_13]);
};
$MB.create=function(_1c,_1d,_1e,_1f,_20,_21){
if(_1c&&typeof _1c!="string"){
ColdFusion.handleError(null,"messagebox.create.invalidname","widget",null,null,null,true);
return;
}
if(!_1c||ColdFusion.trim(_1c)==""){
ColdFusion.handleError(null,"messagebox.create.invalidname","widget",null,null,null,true);
return;
}
var _22=ColdFusion.objectCache[_1c];
if(_22!=null||typeof _22!="undefined"){
ColdFusion.handleError(null,"messagebox.create.duplicatename","widget",[_1c],null,null,true);
return;
}
if(_1f&&typeof _1f!="string"){
ColdFusion.handleError(null,"messagebox.create.invalidmessage","widget",[_1c],null,null,true);
return;
}
if(!_1f||ColdFusion.trim(_1f)==""){
ColdFusion.handleError(null,"messagebox.create.invalidmessage","widget",[_1c],null,null,true);
return;
}
if(_1e&&typeof _1e!="string"){
ColdFusion.handleError(null,"messagebox.create.invalidtitle","widget",[_1c],null,null,true);
return;
}
if(_1d&&typeof _1d!="string"){
ColdFusion.handleError(null,"messagebox.create.invalidtype","widget",[_1c],null,null,true);
return;
}
if(!_1d||ColdFusion.trim(_1d)==""){
ColdFusion.handleError(null,"messagebox.create.emptytype","widget",[_1c],null,null,true);
return;
}
if(_20&&typeof _20!=="function"){
ColdFusion.handleError(null,"messagebox.create.invalidcallback","widget",[_1c],null,null,true);
return;
}
var _23=DEFAULT_CANCEL;
var _24=DEFAULT_NO;
var _25=DEFAULT_OK;
var _26=DEFAULT_YES;
var _27=true;
var _28=null;
var _29=false;
var _2a;
var _2b;
var x;
var y;
var _2e;
if(_21&&_21.labelok){
_25=_21.labelok;
}
if(_21&&_21.labelno){
_24=_21.labelno;
}
if(_21&&_21.labelyes){
_26=_21.labelyes;
}
if(_21&&_21.labelcancel){
_23=_21.labelcancel;
}
if(_21&&typeof _21.multiline==="boolean"){
_29=_21.multiline;
}
if(_21&&typeof _21.modal==="boolean"){
_27=_21.modal;
}
if(_21&&_21.buttontype){
_28=_21.buttontype;
if(_1d.toUpperCase()!=="CONFIRM"){
ColdFusion.handleError(null,"messagebox.create.invalidtypeandbuttontypecombination","widget",[_1c],null,null,true);
}else{
if(_28.toUpperCase()!="YESNO"&&_28.toUpperCase()!="YESNOCANCEL"){
ColdFusion.handleError(null,"messagebox.create.invalidbuttontype","widget",[_1c,_28],null,null,true);
}
}
}
if(_21&&_21.width){
_2b=_21.width;
if(_2b&&typeof _2b!="number"){
ColdFusion.handleError(null,"messagebox.create.widthnotnumeric","widget",[_1c,_2b],null,null,true);
}
}
if(_21&&typeof _21.x!="undefined "){
if(_21.x&&typeof _21.x!="number"){
ColdFusion.handleError(null,"messagebox.create.xnotnumeric","widget",[_1c,_21.x],null,null,true);
return;
}
x=_21.x;
}
if(_21&&typeof _21.y!="undefined"){
if(_21.y&&typeof _21.y!="number"){
ColdFusion.handleError(null,"messagebox.create.ynotnumeric","widget",[_1c,_21.y],null,null,true);
return;
}
y=_21.y;
}
if(_21&&_21.icon){
_2a=_21.icon;
if(_2a){
_2a=_2a.toUpperCase();
if(_2a!="ERROR"&&_2a!="INFO"&&_2a!="QUESTION"&&_2a!="WARNING"){
ColdFusion.handleError(null,"messagebox.create.invalidicon","widget",[_1c,_2a],null,null,true);
}
}
}
if(_21&&_21.bodystyle){
_2e=_21.bodystyle;
}
$MB.init(_1c,_1d,_1f,_1e,_25,_24,_23,_26,_29,_27,_20,_2a,_2b,x,y,_28,_2e);
ColdFusion.Log.info("messagebox.create.created","widget",[_1c,_1d]);
};
$MB.updateMessage=function(_2f,_30){
var _31=$MB.getMessageBoxObject(_2f);
_31.messageText=_30;
ColdFusion.Log.info("messagebox.updatemessage.updated","widget",[_2f]);
};
$MB.updateTitle=function(_32,_33){
var _34=$MB.getMessageBoxObject(_32);
_34.title=_33;
ColdFusion.Log.info("messagebox.updatetitle.updated","widget",[_32]);
};
$MB.update=function(_35,_36){
var _37=$MB.getMessageBoxObject(_35);
var _38={};
if(!_36||typeof _36!="object"){
ColdFusion.handleError(null,"messagebox.update.invalidconfigobject","widget",[_35],null,null,true);
return;
}
if(_36.name&&typeof _36.name=="string"){
ColdFusion.handleError(null,"messagebox.update.nameupdatenotallowed","widget",[_35],null,null,true);
return;
}
if(_36.type&&typeof _36.type=="string"){
ColdFusion.handleError(null,"messagebox.update.typeupdatenotallowed","widget",[_35],null,null,true);
return;
}
if(_36.message){
if(typeof _36.message==="string"||typeof _36.message=="object"){
_38.messageText=_36.message;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidmessage","widget",[_35],null,null,true);
return;
}
}
if(_36.title){
if(typeof _36.title==="string"||typeof _36.title=="object"){
_38.title=_36.title;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidtitle","widget",[_35],null,null,true);
return;
}
}
if(_36.labelok!=null||typeof _36.labelok!="undefined"){
if(typeof _36.labelok==="string"||typeof _36.labelok=="object"){
_38.label_OK=_36.labelok;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidlabelok","widget",[_35],null,null,true);
return;
}
}
if(_36.labelno!=null||typeof _36.labelno!="undefined"){
if(typeof _36.labelno==="string"||typeof _36.labelno=="object"){
_38.label_NO=_36.labelno;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidlabelno","widget",[_35],null,null,true);
return;
}
}
if(_36.labelyes!=null||typeof _36.labelyes!="undefined"){
if(typeof _36.labelyes==="string"||typeof _36.labelyes=="object"){
_38.label_YES=_36.labelyes;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidlabelyes","widget",[_35],null,null,true);
return;
}
}
if(_36.labelcancel!=null||typeof _36.labelcancel!="undefined"){
if(typeof _36.labelcancel==="string"||typeof _36.labelcancel=="object"){
_38.label_CANCEL=_36.labelcancel;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidlabelcancel","widget",[_35],null,null,true);
return;
}
}
if(typeof _36.modal=="boolean"){
_38.modal=_36.modal;
}
if(typeof _36.multiline==="boolean"){
if(_37.type.toLowerCase()!="prompt"){
ColdFusion.handleError(null,"messagebox.update.invalidtypeformultiline","widget",[_35],null,null,true);
return;
}
_38.multiline=_36.multiline;
}
if(_36&&_36.width){
if(typeof _36.width==="number"||typeof _36.width=="object"){
_38.width=_36.width;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidwidth","widget",[_35],null,null,true);
return;
}
}
if(_36.icon!=null||typeof _36.icon!="undefined"){
if(typeof _36.icon==="string"){
icon=_36.icon.toUpperCase();
if(icon!="ERROR"&&icon!="INFO"&&icon!="QUESTION"&&icon!="WARNING"){
ColdFusion.handleError(null,"messagebox.update.invalidicon","widget",[_35],null,null,true);
return;
}
_38.icon=_36.icon;
}else{
if(typeof _36.icon=="object"&&_36.icon==null){
_38.icon=null;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidicon","widget",[_35],null,null,true);
return;
}
}
}
if(_36.callbackhandler!=null||typeof _36.callbackhandler!="undefined"){
if(typeof _36.callbackhandler==="function"||typeof _36.callbackhandler==="object"){
_38.callBack_Fn=_36.callbackhandler;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidcallbackhandler","widget",[_35],null,null,true);
return;
}
}
if(_36.x!=null||typeof _36.x!="undefined"){
if(typeof _36.x==="number"||typeof _36.x=="object"){
_38.x=_36.x;
}else{
ColdFusion.handleError(null,"messagebox.update.xnotnumeric","widget",[_35,_36.x],null,null,true);
return;
}
}
if(_36.y!=null||typeof _36.y!="undefined"){
if(typeof _36.y==="number"||typeof _36.y=="object"){
_38.y=_36.y;
}else{
ColdFusion.handleError(null,"messagebox.update.ynotnumeric","widget",[_35,_36.y],null,null,true);
return;
}
}
if(_36.bodystyle!=null||typeof _36.bodystyle!="undefined"){
if(typeof _36.bodystyle==="string"||typeof _36.bodystyle=="object"){
_38.bodyStyle=_36.bodystyle;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidbodystyle","widget",[_35],null,null,true);
return;
}
}
if(_36.buttontype!=null||typeof _36.buttontype!="undefined"){
if(typeof _36.buttontype==="string"||typeof _36.buttontype==="object"){
buttonType=_36.buttontype;
if(_37.type.toUpperCase()!=="CONFIRM"){
ColdFusion.handleError(null,"messagebox.update.invalidtypeandbuttontypecombination","widget",[_35],null,null,true);
return;
}else{
if(buttonType.toUpperCase()!="YESNO"&&buttonType.toUpperCase()!="YESNOCANCEL"){
ColdFusion.handleError(null,"messagebox.update.invalidbuttontype","widget",[_35],null,null,true);
return;
}
}
_38.buttonType=_36.buttontype;
}else{
ColdFusion.handleError(null,"messagebox.update.invalidbuttontype","widget",[_35],null,null,true);
return;
}
}
for(key in _38){
_37[key]=_38[key];
}
ColdFusion.Log.info("messagebox.update.updated","messagebox",[_35]);
};
$MB.getMessageBoxObject=function(_39){
var _3a=ColdFusion.objectCache[_39];
if(_3a==null||typeof (_3a)=="undefined"){
ColdFusion.handleError(null,"messagebox.getmessageboxobject.missingmessageboxid","widget",[_39],null,null,true);
}
return _3a;
};
$MB.isMessageBoxDefined=function(_3b){
var _3c=ColdFusion.objectCache[_3b];
if(_3c==null||typeof (_3c)=="undefined"){
return false;
}else{
return true;
}
};
$MB.beforeShowHandler=function(_3d){
var _3e=$MB.getMessageBoxObject(CURRENT_MESSAGEBOX_ID);
var _3f=_3e.x;
var _40=_3e.y;
var _41=_3e.bodyStyle;
var _42=_3d.body.parent();
var id=_42.id;
var ele=document.getElementById(id);
ele.style.cssText=_41;
if(_3f&&_40&&typeof _3f=="number"&&typeof _40=="number"&&_3f>=0&&_40>=0){
_3d.setPosition(_3f,_40);
}else{
_3d.center();
}
};

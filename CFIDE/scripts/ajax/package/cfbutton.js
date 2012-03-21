/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Button){
ColdFusion.Button={};
}
var $BT=ColdFusion.Button;
ColdFusion.Button.init=function(_78,_79,_7a,_7b,_7c,_7d,_7e,_7f,_80){
var _81={renderTo:_78,enableToggle:_80,text:_79,onClick:_7c,onToggle:_7d,onMouseOver:_7e,onMouseout:_7f,tooltip:_7b,icon:_7a};
var _82={renderTo:_78,enableToggle:_80,text:_79};
if(_7b!=null&&typeof _7b!="undefined"){
_82.tooltip=_7b;
Ext.QuickTips.init();
}
if(_7a!=null&&typeof _7a!="undefined"){
_82.icon=_7a;
}
if(_7a&&_79){
_82.iconCls="x-btn-text-icon";
}else{
if(_7a&&!_79){
_82.iconCls="x-btn-icon";
}
}
var _83=new Ext.Button(_82);
if(_7c!=null&&typeof _7c=="function"){
_83.on("click",_7c,_81);
}
if(_7d!=null&&typeof _7d=="function"){
_83.on("toggle",_7d,_81);
}
if(_7e!=null&&typeof _7e=="function"){
_83.on("mouseover",_7e,_81);
}
if(_7f!=null&&typeof _7f=="function"){
_83.on("mouseout",_7f,_81);
}
_81.buttonComp=_83;
ColdFusion.objectCache[_78]=_81;
ColdFusion.Log.info("button.initialized","widget",[_78]);
};
$BT.show=function(_84){
var _85=$BT.getButtonObject(_84);
if(_85!=null){
_85.show();
}
ColdFusion.Log.info("button.show.shown","widget",[_84]);
};
$BT.hide=function(_86){
var _87=$BT.getButtonObject(_86);
if(_87!=null){
_87.hide();
}
ColdFusion.Log.info("button.hide.hidden","widget",[_86]);
};
$BT.disable=function(_88){
var _89=$BT.getButtonObject(_88);
if(_89!=null){
_89.disable();
}
ColdFusion.Log.info("button.disable.disabled","widget",[_88]);
};
$BT.enable=function(_8a){
var _8b=$BT.getButtonObject(_8a);
if(_8b!=null){
_8b.enable();
}
ColdFusion.Log.info("button.enable.enabled","widget",[_8a]);
};
$BT.getButtonObject=function(_8c){
var _8d=$BT.getButtonConfigObj(_8c);
if(_8d!=null){
return _8d.buttonComp;
}else{
ColdFusion.handleError(null,"button.component.notFound","widget",[_8c],null,null,true);
}
};
$BT.setLabel=function(_8e,_8f){
var _90=$BT.getButtonObject(_8e);
if(_90!=null){
_90.text=_8f;
}
};
$BT.getButtonConfigObj=function(_91){
var _92=ColdFusion.objectCache[_91];
if(_92==null||typeof (_92)=="undefined"){
ColdFusion.handleError(null,"button.component.notFound","widget",[_91],null,null,true);
}
return _92;
};
$BT.toggle=function(_93){
var _94=$BT.getButtonObject(_93);
if(_94!=null){
_94.toggle();
}
};

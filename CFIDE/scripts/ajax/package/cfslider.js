/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Slider){
ColdFusion.Slider={};
}
var $SL=ColdFusion.Slider;
ColdFusion.Slider.init=function(_33a,name,_33c,_33d,_33e,_33f,_340,_341,_342,_343,tip,_345,_346){
var _347={renderTo:_33a,id:name};
if(_342!=null&&typeof (_342)!="undefined"){
_347.ClicktoChange=_342;
}else{
_347.ClicktoChange=false;
}
if(_343!=null&&typeof (_343)!="undefined"){
_347.increment=_343;
}else{
_347.increment=1;
}
if(_340!=null&&typeof (_340)!=undefined){
_347.minValue=_340;
}else{
_347.minValue=0;
}
if(_33f!=null&&typeof (_33f)!=undefined){
_347.value=_33f;
}else{
_347.value=_347.minValue;
}
if(_33d!=null&&typeof (_33d)!=undefined){
_347.width=_33d;
}else{
_347.width=200;
}
if(_33e!=null&&typeof (_33e)!="undefined"){
_347.height=_33e;
}else{
_347.height=100;
}
if(_341!=null&&typeof (_341)!=undefined){
_347.maxValue=_341;
}else{
_347.maxValue=100;
}
if(_33c!=null&&typeof (_33c)!=undefined){
_347.vertical=_33c;
}else{
_347.vertical=false;
}
if(_345!=null&&typeof (_345)=="function"){
_347.onChange=_345;
}
if(_346!=null&&typeof (_346)!="undefined"){
_347.onDrg=_346;
}
Ext.ux.ST=Ext.extend(Ext.Tip,{minWidth:10,offsets:[0,-10],init:function(_348){
_348.on("dragstart",this.onSlide,this);
_348.on("drag",this.onSlide,this);
_348.on("dragend",this.hide,this);
_348.on("destroy",this.destroy,this);
},onSlide:function(_349){
this.show();
this.body.update(this.getText(_349));
this.el.alignTo(_349.thumb,"b-t?",this.offsets);
this.doAutoWidth();
},getText:function(_34a){
return _34a.getValue();
}});
if(tip!=null&&typeof (tip)!="undefined"){
if(tip){
_347.plugins=new Ext.ux.ST();
}
}
var _34b=new Ext.Slider(_347);
_34b.on("drag",$SL.onDragHandler,_347);
_34b.on("changecomplete",$SL.onChangeHandler,_347);
_347.sliderComp=_34b;
ColdFusion.objectCache[name]=_347;
ColdFusion.Log.info("slider.initialized","widget",[name]);
};
$SL.onDragHandler=function(_34c,_34d){
var _34e=this.onDrg;
if(_34e!=null&&typeof (_34e)=="function"){
_34e.call(this,_34c,_34d);
}
};
$SL.onChangeHandler=function(_34f,_350){
var _351=this.onChange;
if(_351!=null&&typeof (_351)=="function"){
_351.call(this,_34f,_350);
}
};
$SL.getValue=function(_352){
var _353=ColdFusion.objectCache[_352];
if(_353!=null||typeof (_353)!="undefined"){
var _354=_353.sliderComp;
if(_354){
return _354.getValue();
}
}else{
ColdFusion.handleError(null,"slider.getvalue.notfound","widget",[_352],null,null,true);
}
};
$SL.getSliderObject=function(_355){
var _356=ColdFusion.objectCache[_355];
if(_356!=null||typeof (_356)!="undefined"){
return _356.sliderComp;
}else{
return null;
}
};
$SL.setValue=function(_357,_358){
var _359=ColdFusion.objectCache[_357];
if(_359!=null||typeof (_359)!="undefined"){
var _35a=_359.sliderComp;
if(_35a){
return _35a.setValue(_358,true);
}
}else{
ColdFusion.handleError(null,"slider.setvalue.notfound","widget",[_357],null,null,true);
}
};
$SL.show=function(_35b){
var _35c=ColdFusion.objectCache[_35b];
if(_35c!=null||typeof (_35c)!="undefined"){
var _35d=_35c.sliderComp;
if(_35d){
return _35d.show();
}
}else{
ColdFusion.handleError(null,"slider.show.notfound","widget",[_35b],null,null,true);
}
ColdFusion.Log.info("slider.show.shown","widget",[_35b]);
};
$SL.hide=function(_35e){
var _35f=ColdFusion.objectCache[_35e];
if(_35f!=null||typeof (_35f)!="undefined"){
var _360=_35f.sliderComp;
if(_360){
return _360.hide();
}
}else{
ColdFusion.handleError(null,"slider.hide.notfound","widget",[_35e],null,null,true);
}
ColdFusion.Log.info("slider.hide.hidden","widget",[_35e]);
};
$SL.enable=function(_361){
var _362=ColdFusion.objectCache[_361];
if(_362!=null||typeof (_362)!="undefined"){
var _363=_362.sliderComp;
if(_363){
return _363.enable();
}
}else{
ColdFusion.handleError(null,"slider.enable.notfound","widget",[_361],null,null,true);
}
ColdFusion.Log.info("slider.enable.enabled","widget",[_361]);
};
$SL.disable=function(_364){
var _365=ColdFusion.objectCache[_364];
if(_365!=null||typeof (_365)!="undefined"){
var _366=_365.sliderComp;
if(_366){
return _366.disable();
}
}else{
ColdFusion.handleError(null,"slider.disable.notfound","widget",[_364],null,null,true);
}
ColdFusion.Log.info("slider.disable.disabled","widget",[_364]);
};

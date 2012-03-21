/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Window){
ColdFusion.Window={};
}
ColdFusion.Window.windowIdCounter=1;
ColdFusion.Window.TITLE_BGCOLOR_TEMPLATE="WINDOW_DIV_ID .x-window-tc , WINDOW_DIV_ID .x-window-tl, WINDOW_DIV_ID .x-window-tr, WINDOW_DIV_ID .x-window-bc, WINDOW_DIV_ID .x-window-br, WINDOW_DIV_ID"+" .x-window-bl, WINDOW_DIV_ID  .x-window-ml, WINDOW_DIV_ID .x-window-mr { background-image: none; background-color: COLOR_ID; }";
ColdFusion.Window.create=function(_120,_121,url,_123){
if(_120==null){
ColdFusion.handleError(null,"window.create.nullname","widget",null,null,null,true);
return;
}
if(_120==""){
ColdFusion.handleError(null,"window.create.emptyname","widget",null,null,null,true);
return;
}
var _124=ColdFusion.objectCache[_120];
var _125=false;
if(typeof (_124)!="undefined"&&_124!=null){
if(_124.callfromtag){
ColdFusion.handleError(null,"window.create.duplicatename","widget",[_120]);
}
if(typeof (_124.isConfObj)!="undefined"&&_124.isConfObj==true){
_125=true;
if(_123!=null&&typeof (_123.initshow)!="undefined"){
if(_123.initshow==false){
return;
}
}
}else{
if(!_123||(_123&&_123.initshow!==false)){
ColdFusion.Window.show(_120);
}
return;
}
}
if(!_124){
ColdFusion.Log.info("window.create.creating","widget",[_120]);
}
var _126=ColdFusion.Window.createHTML(_120,_121,url,_123,_125);
var _127=ColdFusion.objectCache[_120];
if(_127!=null&&typeof (_127.isConfObj)!="undefined"&&_127.isConfObj==true){
return;
}
return ColdFusion.Window.createJSObj(_120,url,_126);
};
ColdFusion.Window.createHTML=function(_128,_129,url,_12b,_12c){
var _12d=null;
var _12e=null;
if(_12b&&_12b.divid){
_12d=document.getElementById(_12b.divid);
}
if(_12d==null){
_12d=document.createElement("div");
_12e="cf_window"+ColdFusion.Window.windowIdCounter;
ColdFusion.Window.windowIdCounter++;
_12d.id=_12e;
_12d.className="x-hidden";
}
document.body.appendChild(_12d);
var _12f=false;
var _130=null;
if(_12b!=null&&typeof (_12b.headerstyle)!="undefined"&&_12b.headerstyle!=null){
var _131=new String(_12b.headerstyle);
_131=_131.toLowerCase();
var _132=_131.indexOf("background-color");
if(_132>=0){
_12f=true;
var _133=_131.indexOf(";",_132+17);
if(_133<0){
_133=_131.length;
}
_130=_131.substring(_132+17,_133);
}
}
var _134=document.getElementById(_128+"_title");
if(_12f==true&&_130){
var _135="#"+_12b.divid;
var _136="NAME_ID .x-window-tc , NAME_ID .x-window-tl, NAME_ID .x-window-tr, NAME_ID .x-window-bc, NAME_ID .x-window-br, NAME_ID .x-window-bl,NAME_ID .x-window-ml, NAME_ID .x-window-mr { background-image: none; background-color: COLOR_ID; }";
var _137=ColdFusion.Util.replaceAll(ColdFusion.Window.TITLE_BGCOLOR_TEMPLATE,"WINDOW_DIV_ID",_135);
var _137=ColdFusion.Util.replaceAll(_137,"COLOR_ID",_130);
Ext.util.CSS.createStyleSheet(_137);
}
if(_134==null){
_134=document.createElement("div");
_134.id=_128+"_title";
var _138="x-window-header";
_134.className=_138;
if(_129){
_134.innerHTML=_129;
}else{
_134.innerHTML="&nbsp;";
}
_12d.appendChild(_134);
}
var _139=document.getElementById(_128+"_body");
if(_139==null){
_139=document.createElement("div");
_139.id=_128+"_body";
_139.className="x-window-body";
_12d.appendChild(_139);
}
var _13a;
_13a=ColdFusion.Window.getUpdatedConfigObj(_12b,_128);
if(typeof (_13a)=="undefined"){
_12d.innerHTML="";
return;
}
if(_12e){
_13a.divid=_12e;
}
_13a.title=_129;
if(typeof (_13a.initshow)!="undefined"&&_13a.initshow===false){
_13a.url=url;
ColdFusion.objectCache[_128]=_13a;
ColdFusion.objectCache[_128+"_body"]=_13a;
}
return _13a;
};
ColdFusion.Window.createJSObj=function(_13b,url,_13d){
var _13e;
var _13f=false;
if(typeof (_13d.childlayoutid)&&_13d.childlayoutid!=null){
_13f=true;
_13d.layout="border";
_13d.items=ColdFusion.objectCache[_13d.childlayoutid];
}else{
_13d.layout="fit";
}
if(typeof (_13d.autoScroll)=="undefined"){
_13d.autoScroll=true;
}
_13d.el=_13d.divid;
_13e=new Ext.Window(_13d);
_13e.cfwindowname=_13b;
_13e.tempx=_13d.tempx;
_13e.tempy=_13d.tempy;
_13e.divid=_13d.divid;
if(typeof (_13d.headerstyle)!="undefined"&&_13d.headerstyle!=null){
var _140=document.getElementById(_13b+"_title");
if(_140!=null){
_140.style.cssText="background:none;"+_13d.headerstyle;
}
}
if(typeof (_13d.bodystyle)!="undefined"&&_13d.bodystyle!=null){
var _141=document.getElementById(_13b+"_body");
var _142=_141.parentNode;
if(_142!=null){
_142.style.cssText=_13d.bodystyle;
}
}
_13e.isConfObj=false;
_13e._cf_body=_13b+"_body";
ColdFusion.objectCache[_13b]=_13e;
if(_13f){
var _143=_13e.getLayout();
var _144=ColdFusion.objectCache[_13d.childlayoutid];
}
_13e.addListener("beforeclose",ColdFusion.Window.beforeCloseHandler);
var _145=null;
if(typeof (url)!="undefined"&&url!=""){
_145=url;
}
if(_145==null){
if(typeof (_13d.initshow)=="undefined"||_13d.initshow==true){
_13e.addListener("beforeshow",ColdFusion.Window.beforeShowHandler);
ColdFusion.Window.showandhide(_13e,_13d);
}
return;
}
ColdFusion.objectCache[_13b+"_body"]=_13e;
if(typeof (_13d.callfromtag)=="undefined"){
var _146;
var _147;
_13e._cf_visible=false;
_13e._cf_dirtyview=true;
_13e.addListener("show",ColdFusion.Window.showHandler);
_13e.addListener("hide",ColdFusion.Window.hideHandler);
_13e.url=_145;
if(_13d){
if(typeof (_13d.initshow)=="undefined"||_13d.initshow==true){
ColdFusion.Window.showandhide(_13e,_13d);
}
_146=_13d.callbackHandler;
_147=_13d.errorHandler;
}
}else{
_13e.callfromtag=true;
_13e._cf_visible=false;
_13e._cf_dirtyview=true;
_13e.addListener("show",ColdFusion.Window.showHandler);
_13e.addListener("beforeshow",ColdFusion.Window.beforeShowHandler);
_13e.addListener("hide",ColdFusion.Window.hideHandler);
if(typeof (_13d.initshow)=="undefined"||_13d.initshow==true){
ColdFusion.Window.showandhide(_13e,_13d);
}
}
};
ColdFusion.Window.showandhide=function(_148,_149){
if(typeof (_149.tempinitshow)!="undefined"&&_149.tempinitshow==false){
var _14a=Ext.Element.get(_148.el);
if(typeof _14a!="undefined"){
_14a.show();
}
_14a.hide();
}else{
_148.show();
}
};
ColdFusion.Window.destroy=function(_14b,_14c){
if(_14b){
var _14d=ColdFusion.Window.getWindowObject(_14b);
if(_14d){
if(_14c===true){
_14d.destroy(true);
}else{
_14d.destroy();
}
ColdFusion.objectCache[_14b]=null;
}
}
};
ColdFusion.Window.resizeHandler=function(_14e,_14f,_150){
if(typeof (_14e.fixedcenter)!="undefined"&&_14e.fixedcenter==true){
_14e.center();
}
};
ColdFusion.Window.beforeShowHandler=function(_151){
if(typeof (_151.fixedcenter)!="undefined"&&_151.fixedcenter==true){
_151.center();
}
};
ColdFusion.Window.beforeCloseHandler=function(_152){
if(_152.destroyonclose!="undefined"&&_152.destroyonclose==true){
ColdFusion.objectCache[_152.cfwindowname]=null;
return true;
}else{
_152.hide();
return false;
}
};
ColdFusion.Window.showHandler=function(_153){
_153._cf_visible=true;
if(_153._cf_dirtyview){
if(typeof (_153.callfromtag)=="undefined"){
ColdFusion.Ajax.replaceHTML(_153._cf_body,_153.url,"GET",null,_153.callbackHandler,_153.errorHandler);
}else{
var _154=ColdFusion.bindHandlerCache[_153._cf_body];
if(_154){
_154();
}
}
_153._cf_dirtyview=false;
}
};
ColdFusion.Window.hideHandler=function(_155){
_155._cf_visible=false;
if(_155._cf_refreshOnShow){
_155._cf_dirtyview=true;
}
};
ColdFusion.Window.xPosition=50;
ColdFusion.Window.yPosition=50;
ColdFusion.Window.resetHTML=function(_156){
var _157=document.getElementById(_156);
if(_157){
_157.innerHTML="";
}
};
ColdFusion.Window.getUpdatedConfigObj=function(_158,_159){
var _15a={};
if(_158!=null){
if(typeof (_158)!="object"){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidconfig","widget",[_159],null,null,true);
return;
}
for(var key in _158){
if(key=="center"&&ColdFusion.Util.isBoolean(_158["center"])){
_15a["fixedcenter"]=_158["center"];
}else{
_15a[key]=_158[key];
}
}
}
if(typeof (_15a.initshow)!="undefined"){
if(ColdFusion.Util.isBoolean(_15a.initshow)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidinitshow","widget",[_159],null,null,true);
return;
}else{
_15a.initshow=ColdFusion.Util.castBoolean(_15a.initshow);
_15a._cf_visible=_15a.initshow;
}
}
_15a.tempcenter=null;
if(typeof (_15a.fixedcenter)!="undefined"){
if(ColdFusion.Util.isBoolean(_15a.fixedcenter)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidcenter","widget",[_159],null,null,true);
return;
}else{
_15a.fixedcenter=ColdFusion.Util.castBoolean(_15a.fixedcenter);
}
}
if(typeof (_15a.resizable)!="undefined"){
if(ColdFusion.Util.isBoolean(_15a.resizable)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidresizable","widget",[_159],null,null,true);
return;
}else{
_15a.resizable=ColdFusion.Util.castBoolean(_15a.resizable);
}
}
if(typeof (_15a.draggable)!="undefined"){
if(ColdFusion.Util.isBoolean(_15a.draggable)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invaliddraggable","widget",[_159],null,null,true);
return;
}else{
_15a.draggable=ColdFusion.Util.castBoolean(_15a.draggable);
}
}
if(typeof (_15a.closable)!="undefined"){
if(ColdFusion.Util.isBoolean(_15a.closable)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidclosable","widget",[_159],null,null,true);
return;
}else{
_15a.closable=ColdFusion.Util.castBoolean(_15a.closable);
}
}
if(typeof (_15a.modal)!="undefined"){
if(ColdFusion.Util.isBoolean(_15a.modal)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidmodal","widget",[_159],null,null,true);
return;
}else{
_15a.modal=ColdFusion.Util.castBoolean(_15a.modal);
}
}
if(typeof (_15a.refreshonshow)!="undefined"){
if(ColdFusion.Util.isBoolean(_15a.refreshonshow)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidrefreshonshow","widget",[_159],null,null,true);
return;
}else{
_15a._cf_refreshOnShow=ColdFusion.Util.castBoolean(_15a.refreshonshow);
}
}
_15a.shadow=true;
if(!_15a.height){
_15a.height=300;
}else{
if(ColdFusion.Util.isInteger(_15a.height)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidheight","widget",[_159],null,null,true);
return;
}
}
if(!_15a.width){
_15a.width=500;
}else{
if(ColdFusion.Util.isInteger(_15a.width)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidwidth","widget",[_159],null,null,true);
return;
}
}
var _15c=false;
if(_15a.minwidth){
if(ColdFusion.Util.isInteger(_15a.minwidth)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidminwidth","widget",[_159],null,null,true);
return;
}
var _15d=_15a.minwidth;
var _15e=_15a.width;
if(typeof (_15d)!="number"){
_15d=parseInt(_15d);
}
if(typeof (_15e)!="number"){
_15e=parseInt(_15e);
}
if(_15d>_15e){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidminwidth","widget",[_159],null,null,true);
return;
}
_15a.minWidth=_15a.minwidth;
_15c=true;
}
if(_15a.minheight){
if(ColdFusion.Util.isInteger(_15a.minheight)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidminheight","widget",[_159],null,null,true);
return;
}
var _15f=_15a.minheight;
var _160=_15a.height;
if(typeof (_15f)!="number"){
_15f=parseInt(_15f);
}
if(typeof (_160)!="number"){
_160=parseInt(_160);
}
if(_15f>_160){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidheightvalue","widget",[_159],null,null,true);
return;
}
_15a.minHeight=_15a.minheight;
_15c=true;
}
if(_15a.x){
if(ColdFusion.Util.isInteger(_15a.x)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidx","widget",[_159],null,null,true);
return;
}
}
if(_15a.y){
if(ColdFusion.Util.isInteger(_15a.y)==false){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.invalidy","widget",[_159],null,null,true);
return;
}
}
if(typeof (_15a.x)=="undefined"&&(typeof (_15a.center)=="undefined"||_15a.center==false)){
_15a.x=ColdFusion.Window.xPosition;
ColdFusion.Window.xPosition+=15;
}
if(typeof (_15a.y)=="undefined"&&(typeof (_15a.center)=="undefined"||_15a.center==false)){
_15a.y=ColdFusion.Window.yPosition;
ColdFusion.Window.yPosition+=15;
}
if(typeof (_15a.initshow)!="undefined"&&_15a.initshow===false){
_15a.tempinitshow=false;
if(typeof (_15a.fixedcenter)!="undefined"&&_15a.fixedcenter===true){
_15a.tempcenter=_15a.fixedcenter;
_15a.fixedcenter=null;
}else{
_15a.tempx=_15a.x;
_15a.tempy=_15a.y;
}
_15a.x=-10000;
_15a.y=-10000;
}
_15a.constraintoviewport=true;
_15a.initshow=true;
if(_15a.resizable!=null&&_15a.resizable==false&&_15c==true){
ColdFusion.Window.resetHTML(_159);
ColdFusion.handleError(null,"window.getupdatedconfigobject.minhwnotallowed","widget",[_159],null,null,true);
return;
}
_15a.collapsible=false;
_15a.shadow=true;
_15a.isConfObj=true;
return _15a;
};
ColdFusion.Window.show=function(_161){
var _162=ColdFusion.objectCache[_161];
if(typeof (_162)!="undefined"&&_162!=null){
if(typeof (_162.isConfObj)!="undefined"&&_162.isConfObj==true){
_162.initshow=true;
var _163=ColdFusion.Window.createHTML(_161,null,_162.url,_162,true);
ColdFusion.Window.createJSObj(_161,_162.url,_163);
}else{
if(_162.isVisible()==false){
_162.show();
ColdFusion.Log.info("window.show.shown","widget",[_161]);
}
if(_162.tempcenter!=null){
_162.center();
_162.tempcenter=null;
}else{
if(_162.getEl()&&_162.getEl().getX()>0&&_162.getEl().getY()>0){
_162.tempx=null;
_162.tempy=null;
}else{
if(_162.tempx!=null&&_162.tempy!=null){
_162.setPosition(_162.tempx,_162.tempy);
_162.tempx=null;
_162.tempy=null;
}else{
var x=_162.getEl().getX();
var y=_162.getEl().getY();
_162.setPosition(x+1,y+1);
_162.setPosition(x,y);
}
}
}
}
}else{
ColdFusion.handleError(null,"window.show.notfound","widget",[_161],null,null,true);
}
};
ColdFusion.Window.hide=function(_166){
var _167=ColdFusion.objectCache[_166];
if(_167){
if(_167.isVisible&&_167.isVisible()==true){
_167.hide();
ColdFusion.Log.info("window.hide.hidden","widget",[_166]);
}
}else{
ColdFusion.handleError(null,"window.hide.notfound","widget",[_166],null,null,true);
}
};
ColdFusion.Window.onShow=function(_168,_169){
var _16a=ColdFusion.objectCache[_168];
if(typeof (_16a)!="undefined"&&_16a!=null){
_16a.onShow=_169;
if(_16a.addListener){
_16a.addListener("show",ColdFusion.Window.onShowWrapper);
}
}else{
ColdFusion.handleError(null,"window.onshow.notfound","widget",[_168],null,null,true);
}
};
ColdFusion.Window.onShowWrapper=function(_16b){
_16b.onShow.call(null,_16b.cfwindowname);
};
ColdFusion.Window.onHide=function(_16c,_16d){
var _16e=ColdFusion.objectCache[_16c];
if(typeof (_16e)!="undefined"&&_16e!=null){
_16e.onHide=_16d;
if(_16e.addListener){
_16e.addListener("hide",ColdFusion.Window.onHideWrapper);
}
}else{
ColdFusion.handleError(null,"window.onhide.notfound","widget",[_16c],null,null,true);
}
};
ColdFusion.Window.onHideWrapper=function(_16f){
_16f.onHide.call(null,_16f.cfwindowname);
};
ColdFusion.Window.getWindowObject=function(_170){
if(!_170){
ColdFusion.handleError(null,"window.getwindowobject.emptyname","widget",null,null,null,true);
return;
}
var _171=ColdFusion.objectCache[_170];
if(_171==null||(typeof (_171.isConfObj)=="undefined"&&Ext.Window.prototype.isPrototypeOf(_171)==false)){
ColdFusion.handleError(null,"window.getwindowobject.notfound","widget",[_170],null,null,true);
return;
}
if(typeof (_171.isConfObj)!="undefined"&&_171.isConfObj==true){
_171.initshow=true;
var _172=ColdFusion.Window.createHTML(_170,null,_171.url,_171,true);
ColdFusion.Window.createJSObj(_170,_171.url,_172);
ColdFusion.Window.hide(_170);
_171=ColdFusion.objectCache[_170];
}
return _171;
};

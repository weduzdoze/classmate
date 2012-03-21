/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Layout){
ColdFusion.Layout={};
}
var ACCORDION_TITLE_ICON_CSS_TEMPLATE=".{0} { background-image:url({1}); }";
ColdFusion.Layout.initializeTabLayout=function(id,_5a,_5b,_5c,_5d){
Ext.QuickTips.init();
var _5e;
if(_5b){
_5e={renderTo:id,height:_5b};
}else{
_5e={renderTo:id,autoHeight:true};
}
if(_5c&&_5c!="undefined"){
_5e.width=_5c;
}else{
_5e.autoWidth=true;
}
if(_5a){
_5e.tabPosition="bottom";
}else{
_5e.enableTabScroll=true;
}
_5e.plain=!_5d;
var _5f=new Ext.TabPanel(_5e);
ColdFusion.objectCache[id]=_5f;
return _5f;
};
ColdFusion.Layout.getTabLayout=function(_60){
var _61=ColdFusion.objectCache[_60];
if(!_61||!(_61 instanceof Ext.TabPanel)){
ColdFusion.handleError(null,"layout.gettablayout.notfound","widget",[_60],null,null,true);
}
return _61;
};
ColdFusion.Layout.onTabActivate=function(tab){
tab._cf_visible=true;
if(tab._cf_dirtyview){
var _63=ColdFusion.bindHandlerCache[tab.contentEl];
if(_63){
_63();
}
tab._cf_dirtyview=false;
}
var el=Ext.get(tab.contentEl);
el.move("left",1);
el.move("right",1);
};
ColdFusion.Layout.onTabDeactivate=function(tab){
tab._cf_visible=false;
if(tab._cf_refreshOnActivate){
tab._cf_dirtyview=true;
}
};
ColdFusion.Layout.onTabClose=function(tab){
tab._cf_visible=false;
};
ColdFusion.Layout.addTab=function(_67,_68,_69,_6a,_6b,_6c,_6d,_6e,_6f){
if(_6b!=null&&_6b.length==0){
_6b=null;
}
var _70=new Ext.Panel({title:_6a,contentEl:_68,_cf_body:_68,id:_69,closable:_6c,tabTip:_6b,autoScroll:_6f,autoShow:true});
var tab=_67.add(_70);
if(_6e){
_70.setDisabled(true);
}
tab._cf_visible=false;
tab._cf_dirtyview=true;
tab._cf_refreshOnActivate=_6d;
tab.addListener("activate",ColdFusion.Layout.onTabActivate);
tab.addListener("deactivate",ColdFusion.Layout.onTabDeactivate);
tab.addListener("close",ColdFusion.Layout.onTabClose);
ColdFusion.objectCache[_69]=tab;
};
ColdFusion.Layout.enableTab=function(_72,_73){
var _74=ColdFusion.objectCache[_72];
var _75=ColdFusion.objectCache[_73];
if(_74&&(_74 instanceof Ext.TabPanel)&&_75){
_75.setDisabled(false);
ColdFusion.Log.info("layout.enabletab.enabled","widget",[_73,_72]);
}else{
ColdFusion.handleError(null,"layout.enabletab.notfound","widget",[_72],null,null,true);
}
};
ColdFusion.Layout.disableTab=function(_76,_77){
var _78=ColdFusion.objectCache[_76];
var _79=ColdFusion.objectCache[_77];
if(_78&&(_78 instanceof Ext.TabPanel)&&_79){
_79.setDisabled(true);
ColdFusion.Log.info("layout.disabletab.disabled","widget",[_77,_76]);
}else{
ColdFusion.handleError(null,"layout.disabletab.notfound","widget",[_76],null,null,true);
}
};
ColdFusion.Layout.selectTab=function(_7a,_7b){
var _7c=ColdFusion.objectCache[_7a];
var tab=ColdFusion.objectCache[_7b];
if(_7c&&(_7c instanceof Ext.TabPanel)&&tab){
_7c.setActiveTab(tab);
ColdFusion.Log.info("layout.selecttab.selected","widget",[_7b,_7a]);
}else{
ColdFusion.handleError(null,"layout.selecttab.notfound","widget",[_7a],null,null,true);
}
};
ColdFusion.Layout.hideTab=function(_7e,_7f){
var _80=ColdFusion.objectCache[_7e];
if(_80&&(_80 instanceof Ext.TabPanel)){
var _81=ColdFusion.objectCache[_7f];
var _82=false;
if(_81){
if(_80.getActiveTab().getId()==_7f){
var i;
for(i=0;i<_80.items.length;i++){
var _84=_80.getComponent(i);
if(_84.hidden==false){
_82=true;
_84.show();
break;
}
}
if(_82==false){
document.getElementById(_7f).style.display="none";
}
}
_80.hideTabStripItem(_81);
ColdFusion.Log.info("layout.hidetab.hide","widget",[_7f,_7e]);
}
}else{
ColdFusion.handleError(null,"layout.hidetab.notfound","widget",[_7e],null,null,true);
}
};
ColdFusion.Layout.showTab=function(_85,_86){
var _87=ColdFusion.objectCache[_85];
var _88=ColdFusion.objectCache[_86];
if(_87&&(_87 instanceof Ext.TabPanel)&&_88){
_87.unhideTabStripItem(_88);
ColdFusion.Log.info("layout.showtab.show","widget",[_86,_85]);
}else{
ColdFusion.handleError(null,"layout.showtab.notfound","widget",[_85],null,null,true);
}
};
ColdFusion.Layout.createTab=function(_89,_8a,_8b,_8c,_8d){
var _8e=ColdFusion.objectCache[_89];
var _8f=_8a;
if(_89&&typeof (_89)!="string"){
ColdFusion.handleError(null,"layout.createtab.invalidname","widget",null,null,null,true);
return;
}
if(!_89||ColdFusion.trim(_89)==""){
ColdFusion.handleError(null,"layout.createtab.emptyname","widget",null,null,null,true);
return;
}
if(_8a&&typeof (_8a)!="string"){
ColdFusion.handleError(null,"layout.createtab.invalidareaname","widget",null,null,null,true);
return;
}
if(!_8a||ColdFusion.trim(_8a)==""){
ColdFusion.handleError(null,"layout.createtab.emptyareaname","widget",null,null,null,true);
return;
}
if(_8b&&typeof (_8b)!="string"){
ColdFusion.handleError(null,"layout.createtab.invalidtitle","widget",null,null,null,true);
return;
}
if(!_8b||ColdFusion.trim(_8b)==""){
ColdFusion.handleError(null,"layout.createtab.emptytitle","widget",null,null,null,true);
return;
}
if(_8c&&typeof (_8c)!="string"){
ColdFusion.handleError(null,"layout.createtab.invalidurl","widget",null,null,null,true);
return;
}
if(!_8c||ColdFusion.trim(_8c)==""){
ColdFusion.handleError(null,"layout.createtab.emptyurl","widget",null,null,null,true);
return;
}
_8a="cf_layoutarea"+_8a;
if(_8e&&(_8e instanceof Ext.TabPanel)){
var _90=null;
var ele=document.getElementById(_8a);
if(ele!=null){
ColdFusion.handleError(null,"layout.createtab.duplicateel","widget",[_8a],null,null,true);
return;
}
var _92=false;
var _93=false;
var _94=false;
var _95=false;
var _96=false;
var _97=null;
if((_8e.items.length<=0)){
_94=true;
}
if(_8d!=null){
if(typeof (_8d)!="object"){
ColdFusion.handleError(null,"layout.createtab.invalidconfig","widget",null,null,null,true);
return;
}
if(typeof (_8d.closable)!="undefined"&&_8d.closable==true){
_92=true;
}
if(typeof (_8d.disabled)!="undefined"&&_8d.disabled==true){
_93=true;
}
if(typeof (_8d.selected)!="undefined"&&_8d.selected==true){
_94=true;
}
if(typeof (_8d.inithide)!="undefined"&&_8d.inithide==true){
_95=true;
}
if(typeof (_8d.tabtip)!="undefined"&&_8d.tabtip!=null){
_97=_8d.tabtip;
}
}
var _98=document.getElementById(_89);
if(_98){
var _99=document.getElementById(_89);
var _9a=document.createElement("div");
_9a.id=_8a;
_9a.className="ytab";
if(_8d!=null&&typeof (_8d.align)!="undefined"){
_9a.align=_8d.align;
}
var _9b="";
if(_8e.tabheight){
_9b="height:"+_8e.tabheight+";";
}
if(_8d!=null&&typeof (_8d.style)!="undefined"){
var _9c=new String(_8d.style);
_9c=_9c.toLowerCase();
_9b=_9b+_9c;
}
if(_8d!=null&&typeof (_8d.overflow)!="undefined"){
var _9d=new String(_8d.overflow);
_9d=_9d.toLowerCase();
if(_9d!="visible"&&_9d!="auto"&&_9d!="scroll"&&_9d!="hidden"){
ColdFusion.handleError(null,"layout.createtab.invalidoverflow","widget",null,null,null,true);
return;
}
if(_9d.toLocaleLowerCase()==="hidden"){
_96=false;
}
_9b=_9b+"overflow:"+_9d+";";
}else{
_9b=_9b+"; overflow:auto;";
}
_9a.style.cssText=_9b;
_99.appendChild(_9a);
}
ColdFusion.Layout.addTab(_8e,_8a,_8f,_8b,_97,_92,false,_93,_96);
ColdFusion.Log.info("layout.createtab.success","http",[_8a,_89]);
if(_94==true){
ColdFusion.Layout.selectTab(_89,_8f);
}
if(_95==true){
ColdFusion.Layout.hideTab(_89,_8f);
}
if(_8c!=null&&typeof (_8c)!="undefined"&&_8c!=""){
if(_8c.indexOf("?")!=-1){
_8c=_8c+"&";
}else{
_8c=_8c+"?";
}
var _9e;
var _9f;
if(_8d){
_9e=_8d.callbackHandler;
_9f=_8d.errorHandler;
}
ColdFusion.Ajax.replaceHTML(_8a,_8c,"GET",null,_9e,_9f);
}
}else{
ColdFusion.handleError(null,"layout.createtab.notfound","widget",[_89],null,null,true);
}
};
ColdFusion.Layout.getBorderLayout=function(_a0){
var _a1=ColdFusion.objectCache[_a0];
if(!_a1){
ColdFusion.handleError(null,"layout.getborderlayout.notfound","widget",[_a0],null,null,true);
}
return _a1;
};
ColdFusion.Layout.showArea=function(_a2,_a3){
var _a4=ColdFusion.Layout.convertPositionToDirection(_a3);
var _a5=ColdFusion.objectCache[_a2];
var _a6;
if(_a5){
var _a7=_a5.items;
for(var i=0;i<_a7.getCount();i++){
var _a9=_a7.itemAt(i);
if(_a9 instanceof Ext.Panel&&_a9.region==_a4){
_a6=_a9;
break;
}
}
if(_a6){
_a6.show();
_a6.expand();
ColdFusion.Log.info("layout.showarea.shown","widget",[_a3,_a2]);
}else{
ColdFusion.handleError(null,"layout.showarea.areanotfound","widget",[_a3],null,null,true);
}
}else{
ColdFusion.handleError(null,"layout.showarea.notfound","widget",[_a2],null,null,true);
}
};
ColdFusion.Layout.hideArea=function(_aa,_ab){
var _ac=ColdFusion.Layout.convertPositionToDirection(_ab);
var _ad=ColdFusion.objectCache[_aa];
var _ae;
if(_ad){
var _af=_ad.items;
for(var i=0;i<_af.getCount();i++){
var _b1=_af.itemAt(i);
if(_b1 instanceof Ext.Panel&&_b1.region==_ac){
_ae=_b1;
break;
}
}
if(_ae){
_ae.hide();
ColdFusion.Log.info("layout.hidearea.hidden","widget",[_ab,_aa]);
}else{
ColdFusion.handleError(null,"layout.hidearea.areanotfound","widget",[_ab],null,null,true);
}
}else{
ColdFusion.handleError(null,"layout.hidearea.notfound","widget",[_aa],null,null,true);
}
};
ColdFusion.Layout.collapseArea=function(_b2,_b3){
var _b4=ColdFusion.Layout.convertPositionToDirection(_b3);
var _b5=ColdFusion.objectCache[_b2];
var _b6;
if(_b5){
var _b7=_b5.items;
for(var i=0;i<_b7.getCount();i++){
var _b9=_b7.itemAt(i);
if(_b9 instanceof Ext.Panel&&_b9.region==_b4){
_b6=_b9;
break;
}
}
if(_b6){
_b6.collapse(true);
ColdFusion.Log.info("layout.collpasearea.collapsed","widget",[_b3,_b2]);
}else{
ColdFusion.handleError(null,"layout.collpasearea.areanotfound","widget",[_b3],null,null,true);
}
}else{
ColdFusion.handleError(null,"layout.collpasearea.notfound","widget",[_b3],null,null,true);
}
};
ColdFusion.Layout.expandArea=function(_ba,_bb){
var _bc=ColdFusion.Layout.convertPositionToDirection(_bb);
var _bd=ColdFusion.objectCache[_ba];
var _be;
if(_bd){
var _bf=_bd.items;
for(var i=0;i<_bf.getCount();i++){
var _c1=_bf.itemAt(i);
if(_c1 instanceof Ext.Panel&&_c1.region==_bc){
_be=_c1;
break;
}
}
if(_be){
_be.expand();
ColdFusion.Log.info("layout.expandarea.expanded","widget",[_bb,_ba]);
}else{
ColdFusion.handleError(null,"layout.expandarea.areanotfound","widget",[_bb],null,null,true);
}
}else{
ColdFusion.handleError(null,"layout.expandarea.notfound","widget",[_bb],null,null,true);
}
};
ColdFusion.Layout.printObject=function(obj){
var str="";
for(key in obj){
str=str+"  "+key+"=";
value=obj[key];
if(typeof (value)==Object){
value=$G.printObject(value);
}
str+=value;
}
return str;
};
ColdFusion.Layout.InitAccordion=function(_c4,_c5,_c6,_c7,_c8,_c9,_ca,_cb){
var _cc=false;
if(_c6.toUpperCase()=="LEFT"){
_cc=true;
}
if(_c9==null||typeof (_c9)=="undefined"){
_c8=false;
}
var _cd={activeOnTop:_c5,collapseFirst:_cc,titleCollapse:_c7,fill:_c8};
var _ce={renderTo:_c4,layoutConfig:_cd,items:_cb,layout:"accordion"};
if(_c9==null||typeof (_c9)=="undefined"){
_ce.autoHeight=true;
}else{
_ce.height=_c9;
}
if(_ca==null||typeof (_ca)=="undefined"){
_ce.autoWidth=true;
}else{
_ce.width=_ca;
}
var _cf=new Ext.Panel(_ce);
ColdFusion.objectCache[_c4]=_cf;
ColdFusion.Log.info("layout.accordion.initialized","widget",[_c4]);
return _cf;
};
ColdFusion.Layout.InitAccordionChildPanel=function(_d0,_d1,_d2,_d3,_d4,_d5,_d6,_d7){
if(_d2==null||typeof (_d2)==undefined||_d2.length==0){
_d2="  ";
}
var _d8={contentEl:_d0,id:_d1,title:_d2,collapsible:_d3,closable:_d4,animate:true,autoScroll:_d5,_cf_body:_d0};
if(_d6&&typeof _d6=="string"){
_d8.iconCls=_d6;
}
var _d9=new Ext.Panel(_d8);
_d9._cf_visible=false;
_d9._cf_dirtyview=true;
_d9._cf_refreshOnActivate=_d7;
_d9.on("expand",ColdFusion.Layout.onAccordionPanelExpand,this);
_d9.on("collapse",ColdFusion.Layout.onAccordionPanelCollapse,this);
_d9.on("hide",ColdFusion.Layout.onAccordionPanelHide,this);
_d9.on("show",ColdFusion.Layout.onAccordionPanelExpand,this);
ColdFusion.objectCache[_d1]=_d9;
ColdFusion.Log.info("layout.accordion.childinitialized","widget",[_d1]);
return _d9;
};
ColdFusion.Layout.getAccordionLayout=function(_da){
var _db=ColdFusion.objectCache[_da];
if(!_db||!(_db instanceof Ext.Panel)){
ColdFusion.handleError(null,"layout.getaccordionlayout.notfound","widget",[_da],null,null,true);
}
return _db;
};
ColdFusion.Layout.onAccordionPanelExpand=function(_dc){
_dc._cf_visible=true;
if(_dc._cf_dirtyview){
var _dd=ColdFusion.bindHandlerCache[_dc.contentEl];
if(_dd){
_dd();
}
_dc._cf_dirtyview=false;
}
var el=Ext.get(_dc.contentEl);
el.move("left",1);
el.move("right",1);
};
ColdFusion.Layout.onAccordionPanelCollapse=function(_df){
_df._cf_visible=false;
if(_df._cf_refreshOnActivate){
_df._cf_dirtyview=true;
}
};
ColdFusion.Layout.onAccordionPanelHide=function(_e0){
_e0._cf_visible=false;
};
ColdFusion.Layout.hideAccordion=function(_e1,_e2){
var _e3=ColdFusion.objectCache[_e1];
var _e4=ColdFusion.objectCache[_e2];
if(!_e3||!_e3 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.hideaccordion.layoutnotfound","widget",[_e1],null,null,true);
}
if(!_e4||!_e4 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.hideaccordion.panelnotfound","widget",[_e2],null,null,true);
}
_e4.hide();
ColdFusion.Log.info("layout.hideaccordion.hidden","widget",[_e2,_e1]);
};
ColdFusion.Layout.showAccordion=function(_e5,_e6){
var _e7=ColdFusion.objectCache[_e5];
var _e8=ColdFusion.objectCache[_e6];
if(!_e7||!_e7 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.showaccordion.layoutnotfound","widget",[_e5],null,null,true);
}
if(!_e8||!_e8 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.showaccordion.panelnotfound","widget",[_e6],null,null,true);
}
_e8.show();
ColdFusion.Log.info("layout.showaccordion.shown","widget",[_e6,_e5]);
};
ColdFusion.Layout.expandAccordion=function(_e9,_ea){
var _eb=ColdFusion.objectCache[_e9];
var _ec=ColdFusion.objectCache[_ea];
if(!_eb||!_eb instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.expandaccordion.layoutnotfound","widget",[_e9],null,null,true);
}
if(!_ec||!_ec instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.expandaccordion.panelnotfound","widget",[_ea],null,null,true);
}
_ec.expand();
ColdFusion.Log.info("layout.expandaccordion.expanded","widget",[_ea,_e9]);
};
ColdFusion.Layout.selectAccordion=function(_ed,_ee){
return ColdFusion.Layout.expandAccordion(_ed,_ee);
};
ColdFusion.Layout.collapseAccordion=function(_ef,_f0){
var _f1=ColdFusion.objectCache[_ef];
var _f2=ColdFusion.objectCache[_f0];
if(!_f1||!_f1 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.collapseaccordion.layoutnotfound","widget",[_ef],null,null,true);
}
if(!_f2||!_f2 instanceof Ext.Panel){
ColdFusion.handleError(null,"layout.collapseaccordion.panelnotfound","widget",[_f0],null,null,true);
}
_f2.collapse();
ColdFusion.Log.info("layout.collapseaccordion.collapsed","widget",[_f0,_ef]);
};
ColdFusion.Layout.createAccordionPanel=function(_f3,_f4,_f5,url,_f7){
var _f8=ColdFusion.objectCache[_f3];
var _f9=_f4;
if(_f3&&typeof (_f3)!="string"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidname","widget",[_f3],null,null,true);
return;
}
if(!_f3||ColdFusion.trim(_f3)==""){
ColdFusion.handleError(null,"layout.createaccordionpanel.emptyname","widget",[_f3],null,null,true);
return;
}
if(_f4&&typeof (_f4)!="string"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidaccordionpanelname","widget",[_f4],null,null,true);
return;
}
if(!_f4||ColdFusion.trim(_f4)==""){
ColdFusion.handleError(null,"layout.createaccordionpanel.emptyaccordionpanelname","widget",[_f4],null,null,true);
return;
}
if(_f5&&typeof (_f5)!="string"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidtitle","widget",[_f4],null,null,true);
return;
}
if(!_f5||ColdFusion.trim(_f5)==""){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidtitle","widget",[_f4],null,null,true);
return;
}
if(url&&typeof (url)!="string"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidurl","widget",[_f4],null,null,true);
return;
}
if(!url||ColdFusion.trim(url)==""){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidurl","widget",[_f4],null,null,true);
return;
}
_f4="cf_layoutarea"+_f9;
if(_f8&&(_f8 instanceof Ext.Panel)){
var _fa=null;
var ele=document.getElementById(_f4);
if(ele!=null){
ColdFusion.handleError(null,"layout.createaccordionpanel.duplicateel","widget",[_f4],null,null,true);
return;
}
var _fc=true;
var _fd;
var _fe=false;
var _ff=null;
if(_f7!=null){
if(typeof (_f7)!="object"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidconfig","widget",[_f4],null,null,true);
return;
}
}
if(_f7&&typeof (_f7.selected)!="undefined"&&_f7.selected==true){
_fe=true;
}
if(_f7&&_f7.titleicon){
if(typeof _f7.titleicon!="string"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidtitleicon","widget",[_f4],null,null,true);
return;
}
var _100=String.format(ACCORDION_TITLE_ICON_CSS_TEMPLATE,_f4,_f7.titleicon);
Ext.util.CSS.createStyleSheet(_100,_f4+"_cf_icon");
_ff=_f4;
}
var _101=_f8.layoutConfig;
var _102=true;
if(_101&&typeof _101.fill!="undefined"){
_102=_101.fill;
}
if(_f7!=null&&typeof (_f7.overflow)!="undefined"){
var _fd=new String(_f7.overflow);
_fd=_fd.toLowerCase();
if(_fd!="visible"&&_fd!="auto"&&_fd!="scroll"&&_fd!="hidden"){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidoverflow","widget",[_f4],null,null,true);
return;
}
if(!_102&&(_fd=="auto"||_fd=="scroll")){
ColdFusion.handleError(null,"layout.createaccordionpanel.invalidoverflowforfillheight","widget",[_f4],null,null,true);
return;
}
if(_fd=="hidden"){
_fc=false;
}
}else{
_fd="auto";
_fc=true;
}
var _103=document.getElementById(_f3);
if(_103){
var _104=document.getElementById(_f3);
var _105=document.createElement("div");
_105.id=_f4;
if(_f7!=null&&typeof (_f7.align)!="undefined"){
_105.align=_f7.align;
}
var _106="";
if(_f8.height){
_106="height:"+_f8.height+";";
}
if(_f7!=null&&typeof (_f7.style)!="undefined"){
var _107=new String(_f7.style);
_107=_107.toLowerCase();
_106=_106+_107;
}
_106=_106+"overflow:"+_fd+";";
_105.style.cssText=_106;
_104.appendChild(_105);
}
var _108=true;
var _109=true;
itemobj=ColdFusion.Layout.InitAccordionChildPanel(_f4,_f9,_f5,_109,_108,_fc,_ff,false);
_f8.add(itemobj);
if(url!=null&&typeof (url)!="undefined"&&url!=""){
if(url.indexOf("?")!=-1){
url=url+"&";
}else{
url=url+"?";
}
var _10a;
var _10b;
if(_f7){
_10a=_f7.callbackHandler;
_10b=_f7.errorHandler;
}
ColdFusion.Ajax.replaceHTML(_f4,url,"GET",null,_10a,_10b);
}
_f8.render();
if(_fe){
ColdFusion.Layout.expandAccordion(_f3,_f9);
}
ColdFusion.Log.info("layout.createaccordionpanel.created","widget",[_f4]);
}else{
ColdFusion.handleError(null,"layout.createaccordionpanel.layoutnotfound","widget",[_f3],null,null,true);
}
};
ColdFusion.Layout.initViewport=function(_10c,item){
var _10e=new Array();
_10e[0]=item;
var _10f={items:_10e,layout:"fit",name:_10c};
var _110=new Ext.Viewport(_10f);
return _110;
};
ColdFusion.Layout.convertPositionToDirection=function(_111){
if(_111.toUpperCase()=="LEFT"){
return "west";
}else{
if(_111.toUpperCase()=="RIGHT"){
return "east";
}else{
if(_111.toUpperCase()=="CENTER"){
return "center";
}else{
if(_111.toUpperCase()=="BOTTOM"){
return "south";
}else{
if(_111.toUpperCase()=="TOP"){
return "north";
}
}
}
}
}
};

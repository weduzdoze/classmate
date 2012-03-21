/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Tree){
ColdFusion.Tree={};
}
ColdFusion.Tree.AttributesCollection=function(){
this.cache=true;
this.fontname=null;
this.bold=false;
this.italic=false;
this.completepath=false;
this.appendkey=false;
this.delimiter=null;
this.formname=null;
this.fontsize=null;
this.formparamname=null;
this.prevspanid=null;
this.prevspanbackground=null;
this.images={};
this.images.folder=_cf_ajaxscriptsrc+"/resources/cf/images/FolderClose.gif";
this.images.cd=_cf_ajaxscriptsrc+"/resources/cf/images/Cd.png";
this.images.computer=_cf_ajaxscriptsrc+"/resources/cf/images/Computer.png";
this.images.document=_cf_ajaxscriptsrc+"/resources/cf/images/Document.gif";
this.images.element=_cf_ajaxscriptsrc+"/resources/cf/images/Elements.png";
this.images.floppy=_cf_ajaxscriptsrc+"/resources/cf/images/Floppy.png";
this.images.fixed=_cf_ajaxscriptsrc+"/resources/cf/images/HardDrive.png";
this.images.remote=_cf_ajaxscriptsrc+"/resources/cf/images/NetworkDrive.png";
this.imagesopen={};
this.imagesopen.folder=_cf_ajaxscriptsrc+"/resources/cf/images/FolderOpen.gif";
this.imagesopen.cd=_cf_ajaxscriptsrc+"/resources/cf/images/Cd.png";
this.imagesopen.computer=_cf_ajaxscriptsrc+"/resources/cf/images/Computer.png";
this.imagesopen.document=_cf_ajaxscriptsrc+"/resources/cf/images/Document.gif";
this.imagesopen.element=_cf_ajaxscriptsrc+"/resources/cf/images/Elements.png";
this.imagesopen.floppy=_cf_ajaxscriptsrc+"/resources/cf/images/Floppy.png";
this.imagesopen.fixed=_cf_ajaxscriptsrc+"/resources/cf/images/HardDrive.png";
this.imagesopen.remote=_cf_ajaxscriptsrc+"/resources/cf/images/NetworkDrive.png";
this.eventcount=0;
this.eventHandlers=new Array();
this.nodeCounter=0;
};
ColdFusion.Tree.refresh=function(_1){
var _2=ColdFusion.objectCache[_1];
var _3=ColdFusion.objectCache[_1+"collection"];
if(!_2||YAHOO.widget.TreeView.prototype.isPrototypeOf(_2)==false){
ColdFusion.handleError(null,"tree.refresh.notfound","widget",[_1],null,null,true);
return;
}
if(!_3.dynLoadFunction){
ColdFusion.Log.info("tree.refresh.statictree","widget");
return;
}
_3.dynLoadFunction.call(null,_2.getRoot());
ColdFusion.Log.info("tree.refresh.success","widget",[_1]);
};
ColdFusion.Tree.getTreeObject=function(_4){
if(!_4){
ColdFusion.handleError(null,"tree.gettreeobject.emptyname","widget",null,null,null,true);
return;
}
var _5=ColdFusion.objectCache[_4];
if(_5==null||YAHOO.widget.TreeView.prototype.isPrototypeOf(_5)==false){
ColdFusion.handleError(null,"tree.gettreeobject.notfound","widget",[_4],null,null,true);
return;
}
return _5;
};
ColdFusion.Tree.loadNodes=function(_6,_7){
var i=0;
var _9=ColdFusion.objectCache[_7.treeid+"collection"];
var _a=ColdFusion.objectCache[_7.treeid];
var _b;
var _c=false;
if(_6&&typeof (_6.length)=="number"&&!_6.toUpperCase){
if(_6.length>0&&typeof (_6[0])!="object"){
_c=true;
}
}else{
_c=true;
}
if(_c){
ColdFusion.handleError(_a.onbinderror,"tree.loadnodes.invalidbindvalue","widget",[_7.treeid]);
return;
}
if(_7.parent&&!_7.parent.isRoot()){
_a.removeChildren(_7.parent);
}else{
if(_7.parent&&_7.parent.hasChildren()){
_a.removeChildren(_7.parent);
_7.parent=_a.getRoot();
}
}
if(!_7.parent.leafnode){
for(i=0;i<_6.length;i++){
var _d=_9.nodeCounter++;
var _e={};
_e.id=_6[i].VALUE;
if(typeof (_6[i].DISPLAY)==undefined||_6[i].DISPLAY==null){
_e.label=_6[i].VALUE;
}else{
_e.label=_6[i].DISPLAY;
}
_e.expand=_6[i].EXPAND;
_e.appendkey=_6[i].APPENDKEY;
_e.href=_6[i].HREF;
_e.img=_6[i].IMG;
_e.imgOpen=_6[i].IMGOPEN;
_e.imgid="_cf_image"+_d;
_e.spanid="_cf_span"+_d;
_e.target=_6[i].TARGET;
if(_9.appendkey&&_9.appendkey==true&&_e.href){
var _f=new String(_e.href);
_f=_f.toLowerCase();
if(_f.indexOf("javascript")<0){
if(_f.indexOf("?")>=0){
_e.href=_6[i].HREF+"&";
}else{
_e.href=_6[i].HREF+"?";
}
_e.href=_e.href+"CFTREEITEMKEY="+_e.id;
}
}
var _10="";
if(_e.img){
if(_9.images[_e.img]){
_10="<img src='"+_9.images[_e.img]+"' id='"+_e.imgid+"' style='border:0'/>&nbsp;";
}else{
_10="<img src='"+_e.img+"' id='"+_e.imgid+"' style='border:0'/>&nbsp;";
}
}
if(_9.fontname||_9.italic==true||_9.bold==true||_9.fontsize){
_10=_10+"<span id='"+_e.spanid+"' style='";
if(_9.fontname){
_10=_10+"font-family:"+_9.fontname+";";
}
if(_9.italic==true){
_10=_10+"font-style:italic;";
}
if(_9.bold==true){
_10=_10+"font-weight:bold;";
}
if(_9.fontsize){
_10=_10+"font-size:"+_9.fontsize+";";
}
_10=_10+"'>"+_e.label+"</span>";
_e.label=_10;
}else{
_e.label=_10+"<span id='"+_e.spanid+"'  >"+_e.label+"</span>";
}
_e.childrenFetched=false;
var _11=new YAHOO.widget.TextNode(_e,_7.parent,false);
var _12=false;
if(_6[i].LEAFNODE&&_6[i].LEAFNODE==true){
_12=true;
_11.leafnode=true;
_11.iconMode=1;
}
if(_12==true||(_e.expand&&_e.expand==true)){
_11.expand();
}
}
}
if(!_7.parent.isRoot()){
_7.parent.data.childrenFetched=true;
}
if(_7.onCompleteCallBack){
_7.onCompleteCallBack.call();
}else{
_7.parent.tree.draw();
}
ColdFusion.Log.info("tree.loadnodes.success","widget",[_7.treeid]);
};
ColdFusion.Tree.onExpand=function(_13){
if(_13.isRoot()){
return;
}
var _14=ColdFusion.objectCache[_13.tree.id+"collection"];
if(_13.data.imgOpen&&typeof (_13.leafnode)=="undefined"){
var _15=ColdFusion.DOM.getElement(_13.data.imgid,_13.tree.id);
var src;
if(_14.imagesopen[_13.data.imgOpen]){
src=_14.imagesopen[_13.data.imgOpen];
}else{
src=_13.data.imgOpen;
}
_15.src=src;
}
if(_14.cache==false&&_13.data.childrenFetched==false&&_14.dynLoadFunction){
_13.tree.removeChildren(_13);
}
};
ColdFusion.Tree.onCollapse=function(_17){
if(_17.isRoot()){
return;
}
var _18=ColdFusion.objectCache[_17.tree.id+"collection"];
if(_17.data.img){
var _19=ColdFusion.DOM.getElement(_17.data.imgid,_17.tree.id);
var src;
if(_18.images[_17.data.img]){
src=_18.images[_17.data.img];
}else{
src=_17.data.img;
}
_19.src=src;
}
_17.data.childrenFetched=false;
};
ColdFusion.Tree.formPath=function(_1b,_1c){
var _1d=ColdFusion.objectCache[_1b.tree.id+"collection"];
if(_1d.completepath==true&&_1b.isRoot()){
return "";
}else{
if(_1d.completepath==false&&_1b.parent.isRoot()){
return "";
}
}
if(!_1c){
_1c=_1b;
}
var _1e=ColdFusion.Tree.formPath(_1b.parent,_1c);
_1e=_1e+_1b.data.id;
if(_1c.data.id!=_1b.data.id){
_1e=_1e+_1d.delimiter;
}
return _1e;
};
ColdFusion.Tree.onLabelClick=function(_1f){
var _20="";
var _21=ColdFusion.objectCache[_1f.tree.id+"collection"];
var _20=ColdFusion.Tree.formPath(_1f);
if(_21.prevspanid){
var _22=ColdFusion.DOM.getElement(_21.prevspanid,_1f.tree.id);
if(_22.style){
_22.style.backgroundColor=_21.prevspanbackground;
}
}
var _23=ColdFusion.DOM.getElement(_1f.data.spanid,_1f.tree.id);
if(_23&&_23.style){
_21.prevspanbackground=_23.style.backgroundColor;
}
_23.style.backgroundColor="lightblue";
_21.prevspanid=_1f.data.spanid;
_1f.tree._cf_path=_20;
_1f.tree._cf_node=_1f.data.id;
var val="PATH="+_20+"; NODE="+_1f.data.id;
updateHiddenValue(val,_21.formname,_21.formparamname);
ColdFusion.Tree.fireSelectionChangeEvent(_1f.tree.id,_21.formname);
};
ColdFusion.Tree.fireSelectionChangeEvent=function(id,_26){
ColdFusion.Log.info("tree.fireselectionchangeevent.fire","widget",[id]);
ColdFusion.Event.callBindHandlers(id,_26,"change");
};
ColdFusion.Tree.getObject=function(_27){
var _28={};
_28.id=_27.value;
if(_27.href&&_27.href!="null"){
_28.href=_27.href;
}
_28.target=_27.target;
_28.label=_27.label;
_28.display=_27.display;
_28.img=_27.img;
_28.imgOpen=_27.imgOpen;
_28.imgid=_27.imgid;
_28.spanid=_27.spanid;
_28.childrenfetched=_27.childrenfetched;
return _28;
};
ColdFusion.Tree.initializeTree=function(_29,_2a,_2b,_2c,_2d,_2e,_2f,_30,_31,_32,_33,_34){
var _35=new YAHOO.widget.TreeView(_29);
_35.subscribe("expand",ColdFusion.Tree.onExpand);
_35.subscribe("collapse",ColdFusion.Tree.onCollapse);
_35.subscribe("labelClick",ColdFusion.Tree.onLabelClick);
_35._cf_getAttribute=function(_36){
_36=_36.toUpperCase();
if(_36=="PATH"){
return _35._cf_path;
}else{
if(_36=="NODE"){
return _35._cf_node;
}else{
return null;
}
}
};
_35.onbinderror=_32;
ColdFusion.objectCache[_29]=_35;
var _37=new ColdFusion.Tree.AttributesCollection();
_37.cache=_2a;
_37.italic=_2b;
_37.bold=_2c;
_37.completepath=_2d;
_37.delimiter=_2f;
_37.appendkey=_2e;
_37.formname=_30;
_37.formparamname=_31;
_37.fontsize=_33;
_37.fontname=_34;
ColdFusion.objectCache[_29+"collection"]=_37;
ColdFusion.Log.info("tree.initializetree.success","widget",[_29]);
return _35;
};

/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
cfinitgrid=function(){
if(!ColdFusion.Grid){
ColdFusion.Grid={};
}
var $G=ColdFusion.Grid;
var $L=ColdFusion.Log;
$G.init=function(id,name,_1a4,_1a5,edit,_1a7,_1a8,_1a9,_1aa,_1ab,_1ac,_1ad,_1ae,_1af,_1b0,_1b1,_1b2,_1b3,_1b4,_1b5,_1b6,_1b7,_1b8,_1b9,_1ba,_1bb,_1bc,_1bd){
var grid;
var _1bf;
if(_1b2&&typeof (_1b2)!="undefined"){
_1bf=_1b2;
}else{
_1bf=new Ext.grid.RowSelectionModel({singleSelect:true});
}
var _1c0=new Ext.grid.ColumnModel(_1a9);
var _1c1={ds:_1aa,cm:_1c0,sm:_1bf,autoSizeColumns:_1a8,autoSizeHeaders:_1a8,stripeRows:_1ad};
if(_1bc!=null&&typeof _1bc!="undefined"){
_1c1.plugins=_1bc;
}
if(!_1ab||typeof (_1ab)=="undefined"){
_1ab=100*(_1a9.length-1);
}
var _1c2=ColdFusion.objectCache[id];
var _1c3=document.getElementById(_1c2.gridId);
if(_1c3!=null){
var _1c4=_1c3.style.cssText;
if(typeof _1c4=="undefined"){
_1c4="";
}
_1c4="width:"+_1ab+"px;"+_1c4;
_1c3.style.cssText=_1c4;
}
_1c1.width=_1ab;
if(_1a8===true){
_1c1.viewConfig={forceFit:true};
}else{
_1c1.autoExpandColumn=_1c0.getColumnId(0);
}
if(_1ac){
_1c1.height=_1ac;
}else{
_1c1.autoHeight=true;
var _1c5=".x-grid3-header {position: relative;}";
Ext.util.CSS.createStyleSheet(_1c5,"_cf_grid"+id);
}
if(_1b4&&typeof (_1b4)!="undefined"){
_1c1.view=new Ext.grid.GroupingView({forceFit:false,groupTextTpl:"{[values.text.indexOf(\"x-grid3-check-col\") > 0 ? (values.text.indexOf(\"x-grid3-check-col-on\") > 0 ? \"Yes\" : \"No\") : values.text]} ({[values.rs.length]} {[values.rs.length > 1 ? \"Items\" : \"Item\"]})"});
}
_1c1.title=_1b5;
_1c1.collapsible=_1b3;
if(_1b3&&_1b5==null){
_1c1.title="  ";
}
var _1c6=ColdFusion.objectCache[id];
_1c6.bindOnLoad=_1a7;
_1c6.dynamic=_1a5;
_1c6.styles=_1ae;
_1c6.grouping=_1b4;
_1c6.onLoadFunction=_1bb;
_1c1.renderTo=_1c6.gridId;
if(_1a5){
_1c1.bbar=new Ext.PagingToolbar({pageSize:_1af,store:_1aa,emptyMsg:"No topics to display"});
if(_1b9&&(_1b6||_1b7)){
var _1c7=_1c1.bbar;
if(_1b6){
_1c7.addButton({text:_1b6,handler:$G.insertRow,scope:_1c6});
_1c7.addButton({text:" save ",handler:$G.saveNewRecord,scope:_1c6});
_1c7.addButton({text:" cancel ",handler:$G.cancelNewRecord,scope:_1c6});
}
if(_1b7){
_1c7.addButton({text:_1b7,handler:$G.deleteRow,scope:_1c6});
}
}
}
if(edit&&!_1a5&&(_1b6||_1b7)){
var bbar=new Ext.Toolbar();
if(_1b6){
bbar.addButton({text:_1b6,xtype:"button",handler:$G.insertRow,scope:_1c6});
}
if(_1b7){
bbar.addButton({text:_1b7,handler:$G.deleteRow,scope:_1c6});
}
_1c1.bbar=bbar;
}
if(edit){
_1c1.clicksToEdit=1;
grid=new Ext.grid.EditorGridPanel(_1c1);
}else{
grid=new Ext.grid.GridPanel(_1c1);
}
_1aa.addListener("load",$G.Actions.onLoad,_1c6,{delay:50});
grid.view.colMenu.addListener("beforeshow",function(menu){
var _1ca=_1c0.getColumnCount();
for(var i=0;i<_1ca;i++){
if("CFGRIDROWINDEX"==_1c0.getDataIndex(i)){
menu.remove(menu.items["items"][i]);
break;
}
}
},this);
_1c6.grid=grid;
grid.render();
if(!_1a5){
_1aa.addListener("load",$G.Actions.onLoad,_1c6,{delay:50});
_1aa.load();
}
if(_1a5){
_1aa.addListener("load",$G.Actions.onLoad,_1c6,{delay:50});
_1aa._cf_errorHandler=_1ba;
_1aa.proxy._cf_actions=_1c6;
_1aa.load({params:{start:0,limit:_1af}});
}else{
$G.applyStyles(_1c6);
}
if(_1bd){
ColdFusion.Bind.register(_1bd,{actions:_1c6},$G.bindHandler,false);
}
$L.info("grid.init.created","widget",[id]);
_1c6.init(id,name,_1a4,_1b8,_1a5,edit,_1b9,_1ba,_1b1,_1af,_1b0,_1b4);
};
$G.applyStyles=function(_1cc){
if(_1cc.stylesApplied){
return;
}
Ext.util.CSS.createStyleSheet(_1cc.styles);
_1cc.stylesApplied=true;
};
$G.bindHandler=function(e,_1ce){
$G.refresh(_1ce.actions.id);
};
$G.bindHandler._cf_bindhandler=true;
$G.refresh=function(_1cf,_1d0){
var _1d1=ColdFusion.objectCache[_1cf];
if(_1d1&&$G.Actions.prototype.isPrototypeOf(_1d1)==true){
var _1d2=_1d1.grid.getStore();
if(_1d1.dynamic){
_1d1.editOldValue=null;
_1d1.selectedRow=-1;
if(_1d0){
_1d2.reload();
}else{
_1d2.reload({params:{start:0,limit:_1d1.pageSize}});
}
}
}else{
ColdFusion.handleError(null,"grid.refresh.notfound","widget",[_1cf],null,null,true);
return;
}
$L.info("grid.refresh.success","widget",[_1cf]);
};
$G.sort=function(_1d3,_1d4,_1d5){
var _1d6=ColdFusion.objectCache[_1d3];
if(!_1d6){
ColdFusion.handleError(null,"grid.sort.notfound","widget",[_1d3],null,null,true);
return;
}
_1d4=_1d4.toUpperCase();
var _1d7=-1;
var _1d8=_1d6.grid.getColumnModel().config;
for(var i=0;i<_1d8.length-1;i++){
if(_1d4==_1d8[i].colName){
_1d7=i;
break;
}
}
if(_1d7==-1){
ColdFusion.handleError(null,"grid.sort.colnotfound","widget",[_1d4,_1d3],null,null,true);
return;
}
if(!_1d5){
_1d5="ASC";
}
_1d5=_1d5.toUpperCase();
if(_1d5!="ASC"&&_1d5!="DESC"){
ColdFusion.handleError(null,"grid.sort.invalidsortdir","widget",[_1d5,_1d3],null,null,true);
return;
}
var _1da=_1d6.grid.getStore();
_1da.sort(_1d4,_1d5);
};
$G.getGridObject=function(_1db){
if(!_1db){
ColdFusion.handleError(null,"grid.getgridobject.missinggridname","widget",null,null,null,true);
return;
}
var _1dc=ColdFusion.objectCache[_1db];
if(_1dc==null||$G.Actions.prototype.isPrototypeOf(_1dc)==false){
ColdFusion.handleError(null,"grid.getgridobject.notfound","widget",[_1db],null,null,true);
return;
}
return _1dc.grid;
};
$G.Actions=function(_1dd){
this.gridId=_1dd;
this.init=$G.Actions.init;
this.onChangeHandler=$G.Actions.onChangeHandler;
this.selectionChangeEvent=new ColdFusion.Event.CustomEvent("cfGridSelectionChange",_1dd);
this.fireSelectionChangeEvent=$G.fireSelectionChangeEvent;
this._cf_getAttribute=$G.Actions._cf_getAttribute;
this._cf_register=$G.Actions._cf_register;
};
$G.Actions.init=function(id,_1df,_1e0,_1e1,_1e2,edit,_1e4,_1e5,_1e6,_1e7,_1e8,_1e9){
this.id=id;
this.gridName=_1df;
this.formId=_1e0;
this.form=document.getElementById(_1e0);
this.cellClickInfo=_1e1;
this.edit=edit;
this.onChangeFunction=_1e4;
this.onErrorFunction=_1e5;
this.preservePageOnSort=_1e6;
this.pageSize=_1e7;
this.selectedRow=-1;
this.selectOnLoad=_1e8;
this.grouping=_1e9;
this.grid.addListener("cellclick",$G.cellClick,this,true);
this.editField=document.createElement("input");
this.editField.setAttribute("name",_1df);
this.editField.setAttribute("type","hidden");
this.form.appendChild(this.editField);
if(edit){
if(!_1e2){
var _1ea=this.grid.getColumnModel().config;
this.editFieldPrefix="__CFGRID__EDIT__=";
this.editFieldPrefix+=_1ea.length-1+$G.Actions.fieldSep;
for(var i=0;i<_1ea.length-1;i++){
if(i>0){
this.editFieldPrefix+=$G.Actions.fieldSep;
}
this.editFieldPrefix+=_1ea[i].colName;
this.editFieldPrefix+=$G.Actions.valueSep;
if(_1ea[i].editor){
this.editFieldPrefix+="Y";
}else{
this.editFieldPrefix+="N";
}
}
this.editFieldPrefix+=$G.Actions.fieldSep;
}
this.editFieldState=[];
this.editFieldState.length=this.grid.getStore().getTotalCount();
$G.Actions.computeEditField(this);
this.insertInProgress=false;
this.insertEvent=null;
this.grid.addListener("beforeedit",$G.Actions.beforeEdit,this,true);
this.grid.addListener("afteredit",$G.Actions.afterEdit,this,true);
}
if(_1e2){
this.grid.getStore().addListener("beforeload",$G.Actions.beforeLoad,this,true);
}
this.grid.getSelectionModel().addListener("rowselect",$G.rowSelect,this,true);
this.grid.getSelectionModel().addListener("beforerowselect",$G.beforeRowSelect,this,true);
if(_1e8&&!_1e9){
this.grid.getSelectionModel().selectFirstRow();
}
};
$G.Actions.beforeLoad=function(_1ec,_1ed){
var _1ee=_1ec.getSortState();
var _1ef=((typeof this.sortCol!="undefined"&&_1ee.field!=this.sortCol)||(typeof this.direction!="undefined"&&_1ee.direction!=this.sortDir));
if(_1ef&&!this.preservePageOnSort){
_1ed.params.start=0;
}
this.sortCol=_1ee.field;
this.sortDir=_1ee.direction;
};
$G.Actions.onLoad=function(){
this.editOldValue=null;
this.selectedRow=-1;
this.insertInProgress=false;
var _1f0=0;
if((this.bindOnLoad||!this.dynamic)&&this.selectOnLoad&&!this.grouping){
this.grid.getSelectionModel().selectRow(_1f0,false);
}
if(!this.gridRendered&&this.onLoadFunction&&typeof this.onLoadFunction=="function"){
this.gridRendered=true;
this.onLoadFunction.call(null,this.grid);
}
};
$G.Actions._cf_getAttribute=function(_1f1){
_1f1=_1f1.toUpperCase();
var _1f2=this.selectedRow;
var _1f3=null;
if(_1f2!=0&&(!_1f2||_1f2==-1)){
return _1f3;
}
var ds=this.grid.getStore();
var _1f5=(this.dynamic)?ds.getAt(_1f2):ds.getById(_1f2);
_1f3=_1f5.get(_1f1);
return _1f3;
};
$G.Actions._cf_register=function(_1f6,_1f7,_1f8){
this.selectionChangeEvent.subscribe(_1f7,_1f8);
};
$G.rowSelect=function(_1f9,row){
var _1fb="";
var _1fc=_1f9.getSelected();
var _1fd=_1fc.get("CFGRIDROWINDEX")||row;
if(this.selectedRow!=_1fd){
this.selectedRow=_1fd;
var _1fe=true;
for(col in _1fc.data){
if(col=="CFGRIDROWINDEX"){
continue;
}
if(!_1fe){
_1fb+="; ";
}
_1fb+="__CFGRID__COLUMN__="+col+"; ";
_1fb+="__CFGRID__DATA__="+_1fc.data[col];
_1fe=false;
}
this.fireSelectionChangeEvent();
}
this.editField.setAttribute("value",_1fb);
};
$G.beforeRowSelect=function(_1ff,row){
var ds=this.grid.getStore();
var _202=ds.getAt(row);
return !$G.isNullRow(_202.data);
};
$G.isNullRow=function(data){
var _204=true;
for(col in data){
if(data[col]!=null){
_204=false;
break;
}
}
return _204;
};
$G.fireSelectionChangeEvent=function(){
$L.info("grid.fireselectionchangeevent.fire","widget",[this.id]);
this.selectionChangeEvent.fire();
};
$G.cellClick=function(grid,_206,_207){
var _208=this.cellClickInfo.colInfo[_207];
if(_208){
var _209=grid.getSelectionModel().getSelected();
var url=_209.get(_208.href.toUpperCase());
if(!url){
url=_208.href;
}
var _20b=_208.hrefKey;
var _20c=_208.target;
var _20d=this.appendKey;
if(this.cellClickInfo.appendKey){
var _20e;
if(_20b||_20b==0){
var _20f=grid.getStore().getAt(_206);
var _210=grid.getColumnModel().config[_20b].dataIndex;
_20e=_20f.get(_210);
}else{
var _211=this.grid.getColumnModel().config;
_20e=_209.get(_211[0].dataIndex);
for(var i=1;i<_211.length-1;i++){
_20e+=","+_209.get(_211[i].dataIndex);
}
}
if(url.indexOf("?")!=-1){
url+="&CFGRIDKEY="+_20e;
}else{
url+="?CFGRIDKEY="+_20e;
}
}
if(_20c){
_20c=_20c.toLowerCase();
if(_20c=="_top"){
_20c="top";
}else{
if(_20c=="_parent"){
_20c="parent";
}else{
if(_20c=="_self"){
_20c=window.name;
}else{
if(_20c=="_blank"){
window.open(encodeURI(url));
return;
}
}
}
}
if(!parent[_20c]){
ColdFusion.handleError(null,"grid.cellclick.targetnotfound","widget",[_20c]);
return;
}
parent[_20c].location=encodeURI(url);
}else{
window.location=encodeURI(url);
}
}
};
$G.insertRow=function(){
if(this.insertInProgress){
ColdFusion.handleError(null,"Multiple row insert is not supported","Grid",[this.gridId],null,null,true);
return;
}
var _213={action:"I",values:[]};
var _214=this.grid.getColumnModel();
var _215=this.grid.getStore();
var _216={};
for(var i=0;i<_214.getColumnCount()-1;i++){
var _218="";
var _219=_214.getCellEditor(i,0);
if(_219&&Ext.form.Checkbox.prototype.isPrototypeOf(_219.field)){
_218=false;
}
_213.values[i]=[_218,_218];
_216[_214.getDataIndex(i)]=_218;
}
_216["CFGRIDROWINDEX"]=_215.getCount()+1;
_215.add(new Ext.data.Record(_216));
if(this.dynamic==true){
this.selectedRow=_215.getCount();
}
this.editFieldState.push(_213);
this.insertInProgress=true;
$G.Actions.computeEditField(this);
};
$G.saveNewRecord=function(){
if(!this.insertInProgress){
return;
}
var _21a=this.selectedRow;
var _21b=this.insertEvent;
if(_21a==-1){
return;
}
if(this.onChangeFunction){
this.onChangeHandler("I",_21a-1,_21b,$G.insertRowCallback);
}else{
if(this.dynamic==false){
var _21c=this.grid.getStore();
var _21d=_21b.record;
var _21e=new Array(1);
_21e[0]=_21d;
var _21f=_21c.getAt(this.selectedRow-1);
_21c.remove(_21f);
_21c.add(_21e);
}
}
this.insertInProgress=false;
this.insertEvent=null;
};
$G.cancelNewRecord=function(){
if(!this.insertInProgress){
return;
}
this.editFieldState.pop();
var _220=this.grid.getStore();
var _221=_220.getAt(this.selectedRow-1);
_220.remove(_221);
this.insertInProgress=false;
this.insertEvent=null;
this.selectedRow=this.selectedrow-1;
};
$G.deleteRow=function(){
var _222=this.selectedRow;
if(_222==-1){
return;
}
if(this.onChangeFunction){
this.onChangeHandler("D",_222,null,$G.deleteRowCallback);
}else{
if(!this.dynamic){
var _223=this.editFieldState[_222-1];
if(_223){
_223.action="D";
}else{
_223=$G.Actions.initEditState(this,"D",_222);
}
$G.Actions.computeEditField(this);
this.grid.stopEditing();
this.selectedRow=-1;
var _224=this.grid.getStore();
_224.remove(this.grid.getSelectionModel().getSelected());
}
}
};
$G.deleteRowCallback=function(_225,_226){
var _227=_226._cf_grid.getStore();
var _228=_226._cf_grid.actions;
var _226=_227.lastOptions.params;
var key="start";
if(_227.getCount()==1){
if(_226.start>=_226.limit){
_226.start=_226.start-_226.limit;
}
_227.reload(_226);
}else{
_227.reload();
}
};
$G.insertRowCallback=function(_22a,_22b){
var _22c=_22b._cf_grid.getStore();
var _22d=_22b._cf_grid.actions;
_22c.reload();
};
$G.Actions.beforeEdit=function(_22e){
if($G.isNullRow(_22e.record.data)){
return false;
}
this.editColumn=_22e.column;
this.editOldValue=_22e.value;
};
$G.Actions.afterEdit=function(_22f){
var _230=_22f.value;
if(this.insertInProgress==false&&this.onChangeFunction){
this.onChangeHandler("U",this.selectedRow,_22f);
}else{
if(!this.dynamic){
var _231=this.editFieldState[this.selectedRow-1];
if(_231){
_231.values[_22f.column][1]=_230;
}else{
_231=$G.Actions.initEditState(this,"U",this.selectedRow);
var _232=this.editOldValue+"";
_231.values[_22f.column][0]=_232;
_231.values[_22f.column][1]=_230;
}
$G.Actions.computeEditField(this);
}
}
this.editOldValue=null;
this.fireSelectionChangeEvent();
};
$G.Actions.onChangeHandler=function(_233,_234,_235,_236){
var _237={};
var _238={};
var data=_235?_235.record.data:this.grid.getStore().getAt(_234).data;
for(col in data){
_237[col]=data[col];
}
if(_233=="U"){
_237[_235.field]=_235.originalValue;
_238[_235.field]=_235.value;
}
this.onChangeFunction(_233,_237,_238,_236,this.grid,this.onErrorFunction);
};
$G.Actions.initEditState=function(_23a,_23b,_23c){
var _23d={action:_23b,values:[]};
var _23e=_23a.grid.getColumnModel();
var _23f=_23e.getColumnCount()-1;
var _240=_23a.grid.getStore().getById(_23c);
_23d.values.length=_23f;
for(var i=0;i<_23f;i++){
var _242=_240.get(_23e.getDataIndex(i));
_23d.values[i]=[_242,_242];
}
_23a.editFieldState[_23c-1]=_23d;
return _23d;
};
$G.Actions.fieldSep=eval("'\\u0001'");
$G.Actions.valueSep=eval("'\\u0002'");
$G.Actions.nullValue=eval("'\\u0003'");
$G.Actions.computeEditField=function(_243){
var _244=_243.editFieldPrefix;
var _245=_243.editFieldState;
var _246=0;
var _247="";
for(var i=0;i<_245.length;i++){
var _249=_245[i];
if(_249){
_246++;
_247+=$G.Actions.fieldSep;
_247+=_249.action+$G.Actions.valueSep;
var _24a=_249.values;
for(var j=0;j<_24a.length;j++){
if(j>0){
_247+=$G.Actions.valueSep;
}
var _24c=($G.Actions.isNull(_24a[j][0]))?$G.Actions.nullValue:_24a[j][0];
var _24d=($G.Actions.isNull(_24a[j][1]))?$G.Actions.nullValue:_24a[j][1];
_247+=_24d;
if(_249.action=="U"){
_247+=$G.Actions.valueSep+_24c;
}
}
}
}
_244+=_246+_247;
_243.editField.setAttribute("value",_244);
};
$G.Actions.isNull=function(val){
var ret=(val==null||typeof (val)=="undefined"||val.length==0);
return ret;
};
$G.loadData=function(data,_251){
_251._cf_gridDataProxy.loadResponse(data,_251);
var _252=ColdFusion.objectCache[_251._cf_gridname];
$G.applyStyles(_252);
$L.info("grid.loaddata.loaded","widget",[_251._cf_gridname]);
if($G.Actions.isNull(data.TOTALROWCOUNT)==false&&data.TOTALROWCOUNT==0){
_252.fireSelectionChangeEvent();
}
};
$G.printObject=function(obj){
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
$G.formatBoolean=function(v,p,_257){
return "<div class=\"x-grid3-check-col"+(v?"-on":"")+" x-grid3-cc-"+this.id+"\">&#160;</div>";
};
$G.formatDate=function(_258,p,_25a){
if(_258&&!_258.dateFormat){
_258=new Date(_258);
}
var _25b=this.dateFormat?this.dateFormat:"m/d/y";
return _258?_258.dateFormat(_25b):"";
};
$G.ExtProxy=function(_25c,_25d){
this.api={load:true,create:undefined,save:undefined,destroy:undefined};
$G.ExtProxy.superclass.constructor.call(this);
this.bindHandler=_25c;
this.errorHandler=_25d;
};
Ext.extend($G.ExtProxy,Ext.data.DataProxy,{_cf_firstLoad:true,load:function(_25e,_25f,_260,_261,arg){
if(!this._cf_actions.bindOnLoad){
var _263={"_cf_reader":_25f,"_cf_grid_errorhandler":this.errorHandler,"_cf_scope":_261,"_cf_gridDataProxy":this,"_cf_gridname":this._cf_gridName,"_cf_arg":arg,"_cf_callback":_260,"ignoreData":true};
var data=[];
for(i=0;i<_25e.limit;i++){
data.push(new Ext.data.Record({}));
}
this.loadResponse(data,_263);
this._cf_actions.bindOnLoad=true;
}else{
var _265=(_25e.start/_25e.limit)+1;
if(!_25e.sort){
_25e.sort="";
}
if(!_25e.dir){
_25e.dir="";
}
this.bindHandler(this,_265,_25e.limit,_25e.sort,_25e.dir,this.errorHandler,_260,_261,arg,_25f);
}
},loadResponse:function(data,_267){
var _268=null;
if(_267.ignoreData){
_268={success:true,records:data,totalRecords:data.length};
}else{
var _269;
if(!data){
_269="grid.extproxy.loadresponse.emptyresponse";
}else{
if(!data.TOTALROWCOUNT&&data.TOTALROWCOUNT!=0){
_269="grid.extproxy.loadresponse.totalrowcountmissing";
}else{
if(!ColdFusion.Util.isInteger(data.TOTALROWCOUNT)){
_269="grid.extproxy.loadresponse.totalrowcountinvalid";
}else{
if(!data.QUERY){
_269="grid.extproxy.loadresponse.querymissing";
}else{
if(!data.QUERY.COLUMNS||!ColdFusion.Util.isArray(data.QUERY.COLUMNS)||!data.QUERY.DATA||!ColdFusion.Util.isArray(data.QUERY.DATA)||(data.QUERY.DATA.length>0&&!ColdFusion.Util.isArray(data.QUERY.DATA[0]))){
_269="grid.extproxy.loadresponse.queryinvalid";
}
}
}
}
}
if(_269){
ColdFusion.handleError(_267._cf_grid_errorHandler,_269,"widget");
this.fireEvent("loadexception",this,_267,data,e);
return;
}
_268=_267._cf_reader.readRecords(data);
}
this.fireEvent("load",this,_267,_267._cf_arg);
_267._cf_callback.call(_267._cf_scope,_268,_267._cf_arg,true);
},update:function(_26a){
},updateResponse:function(_26b){
}});
$G.ExtReader=function(_26c){
this.recordType=Ext.data.Record.create(_26c);
};
Ext.extend($G.ExtReader,Ext.data.DataReader,{readRecords:function(_26d){
var _26e=[];
var cols=_26d.QUERY.COLUMNS;
var data=_26d.QUERY.DATA;
for(var i=0;i<data.length;i++){
var _272={};
for(var j=0;j<cols.length;j++){
_272[cols[j]]=data[i][j];
}
_26e.push(new Ext.data.Record(_272));
}
return {success:true,records:_26e,totalRecords:_26d.TOTALROWCOUNT};
}});
$G.CheckColumn=function(_274){
Ext.apply(this,_274);
if(!this.id){
this.id=Ext.id();
}
this.renderer=this.renderer.createDelegate(this);
};
$G.CheckColumn.prototype={init:function(grid){
this.grid=grid;
this.count=0;
this.columnIndex=this.grid.getColumnModel().findColumnIndex(this.dataIndex);
this.grid.on("render",function(){
var view=this.grid.getView();
view.mainBody.on("mousedown",this.onMouseDown,this);
},this);
},onMouseDown:function(e,t){
if(t.className&&t.className.indexOf("x-grid3-cc-"+this.id)!=-1){
e.stopEvent();
var _279=this.grid.getView().findRowIndex(t);
var _27a=this.grid.store.getAt(_279);
var _27b=ColdFusion.clone(_27a);
_27b.data=ColdFusion.clone(_27a.data);
this.grid.getSelectionModel().selectRow(_279);
this.grid.getSelectionModel().fireEvent("rowselect",this.grid.getSelectionModel(),_279);
this.grid.fireEvent("beforeedit",{grid:this.grid,row:_279,record:_27a,column:this.columnIndex,field:this.dataIndex,value:_27a.data[this.dataIndex]});
_27a.set(this.dataIndex,this.toggleBooleanValue(_27a.data[this.dataIndex]));
this.grid.fireEvent("afteredit",{grid:this.grid,row:_279,record:_27b,column:this.columnIndex,field:this.dataIndex,value:_27a.data[this.dataIndex],originalValue:_27b.data[this.dataIndex]});
}
},toggleBooleanValue:function(v){
v=typeof v=="undefined"?"N":(typeof v=="string"?v.toUpperCase():v);
if(v==="Y"){
return "N";
}
if(v==="N"){
return "Y";
}
if(v===true){
return false;
}
if(v===false){
return true;
}
if(v===0){
return 1;
}
if(v===1){
return 0;
}
if(v==="YES"){
return "NO";
}
if(v==="NO"){
return "YES";
}
if(v==="T"){
return "F";
}
if(v==="F"){
return "T";
}
return "Y";
},renderer:function(v,p,_27f){
p.css+=" x-grid3-check-col-td";
var _280=false;
v=typeof v=="string"?v.toUpperCase():v;
if(typeof v!="undefined"&&(v==1||v=="1"||v=="Y"||v=="YES"||v===true||v==="T")){
_280=true;
}
return "<div class=\"x-grid3-check-col"+(_280==true?"-on":"")+" x-grid3-cc-"+this.id+"\">&#160;</div>";
}};
};
cfinitgrid();

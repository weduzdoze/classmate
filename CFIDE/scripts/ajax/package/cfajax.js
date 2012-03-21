/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
function cfinit(){
if(!window.ColdFusion){
ColdFusion={};
var $C=ColdFusion;
if(!$C.Ajax){
$C.Ajax={};
}
var $A=$C.Ajax;
if(!$C.AjaxProxy){
$C.AjaxProxy={};
}
var $X=$C.AjaxProxy;
if(!$C.Bind){
$C.Bind={};
}
var $B=$C.Bind;
if(!$C.Event){
$C.Event={};
}
var $E=$C.Event;
if(!$C.Log){
$C.Log={};
}
var $L=$C.Log;
if(!$C.Util){
$C.Util={};
}
var $U=$C.Util;
if(!$C.DOM){
$C.DOM={};
}
var $D=$C.DOM;
if(!$C.Spry){
$C.Spry={};
}
var $S=$C.Spry;
if(!$C.Pod){
$C.Pod={};
}
var $P=$C.Pod;
if(!$C.objectCache){
$C.objectCache={};
}
if(!$C.required){
$C.required={};
}
if(!$C.importedTags){
$C.importedTags=[];
}
if(!$C.requestCounter){
$C.requestCounter=0;
}
if(!$C.bindHandlerCache){
$C.bindHandlerCache={};
}
window._cf_loadingtexthtml="<div style=\"text-align: center;\">"+window._cf_loadingtexthtml+"&nbsp;"+CFMessage["loading"]+"</div>";
$C.globalErrorHandler=function(_3f4,_3f5){
if($L.isAvailable){
$L.error(_3f4,_3f5);
}
if($C.userGlobalErrorHandler){
$C.userGlobalErrorHandler(_3f4);
}
if(!$L.isAvailable&&!$C.userGlobalErrorHandler){
alert(_3f4+CFMessage["globalErrorHandler.alert"]);
}
};
$C.handleError=function(_3f6,_3f7,_3f8,_3f9,_3fa,_3fb,_3fc,_3fd){
var msg=$L.format(_3f7,_3f9);
if(_3f6){
$L.error(msg,"http");
if(!_3fa){
_3fa=-1;
}
if(!_3fb){
_3fb=msg;
}
_3f6(_3fa,_3fb,_3fd);
}else{
if(_3fc){
$L.error(msg,"http");
throw msg;
}else{
$C.globalErrorHandler(msg,_3f8);
}
}
};
$C.setGlobalErrorHandler=function(_3ff){
$C.userGlobalErrorHandler=_3ff;
};
$A.createXMLHttpRequest=function(){
try{
return new XMLHttpRequest();
}
catch(e){
}
var _400=["Microsoft.XMLHTTP","MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"];
for(var i=0;i<_400.length;i++){
try{
return new ActiveXObject(_400[i]);
}
catch(e){
}
}
return false;
};
$A.isRequestError=function(req){
return ((req.status!=0&&req.status!=200)||req.getResponseHeader("server-error"));
};
$A.sendMessage=function(url,_404,_405,_406,_407,_408,_409){
var req=$A.createXMLHttpRequest();
if(!_404){
_404="GET";
}
if(_406&&_407){
req.onreadystatechange=function(){
$A.callback(req,_407,_408);
};
}
if(_405){
_405+="&_cf_nodebug=true&_cf_nocache=true";
}else{
_405="_cf_nodebug=true&_cf_nocache=true";
}
if(window._cf_clientid){
_405+="&_cf_clientid="+_cf_clientid;
}
if(_404=="GET"){
if(_405){
_405+="&_cf_rc="+($C.requestCounter++);
if(url.indexOf("?")==-1){
url+="?"+_405;
}else{
url+="&"+_405;
}
}
$L.info("ajax.sendmessage.get","http",[url]);
req.open(_404,url,_406);
req.send(null);
}else{
$L.info("ajax.sendmessage.post","http",[url,_405]);
req.open(_404,url,_406);
req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(_405){
req.send(_405);
}else{
req.send(null);
}
}
if(!_406){
while(req.readyState!=4){
}
if($A.isRequestError(req)){
$C.handleError(null,"ajax.sendmessage.error","http",[req.status,req.statusText],req.status,req.statusText,_409);
}else{
return req;
}
}
};
$A.callback=function(req,_40c,_40d){
if(req.readyState!=4){
return;
}
_40c(req,_40d);
};
$A.submitForm=function(_40e,url,_410,_411,_412,_413){
var _414=$C.getFormQueryString(_40e);
if(_414==-1){
$C.handleError(_411,"ajax.submitform.formnotfound","http",[_40e],-1,null,true);
return;
}
if(!_412){
_412="POST";
}
_413=!(_413===false);
var _415=function(req){
$A.submitForm.callback(req,_40e,_410,_411);
};
$L.info("ajax.submitform.submitting","http",[_40e]);
var _417=$A.sendMessage(url,_412,_414,_413,_415);
if(!_413){
$L.info("ajax.submitform.success","http",[_40e]);
return _417.responseText;
}
};
$A.submitForm.callback=function(req,_419,_41a,_41b){
if($A.isRequestError(req)){
$C.handleError(_41b,"ajax.submitform.error","http",[req.status,_419,req.statusText],req.status,req.statusText);
}else{
$L.info("ajax.submitform.success","http",[_419]);
if(_41a){
_41a(req.responseText);
}
}
};
$C.empty=function(){
};
$C.setSubmitClicked=function(_41c,_41d){
var el=$D.getElement(_41d,_41c);
el.cfinputbutton=true;
$C.setClickedProperty=function(){
el.clicked=true;
};
$E.addListener(el,"click",$C.setClickedProperty);
};
$C.getFormQueryString=function(_41f,_420){
var _421;
if(typeof _41f=="string"){
_421=(document.getElementById(_41f)||document.forms[_41f]);
}else{
if(typeof _41f=="object"){
_421=_41f;
}
}
if(!_421||null==_421.elements){
return -1;
}
var _422,elementName,elementValue,elementDisabled;
var _423=false;
var _424=(_420)?{}:"";
for(var i=0;i<_421.elements.length;i++){
_422=_421.elements[i];
elementDisabled=_422.disabled;
elementName=_422.name;
elementValue=_422.value;
if(!elementDisabled&&elementName){
switch(_422.type){
case "select-one":
case "select-multiple":
for(var j=0;j<_422.options.length;j++){
if(_422.options[j].selected){
if(window.ActiveXObject){
_424=$C.getFormQueryString.processFormData(_424,_420,elementName,_422.options[j].attributes["value"].specified?_422.options[j].value:_422.options[j].text);
}else{
_424=$C.getFormQueryString.processFormData(_424,_420,elementName,_422.options[j].hasAttribute("value")?_422.options[j].value:_422.options[j].text);
}
}
}
break;
case "radio":
case "checkbox":
if(_422.checked){
_424=$C.getFormQueryString.processFormData(_424,_420,elementName,elementValue);
}
break;
case "file":
case undefined:
case "reset":
break;
case "button":
_424=$C.getFormQueryString.processFormData(_424,_420,elementName,elementValue);
break;
case "submit":
if(_422.cfinputbutton){
if(_423==false&&_422.clicked){
_424=$C.getFormQueryString.processFormData(_424,_420,elementName,elementValue);
_423=true;
}
}else{
_424=$C.getFormQueryString.processFormData(_424,_420,elementName,elementValue);
}
break;
case "textarea":
var _427;
if(window.FCKeditorAPI&&(_427=$C.objectCache[elementName])&&_427.richtextid){
var _428=FCKeditorAPI.GetInstance(_427.richtextid);
if(_428){
elementValue=_428.GetXHTML();
}
}
_424=$C.getFormQueryString.processFormData(_424,_420,elementName,elementValue);
break;
default:
_424=$C.getFormQueryString.processFormData(_424,_420,elementName,elementValue);
break;
}
}
}
if(!_420){
_424=_424.substr(0,_424.length-1);
}
return _424;
};
$C.getFormQueryString.processFormData=function(_429,_42a,_42b,_42c){
if(_42a){
if(_429[_42b]){
_429[_42b]+=","+_42c;
}else{
_429[_42b]=_42c;
}
}else{
_429+=encodeURIComponent(_42b)+"="+encodeURIComponent(_42c)+"&";
}
return _429;
};
$A.importTag=function(_42d){
$C.importedTags.push(_42d);
};
$A.checkImportedTag=function(_42e){
var _42f=false;
for(var i=0;i<$C.importedTags.length;i++){
if($C.importedTags[i]==_42e){
_42f=true;
break;
}
}
if(!_42f){
$C.handleError(null,"ajax.checkimportedtag.error","widget",[_42e]);
}
};
$C.getElementValue=function(_431,_432,_433){
if(!_431){
$C.handleError(null,"getelementvalue.noelementname","bind",null,null,null,true);
return;
}
if(!_433){
_433="value";
}
var _434=$B.getBindElementValue(_431,_432,_433);
if(typeof (_434)=="undefined"){
_434=null;
}
if(_434==null){
$C.handleError(null,"getelementvalue.elnotfound","bind",[_431,_433],null,null,true);
return;
}
return _434;
};
$B.getBindElementValue=function(_435,_436,_437,_438,_439){
var _43a="";
if(window[_435]){
var _43b=eval(_435);
if(_43b&&_43b._cf_getAttribute){
_43a=_43b._cf_getAttribute(_437);
return _43a;
}
}
var _43c=$C.objectCache[_435];
if(_43c&&_43c._cf_getAttribute){
_43a=_43c._cf_getAttribute(_437);
return _43a;
}
var el=$D.getElement(_435,_436);
var _43e=(el&&((!el.length&&el.length!=0)||(el.length&&el.length>0)||el.tagName=="SELECT"));
if(!_43e&&!_439){
$C.handleError(null,"bind.getbindelementvalue.elnotfound","bind",[_435]);
return null;
}
if(el.tagName!="SELECT"){
if(el.length>1){
var _43f=true;
for(var i=0;i<el.length;i++){
var _441=(el[i].getAttribute("type")=="radio"||el[i].getAttribute("type")=="checkbox");
if(!_441||(_441&&el[i].checked)){
if(!_43f){
_43a+=",";
}
_43a+=$B.getBindElementValue.extract(el[i],_437);
_43f=false;
}
}
}else{
_43a=$B.getBindElementValue.extract(el,_437);
}
}else{
var _43f=true;
for(var i=0;i<el.options.length;i++){
if(el.options[i].selected){
if(!_43f){
_43a+=",";
}
_43a+=$B.getBindElementValue.extract(el.options[i],_437);
_43f=false;
}
}
}
if(typeof (_43a)=="object"){
$C.handleError(null,"bind.getbindelementvalue.simplevalrequired","bind",[_435,_437]);
return null;
}
if(_438&&$C.required[_435]&&_43a.length==0){
return null;
}
return _43a;
};
$B.getBindElementValue.extract=function(el,_443){
var _444=el[_443];
if((_444==null||typeof (_444)=="undefined")&&el.getAttribute){
_444=el.getAttribute(_443);
}
return _444;
};
$L.init=function(){
if(window.YAHOO&&YAHOO.widget&&YAHOO.widget.Logger){
YAHOO.widget.Logger.categories=[CFMessage["debug"],CFMessage["info"],CFMessage["error"],CFMessage["window"]];
YAHOO.widget.LogReader.prototype.formatMsg=function(_445){
var _446=_445.category;
return "<p>"+"<span class='"+_446+"'>"+_446+"</span>:<i>"+_445.source+"</i>: "+_445.msg+"</p>";
};
var _447=new YAHOO.widget.LogReader(null,{width:"30em",fontSize:"100%"});
_447.setTitle(CFMessage["log.title"]||"ColdFusion AJAX Logger");
_447._btnCollapse.value=CFMessage["log.collapse"]||"Collapse";
_447._btnPause.value=CFMessage["log.pause"]||"Pause";
_447._btnClear.value=CFMessage["log.clear"]||"Clear";
$L.isAvailable=true;
}
};
$L.log=function(_448,_449,_44a,_44b){
if(!$L.isAvailable){
return;
}
if(!_44a){
_44a="global";
}
_44a=CFMessage[_44a]||_44a;
_449=CFMessage[_449]||_449;
_448=$L.format(_448,_44b);
YAHOO.log(_448,_449,_44a);
};
$L.format=function(code,_44d){
var msg=CFMessage[code]||code;
if(_44d){
for(i=0;i<_44d.length;i++){
if(!_44d[i].length){
_44d[i]="";
}
var _44f="{"+i+"}";
msg=msg.replace(_44f,_44d[i]);
}
}
return msg;
};
$L.debug=function(_450,_451,_452){
$L.log(_450,"debug",_451,_452);
};
$L.info=function(_453,_454,_455){
$L.log(_453,"info",_454,_455);
};
$L.error=function(_456,_457,_458){
$L.log(_456,"error",_457,_458);
};
$L.dump=function(_459,_45a){
if($L.isAvailable){
var dump=(/string|number|undefined|boolean/.test(typeof (_459))||_459==null)?_459:recurse(_459,typeof _459,true);
$L.debug(dump,_45a);
}
};
$X.invoke=function(_45c,_45d,_45e,_45f){
var _460="method="+_45d;
var _461=_45c.returnFormat||"json";
_460+="&returnFormat="+_461;
if(_45c.queryFormat){
_460+="&queryFormat="+_45c.queryFormat;
}
if(_45c.formId){
var _462=$C.getFormQueryString(_45c.formId,true);
if(_45e!=null){
for(prop in _462){
_45e[prop]=_462[prop];
}
}else{
_45e=_462;
}
_45c.formId=null;
}
var _463="";
if(_45e!=null){
_463=$X.JSON.encode(_45e);
_460+="&argumentCollection="+encodeURIComponent(_463);
}
$L.info("ajaxproxy.invoke.invoking","http",[_45c.cfcPath,_45d,_463]);
if(_45c.callHandler){
_45c.callHandler.call(null,_45c.callHandlerParams,_45c.cfcPath,_460);
return;
}
var _464;
if(_45c.async){
_464=function(req){
$X.callback(req,_45c,_45f);
};
}
var req=$A.sendMessage(_45c.cfcPath,_45c.httpMethod,_460,_45c.async,_464,null,true);
if(!_45c.async){
return $X.processResponse(req,_45c);
}
};
$X.callback=function(req,_468,_469){
if($A.isRequestError(req)){
$C.handleError(_468.errorHandler,"ajaxproxy.invoke.error","http",[req.status,_468.cfcPath,req.statusText],req.status,req.statusText,false,_469);
}else{
if(_468.callbackHandler){
var _46a=$X.processResponse(req,_468);
_468.callbackHandler(_46a,_469);
}
}
};
$X.processResponse=function(req,_46c){
var _46d=true;
for(var i=0;i<req.responseText.length;i++){
var c=req.responseText.charAt(i);
_46d=(c==" "||c=="\n"||c=="\t"||c=="\r");
if(!_46d){
break;
}
}
var _470=(req.responseXML&&req.responseXML.childNodes.length>0);
var _471=_470?"[XML Document]":req.responseText;
$L.info("ajaxproxy.invoke.response","http",[_471]);
var _472;
var _473=_46c.returnFormat||"json";
if(_473=="json"){
_472=_46d?null:$X.JSON.decode(req.responseText);
}else{
_472=_470?req.responseXML:(_46d?null:req.responseText);
}
return _472;
};
$X.init=function(_474,_475){
var _476=_475.split(".");
var ns=self;
for(i=0;i<_476.length-1;i++){
if(_476[i].length){
ns[_476[i]]=ns[_476[i]]||{};
ns=ns[_476[i]];
}
}
var _478=_476[_476.length-1];
if(ns[_478]){
return ns[_478];
}
ns[_478]=function(){
this.httpMethod="GET";
this.async=false;
this.callbackHandler=null;
this.errorHandler=null;
this.formId=null;
};
ns[_478].prototype.cfcPath=_474;
ns[_478].prototype.setHTTPMethod=function(_479){
if(_479){
_479=_479.toUpperCase();
}
if(_479!="GET"&&_479!="POST"){
$C.handleError(null,"ajaxproxy.sethttpmethod.invalidmethod","http",[_479],null,null,true);
}
this.httpMethod=_479;
};
ns[_478].prototype.setSyncMode=function(){
this.async=false;
};
ns[_478].prototype.setAsyncMode=function(){
this.async=true;
};
ns[_478].prototype.setCallbackHandler=function(fn){
this.callbackHandler=fn;
this.setAsyncMode();
};
ns[_478].prototype.setErrorHandler=function(fn){
this.errorHandler=fn;
this.setAsyncMode();
};
ns[_478].prototype.setForm=function(fn){
this.formId=fn;
};
ns[_478].prototype.setQueryFormat=function(_47d){
if(_47d){
_47d=_47d.toLowerCase();
}
if(!_47d||(_47d!="column"&&_47d!="row")){
$C.handleError(null,"ajaxproxy.setqueryformat.invalidformat","http",[_47d],null,null,true);
}
this.queryFormat=_47d;
};
ns[_478].prototype.setReturnFormat=function(_47e){
if(_47e){
_47e=_47e.toLowerCase();
}
if(!_47e||(_47e!="plain"&&_47e!="json"&&_47e!="wddx")){
$C.handleError(null,"ajaxproxy.setreturnformat.invalidformat","http",[_47e],null,null,true);
}
this.returnFormat=_47e;
};
$L.info("ajaxproxy.init.created","http",[_474]);
return ns[_478];
};
$U.isWhitespace=function(s){
var _480=true;
for(var i=0;i<s.length;i++){
var c=s.charAt(i);
_480=(c==" "||c=="\n"||c=="\t"||c=="\r");
if(!_480){
break;
}
}
return _480;
};
$U.getFirstNonWhitespaceIndex=function(s){
var _484=true;
for(var i=0;i<s.length;i++){
var c=s.charAt(i);
_484=(c==" "||c=="\n"||c=="\t"||c=="\r");
if(!_484){
break;
}
}
return i;
};
$C.trim=function(_487){
return _487.replace(/^\s+|\s+$/g,"");
};
$U.isInteger=function(n){
var _489=true;
if(typeof (n)=="number"){
_489=(n>=0);
}else{
for(i=0;i<n.length;i++){
if($U.isInteger.numberChars.indexOf(n.charAt(i))==-1){
_489=false;
break;
}
}
}
return _489;
};
$U.isInteger.numberChars="0123456789";
$U.isArray=function(a){
return (typeof (a.length)=="number"&&!a.toUpperCase);
};
$U.isBoolean=function(b){
if(b===true||b===false){
return true;
}else{
if(b.toLowerCase){
b=b.toLowerCase();
return (b==$U.isBoolean.trueChars||b==$U.isBoolean.falseChars);
}else{
return false;
}
}
};
$U.isBoolean.trueChars="true";
$U.isBoolean.falseChars="false";
$U.castBoolean=function(b){
if(b===true){
return true;
}else{
if(b===false){
return false;
}else{
if(b.toLowerCase){
b=b.toLowerCase();
if(b==$U.isBoolean.trueChars){
return true;
}else{
if(b==$U.isBoolean.falseChars){
return false;
}else{
return false;
}
}
}else{
return false;
}
}
}
};
$U.checkQuery=function(o){
var _48e=null;
if(o&&o.COLUMNS&&$U.isArray(o.COLUMNS)&&o.DATA&&$U.isArray(o.DATA)&&(o.DATA.length==0||(o.DATA.length>0&&$U.isArray(o.DATA[0])))){
_48e="row";
}else{
if(o&&o.COLUMNS&&$U.isArray(o.COLUMNS)&&o.ROWCOUNT&&$U.isInteger(o.ROWCOUNT)&&o.DATA){
_48e="col";
for(var i=0;i<o.COLUMNS.length;i++){
var _490=o.DATA[o.COLUMNS[i]];
if(!_490||!$U.isArray(_490)){
_48e=null;
break;
}
}
}
}
return _48e;
};
$X.JSON=new function(){
var _491={}.hasOwnProperty?true:false;
var _492=/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/;
var pad=function(n){
return n<10?"0"+n:n;
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"};
var _496=function(s){
if(/["\\\x00-\x1f]/.test(s)){
return "\""+s.replace(/([\x00-\x1f\\"])/g,function(a,b){
var c=m[b];
if(c){
return c;
}
c=b.charCodeAt();
return "\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16);
})+"\"";
}
return "\""+s+"\"";
};
var _49b=function(o){
var a=["["],b,i,l=o.length,v;
for(i=0;i<l;i+=1){
v=o[i];
switch(typeof v){
case "undefined":
case "function":
case "unknown":
break;
default:
if(b){
a.push(",");
}
a.push(v===null?"null":$X.JSON.encode(v));
b=true;
}
}
a.push("]");
return a.join("");
};
var _49e=function(o){
return "\""+o.getFullYear()+"-"+pad(o.getMonth()+1)+"-"+pad(o.getDate())+"T"+pad(o.getHours())+":"+pad(o.getMinutes())+":"+pad(o.getSeconds())+"\"";
};
this.encode=function(o){
if(typeof o=="undefined"||o===null){
return "null";
}else{
if(o instanceof Array){
return _49b(o);
}else{
if(o instanceof Date){
return _49e(o);
}else{
if(typeof o=="string"){
return _496(o);
}else{
if(typeof o=="number"){
return isFinite(o)?String(o):"null";
}else{
if(typeof o=="boolean"){
return String(o);
}else{
var a=["{"],b,i,v;
for(var i in o){
if(!_491||o.hasOwnProperty(i)){
v=o[i];
switch(typeof v){
case "undefined":
case "function":
case "unknown":
break;
default:
if(b){
a.push(",");
}
a.push(this.encode(i),":",v===null?"null":this.encode(v));
b=true;
}
}
}
a.push("}");
return a.join("");
}
}
}
}
}
}
};
this.decode=function(json){
if(typeof json=="object"){
return json;
}
if($U.isWhitespace(json)){
return null;
}
var _4a4=$U.getFirstNonWhitespaceIndex(json);
if(_4a4>0){
json=json.slice(_4a4);
}
if(window._cf_jsonprefix&&json.indexOf(_cf_jsonprefix)==0){
json=json.slice(_cf_jsonprefix.length);
}
try{
if(_492.test(json)){
return eval("("+json+")");
}
}
catch(e){
}
throw new SyntaxError("parseJSON");
};
}();
if(!$C.JSON){
$C.JSON={};
}
$C.JSON.encode=$X.JSON.encode;
$C.JSON.decode=$X.JSON.decode;
$C.navigate=function(url,_4a6,_4a7,_4a8,_4a9,_4aa){
if(url==null){
$C.handleError(_4a8,"navigate.urlrequired","widget");
return;
}
if(_4a9){
_4a9=_4a9.toUpperCase();
if(_4a9!="GET"&&_4a9!="POST"){
$C.handleError(null,"navigate.invalidhttpmethod","http",[_4a9],null,null,true);
}
}else{
_4a9="GET";
}
var _4ab;
if(_4aa){
_4ab=$C.getFormQueryString(_4aa);
if(_4ab==-1){
$C.handleError(null,"navigate.formnotfound","http",[_4aa],null,null,true);
}
}
if(_4a6==null){
if(_4ab){
if(url.indexOf("?")==-1){
url+="?"+_4ab;
}else{
url+="&"+_4ab;
}
}
$L.info("navigate.towindow","widget",[url]);
window.location.replace(url);
return;
}
$L.info("navigate.tocontainer","widget",[url,_4a6]);
var obj=$C.objectCache[_4a6];
if(obj!=null){
if(typeof (obj._cf_body)!="undefined"&&obj._cf_body!=null){
_4a6=obj._cf_body;
}
}
$A.replaceHTML(_4a6,url,_4a9,_4ab,_4a7,_4a8);
};
$A.checkForm=function(_4ad,_4ae,_4af,_4b0,_4b1){
var _4b2=_4ae.call(null,_4ad);
if(_4b2==false){
return false;
}
var _4b3=$C.getFormQueryString(_4ad);
$L.info("ajax.submitform.submitting","http",[_4ad.name]);
$A.replaceHTML(_4af,_4ad.action,_4ad.method,_4b3,_4b0,_4b1);
return false;
};
$A.replaceHTML=function(_4b4,url,_4b6,_4b7,_4b8,_4b9){
var _4ba=document.getElementById(_4b4);
if(!_4ba){
$C.handleError(_4b9,"ajax.replacehtml.elnotfound","http",[_4b4]);
return;
}
var _4bb="_cf_containerId="+encodeURIComponent(_4b4);
_4b7=(_4b7)?_4b7+"&"+_4bb:_4bb;
$L.info("ajax.replacehtml.replacing","http",[_4b4,url,_4b7]);
if(_cf_loadingtexthtml){
try{
_4ba.innerHTML=_cf_loadingtexthtml;
}
catch(e){
}
}
var _4bc=function(req,_4be){
var _4bf=false;
if($A.isRequestError(req)){
$C.handleError(_4b9,"ajax.replacehtml.error","http",[req.status,_4be.id,req.statusText],req.status,req.statusText);
_4bf=true;
}
var _4c0=new $E.CustomEvent("onReplaceHTML",_4be);
var _4c1=new $E.CustomEvent("onReplaceHTMLUser",_4be);
$E.loadEvents[_4be.id]={system:_4c0,user:_4c1};
if(req.responseText.search(/<script/i)!=-1){
try{
_4be.innerHTML="";
}
catch(e){
}
$A.replaceHTML.processResponseText(req.responseText,_4be,_4b9);
}else{
try{
_4be.innerHTML=req.responseText;
}
catch(e){
}
}
$E.loadEvents[_4be.id]=null;
_4c0.fire();
_4c0.unsubscribe();
_4c1.fire();
_4c1.unsubscribe();
$L.info("ajax.replacehtml.success","http",[_4be.id]);
if(_4b8&&!_4bf){
_4b8();
}
};
try{
$A.sendMessage(url,_4b6,_4b7,true,_4bc,_4ba);
}
catch(e){
try{
_4ba.innerHTML=$L.format(CFMessage["ajax.replacehtml.connectionerrordisplay"],[url,e]);
}
catch(e){
}
$C.handleError(_4b9,"ajax.replacehtml.connectionerror","http",[_4b4,url,e]);
}
};
$A.replaceHTML.processResponseText=function(text,_4c3,_4c4){
var pos=0;
var _4c6=0;
var _4c7=0;
_4c3._cf_innerHTML="";
while(pos<text.length){
var _4c8=text.indexOf("<s",pos);
if(_4c8==-1){
_4c8=text.indexOf("<S",pos);
}
if(_4c8==-1){
break;
}
pos=_4c8;
var _4c9=true;
var _4ca=$A.replaceHTML.processResponseText.scriptTagChars;
for(var i=1;i<_4ca.length;i++){
var _4cc=pos+i+1;
if(_4cc>text.length){
break;
}
var _4cd=text.charAt(_4cc);
if(_4ca[i][0]!=_4cd&&_4ca[i][1]!=_4cd){
pos+=i+1;
_4c9=false;
break;
}
}
if(!_4c9){
continue;
}
var _4ce=text.substring(_4c6,pos);
if(_4ce){
_4c3._cf_innerHTML+=_4ce;
}
var _4cf=text.indexOf(">",pos)+1;
if(_4cf==0){
pos++;
continue;
}else{
pos+=7;
}
var _4d0=_4cf;
while(_4d0<text.length&&_4d0!=-1){
_4d0=text.indexOf("</s",_4d0);
if(_4d0==-1){
_4d0=text.indexOf("</S",_4d0);
}
if(_4d0!=-1){
_4c9=true;
for(var i=1;i<_4ca.length;i++){
var _4cc=_4d0+2+i;
if(_4cc>text.length){
break;
}
var _4cd=text.charAt(_4cc);
if(_4ca[i][0]!=_4cd&&_4ca[i][1]!=_4cd){
_4d0=_4cc;
_4c9=false;
break;
}
}
if(_4c9){
break;
}
}
}
if(_4d0!=-1){
var _4d1=text.substring(_4cf,_4d0);
var _4d2=_4d1.indexOf("<!--");
if(_4d2!=-1){
_4d1=_4d1.substring(_4d2+4);
}
var _4d3=_4d1.lastIndexOf("//-->");
if(_4d3!=-1){
_4d1=_4d1.substring(0,_4d3-1);
}
if(_4d1.indexOf("document.write")!=-1||_4d1.indexOf("CF_RunContent")!=-1){
_4d1="var _cfDomNode = document.getElementById('"+_4c3.id+"'); var _cfBuffer='';"+"if (!document._cf_write)"+"{document._cf_write = document.write;"+"document.write = function(str){if (_cfBuffer!=null){_cfBuffer+=str;}else{document._cf_write(str);}};};"+_4d1+";_cfDomNode._cf_innerHTML += _cfBuffer; _cfBuffer=null;";
}
try{
eval(_4d1);
}
catch(ex){
$C.handleError(_4c4,"ajax.replacehtml.jserror","http",[_4c3.id,ex]);
}
}
_4c8=text.indexOf(">",_4d0)+1;
if(_4c8==0){
_4c7=_4d0+1;
break;
}
_4c7=_4c8;
pos=_4c8;
_4c6=_4c8;
}
if(_4c7<text.length-1){
var _4ce=text.substring(_4c7,text.length);
if(_4ce){
_4c3._cf_innerHTML+=_4ce;
}
}
try{
_4c3.innerHTML=_4c3._cf_innerHTML;
}
catch(e){
}
_4c3._cf_innerHTML="";
};
$A.replaceHTML.processResponseText.scriptTagChars=[["s","S"],["c","C"],["r","R"],["i","I"],["p","P"],["t","T"]];
$D.getElement=function(_4d4,_4d5){
var _4d6=function(_4d7){
return (_4d7.name==_4d4||_4d7.id==_4d4);
};
var _4d8=$D.getElementsBy(_4d6,null,_4d5);
if(_4d8.length==1){
return _4d8[0];
}else{
return _4d8;
}
};
$D.getElementsBy=function(_4d9,tag,root){
tag=tag||"*";
var _4dc=[];
if(root){
root=$D.get(root);
if(!root){
return _4dc;
}
}else{
root=document;
}
var _4dd=root.getElementsByTagName(tag);
if(!_4dd.length&&(tag=="*"&&root.all)){
_4dd=root.all;
}
for(var i=0,len=_4dd.length;i<len;++i){
if(_4d9(_4dd[i])){
_4dc[_4dc.length]=_4dd[i];
}
}
return _4dc;
};
$D.get=function(el){
if(!el){
return null;
}
if(typeof el!="string"&&!(el instanceof Array)){
return el;
}
if(typeof el=="string"){
return document.getElementById(el);
}else{
var _4e0=[];
for(var i=0,len=el.length;i<len;++i){
_4e0[_4e0.length]=$D.get(el[i]);
}
return _4e0;
}
return null;
};
$E.loadEvents={};
$E.CustomEvent=function(_4e2,_4e3){
return {name:_4e2,domNode:_4e3,subs:[],subscribe:function(func,_4e5){
var dup=false;
for(var i=0;i<this.subs.length;i++){
var sub=this.subs[i];
if(sub.f==func&&sub.p==_4e5){
dup=true;
break;
}
}
if(!dup){
this.subs.push({f:func,p:_4e5});
}
},fire:function(){
for(var i=0;i<this.subs.length;i++){
var sub=this.subs[i];
sub.f.call(null,this,sub.p);
}
},unsubscribe:function(){
this.subscribers=[];
}};
};
$E.windowLoadImpEvent=new $E.CustomEvent("cfWindowLoadImp");
$E.windowLoadEvent=new $E.CustomEvent("cfWindowLoad");
$E.windowLoadUserEvent=new $E.CustomEvent("cfWindowLoadUser");
$E.listeners=[];
$E.addListener=function(el,ev,fn,_4ee){
var l={el:el,ev:ev,fn:fn,params:_4ee};
$E.listeners.push(l);
var _4f0=function(e){
if(!e){
var e=window.event;
}
fn.call(null,e,_4ee);
};
if(el.addEventListener){
el.addEventListener(ev,_4f0,false);
return true;
}else{
if(el.attachEvent){
el.attachEvent("on"+ev,_4f0);
return true;
}else{
return false;
}
}
};
$E.isListener=function(el,ev,fn,_4f5){
var _4f6=false;
var ls=$E.listeners;
for(var i=0;i<ls.length;i++){
if(ls[i].el==el&&ls[i].ev==ev&&ls[i].fn==fn&&ls[i].params==_4f5){
_4f6=true;
break;
}
}
return _4f6;
};
$E.callBindHandlers=function(id,_4fa,ev){
var el=document.getElementById(id);
if(!el){
return;
}
var ls=$E.listeners;
for(var i=0;i<ls.length;i++){
if(ls[i].el==el&&ls[i].ev==ev&&ls[i].fn._cf_bindhandler){
ls[i].fn.call(null,null,ls[i].params);
}
}
};
$E.registerOnLoad=function(func,_500,_501,user){
if($E.registerOnLoad.windowLoaded){
if(_500&&_500._cf_containerId&&$E.loadEvents[_500._cf_containerId]){
if(user){
$E.loadEvents[_500._cf_containerId].user.subscribe(func,_500);
}else{
$E.loadEvents[_500._cf_containerId].system.subscribe(func,_500);
}
}else{
func.call(null,null,_500);
}
}else{
if(user){
$E.windowLoadUserEvent.subscribe(func,_500);
}else{
if(_501){
$E.windowLoadImpEvent.subscribe(func,_500);
}else{
$E.windowLoadEvent.subscribe(func,_500);
}
}
}
};
$E.registerOnLoad.windowLoaded=false;
$E.onWindowLoad=function(fn){
if(window.addEventListener){
window.addEventListener("load",fn,false);
}else{
if(window.attachEvent){
window.attachEvent("onload",fn);
}else{
if(document.getElementById){
window.onload=fn;
}
}
}
};
$C.addSpanToDom=function(){
var _504=document.createElement("span");
document.body.insertBefore(_504,document.body.firstChild);
};
$E.windowLoadHandler=function(e){
if(window.Ext){
Ext.BLANK_IMAGE_URL=_cf_contextpath+"/CFIDE/scripts/ajax/resources/ext/images/default/s.gif";
}
$C.addSpanToDom();
$L.init();
$E.registerOnLoad.windowLoaded=true;
$E.windowLoadImpEvent.fire();
$E.windowLoadImpEvent.unsubscribe();
$E.windowLoadEvent.fire();
$E.windowLoadEvent.unsubscribe();
$E.windowLoadUserEvent.fire();
$E.windowLoadUserEvent.unsubscribe();
};
$E.onWindowLoad($E.windowLoadHandler);
$B.register=function(_506,_507,_508,_509){
for(var i=0;i<_506.length;i++){
var _50b=_506[i][0];
var _50c=_506[i][1];
var _50d=_506[i][2];
if(window[_50b]){
var _50e=eval(_50b);
if(_50e&&_50e._cf_register){
_50e._cf_register(_50d,_508,_507);
continue;
}
}
var _50f=$C.objectCache[_50b];
if(_50f&&_50f._cf_register){
_50f._cf_register(_50d,_508,_507);
continue;
}
var _510=$D.getElement(_50b,_50c);
var _511=(_510&&((!_510.length&&_510.length!=0)||(_510.length&&_510.length>0)||_510.tagName=="SELECT"));
if(!_511){
$C.handleError(null,"bind.register.elnotfound","bind",[_50b]);
}
if(_510.length>1&&!_510.options){
for(var j=0;j<_510.length;j++){
$B.register.addListener(_510[j],_50d,_508,_507);
}
}else{
$B.register.addListener(_510,_50d,_508,_507);
}
}
if(!$C.bindHandlerCache[_507.bindTo]&&typeof (_507.bindTo)=="string"){
$C.bindHandlerCache[_507.bindTo]=function(){
_508.call(null,null,_507);
};
}
if(_509){
_508.call(null,null,_507);
}
};
$B.register.addListener=function(_513,_514,_515,_516){
if(!$E.isListener(_513,_514,_515,_516)){
$E.addListener(_513,_514,_515,_516);
}
};
$B.assignValue=function(_517,_518,_519,_51a){
if(!_517){
return;
}
if(_517.call){
_517.call(null,_519,_51a);
return;
}
var _51b=$C.objectCache[_517];
if(_51b&&_51b._cf_setValue){
_51b._cf_setValue(_519);
return;
}
var _51c=document.getElementById(_517);
if(!_51c){
$C.handleError(null,"bind.assignvalue.elnotfound","bind",[_517]);
}
if(_51c.tagName=="SELECT"){
var _51d=$U.checkQuery(_519);
var _51e=$C.objectCache[_517];
if(_51d){
if(!_51e||(_51e&&(!_51e.valueCol||!_51e.displayCol))){
$C.handleError(null,"bind.assignvalue.selboxmissingvaldisplay","bind",[_517]);
return;
}
}else{
if(typeof (_519.length)=="number"&&!_519.toUpperCase){
if(_519.length>0&&(typeof (_519[0].length)!="number"||_519[0].toUpperCase)){
$C.handleError(null,"bind.assignvalue.selboxerror","bind",[_517]);
return;
}
}else{
$C.handleError(null,"bind.assignvalue.selboxerror","bind",[_517]);
return;
}
}
_51c.options.length=0;
var _51f;
var _520=false;
if(_51e){
_51f=_51e.selected;
if(_51f&&_51f.length>0){
_520=true;
}
}
if(!_51d){
for(var i=0;i<_519.length;i++){
var opt=new Option(_519[i][1],_519[i][0]);
_51c.options[i]=opt;
if(_520){
for(var j=0;j<_51f.length;j++){
if(_51f[j]==opt.value){
opt.selected=true;
}
}
}
}
}else{
if(_51d=="col"){
var _524=_519.DATA[_51e.valueCol];
var _525=_519.DATA[_51e.displayCol];
if(!_524||!_525){
$C.handleError(null,"bind.assignvalue.selboxinvalidvaldisplay","bind",[_517]);
return;
}
for(var i=0;i<_524.length;i++){
var opt=new Option(_525[i],_524[i]);
_51c.options[i]=opt;
if(_520){
for(var j=0;j<_51f.length;j++){
if(_51f[j]==opt.value){
opt.selected=true;
}
}
}
}
}else{
if(_51d=="row"){
var _526=-1;
var _527=-1;
for(var i=0;i<_519.COLUMNS.length;i++){
var col=_519.COLUMNS[i];
if(col==_51e.valueCol){
_526=i;
}
if(col==_51e.displayCol){
_527=i;
}
if(_526!=-1&&_527!=-1){
break;
}
}
if(_526==-1||_527==-1){
$C.handleError(null,"bind.assignvalue.selboxinvalidvaldisplay","bind",[_517]);
return;
}
for(var i=0;i<_519.DATA.length;i++){
var opt=new Option(_519.DATA[i][_527],_519.DATA[i][_526]);
_51c.options[i]=opt;
if(_520){
for(var j=0;j<_51f.length;j++){
if(_51f[j]==opt.value){
opt.selected=true;
}
}
}
}
}
}
}
}else{
_51c[_518]=_519;
}
$E.callBindHandlers(_517,null,"change");
$L.info("bind.assignvalue.success","bind",[_519,_517,_518]);
};
$B.localBindHandler=function(e,_52a){
var _52b=document.getElementById(_52a.bindTo);
var _52c=$B.evaluateBindTemplate(_52a,true);
$B.assignValue(_52a.bindTo,_52a.bindToAttr,_52c);
};
$B.localBindHandler._cf_bindhandler=true;
$B.evaluateBindTemplate=function(_52d,_52e,_52f,_530,_531){
var _532=_52d.bindExpr;
var _533="";
if(typeof _531=="undefined"){
_531=false;
}
for(var i=0;i<_532.length;i++){
if(typeof (_532[i])=="object"){
var _535=null;
if(!_532[i].length){
_535=$X.JSON.encode(_532[i]);
}else{
var _535=$B.getBindElementValue(_532[i][0],_532[i][1],_532[i][2],_52e,_530);
if(_535==null){
if(_52e){
_533="";
break;
}else{
_535="";
}
}
}
if(_52f){
_535=encodeURIComponent(_535);
}
_533+=_535;
}else{
var _536=_532[i];
if(_531==true&&i>0){
if(typeof (_536)=="string"&&_536.indexOf("&")!=0){
_536=encodeURIComponent(_536);
}
}
_533+=_536;
}
}
return _533;
};
$B.jsBindHandler=function(e,_538){
var _539=_538.bindExpr;
var _53a=new Array();
var _53b=_538.callFunction+"(";
for(var i=0;i<_539.length;i++){
var _53d;
if(typeof (_539[i])=="object"){
if(_539[i].length){
_53d=$B.getBindElementValue(_539[i][0],_539[i][1],_539[i][2],false);
}else{
_53d=_539[i];
}
}else{
_53d=_539[i];
}
if(i!=0){
_53b+=",";
}
_53a[i]=_53d;
_53b+="'"+_53d+"'";
}
_53b+=")";
var _53e=_538.callFunction.apply(null,_53a);
$B.assignValue(_538.bindTo,_538.bindToAttr,_53e,_538.bindToParams);
};
$B.jsBindHandler._cf_bindhandler=true;
$B.urlBindHandler=function(e,_540){
var _541=_540.bindTo;
if($C.objectCache[_541]&&$C.objectCache[_541]._cf_visible===false){
$C.objectCache[_541]._cf_dirtyview=true;
return;
}
var url=$B.evaluateBindTemplate(_540,false,true,false,true);
var _543=$U.extractReturnFormat(url);
if(_543==null||typeof _543=="undefined"){
_543="JSON";
}
if(_540.bindToAttr||typeof _540.bindTo=="undefined"||typeof _540.bindTo=="function"){
var _540={"bindTo":_540.bindTo,"bindToAttr":_540.bindToAttr,"bindToParams":_540.bindToParams,"errorHandler":_540.errorHandler,"url":url,returnFormat:_543};
try{
$A.sendMessage(url,"GET",null,true,$B.urlBindHandler.callback,_540);
}
catch(e){
$C.handleError(_540.errorHandler,"ajax.urlbindhandler.connectionerror","http",[url,e]);
}
}else{
$A.replaceHTML(_541,url,null,null,null,_540.errorHandler);
}
};
$B.urlBindHandler._cf_bindhandler=true;
$B.urlBindHandler.callback=function(req,_545){
if($A.isRequestError(req)){
$C.handleError(_545.errorHandler,"bind.urlbindhandler.httperror","http",[req.status,_545.url,req.statusText],req.status,req.statusText);
}else{
$L.info("bind.urlbindhandler.response","http",[req.responseText]);
var _546;
try{
if(_545.returnFormat==null||_545.returnFormat==="JSON"){
_546=$X.JSON.decode(req.responseText);
}else{
_546=req.responseText;
}
}
catch(e){
if(req.responseText!=null&&typeof req.responseText=="string"){
_546=req.responseText;
}else{
$C.handleError(_545.errorHandler,"bind.urlbindhandler.jsonerror","http",[req.responseText]);
}
}
$B.assignValue(_545.bindTo,_545.bindToAttr,_546,_545.bindToParams);
}
};
$A.initSelect=function(_547,_548,_549,_54a){
$C.objectCache[_547]={"valueCol":_548,"displayCol":_549,selected:_54a};
};
$S.setupSpry=function(){
if(typeof (Spry)!="undefined"&&Spry.Data){
Spry.Data.DataSet.prototype._cf_getAttribute=function(_54b){
var val;
var row=this.getCurrentRow();
if(row){
val=row[_54b];
}
return val;
};
Spry.Data.DataSet.prototype._cf_register=function(_54e,_54f,_550){
var obs={bindParams:_550};
obs.onCurrentRowChanged=function(){
_54f.call(null,null,this.bindParams);
};
obs.onDataChanged=function(){
_54f.call(null,null,this.bindParams);
};
this.addObserver(obs);
};
if(Spry.Debug.trace){
var _552=Spry.Debug.trace;
Spry.Debug.trace=function(str){
$L.info(str,"spry");
_552(str);
};
}
if(Spry.Debug.reportError){
var _554=Spry.Debug.reportError;
Spry.Debug.reportError=function(str){
$L.error(str,"spry");
_554(str);
};
}
$L.info("spry.setupcomplete","bind");
}
};
$E.registerOnLoad($S.setupSpry,null,true);
$S.bindHandler=function(_556,_557){
var url;
var _559="_cf_nodebug=true&_cf_nocache=true";
if(window._cf_clientid){
_559+="&_cf_clientid="+_cf_clientid;
}
var _55a=window[_557.bindTo];
var _55b=(typeof (_55a)=="undefined");
if(_557.cfc){
var _55c={};
var _55d=_557.bindExpr;
for(var i=0;i<_55d.length;i++){
var _55f;
if(_55d[i].length==2){
_55f=_55d[i][1];
}else{
_55f=$B.getBindElementValue(_55d[i][1],_55d[i][2],_55d[i][3],false,_55b);
}
_55c[_55d[i][0]]=_55f;
}
_55c=$X.JSON.encode(_55c);
_559+="&method="+_557.cfcFunction;
_559+="&argumentCollection="+encodeURIComponent(_55c);
$L.info("spry.bindhandler.loadingcfc","http",[_557.bindTo,_557.cfc,_557.cfcFunction,_55c]);
url=_557.cfc;
}else{
url=$B.evaluateBindTemplate(_557,false,true,_55b);
$L.info("spry.bindhandler.loadingurl","http",[_557.bindTo,url]);
}
var _560=_557.options||{};
if((_55a&&_55a._cf_type=="json")||_557.dsType=="json"){
_559+="&returnformat=json";
}
if(_55a){
if(_55a.requestInfo.method=="GET"){
_560.method="GET";
if(url.indexOf("?")==-1){
url+="?"+_559;
}else{
url+="&"+_559;
}
}else{
_560.postData=_559;
_560.method="POST";
_55a.setURL("");
}
_55a.setURL(url,_560);
_55a.loadData();
}else{
if(!_560.method||_560.method=="GET"){
if(url.indexOf("?")==-1){
url+="?"+_559;
}else{
url+="&"+_559;
}
}else{
_560.postData=_559;
_560.useCache=false;
}
var ds;
if(_557.dsType=="xml"){
ds=new Spry.Data.XMLDataSet(url,_557.xpath,_560);
}else{
ds=new Spry.Data.JSONDataSet(url,_560);
ds.preparseFunc=$S.preparseData;
}
ds._cf_type=_557.dsType;
var _562={onLoadError:function(req){
$C.handleError(_557.errorHandler,"spry.bindhandler.error","http",[_557.bindTo,req.url,req.requestInfo.postData]);
}};
ds.addObserver(_562);
window[_557.bindTo]=ds;
}
};
$S.bindHandler._cf_bindhandler=true;
$S.preparseData=function(ds,_565){
var _566=$U.getFirstNonWhitespaceIndex(_565);
if(_566>0){
_565=_565.slice(_566);
}
if(window._cf_jsonprefix&&_565.indexOf(_cf_jsonprefix)==0){
_565=_565.slice(_cf_jsonprefix.length);
}
return _565;
};
$P.init=function(_567){
$L.info("pod.init.creating","widget",[_567]);
var _568={};
_568._cf_body=_567+"_body";
$C.objectCache[_567]=_568;
};
$B.cfcBindHandler=function(e,_56a){
var _56b=(_56a.httpMethod)?_56a.httpMethod:"GET";
var _56c={};
var _56d=_56a.bindExpr;
for(var i=0;i<_56d.length;i++){
var _56f;
if(_56d[i].length==2){
_56f=_56d[i][1];
}else{
_56f=$B.getBindElementValue(_56d[i][1],_56d[i][2],_56d[i][3],false);
}
_56c[_56d[i][0]]=_56f;
}
var _570=function(_571,_572){
$B.assignValue(_572.bindTo,_572.bindToAttr,_571,_572.bindToParams);
};
var _573={"bindTo":_56a.bindTo,"bindToAttr":_56a.bindToAttr,"bindToParams":_56a.bindToParams};
var _574={"async":true,"cfcPath":_56a.cfc,"httpMethod":_56b,"callbackHandler":_570,"errorHandler":_56a.errorHandler};
if(_56a.proxyCallHandler){
_574.callHandler=_56a.proxyCallHandler;
_574.callHandlerParams=_56a;
}
$X.invoke(_574,_56a.cfcFunction,_56c,_573);
};
$B.cfcBindHandler._cf_bindhandler=true;
$U.extractReturnFormat=function(url){
var _576;
var _577=url.toUpperCase();
var _578=_577.indexOf("RETURNFORMAT");
if(_578>0){
var _579=_577.indexOf("&",_578+13);
if(_579<0){
_579=_577.length;
}
_576=_577.substring(_578+13,_579);
}
return _576;
};
$U.replaceAll=function(_57a,_57b,_57c){
var _57d=_57a.indexOf(_57b);
while(_57d>-1){
_57a=_57a.replace(_57b,_57c);
_57d=_57a.indexOf(_57b);
}
return _57a;
};
$U.cloneObject=function(obj){
var _57f={};
for(key in obj){
var _580=obj[key];
if(typeof _580=="object"){
_580=$U.cloneObject(_580);
}
_57f.key=_580;
}
return _57f;
};
$C.clone=function(obj,_582){
if(typeof (obj)!="object"){
return obj;
}
if(obj==null){
return obj;
}
var _583=new Object();
for(var i in obj){
if(_582===true){
_583[i]=$C.clone(obj[i]);
}else{
_583[i]=obj[i];
}
}
return _583;
};
$C.printObject=function(obj){
var str="";
for(key in obj){
str=str+"  "+key+"=";
value=obj[key];
if(typeof (value)=="object"){
value=$C.printObject(value);
}
str+=value;
}
return str;
};
}
}
cfinit();

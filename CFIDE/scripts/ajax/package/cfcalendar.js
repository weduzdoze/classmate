/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Calendar){
ColdFusion.Calendar={};
}
ColdFusion.Calendar.monthNamesShort=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
ColdFusion.Calendar.monthNamesLong=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
ColdFusion.Calendar.dayNamesShort=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
ColdFusion.Calendar.dayNamesLong=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
ColdFusion.Calendar.calTableIdCounter=0;
if(navigator.userAgent.toLowerCase().indexOf("safari")>-1){
var set_month=Date.prototype.setMonth;
Date.prototype.setMonth=function(num){
if(num<=-1){
var n=Math.ceil(-num);
var _175=Math.ceil(n/12);
var _176=(n%12)?12-n%12:0;
this.setFullYear(this.getFullYear()-_175);
return set_month.call(this,_176);
}else{
return set_month.apply(this,arguments);
}
};
}
if(!String.escape){
String.escape=function(_177){
return _177.replace(/('|\\)/g,"\\$1");
};
}
ColdFusion.Calendar.setUpCalendar=function(_178,mask,_17a,_17b,_17c,_17d,_17e){
var _17f=ColdFusion.DOM.getElement(_178+_17d+"_cf_button",_17d);
var _180=ColdFusion.DOM.getElement(_178,_17d);
var _181=null;
var _182=null;
if(_180.value!=""){
_181=_180.value;
_182=_181.split("/");
}
var _183=_178+"_cf_calendar"+ColdFusion.Calendar.calTableIdCounter;
ColdFusion.Calendar.calTableIdCounter++;
var _184=ColdFusion.DOM.getElement(_178+_17d+"_cf_container",_17d);
var _185=_180.offsetLeft;
ColdFusion.DOM.getElement(_178+_17d+"_cf_container",_17d).style.left=_185;
YAHOO.widget.Calendar.IMG_ROOT=_cf_ajaxscriptsrc+"/resources/yui/";
var _186;
if(_182&&_182[0]&&_182[2]){
_186=new YAHOO.widget.Calendar(_183,_178+_17d+"_cf_container",{close:true,pagedate:_182[0]+"/"+_182[2]});
}else{
_186=new YAHOO.widget.Calendar(_183,_178+_17d+"_cf_container",{close:true});
}
_186.calendarinputid=_178;
_186.calendarinput=_180;
_186.mask=mask;
_186.formname=_17d;
_186.cfg.setProperty("MONTHS_LONG",_17c);
_186.cfg.setProperty("WEEKDAYS_SHORT",_17b);
_186.cfg.setProperty("START_WEEKDAY",_17a);
ColdFusion.objectCache[_183+_17d]=_186;
_186.select(_181);
_186.render();
_186.hide();
_186.selectEvent.subscribe(ColdFusion.Calendar.handleDateSelect,_186,true);
YAHOO.util.Event.addListener(_178+_17d+"_cf_button","click",ColdFusion.Calendar.handleCalendarLinkClick,_186,true);
if(_17e!=null){
var year=_17e.year;
var _188=_17e.month;
var day=_17e.day;
var _18a=new Date(year,_188.valueOf()-1,day);
_180.value=ColdFusion.Calendar.createFormattedOutput(_178,mask,year,_188,day,_18a);
}
};
ColdFusion.Calendar.openedCalendarInstance=null;
ColdFusion.Calendar.handleCalendarLinkClick=function(type,args){
var _18d=args;
if(ColdFusion.Calendar.openedCalendarInstance){
ColdFusion.Calendar.openedCalendarInstance.hide();
}
if(!_18d.extMask){
var _18e=ColdFusion.Calendar.convertToExtMask(_18d.mask);
_18d.extMask=_18e;
}
var _18f=ColdFusion.DOM.getElement(args.calendarinputid,_18d.formname).value;
var _190=null;
if(typeof (_18f)!="undefined"&&ColdFusion.trim(_18f)!=""){
_190=Date.parseDate(_18f,_18d.extMask);
}
if(_190!=null){
_18d.setMonth(_190.getMonth());
_18d.setYear(_190.getFullYear());
_18d.select(_190);
_18d.render();
}
ColdFusion.Calendar.openedCalendarInstance=_18d;
_18d.show();
};
ColdFusion.Calendar.handleDateSelect=function(type,args,_193){
var _194=args[0];
var date=_194[0];
var year=date[0],month=date[1],day=date[2];
var _197=new Date(year,month.valueOf()-1,day);
_193.calendarinput.value=ColdFusion.Calendar.createFormattedOutput(_193.calendarinputid,_193.mask,year,month,day,_197);
ColdFusion.Event.callBindHandlers(_193.calendarinputid,null,"change");
_193.hide();
};
ColdFusion.Calendar.convertToExtMask=function(mask){
mask=mask.toUpperCase();
if(mask.indexOf("DD")!=-1){
mask=mask.replace(/DD/g,"d");
}
if(mask.indexOf("D")!=-1){
mask=mask.replace(/D/g,"d");
}
if(mask.indexOf("MMMM")!=-1){
mask=mask.replace(/MMMM/g,"F");
}else{
if(mask.indexOf("MMM")!=-1){
mask=mask.replace(/MMM/g,"M");
}else{
if(mask.indexOf("MM")!=-1){
mask=mask.replace(/MM/g,"m");
}else{
if(mask.indexOf("M")!=-1){
mask=mask.replace(/M/g,"m");
}
}
}
}
if(mask.indexOf("YYYY")!=-1){
mask=mask.replace(/YYYY/g,"Y");
}
if(mask.indexOf("YY")!=-1){
mask=mask.replace(/YY/g,"y");
}
if(mask.indexOf("EEEE")!=-1){
mask=mask.replace(/EEEE/g,"l");
}
if(mask.indexOf("EEE")!=-1){
mask=mask.replace(/EEE/g,"D");
}
if(mask.indexOf("E")!=-1){
mask=mask.replace(/E/g,"w");
}
return mask;
};
ColdFusion.Calendar.createFormattedOutput=function(_199,mask,year,_19c,day,date){
mask=mask.toUpperCase();
year=new String(year);
_19c=new String(_19c);
day=new String(day);
var _19f=date.getDay();
if(mask.indexOf("DD")!=-1){
if(day.length==1){
day="0"+day;
}
mask=mask.replace(/DD/g,day);
}
if(mask.indexOf("D"!=-1)){
if(day.length!=-1&&day.charAt(0)=="0"){
day=day.charAt(1);
}
mask=mask.replace(/D/g,day);
}
if(mask.indexOf("MMMM")!=-1){
_19c=ColdFusion.Calendar.monthNamesLong[_19c.valueOf()-1];
mask=mask.replace(/MMMM/g,_19c);
}else{
if(mask.indexOf("MMM")!=-1){
_19c=ColdFusion.Calendar.monthNamesShort[_19c.valueOf()-1];
mask=mask.replace(/MMM/g,_19c);
}else{
if(mask.indexOf("MM")!=-1){
if(_19c.length==1){
_19c="0"+_19c;
}
mask=mask.replace(/MM/g,_19c);
}else{
if(mask.indexOf("M")!=-1){
if(_19c.length!=-1&&_19c.charAt(0)=="0"){
_19c=_19c.charAt(1);
}
mask=mask.replace(/M/g,_19c);
}
}
}
}
if(mask.indexOf("YYYY")!=-1){
mask=mask.replace(/YYYY/g,year);
}
if(mask.indexOf("YY")!=-1){
year=year.substring(2);
mask=mask.replace(/YY/g,year);
}
if(mask.indexOf("EEEE")!=-1){
_19f=ColdFusion.Calendar.dayNamesLong[_19f.valueOf()];
mask=mask.replace(/EEEE/g,_19f);
}
if(mask.indexOf("EEE")!=-1){
_19f=ColdFusion.Calendar.dayNamesShort[_19f.valueOf()];
mask=mask.replace(/EEE/g,_19f);
}
if(mask.indexOf("E")!=-1){
_19f=_19f.valueOf();
_19f=new String(_19f);
if(_19f.length!=-1&&_19f.charAt(0)=="0"&&_19f.charAt(1)){
_19f=_19f.charAt(1);
}
mask=mask.replace(/E/g,_19f);
}
return mask;
};

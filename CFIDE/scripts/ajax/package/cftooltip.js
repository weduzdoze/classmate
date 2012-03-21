/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Tooltip){
ColdFusion.Tooltip={};
}
ColdFusion.Tooltip.setToolTipOut=function(_5a0,_5a1){
var _5a2=_5a1.tooltip;
_5a2.tooltipout=true;
};
ColdFusion.Tooltip.getToolTip=function(_5a3,_5a4){
var _5a5=ColdFusion.objectCache[_5a4.context];
if(!_5a5){
if(_5a4.style){
_5a4.styleObj=ColdFusion.Tooltip.parseStyle(_5a4.style);
}
_5a5=new YAHOO.widget.Tooltip(_5a4.context+"_cf_tooltip",_5a4);
ColdFusion.objectCache[_5a4.context]=_5a5;
_5a5.doShow(_5a3,_5a4.context);
if(_5a4._cf_url){
var _5a6=function(req,_5a8){
_5a8.tooltip.cfg.setProperty("text",req.responseText);
if(_5a8.tooltip.tooltipout==false){
_5a8.tooltip.doShow(_5a8.event,_5a8.id);
}
};
YAHOO.util.Event.addListener(_5a4.context,"mouseout",ColdFusion.Tooltip.setToolTipOut,{"tooltip":_5a5});
_5a5.cfg.setProperty("text",_cf_loadingtexthtml);
_5a5.doShow(_5a3,_5a4.context);
try{
ColdFusion.Log.info("tooltip.gettooltip.fetch","widget",[_5a4.context]);
ColdFusion.Ajax.sendMessage(_5a4._cf_url,"GET",_5a4._cf_query,true,_5a6,{tooltip:_5a5,event:_5a3,id:_5a4.context});
}
catch(e){
tooltipdiv=ColdFusion.DOM.getElement(_5a4.context);
tooltipdiv.innerHTML="";
ColdFusion.globalErrorHandler(null,e,tooltipdiv);
}
}
}
_5a5.tooltipout=false;
};
ColdFusion.Tooltip.parseStyle=function(_5a9){
var _5aa={};
if(_5a9&&typeof _5a9==="string"){
var _5ab=_5a9.split(";");
for(var i=0;i<_5ab.length;i++){
var temp=_5ab[i];
tempArray=temp.split(":");
if(tempArray.length===2){
var key=tempArray[0];
key=key.toLowerCase();
var _5af=tempArray[1];
switch(key){
case "width":
_5aa.width=_5af;
break;
case "color":
_5aa.color=_5af;
break;
case "background-color":
_5aa[key]=_5af;
break;
case "padding":
_5aa.padding=_5af;
break;
default:
_5aa[key]=_5af;
}
}
}
}
return _5aa;
};

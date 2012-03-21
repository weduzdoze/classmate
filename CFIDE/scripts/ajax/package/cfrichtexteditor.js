/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.RichText){
ColdFusion.RichText={};
}
ColdFusion.RichText.editorState={};
ColdFusion.RichText.buffer=null;
ColdFusion.RichText.initialize=function(id,name,_369,_36a,_36b,_36c,_36d,_36e,_36f,skin,_371,_372,_373,_374,_375){
var _376=new FCKeditor(id);
ColdFusion.RichText.editorState[id]=false;
_376.Value=_369;
_376.richtextid=id;
if(_36a!=null){
_376.BasePath=_36a;
}
if(_36b!=null){
_376.Width=_36b;
}
if(_36c!=null){
_376.Height=_36c;
}
if(_36d!=null){
_376.Config.FontNames=_36d;
}
if(_36e!=null){
_376.Config.FontSizes=_36e;
}
if(_36f!=null){
_376.Config.FontFormats=_36f;
}
_376.Config.LinkBrowserURL=_376.BasePath+"editor/filemanager/browser/default/browser.html?Connector=../../connectors/cfm/connector.cfm";
_376.Config.LinkUploadURL=_376.BasePath+"editor/filemanager/connectors/cfm/upload.cfm";
_376.Config.ImageBrowserURL=_376.BasePath+"editor/filemanager/browser/default/browser.html?Type=Image&Connector=../../connectors/cfm/connector.cfm";
_376.Config.ImageUploadURL=_376.BasePath+"editor/filemanager/connectors/cfm/upload.cfm?Type=Image";
_376.Config.FlashBrowserURL=_376.BasePath+"editor/filemanager/browser/default/browser.html?Type=Flash&Connector=../../connectors/cfm/connector.cfm";
_376.Config.FlashUploadURL=_376.BasePath+"editor/filemanager/connectors/cfm/upload.cfm?Type=Flash";
if(window._cf_clientid){
_376.Config.LinkBrowserURL=_376.Config.LinkBrowserURL+"&_cf_clientid="+_cf_clientid;
_376.Config.LinkUploadURL=_376.Config.LinkUploadURL+"?_cf_clientid="+_cf_clientid;
_376.Config.ImageBrowserURL=_376.Config.ImageBrowserURL+"&_cf_clientid="+_cf_clientid;
_376.Config.ImageUploadURL=_376.Config.ImageUploadURL+"&_cf_clientid="+_cf_clientid;
_376.Config.FlashBrowserURL=_376.Config.FlashBrowserURL+"&_cf_clientid="+_cf_clientid;
_376.Config.FlashUploadURL=_376.Config.FlashUploadURL+"&_cf_clientid="+_cf_clientid;
}
if(skin!=null){
var _377=_376.BasePath+"editor/skins/"+skin+"/";
_376.Config.SkinPath=_377;
}
if(_371==true){
_376.Config.ToolbarStartExpanded=false;
_376.Config.Toolbaronfocus=true;
}
if(_372!=null){
_376.ToolbarSet=_372;
}
if(_373!=null){
_376.Config.StylesXmlPath=_373;
}
if(_374!=null){
_376.Config.TemplatesXmlPath=_374;
}
_376.Config.AutoDetectLanguage=false;
if(_375!=null){
_376.Config.DefaultLanguage=_375;
}
_376.ReplaceTextarea();
var _378=function(_379){
ColdFusion.RichText.setValue(id,_379);
};
_376._cf_setValue=_378;
var _37a=function(){
if(ColdFusion.RichText.editorState[id]){
var _37b=FCKeditorAPI.GetInstance(id);
return _37b.GetXHTML();
}else{
ColdFusion.Log.error("richtext.initialize.getvalue.notready","widget",[id]);
return null;
}
};
_376._cf_getAttribute=_37a;
var _37c=function(_37d,_37e,_37f){
var _380=document.getElementById(id);
if(_380){
ColdFusion.Event.addListener(_380,_37d,_37e,_37f);
}
};
_376._cf_register=_37c;
_376._cf_name=name;
ColdFusion.objectCache[name]=_376;
ColdFusion.objectCache[id]=_376;
ColdFusion.RichText.registerAfterSet(id);
ColdFusion.Log.info("richtext.initialize.success","widget",[name]);
};
ColdFusion.RichText.editor_onfocus=function(_381){
_381.ToolbarSet.Expand();
};
ColdFusion.RichText.editor_onblur=function(_382){
_382.ToolbarSet.Collapse();
};
ColdFusion.RichText.setChangeBuffer=function(_383){
ColdFusion.RichText.buffer=FCKeditorAPI.GetInstance(_383.Name).GetXHTML();
};
ColdFusion.RichText.resetChangeBuffer=function(_384){
if(ColdFusion.RichText.buffer!=FCKeditorAPI.GetInstance(_384.Name).GetXHTML()){
ColdFusion.RichText.fireChangeEvent(_384.Name);
}
ColdFusion.RichText.buffer=null;
};
ColdFusion.RichText.registerAfterSet=function(_385){
if(ColdFusion.RichText.editorState[_385]){
var _386=function(){
ColdFusion.RichText.fireChangeEvent(_385);
};
var _387=FCKeditorAPI.GetInstance(_385);
_387.Events.AttachEvent("OnAfterSetHTML",_386);
}else{
setTimeout("ColdFusion.RichText.registerAfterSet('"+_385+"')",1000);
}
};
ColdFusion.RichText.getEditorObject=function(_388){
if(!_388){
ColdFusion.handleError(null,"richtext.geteditorobject.missingtextareaname","widget",null,null,null,true);
return;
}
var _389=ColdFusion.objectCache[_388];
if(_389==null||FCKeditor.prototype.isPrototypeOf(_389)==false){
ColdFusion.handleError(null,"richtext.geteditorobject.notfound","widget",[_388],null,null,true);
return;
}
return FCKeditorAPI.GetInstance(_389.richtextid);
};
ColdFusion.RichText.setValue=function(_38a,_38b){
if(ColdFusion.RichText.editorState[_38a]){
var _38c=FCKeditorAPI.GetInstance(_38a);
_38c.SetHTML(_38b);
}else{
setTimeout("ColdFusion.RichText.setValue(\""+_38a+"\",\""+_38b+"\")",1000);
}
};
ColdFusion.RichText.fireChangeEvent=function(_38d){
var _38e=ColdFusion.objectCache[_38d];
ColdFusion.Log.info("richtext.firechangeevent.firechange","widget",[_38e._cf_name]);
var _38f=document.getElementById(_38d);
if(_38f){
if(_38f.fireEvent){
_38f.fireEvent("onchange");
}
if(document.createEvent){
var evt=document.createEvent("HTMLEvents");
if(evt.initEvent){
evt.initEvent("change",true,true);
}
if(_38f.dispatchEvent){
_38f.dispatchEvent(evt);
}
}
}
ColdFusion.Event.callBindHandlers(_38d,null,"change");
};
function FCKeditor_OnComplete(_391){
if(_391.Config.Toolbaronfocus){
_391.Events.AttachEvent("OnBlur",ColdFusion.RichText.editor_onblur);
_391.Events.AttachEvent("OnFocus",ColdFusion.RichText.editor_onfocus);
}
_391.Events.AttachEvent("OnFocus",ColdFusion.RichText.setChangeBuffer);
_391.Events.AttachEvent("OnBlur",ColdFusion.RichText.resetChangeBuffer);
ColdFusion.RichText.editorState[_391.Name]=true;
if(ColdFusion.RichText.OnComplete){
ColdFusion.RichText.OnComplete(_391);
}
}

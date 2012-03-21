/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Menu){
ColdFusion.Menu={};
}
ColdFusion.Menu.menuItemMouseOver=function(id,_70){
var _71=document.getElementById(id);
_71.tempfontcolor=_71.firstChild.style.color;
if(_70){
_71.firstChild.style.color=_70;
}
};
ColdFusion.Menu.menuItemMouseOut=function(id){
var _73=document.getElementById(id);
if(_73.tempfontcolor){
_73.firstChild.style.color=_73.tempfontcolor;
}else{
_73.firstChild.style.color="black";
}
};
ColdFusion.Menu.initMenu=function(_74,_75){
return new YAHOO.widget.Menu(_74,_75);
};
ColdFusion.Menu.initMenuBar=function(_76,_77){
return new YAHOO.widget.MenuBar(_76,_77);
};

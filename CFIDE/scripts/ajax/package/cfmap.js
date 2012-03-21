/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
if(!ColdFusion.Map){
ColdFusion.Map={};
}
var coldFusion_markerObjCache=new Array();
var $MAP=ColdFusion.Map;
$MAP.statusCodeObject={code200:"A directions request could not be successfully parsed. For example, the request may have been rejected if it contained more than the maximum number of waypoints allowed.",code400:"A directions request could not be successfully parsed. For example, the request may have been rejected if it contained more than the maximum number of waypoints allowed.",code500:"A geocoding or directions request could not be successfully processed, yet the exact reason for the failure is not known",code601:"The HTTP query parameter was either missing or had no value. For geocoding requests, this means that an empty address was specified as input. For directions requests, this means that no query was specified in the input",code602:"No corresponding geographic location could be found for the specified address. This may be due to the fact that the address is relatively new, or it may be incorrect",code603:"The geocode for the given address or the route for the given directions query cannot be returned due to legal or contractual reasons",code604:"The GDirections object could not compute directions between the points mentioned in the query. This is usually because there is no route available between the two points, or because we do not have data for routing in that region",code610:"The given key is either invalid or does not match the domain for which it was given",code620:"The given key has gone over the requests limit in the 24 hour period or has submitted too many requests in too short a period of time. If you are sending multiple requests in parallel or in a tight loop, use a timer or pause in your code to make sure you do not send the requests too quickly"};
ColdFusion.Map.init=function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b,_1c){
var _1d={divName:_1,type:_4,layout:"fit",renderTo:_1,centerAddress:_12,centerLatitude:_13,centerLongitude:_14,markerItems:_18,onLoad:_19,onError:_1a,showCenterMarker:_d,showAllMarker:_e,markerColor:_16,markerIcon:_17};
if(_3!=null&&typeof (_3)!="undefined"){
_1d.width=_3;
}else{
_1d.width=400;
}
if(_2!=null&&typeof (_2)!="undefined"){
_1d.height=_2;
}else{
_1d.height=400;
}
if(_5!=null&&typeof (_5)!="undefined"){
_1d.zoomLevel=_5;
}else{
_1d.zoomLevel=3;
}
_1d.hideBorders=_7;
if(!_7){
if(_6==null||typeof _6==="undefined"||_6.length==0){
_6=" ";
}
_1d.title=_6;
_1d.collapsible=_8;
}
if(_16==null&&_17==null){
_1d.markerColor="#00FF00";
}
var _1e=new Ext.Panel(_1d);
ColdFusion.objectCache[_1]=_1d;
_1d.mapPanel=[_1e];
var _1f=["enableDragging"];
if(_9){
_1f.push("enableScrollWheelZoom");
}else{
_1f.push("disableScrollWheelZoom");
}
if(_a){
_1f.push("enableDoubleClickZoom");
}else{
_1f.push("disableDoubleClickZoom");
}
if(_b){
_1f.push("enableContinuousZoom");
}else{
_1f.push("disableContinuousZoom");
}
var _20=$MAP.parseControlProperties(_c,_f,_10,_11);
var _21=[];
for(i=0;i<_1d.markerItems.length;i++){
var _22=$MAP.parseMarker(_1d.markerItems[i]);
_21.push(_22);
}
if(_15==null||typeof _15==="undefined"){
_15="";
}
var _23={marker:{title:_15}};
if(_1d.markerColor!=null&&typeof _1d.markerColor!="undefined"){
_23.marker.markercolor=_1d.markerColor;
}else{
if(_1d.markerIcon!=null&&typeof _1d.markerIcon!="undefined"){
_23.marker.markericon=_1d.markerIcon;
}
}
if(_1b!=null||_1c!=null){
_23.listeners={click:$MAP.markerOnClickHandler};
_23.marker.bindcallback=_1b;
_23.marker.markerwindowcontent=_1c;
_23.marker.name=_1;
}
if(_1d.centerAddress!=null&&typeof _1d.centerAddress==="string"){
_23.geoCodeAddr=_1d.centerAddress;
_23.marker.address=_1d.centerAddress;
}else{
_23.lat=_1d.centerLatitude;
_23.lng=_1d.centerLongitude;
_23.marker.address=_1d.centerAddress;
}
var _24=false;
if(_10!=null&&typeof _10=="string"&&_10.toUpperCase()=="ADVANCED"){
_24=true;
}
var _25=new Ext.ux.GMapPanel({xtype:"gmappanel",region:"center",zoomLevel:_1d.zoomLevel,gmapType:_1d.type,mapConfOpts:_1f,mapControls:_20,setCenter:_23,markers:_21,border:!_1d.hideBorders,onLoadhandler:$MAP.onLoadCompleteHandler,onErrorhandler:$MAP.onErrorHandler,name:_1d.divName,noCenterMarker:!_d,showAllMarker:_e,advanceMapTypeControl:_24});
_1e.add(_25);
_1d.mapPanelObject=_25;
_1e.render();
ColdFusion.Log.info("map.initialized","widget",[_1]);
return _1e;
};
$MAP.addMarker=function(_26,_27){
var _28=$MAP.getMapPanelObject(_26);
var _29=$MAP.parseMarker(_27);
var _2a=[];
_2a.push(_29);
_28.addMarkers(_2a);
ColdFusion.Log.info("map.addmarker.markeradded","widget",[_26,_2a.length]);
};
$MAP.setCenter=function(_2b,_2c){
var _2d=$MAP.getMapPanelObject(_2b);
var lat;
var lng;
if(_2c.latitude&&_2c.longitude){
if(typeof _2c.latitude!="number"||typeof _2c.longitude!="number"){
ColdFusion.handleError(null,"map.setcenter.latlngnonnumeric","widget",[_2b,_2c.latitude,_2c.longitude],null,null,true);
}else{
lat=_2c.latitude;
lng=_2c.longitude;
}
var _30=new GLatLng(lat,lng);
_2d.getMap().setCenter(_30,_2d.zoomLevel,_2d.parsedMapType);
}else{
if(_2c.address){
if(typeof _2c.address!="string"){
ColdFusion.handleError(null,"map.setcenter.addressnotstring","widget",[_2b,_2c.address],null,null,true);
}else{
_2d.geoCodeLookup(_2c.address);
}
}else{
ColdFusion.handleError(null,"map.setcenter.invalidcenter","widget",[_2b],null,null,true);
}
}
ColdFusion.Log.info("map.setcenter.centerset","widget",[_2b]);
};
$MAP.getLatitudeLongitude=function(_31,_32){
geocoder=new GClientGeocoder();
if(_32==null||!typeof _32==="function"){
_32=$MAP.LatitudeLongitudeHanlder;
}
geocoder.getLatLng(_31,_32);
};
$MAP.addEvent=function(_33,_34,_35,_36){
var _37=$MAP.getMapPanelObject(_33);
_37.addEventToMap(_34,_35,_36);
};
$MAP.setZoomLevel=function(_38,_39){
var _3a=$MAP.getMapPanelObject(_38);
_3a.zoomLevel=_39;
_3a.getMap().setZoom(_39);
};
$MAP.getMapObject=function(_3b){
var _3c=$MAP.getMapPanelObject(_3b);
if(_3c!=null){
return _3c.getMap();
}
};
$MAP.parseMarker=function(_3d){
var _3e={};
if(_3d.latitude&&_3d.longitude){
if(typeof _3d.latitude!="number"||typeof _3d.longitude!="number"){
ColdFusion.handleError(null,"map.marker.latlngnonnumeric","widget",[_3d.latitude,_3d.longitude],null,null,true);
}else{
_3e.lat=_3d.latitude;
_3e.lng=_3d.longitude;
}
}else{
if(_3d.address!=null){
if(typeof _3d.address!="string"){
ColdFusion.handleError(null,"map.marker.addressnotstring","widget",[_3d.address],null,null,true);
}else{
_3e.address=_3d.address;
}
}
}
var _3f={};
if(_3d.tip==null){
_3f.title=" ";
}else{
_3f.title=_3d.tip;
}
if(_3d.markercolor!=null&&typeof _3d.markercolor!="undefined"){
_3f.markercolor=_3d.markercolor;
}else{
if(_3d.markericon!=null&&typeof _3d.markericon!="undefined"){
_3f.markericon=_3d.markericon;
}
}
if(_3d.markerbindlistener!=null||_3d.markerwindowcontent!=null){
_3e.listeners={click:$MAP.markerOnClickHandler};
_3f.bindcallback=_3d.markerbindlistener;
_3f.markerwindowcontent=_3d.markerwindowcontent;
_3f.name=_3d.name;
}
_3e.marker=_3f;
return _3e;
};
$MAP.parseControlProperties=function(_40,_41,_42,_43){
var _44=["NonExistantControl"];
if(_40){
_44.push("GScaleControl");
}
if(_42&&_42.toUpperCase()=="BASIC"){
_44.push("GMapTypeControl");
}else{
if(_42&&_42.toUpperCase()=="ADVANCED"){
_44.push("GMenuMapTypeControl");
}
}
if(_41){
_44.push("GOverviewMapControl");
}
if(_43!=null&&_43!="undefined"){
_43=_43.toUpperCase();
switch(_43){
case "SMALL":
_44.push("GSmallMapControl");
break;
case "SMALL3D":
_44.push("GSmallZoomControl3D");
break;
case "LARGE":
_44.push("GLargeMapControl");
break;
case "LARGE3D":
_44.push("GLargeMapControl3D");
break;
}
}
return _44;
};
$MAP.onErrorHandler=function(_45,_46){
var _47=ColdFusion.objectCache[_45];
var _48=$MAP.statusCodeObject;
var _49=$MAP.retrieveStatueMessage(_46);
var _4a=_47.onError;
if(_4a!=null&&typeof _4a==="function"){
_4a.call(null,_46,_49);
}else{
alert("Error: "+_49);
}
ColdFusion.handleError(null,"map.loadMap.error","map",[_45,_46,_49],null,null,true);
};
$MAP.onLoadCompleteHandler=function(_4b){
var _4c=ColdFusion.objectCache[_4b];
var _4d=_4c.onLoad;
if(_4d!=null&&typeof _4d==="function"){
_4d.call();
}
};
$MAP.retrieveStatueMessage=function(_4e){
var _4f;
switch(_4e){
case 200:
_4f=$MAP.statusCodeObject.code200;
break;
case 400:
_4f=$MAP.statusCodeObject.code400;
break;
case 500:
_4f=$MAP.statusCodeObject.code500;
break;
case 601:
_4f=$MAP.statusCodeObject.code601;
break;
case 602:
_4f=$MAP.statusCodeObject.code602;
break;
case 603:
_4f=$MAP.statusCodeObject.code603;
break;
case 604:
_4f=$MAP.statusCodeObject.code604;
break;
case 610:
_4f=$MAP.statusCodeObject.code610;
break;
case 620:
_4f=$MAP.statusCodeObject.code620;
break;
}
return _4f;
};
$MAP.markerOnClickHandler=function(_50){
coldFusion_markerObjCache[this.name]=this.marker;
if(this.bindcallback!=null&&typeof this.bindcallback=="function"){
var _51=this.address;
if(_51==null||typeof _51=="undefined"){
_51="";
}
this.bindcallback.call(null,this.name,_50.lat(),_50.lng(),_51);
}else{
if(this.statictext!=null&&typeof this.statictext!="undefined"){
this.marker.openInfoWindowHtml(this.statictext);
}
}
};
ColdFusion.Map.loadMarkerWindowInfo=function(_52,_53){
var _54=coldFusion_markerObjCache[_53._cf_marker_name];
_54.openInfoWindowHtml(_52+"");
};
ColdFusion.Map.bindOnErrorHandler=function(_55,_56){
ColdFusion.handleError(null,"map.markerbind.binderror","widget",[_55],null,null,true);
};
$MAP.getMapPanelObject=function(_57){
var _58=ColdFusion.objectCache[_57];
if(_58==null||typeof (_58)=="undefined"){
ColdFusion.handleError(null,"map.getmappanelobject.notfound","widget",[_57],null,null,true);
}
return _58.mapPanelObject;
};

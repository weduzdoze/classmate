$(function() {
$("#school").autocomplete({
	source: "model/mUser/qry_getSchools.cfm",
	minLength: 1
	});

$("#classSelector").autocomplete({
	source: "model/mAdmin/qry_getClasses.cfm",
	minLength: 1
	});
});
$(document).ready(function(){

	$('#newClassButton').click(function(e) {
		e.preventDefault();
		$('.classField').toggle();
		$('.sectionField').toggle();
		$('.classFieldSubmit').toggle();
		
	});

	$('#newSectionButton').click(function(e) {
		e.preventDefault();
		$('.sectionField').toggle();
		$('.classAndSectionField').toggle();
		$('.sectionFieldSubmit').toggle();
	});
	
});


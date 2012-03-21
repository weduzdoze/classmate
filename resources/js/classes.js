$(document).ready(function() { 
    var options = {                      
		url: "/view/vClasses/classes.cfc?method=nameSearch&returnFormat=json",
		datatype: "html",
		method: "post",
		success: function(data){
				$("#searchResults").empty();
				$("#searchResultsHeader").show();
				results = JSON.parse(data)
				for (var i in results){		
					$('#searchResults').append("<div class='courseLinkName' id='" + (results[i].ID) + "'>" + (results[i].SUBJECTCODE) + " " + (results[i].COURSENUMBER)  + " - " + (results[i].TITLE) + "</div><div id='dialog"+ (results[i].ID) + "'></div><br />");		
				}
		}
    }; 
   $('#nameSearchForm').ajaxForm(options);  
    var options2 = {                      
		url: "/view/vClasses/classes.cfc?method=crnSearch&returnFormat=json",
		datatype: "html",
		method: "post",
		success: function(data){
				$("#searchResults").empty();
				$("#searchResultsHeader").show();
				results = JSON.parse(data)
				for (var i in results){		
					$('#searchResults').append("<div class='courseLinkCRN' data-id='" + (results[i].CRN)+ "' id='" + (results[i].ID) + "'>" + (results[i].SUBJECTCODE) + " " + (results[i].COURSENUMBER)  + " - " + (results[i].TITLE) + "</div><div id='dialog"+ (results[i].ID) + "'></div><br />");		
				}
		}
    }; 
   $('#crnSearchForm').ajaxForm(options2); 

}); 

$('.removeClass').live("click", function(){ 
	$.get('index.cfm?fuseaction=classes.remove&UCrelationID=' + this.id);
	$('#li' + this.id).remove();
})

$(".courseLinkName").live("click", function(){ 
	var referrer = this.id;
	$('#dialog' + referrer).dialog({
            open: function ()
            {
                $(this).load('index.cfm?fuseaction=classes.course&courseID=' + referrer);
            },         
            height: 500,
            width: 400
        });
})
$(".courseLinkCRN").live("click", function(){ 
	var referrer = this.id;
	var crn = $(this).data('id');
	$('#dialog' + referrer).dialog({
            open: function ()
            {
                $(this).load('index.cfm?fuseaction=classes.course&CRN=' + crn);
            },         
            height: 500,
            width: 400
        });
})

$('.addClass').click(function(){
	var id = this.id;
	$.ajax({
		url: "index.cfm?fuseaction=classes.add&sectionID=" + this.id,
		context: document.body,
		success: function(){
			$('#div' + id).text("Class Added");
			$('#myClasses').empty();
			$.ajax({
				url:"/view/vClasses/dsp_myClasses.cfm",
				context: document.body,
				success: function(data){
					$("#myClasses").append(data);
				} 
			})
		}
	})	
})

function getClasses() {
    var instance = new proxy();
    instance.setCallbackHandler(getClassesSuccess);
    instance.getClasses();
}

function getClassesSuccess(results){
	$("#myClasses").empty();
	for (var i in results){		
	$('#myClasses').append("<li id='li" + (results[i].ID) +"'><button class='removeClass' id='" + (results[i].ID) + "'>Remove</button>" + (results[i].SUBJECTCODE) + " " + (results[i].COURSENUMBER)  + " - " + (results[i].TITLE)+ " " + (results[i].CRN) + "</li>");		
	}	
} 	
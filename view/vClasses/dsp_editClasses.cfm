<cfajaxproxy cfc="classes" jsclassname="proxy" />
<div id="editClassesContainer">
<div id="classLookup">
	<h2>Lookup Classes to Add</h2>	
 <fieldset id="nameSearchFieldset"> 									
	<legend>Name</legend>								
	<form id="nameSearchForm" name="nameSearchForm" method="post">
		<input id="name" type="text" name="searchString">		
		<input name="nameSearchSubmit" id="nameSearch" type="submit">
	</form>
</fieldset>				
	<br/>OR<br />	<br />			
<fieldset id="crnSearchFieldset">
	<legend>CRN</legend>
    <form name="crnSearchForm" id="crnSearchForm" method="post">
		<input id="crn" type="text" name="crn" maxlength="5" required="true">
		<input name="crnSearchSubmit" id="crnSearch" type="submit">
	</form>	
</fieldset>
<div id="searchResultsHeader" style="display:none;">
	<h2>Search Results</h2>	
</div>
								
</div>

<div id="myClassContainer">
<h2>My Classes</h2>	
	<ul>
		<div id="myClasses">			
		</div>
	</ul>
</div>	

<div id="searchResults">
</div>
</div>	
<script type="text/javascript">
	$(document).ready(function(){
   		$('#myClasses').load('/view/vClasses/dsp_myClasses.cfm');
		
		$('#nameSearchForm').validate({
			rules: {
				searchString: {
					required: true
				}
			},
			messages: {
				searchString: {
					required: "Please enter a name."
				}
			}
		});			
 	});
</script>
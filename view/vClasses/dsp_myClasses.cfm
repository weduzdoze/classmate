<cfscript>	
	myClasses = createObject("component", "classes");
    results = myClasses.getClasses();	
</cfscript>
<div id="searchResultsContainer">	
<cfoutput>
<cfloop from="1" to="#arrayLen(results)#" index="i">
	<li id='li#results[i].ID#'><button class='removeClass' id='#(results[i].ID)#'>Remove</button><a href="index.cfm?fuseaction=classes.view&classID=#results[i].SECTIONID#">#results[i].SUBJECTCODE# #results[i].COURSENUMBER#  #results[i].TITLE# (#results[i].CRN#)</a></li>			
</cfloop>
</cfoutput>
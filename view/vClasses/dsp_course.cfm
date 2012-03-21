<cfparam name="url.courseID" default="">
<cfif len(trim(url.courseID))>
	<div id="courseInfo">
	<cfoutput query="courseInfo">
		<h2>
			Course: #subjectCode# - #courseNumber#<br />
			Title: #title# <br />
		</h2>
	</cfoutput>
	</div>
	<cfif getSections.recordCount GTE 1>
	<div id="sections">
		<h2>Sections</h2>
		<cfoutput query="getSections">
			CRN: #CRN#<br />
			Section Number: #sectionNumber#<br >
			Days: #days#<br >
			Starts: #timeFormat(starttime)#<br >
			Ends: #timeFormat(endTime)#<br >
			Teacher: #teacher#<br /><br >
			<div id="div#getSections.ID#"><button class="addClass" id="#getSections.ID#" data-id="#courseInfo.id#">Add</button></div><br /><br />
		</cfoutput>
	</div>
	<cfelse>
		No sections found.
	</cfif>
<cfelse>
	<div id="courseInfo">
	<cfoutput query="courseInfo">
		<h2>
			Course: #subjectCode# - #courseNumber#<br />
		</h2>	
			Title: #title# <br />		
			CRN: #crn#<br />
			Starts: #timeFormat(starttime)#<br />
			Ends: #timeFormat(endtime)#<br />
			Days: #days#<br />
			Teacher: #teacher#</br>
			<div id="div#courseInfo.ID#"><button class="addClass" id="#courseInfo.ID#">Add</button></div><br /><br />			
		
	</cfoutput>
	</div>
</cfif>

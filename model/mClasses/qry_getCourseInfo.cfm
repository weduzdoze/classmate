<cfparam name="url.courseID" default="">
<cfif len(trim(url.courseID))>
	<cfquery name="courseInfo">
		SELECT * FROM classes
		WHERE ID = <cfqueryparam value="#url.courseID#">
	</cfquery>
	<cfquery name="getSections">		
		SELECT *
 	 	FROM sections 
		WHERE sections.ID NOT IN
		(SELECT sectionID FROM userClassRelation WHERE userID = <cfqueryparam value="#session.currentUser#">)
		AND classID = <cfqueryparam value="#url.courseID#">				
	</cfquery>
<cfelse>
	<cfquery name="courseInfo">
		SELECT subjectcode,coursenumber,title,crn,sectionnumber,days,starttime,endtime,teacher,sections.id FROM classes
		JOIN sections on sections.classid = classes.id
		WHERE sections.crn = <cfqueryparam value="#url.crn#">
	</cfquery>	
</cfif>


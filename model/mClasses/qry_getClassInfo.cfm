<cfquery name="getClassInfo">
	SELECT * FROM userClassRelation
	RIGHT JOIN sections
		ON userClassRelation.sectionID = sections.ID
	RIGHT JOIN classes
		ON sections.classID = classes.ID
	WHERE sectionID = <cfqueryparam value="#url.classID#">
	AND userID = <cfqueryparam value="#session.currentUser#">
</cfquery>

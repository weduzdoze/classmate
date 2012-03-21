<cfquery name="getClasses">
	SELECT * FROM userClassRelation
	JOIN sections
		ON userClassRelation.sectionID = sections.ID
	JOIN classes
		ON sections.classID = classes.ID
	WHERE userID = <cfqueryparam value="#session.currentUser#">
</cfquery>

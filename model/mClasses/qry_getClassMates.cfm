<cfquery name="getClassMates">
	SELECT * FROM userClassRelation
	JOIN account ON userClassRelation.userid = account.ID
	WHERE sectionID = <cfqueryparam value="#url.classID#">
</cfquery>
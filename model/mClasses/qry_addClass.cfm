<cfquery name="addClass">
	INSERT INTO userClassRelation
	(userID, sectionID)
	VALUES
	(<cfqueryparam value='#session.currentUser#'>,
	 <cfqueryparam value='#url.sectionID#'>)
</cfquery>
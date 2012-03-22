<cfquery name="saveNewAssignment">
	INSERT INTO assignments
	(
		[userID],
		[sectionID],
		[title],
		[longDescription],
		[dueDateTime]
	)
	VALUES
	(
		<cfqueryparam value="#session.currentUser#">,
		
	)
</cfquery>
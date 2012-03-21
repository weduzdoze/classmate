<cfquery name="getNewsNotifications">
	SELECT * FROM notifications 
	WHERE type = 2
	AND receiverID = <cfqueryparam value="#session.currentUser#">
</cfquery>
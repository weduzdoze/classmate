<cfquery name="getCommentNotifications">
	SELECT * FROM notifications 
	WHERE type = 1
	AND receiverID = <cfqueryparam value="#session.currentUser#">
</cfquery>
<cfquery name="removeClass">
	DELETE FROM userClassRelation
	WHERE ID = <cfqueryparam value="#attributes.UCrelationID#">
</cfquery>
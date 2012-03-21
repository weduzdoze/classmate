<cfquery name="checkUsername">
	SELECT ID FROM account
	WHERE username = <cfqueryparam value="#url.username#">
</cfquery>
<cfoutput>
	<cfif checkUsername.RecordCount GTE 1>false<cfelse>true</cfif>
</cfoutput>
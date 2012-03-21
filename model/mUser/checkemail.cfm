<cfquery name="checkEmail">
	SELECT ID FROM account
	WHERE email = <cfqueryparam value="#url.email#">
</cfquery>
<cfoutput>
	<cfif checkEmail.RecordCount GTE 1>false<cfelse>true</cfif>
</cfoutput>
<cfquery name="getValidPasswordReset">
	SELECT * FROM passwordReset
	WHERE validResetID = <cfqueryparam value="#attributes.passID#">
</cfquery>
<cfif getValidPasswordReset.recordCount>
	<cfquery name="updatePasswordToTemporary">
		UPDATE account
		SET password = <cfqueryparam value="#getValidPasswordReset.tempPass#">
		WHERE email = <cfqueryparam value="#attributes.email#">
	</cfquery>
</cfif>

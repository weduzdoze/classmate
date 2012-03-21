<cfparam name="request.passNoMatch" default="0">
<cfparam name="request.badTempPass" default="0">
<cfquery name="getTempPass">
	SELECT password FROM account WHERE password = <cfqueryparam value="#form.tempPass#">
</cfquery>
<cfif getTempPass.recordCount>
	
	<cfif form.newPass EQ form.confirmPass>
		<cfquery name="changePass">
			UPDATE account
			SET password = <cfqueryparam value="#hash(form.confirmPass, 'MD5')#">
			WHERE password = <cfqueryparam value="#getTempPass.password#">									 
		</cfquery>
	<cfelse>	
		<cfset request.passNoMatch = 1>
		<cfset request.msg = "Passwords do not match!">
	</cfif>
<cfelse>
	<cfset request.badTempPass = 1>
	<cfset request.msg = "Temporary Password Incorrect!">
</cfif>

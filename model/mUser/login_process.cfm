<cfparam name="session.isLoggedIn" default="false" />
<cfparam name="session.currentUser" default="" />
<cfif isDefined("form.login") OR isDefined("form.createAccount")>	
	<cfquery name="verify">
	   	SELECT *
	    FROM account
	    WHERE username = <cfqueryparam value="#username#">
	    AND	password = <cfqueryparam value="#hash(password, 'MD5')#">
	</cfquery>
</cfif>

<cfif isDefined("form.resetPassword")>
	<cfquery name="verify">
	   	SELECT *
	    FROM account
	    WHERE email = <cfqueryparam value="#attributes.email#">
	    AND password = <cfqueryparam value="#hash(attributes.confirmpass, 'MD5')#">
	</cfquery>	
</cfif>	

<cfif isDefined("form.login") OR isDefined("form.createAccount") OR isDefined("form.resetPassword")>
	<cfif verify.RecordCount>
		<cfset session.isLoggedIn = "True" />
		<cfset session.currentEmail = verify.email />
		<cfset session.currentUser = verify.ID />
		<cfset session.currentUserName = verify.username />
		<cfset session.currentSchool = verify.school />
			
		<cfquery name="updateLastLoginDateTime">
			UPDATE account
			SET lastLoginDatetime = #CreateODBCDateTime(Now())#
			WHERE ID = <cfqueryparam value="#session.currentUser#">	
		</cfquery>
	</cfif>
</cfif>
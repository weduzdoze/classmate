<cfparam name="session.isLoggedIn" default="false" />
<cfparam name="session.currentUser" default="" />
<cfsilent>
	<cfif right(cgi.script_name, Len("index.cfm")) NEQ "index.cfm" AND right(cgi.script_name, 3) NEQ "cfc">
		<cflocation url="index.cfm" addtoken="no">
	</cfif>
</cfsilent>
<cfsilent>
<cfapplication 
	name="classMate" 
	sessionmanagement="Yes" 					
	sessiontimeout="#CreateTimeSpan(0,0,5,0)#" 	
	clientmanagement="Yes">
<cfset request.dsn = "classMate">
</cfsilent>
   


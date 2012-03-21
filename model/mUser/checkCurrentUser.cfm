<cfif NOT (structKeyExists(session, 'currentUser') AND len(trim(session.currentUser)))>
	<cflocation addtoken="no" url="index.cfm?fuseaction=user.login" />
</cfif>
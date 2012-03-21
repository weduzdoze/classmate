<cfloop collection="#Session#" item="var">
	<cfset structdelete(session,var)>
</cfloop>
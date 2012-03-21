<cfsetting enablecfoutputonly="Yes">
<cfprocessingdirective pageencoding="utf-8">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisFuseaction = "create">
<cfset myFusebox.thisCircuit = "vUser">
<cfset myFusebox.thisFuseaction = "create">
<cfsavecontent variable="fusebox.layout">
<cftry>
<cfoutput><cfinclude template="..\view/vUser/dsp_newAccount.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("view/vUser/dsp_newAccount.cfm") ) EQ "view/vUser/dsp_newAccount.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse dsp_newAccount.cfm in circuit vUser which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
</cfsavecontent>
<cfset myFusebox.thisFuseaction = "create">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisFuseaction = "create">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisCircuit = "layout">
<cfset myFusebox.thisFuseaction = "layout">
<cfset myFusebox.thisCircuit = "mLayout">
<cfset myFusebox.thisFuseaction = "layout">
<cfset myFusebox.thisFuseaction = "layout">
<cfset myFusebox.thisCircuit = "layout">
<cfset myFusebox.thisCircuit = "vLayout">
<cfset myFusebox.thisFuseaction = "layout">
<cftry>
<cfoutput><cfinclude template="..\view/vLayout/dsp_layout.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("view/vLayout/dsp_layout.cfm") ) EQ "view/vLayout/dsp_layout.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse dsp_layout.cfm in circuit vLayout which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
<cfset myFusebox.thisFuseaction = "layout">
<cfset myFusebox.thisCircuit = "layout">
<cfset myFusebox.thisFuseaction = "layout">
<cfset myFusebox.thisCircuit = "layout">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisFuseaction = "create">
<cfsetting enablecfoutputonly="No">


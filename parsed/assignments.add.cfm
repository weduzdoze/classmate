<cfsetting enablecfoutputonly="Yes">
<cfprocessingdirective pageencoding="utf-8">
<cfset myFusebox.thisCircuit = "assignments">
<cfset myFusebox.thisFuseaction = "add">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisFuseaction = "checkUser">
<cfset myFusebox.thisCircuit = "mUser">
<cfset myFusebox.thisFuseaction = "checkUser">
<cftry>
<cfoutput><cfinclude template="..\model/mUser/checkCurrentUser.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("model/mUser/checkCurrentUser.cfm") ) EQ "model/mUser/checkCurrentUser.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse checkCurrentUser.cfm in circuit mUser which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
<cfset myFusebox.thisFuseaction = "checkUser">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisFuseaction = "add">
<cfset myFusebox.thisCircuit = "assignments">
<cfset myFusebox.thisCircuit = "vAssignments">
<cfset myFusebox.thisFuseaction = "add">
<cfsavecontent variable="fusebox.layout">
<cftry>
<cfoutput><cfinclude template="..\view/vAssignments/dsp_addAssignment.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("view/vAssignments/dsp_addAssignment.cfm") ) EQ "view/vAssignments/dsp_addAssignment.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse dsp_addAssignment.cfm in circuit vAssignments which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
</cfsavecontent>
<cfset myFusebox.thisFuseaction = "add">
<cfset myFusebox.thisCircuit = "assignments">
<cfset myFusebox.thisFuseaction = "add">
<cfset myFusebox.thisCircuit = "assignments">
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
<cfset myFusebox.thisCircuit = "assignments">
<cfset myFusebox.thisFuseaction = "add">
<cfsetting enablecfoutputonly="No">


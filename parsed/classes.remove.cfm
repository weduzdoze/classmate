<cfsetting enablecfoutputonly="Yes">
<cfprocessingdirective pageencoding="utf-8">
<cfset myFusebox.thisCircuit = "classes">
<cfset myFusebox.thisFuseaction = "remove">
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
<cfset myFusebox.thisFuseaction = "remove">
<cfset myFusebox.thisCircuit = "classes">
<cfset myFusebox.thisCircuit = "mClasses">
<cfset myFusebox.thisFuseaction = "remove">
<cftry>
<cfoutput><cfinclude template="..\model/mClasses/qry_removeClass.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("model/mClasses/qry_removeClass.cfm") ) EQ "model/mClasses/qry_removeClass.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse qry_removeClass.cfm in circuit mClasses which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
<cfset myFusebox.thisFuseaction = "remove">
<cfset myFusebox.thisCircuit = "classes">
<cfset myFusebox.thisFuseaction = "remove">
<cfset myFusebox.thisCircuit = "classes">
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
<cfset myFusebox.thisCircuit = "classes">
<cfset myFusebox.thisFuseaction = "remove">
<cfsetting enablecfoutputonly="No">


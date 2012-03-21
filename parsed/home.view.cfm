<cfsetting enablecfoutputonly="Yes">
<cfprocessingdirective pageencoding="utf-8">
<cfset myFusebox.thisCircuit = "home">
<cfset myFusebox.thisFuseaction = "view">
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
<cfset myFusebox.thisFuseaction = "view">
<cfset myFusebox.thisCircuit = "home">
<cfset myFusebox.thisCircuit = "mHome">
<cfset myFusebox.thisFuseaction = "view">
<cftry>
<cfoutput><cfinclude template="..\model/mHome/qry_getClasses.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("model/mHome/qry_getClasses.cfm") ) EQ "model/mHome/qry_getClasses.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse qry_getClasses.cfm in circuit mHome which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
<cfset myFusebox.thisFuseaction = "view">
<cfset myFusebox.thisCircuit = "home">
<cfset myFusebox.thisCircuit = "vHome">
<cfset myFusebox.thisFuseaction = "view">
<cfsavecontent variable="fusebox.layout">
<cftry>
<cfoutput><cfinclude template="..\view/vHome/dsp_home.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("view/vHome/dsp_home.cfm") ) EQ "view/vHome/dsp_home.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse dsp_home.cfm in circuit vHome which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
</cfsavecontent>
<cfset myFusebox.thisFuseaction = "view">
<cfset myFusebox.thisCircuit = "home">
<cfset myFusebox.thisFuseaction = "view">
<cfset myFusebox.thisCircuit = "home">
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
<cfset myFusebox.thisCircuit = "home">
<cfset myFusebox.thisFuseaction = "view">
<cfsetting enablecfoutputonly="No">


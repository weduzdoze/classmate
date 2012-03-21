<cfsetting enablecfoutputonly="Yes">
<cfprocessingdirective pageencoding="utf-8">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisFuseaction = "logout">
<cfset myFusebox.thisCircuit = "mUser">
<cfset myFusebox.thisFuseaction = "logout">
<cftry>
<cfoutput><cfinclude template="..\model/mUser/logout_process.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("model/mUser/logout_process.cfm") ) EQ "model/mUser/logout_process.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse logout_process.cfm in circuit mUser which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisFuseaction = "login">
<cfset myFusebox.thisCircuit = "mUser">
<cfset myFusebox.thisFuseaction = "getSiteParams">
<cftry>
<cfoutput><cfinclude template="..\model/mUser/qry_getSiteParams.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("model/mUser/qry_getSiteParams.cfm") ) EQ "model/mUser/qry_getSiteParams.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse qry_getSiteParams.cfm in circuit mUser which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
<cfset myFusebox.thisFuseaction = "login">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisCircuit = "mUser">
<cfset myFusebox.thisFuseaction = "login">
<cftry>
<cfoutput><cfinclude template="..\model/mUser/login_process.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("model/mUser/login_process.cfm") ) EQ "model/mUser/login_process.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse login_process.cfm in circuit mUser which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
<cfset myFusebox.thisFuseaction = "login">
<cfset myFusebox.thisCircuit = "user">
<cfif session.isLoggedIn>
<cfset getPageContext().forward("/index.cfm?fuseaction=home.view")>
<cfabort>
<cfelse>
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisFuseaction = "index">
<cfset myFusebox.thisCircuit = "mUser">
<cfset myFusebox.thisFuseaction = "getSiteParams">
<cftry>
<cfoutput><cfinclude template="..\model/mUser/qry_getSiteParams.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("model/mUser/qry_getSiteParams.cfm") ) EQ "model/mUser/qry_getSiteParams.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse qry_getSiteParams.cfm in circuit mUser which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
<cfset myFusebox.thisFuseaction = "index">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisCircuit = "vUser">
<cfset myFusebox.thisFuseaction = "login">
<cfsavecontent variable="fusebox.layout">
<cftry>
<cfoutput><cfinclude template="..\view/vUser/dsp_login.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("view/vUser/dsp_login.cfm") ) EQ "view/vUser/dsp_login.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse dsp_login.cfm in circuit vUser which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
</cfsavecontent>
<cfset myFusebox.thisFuseaction = "index">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisFuseaction = "login">
<cfset myFusebox.thisCircuit = "user">
</cfif>
<cfset myFusebox.thisFuseaction = "logout">
<cfset myFusebox.thisCircuit = "mUser">
<cfset myFusebox.thisFuseaction = "logout">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisFuseaction = "logout">
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
<cfset myFusebox.thisFuseaction = "logout">
<cfsetting enablecfoutputonly="No">


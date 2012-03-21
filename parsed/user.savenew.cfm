<cfsetting enablecfoutputonly="Yes">
<cfprocessingdirective pageencoding="utf-8">
<cfset myFusebox.thisCircuit = "user">
<cfset myFusebox.thisFuseaction = "saveNew">
<cfset myFusebox.thisCircuit = "mUser">
<cfset myFusebox.thisFuseaction = "saveNew">
<cftry>
<cfoutput><cfinclude template="..\model/mUser/act_createAccount.cfm"></cfoutput>
<cfcatch type="missingInclude">
<cfif Right(cfcatch.missingFilename, len("model/mUser/act_createAccount.cfm") ) EQ "model/mUser/act_createAccount.cfm">
<cfthrow type="fusebox.missingFuse" message="missing Fuse" detail="You tried to include a fuse act_createAccount.cfm in circuit mUser which does not exist.">
<cfelse>
<cfrethrow>
</cfif>
</cfcatch>
</cftry>
<cfset myFusebox.thisFuseaction = "saveNew">
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
<cfset myFusebox.thisFuseaction = "saveNew">
<cfset myFusebox.thisCircuit = "user">
<cfset getPageContext().forward("/index.cfm?fuseaction=home.view")>
<cfabort>
<cfset myFusebox.thisFuseaction = "saveNew">
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
<cfset myFusebox.thisFuseaction = "saveNew">
<cfsetting enablecfoutputonly="No">


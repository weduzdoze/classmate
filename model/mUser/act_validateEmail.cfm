<cfparam name="request.emailExists" default="1" />
<cfparam name="temporarypass" default="" />
<cfparam name="resetPassID" default="" />
<cfquery name="verifyEmail">
	   	SELECT email
	    FROM account
	    WHERE email = <cfqueryparam value="#form.email#">
</cfquery>
<cfif NOT verifyEmail.recordCount>
	<cfset request.emailExists = 0 />
	<cfset request.msg = "No account with that email." />
<cfelse>
	<cfset resetPassID = CreateUUID()>
	<cfset stringLength = 10>
	<cfset stringList = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z">
	<cfset temporarypass = "">	
	<cfloop from="1" to="#stringLength#" index="i">
		<cfset rndNum = RandRange(1, listlen(stringList))>
		<cfset temporarypass = temporarypass & listgetat(stringlist,#rndNum#)>
	</cfloop>
	<cfquery name="addValidPassReset">
		INSERT INTO passwordReset
		(
			validResetID,
			tempPass
		)
		VALUES
		(
			<cfqueryparam value="#resetPassID#">,
			<cfqueryparam value="#temporarypass#">
		)
	</cfquery>
	<cfmail server="smtp.gmail.com"
	    username="winbuddie@gmail.com"
	    password="#session.emailServerPass#"
	    port="465"
	    useSSL="true"
	    to="#form.email#"
	    from="winbuddie@gmail.com"
	    subject="WinBuddie Password Reset"
		type="html" >
	<h2>Important!</h2>
	<h3>You have successfully reset your password. Your temporary password is: </h3> 
	<h2>#temporarypass#</h2>
	<h3><a href="http://www.winbuddie.com/index.cfm?fuseaction=user.tempPass&email=#form.email#&passID=#resetPassID#">Reset Password</a></h3>
	<h5>(The WinBuddie Staff)</h5>
	</cfmail>
</cfif>
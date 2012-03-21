<cfquery name="addUser">
	SET ROWCOUNT 1
	INSERT INTO account
    (
       [username]
       ,[email]
       ,[school]
       ,[password]
     )
 	VALUES(
       <cfqueryparam value="#attributes.username#">,
	   	<cfqueryparam value="#attributes.email#">,
		(SELECT ID from schools WHERE name = <cfqueryparam value="#attributes.school#">),
		<cfqueryparam value="#hash(attributes.password, 'MD5')#">
		)
</cfquery>


<!---


ConfirmationEmail


<cfquery name="verifyNewAccount">
   	SELECT *
    FROM account
    WHERE username = <cfqueryparam value="#attributes.username#">
    AND	 password = <cfqueryparam value="#hash(attributes.password, 'MD5')#">
</cfquery>

<cfif verifyNewAccount.recordCount>	  
	<cfmail server="smtp.gmail.com"
	    username="winbuddie@gmail.com"
	    password="#session.emailServerPass#"
	    port="465"
	    useSSL="true"
	    to="#verifyNewAccount.email#"
	    from="winbuddie@gmail.com"
	    subject="Welcome to WinBuddie"
		type="html" >
	<h2>Congratulations!</h2>
	<h3>#verifyNewAccount.firstname# #verifyNewAccount.lastname#, you have successfully created your WinBuddie account.</h3> 
	<h4>Visit http://www.winbuddie.com to login.</h4>
	<h5>(The WinBuddie Staff)</h5>
	</cfmail>
	<cfmail server="smtp.gmail.com"
	    username="winbuddie@gmail.com"
	    password="#session.emailServerPass#"
	    port="465"
	    useSSL="true"
	    to="weduzdoze@gmail.com"
	    from="winbuddie@gmail.com"
	    subject="New User"
		type="html" >
	<h2>New User has Signed Up!</h2>
	<h3>#verifyNewAccount.firstname# #verifyNewAccount.lastname#</h3> 
	<h4>#verifyNewAccount.username#</h4>
	<h5>(The WinBuddie Staff)</h5>
	</cfmail>
</cfif>
--->

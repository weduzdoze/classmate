<cfparam name="fusebox.layout" default="" />
<cfparam name="request.msg" default="" />
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<link rel="stylesheet" type="text/css" href="/resources/css/main.css" />
	<link rel="stylesheet" type="text/css" href="/resources/css/styles.css" />
	<link rel="stylesheet" type="text/css" href="/resources/css/jquery-ui-1.8.17.custom.css" />	
	
<cfif myfusebox.originalfuseaction NEQ "course">	
	<script type="text/javascript" src="/resources/js/jquery-1.7.1.min.js"></script> 
	<script type="text/javascript" src="/resources/js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="/resources/js/jquery-ui-timepicker-addon.js"></script>
	<script type="text/javascript" src="/resources/js/jquery-ui-sliderAccess.js"></script>	
	<script type="text/javascript" src="/resources/js/jquery.autocomplete.js"></script>
	<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>	
	<script type="text/javascript" src="/resources/js/jquery.form.js"></script>	
</cfif>
		
</head>
<cfif myfusebox.originalfuseaction NEQ "course" AND myfusebox.originalcircuit NEQ "user">
<a href="index.cfm?fuseaction=home.view">Home</a><br />
<a href="index.cfm?fuseaction=user.logout">Logout (<cfoutput>#session.currentUsername#</cfoutput>)</a><br />
<a href="index.cfm?fuseaction=assignments.add">Add Assignment</a>
</cfif>
<body>
	<cfif len(request.msg)>
		<cfoutput><div class="msg">#request.msg#</div></cfoutput>
	</cfif>
	<cfoutput>#fusebox.layout#</cfoutput>
</body>			
				  	  
<div class="footer">

</div>			
<script type="text/javascript" src="/resources/js/classes.js"></script>	
</html>
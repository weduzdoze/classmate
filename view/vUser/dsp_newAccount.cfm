<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/redmond/jquery-ui.css">

<script type="text/javascript" src="/resources/js/jquery-ui.min.js"></script>

<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
<script type="text/javascript" src="/resources/js/createUser.js"></script>


<div class="wrapper" style="width:320px;">
<form id="createForm" method="post" action="index.cfm?fuseaction=user.saveNew">		
	<fieldset>	
	<legend>Create New Account</legend>
	<table>	
		<tr>					
			<th>
				<label for="username">Username:</label>
			</th>
			<td>
				<input id="username" type="text" required="true"  name="username" ><div id="badUsername"class="validationError" style="display:none">Username already in use.</div>
			</td>
		</tr>
		<tr>
			<th>
				<label for="email">Email:</label>
			</th>			
			<td>				
				<input id="email" type="email" required="true" name="email"><div id="badEmail" class="validationError" style="display:none">Email already in use.</div>											
			</td>	
		</tr>
		<tr>
			<th>
				<label for="school">School:</label>
			</th>
			<td>				
				<input type="text" id="school" name="school">
			</td>
		</tr>
		<tr>
			<th>
				<label for="password">Password:</label>	
			</th>
			<td>				
				<input type="password" id="password" name="password" required="true" minlength="5">				
			</td>
		</tr>	
		<tr>
			<th>
				<label for="confirm">Confirm:</label>
			</th>
			<td>			
				<input type="password" id="confirm" name="confirm" required="true">
			</td>
		</tr>	
	</table>			
	</fieldset>
	<button id="create" name="createAccount">Create Account</button>
</form>
<div class="cancelLink"><a href="index.cfm?fuseaction=user.login">Cancel</a></div>
</div>
<cfhtmlhead text="<title>Create Account</title>">
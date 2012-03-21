<div class="wrapper">
	<h1>Login</h1>
	<form id="login" name="login" method="post" action="index.cfm?fuseaction=user.login">
	<table class="basicTable">
	<tr>
		<th>Username:</th>
		<td><input type="text" required="true" name="username"></td>
	</tr>
	<tr>
		<th>Password:</th>
		<td><input type="password" onkeydown="if (event.keyCode == 13) submitform()" required="true" name="password"></td>
	</tr>
	<tr>
		<td>
			<input type="submit" name="login" value="Login">
		</td>
	</tr>
	</table>		
	</form>
	<br />
	<br />
			<div class="createAccountLink">
		<a href="index.cfm?fuseaction=user.create">New?</a></h3>
	</div>
	<div class="forgotPasswordLink">
		<a href="index.cfm?fuseaction=user.forgotPassword">Forgot Password?</a>
	</div>
</div>

<cfhtmlhead text="<title>#application.applicationName#</title>">

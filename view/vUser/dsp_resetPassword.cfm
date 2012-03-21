<cfoutput>
<img style="padding:10px;" src="/resources/logos/wblogo.png">
<div class="wrapper">
	<h1>Reset Password</h1>
	<form method="post" action="index.cfm?fuseaction=user.changePassword&email=#email#">
		<table class="basicTable">
			<tr>
				<th>Temporary Password:</th>
				<td><input type="password" name="tempPass"></td>
			</tr>
			<tr>
				<th>New Password:</th>
				<td><input type="password" name="newPass"></td>
			</tr>
			<tr>
				<th>Confirm:</th>
				<td><input type="password" name="confirmPass"></td>
			</tr>
		</table>
		<div class="btnContainer"><input type="submit" value="Reset" name="resetPassword"></div>		
	</form>
	<div class="cancelLink"><h4><a href="index.cfm?fuseaction=user.index">Cancel</a></h4></div>
</div>
</cfoutput>
<cfhtmlhead text="<title>Reset Password</title>">
<div class="wrapper">
	<h1>Reset Password</h1>
	<h3>Enter the email address you registered with.</h3>
	<form method="post" name="resetPass" action="index.cfm?fuseaction=user.validateEmail">
		<table class="basicTable">
			<tr>
				<th>Email</th>
				<td><input type="email" name="email"></td>
			</tr>
		</table>
		<div class="btnContainer"><input name="resetPass" type="submit" value="Reset"></div>
	</form>
	<div class="cancelLink"><h4><a href="index.cfm?fuseaction=user.index">Cancel</a></h4></div>
</div>
<cfhtmlhead text="<title>Reset Password</title>">
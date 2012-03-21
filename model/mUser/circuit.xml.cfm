<circuit access="public">
	<fuseaction name="checkUser">
		<include template="checkCurrentUser.cfm" />
	</fuseaction>	
	<fuseaction name="login">
		<include template="login_process.cfm" />
	</fuseaction>
	<fuseaction name="logout">
		<include template="logout_process.cfm" />
		<do action="user.login" />
	</fuseaction>
	<fuseaction name="saveNew">
		<include template="act_createAccount.cfm" />
	</fuseaction>
	<fuseaction name="tempPass">
		<include template="act_forgotPassword.cfm" />
	</fuseaction>
	<fuseaction name="validateEmail">
		<include template="act_validateEmail.cfm" />
	</fuseaction>
	<fuseaction name="passResetConfirm">
		
	</fuseaction>
	<fuseaction name="changePassword">
		<include template="act_changePassword.cfm" />
	</fuseaction>
	<fuseaction name="getSiteParams">
		<include template="qry_getSiteParams.cfm" />
	</fuseaction>
</circuit>
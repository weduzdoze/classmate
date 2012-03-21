<circuit access="public">
	<fuseaction name="login">
		<include template="dsp_login.cfm" />
	</fuseaction>
	<fuseaction name="logout">
		<include template="dsp_logoutConfirm.cfm" />
	</fuseaction>
	<fuseaction name="create">
		<include template="dsp_newAccount.cfm" />
	</fuseaction>
	<fuseaction name="forgotPassword">
		<include template="dsp_forgotPassword.cfm" />
	</fuseaction>
	<fuseaction name="passResetConfirm">
		<include template="dsp_emailSent.cfm" />
	</fuseaction>
	<fuseaction name="tempPass">
		<include template="dsp_resetPassword.cfm" />
	</fuseaction>
</circuit>
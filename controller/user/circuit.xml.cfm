<circuit access="public">
	<fuseaction name="index">
		<do action="mUser.getSiteParams" />
		<do action="vUser.login" contentvariable="fusebox.layout" />
	</fuseaction>
	<fuseaction name="checkUser">
		<do action="mUser.checkUser" />
	</fuseaction>
	<fuseaction name="login">
		<do action="mUser.getSiteParams" />
		<do action="mUser.login" />
		<if condition="session.isLoggedIn">
			<true>
				<relocate type="server" url="/index.cfm?fuseaction=home.view" />
			</true>
			<false>
				<do action="index" />
			</false>
		</if>
	</fuseaction>	
	<fuseaction name="logout">
		<do action="mUser.logout" />
	</fuseaction>
	<fuseaction name="create">
		<do action="vUser.create" contentvariable="fusebox.layout" />
	</fuseaction>
	<fuseaction name="saveNew">
		<do action="mUser.saveNew" />
		<do action="mUser.login" />
		<relocate type="server" url="/index.cfm?fuseaction=home.view" />
	</fuseaction>
	<fuseaction name="forgotPassword">
		<do action="vUser.forgotPassword" />
	</fuseaction>

	<fuseaction name="validateEmail">
		<do action="mUser.validateEmail" />	
		<if condition="request.emailExists">
			<true>
				<do action="user.passResetConfirm" />
			</true>
			<false>
				<do action="forgotPassword" />
			</false>
		</if>
	</fuseaction>	
	<fuseaction name="passResetConfirm">
		<do action="mUser.passResetConfirm" />
		<do action="vUser.passResetConfirm" />
	</fuseaction>
	<fuseaction name="tempPass">
		<do action="mUser.tempPass" />
		<do action="vUser.tempPass" contentvariable="fusebox.layout" />
	</fuseaction>
	<fuseaction name="changePassword">
		<do action="mUser.changePassword" />
		<if condition="request.badTempPass">
			<true>
				<set name="request.msg" value="" overwrite="false" />
				<do action="vUser.tempPass" contentvariable="fusebox.layout" />
			</true>
			<false>
				<do action="mUser.login" />
			</false>
		</if>
		<if condition="request.passNoMatch">
			<true>
				<set name="request.msg" value="" overwrite="false" />
				<do action="vUser.tempPass" contentvariable="fusebox.layout" />
			</true>
			<false>
				<do action="user.login" />
			</false>
		</if>		
	</fuseaction>
</circuit>
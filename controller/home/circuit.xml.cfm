<circuit access="public">
	<prefuseaction>
		<do action="user.checkUser" />
	</prefuseaction>
	<fuseaction name="view">
		<do action="mHome.view" />
		<do action="vHome.view" contentvariable="fusebox.layout"/>
	</fuseaction>
</circuit>
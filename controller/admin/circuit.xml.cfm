<circuit access="public">
	<prefuseaction>
		<do action="user.checkUser" />
	</prefuseaction>
	<fuseaction name="add">
		
		<do action="vAdmin.add" contentvariable="fusebox.layout"/>
	</fuseaction>
	<fuseaction name="saveNew">
		<do action="mAdmin.saveNew" />
		<do action="vAdmin.add" contentvariable="fusebox.layout"/>
	</fuseaction>	
</circuit>

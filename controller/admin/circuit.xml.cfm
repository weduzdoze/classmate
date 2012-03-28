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
	<fuseaction name="query">
		<do action="vAdmin.query" contentvariable="fusebox.layout"/>
	</fuseaction>
	<fuseaction name="executeQuery">
		<do action="mAdmin.executeQuery" />
		<do action="vAdmin.executeQuery"  />
	</fuseaction>	
</circuit>

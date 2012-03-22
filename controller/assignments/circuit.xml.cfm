<circuit access="public">
	<prefuseaction>
		<do action="user.checkUser" />
	</prefuseaction>
	<fuseaction name="add">
		<do action="vAssignments.add" contentvariable="fusebox.layout"/>
	</fuseaction>
	<fuseaction name="saveNew">
		<do action="mAssignments.saveNew" />
	</fuseaction>
</circuit>
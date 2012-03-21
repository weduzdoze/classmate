<circuit access="public">
	<prefuseaction>
		<do action="user.checkUser" />
	</prefuseaction>
	<fuseaction name="edit">
		<do action="mClasses.edit" />
		<do action="vClasses.edit" contentvariable="fusebox.layout"/>
	</fuseaction>
	<fuseaction name="course">
		<do action="mClasses.course" />
		<do action="vClasses.course" contentvariable="fusebox.layout"/>
	</fuseaction>
	<fuseaction name="add">
		<do action="mClasses.add" />
	</fuseaction>
	<fuseaction name="remove">
		<do action="mClasses.remove" />
	</fuseaction>
	<fuseaction name="view">
		<do action="mClasses.view" />
		<do action="vClasses.view" contentvariable="fusebox.layout"/>
	</fuseaction>
</circuit>

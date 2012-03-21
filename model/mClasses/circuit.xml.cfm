<circuit access="public">
	<fuseaction name="edit">
		<include template="../mHome/qry_getClasses.cfm" />
	</fuseaction>
	<fuseaction name="course">
		<include template="qry_getCourseInfo.cfm" />
	</fuseaction>
	<fuseaction name="add">
		<include template="qry_addClass.cfm" />
	</fuseaction>	
	<fuseaction name="remove">
		<include template="qry_removeClass.cfm" />
	</fuseaction>
	<fuseaction name="view">
		<include template="qry_getClassInfo.cfm"/>
		<include template="qry_getClassMates.cfm" />
	</fuseaction>
</circuit>
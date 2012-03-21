<cfoutput>
<h1>Welcome<br />#session.currentusername#!</h1>
</cfoutput>
<div id="myClasses">
	<h2>Currently Enrolled In:</h2>
	<ul>
	<cfoutput query="getClasses">
		<li>
			<a href="index.cfm?fuseaction=classes.view&classID=#getClasses.sectionID#">#getClasses.subjectCode#-#getClasses.courseNumber# - #getClasses.title# (#getClasses.crn#)</a>
		</li>
	</cfoutput>
	</ul>
	<a href="index.cfm?fuseaction=classes.edit">Edit Classes</a>
</div>

<div id="recentActivity">
	<h2>Recent Activity</h2>
</div>

<div id="classmates">
	<h2>My Classmates</h2>
</div>

<div id="comments">
	<h2>Comments</h2>
</div>

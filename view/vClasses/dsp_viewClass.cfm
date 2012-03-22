<h2>
	<cfoutput query="getClassInfo">
		#subjectcode#-#coursenumber#: #title# (#crn#)<br />
		#days# #timeFormat(starttime)# - #timeFormat(endtime)#
	</cfoutput>
</h2>
<div id="navTabs">
	<ul>
		<li><a href="#classmates">Classmates</a></li>
		<li><a href="#homework">Homework</a></li>
		<li><a href="#notes">Notes</a></li>
		<li><a href="#discussion">Class Discussion</a></li>
		<li><a href="#tests">Tests</a></li>		
	</ul>
	<div id="classmates">
		<h3>
			ClassMates
		</h3>
		<h4>
			<ul>
				<cfoutput query="getClassMates">
					<li>#getClassMates.username#</li>
				</cfoutput>	
			</ul>		
		</h4>		
	</div>
	<div id="homework">
		Homework
	</div>
	<div id="notes">
		Notes
	</div>
	<div id="discussion">
		Discussion
	</div>
	<div id="tests">
		Tests
	</div>
</div>	
<script type="text/javascript">
	$(document).ready(function(){
		$("#navTabs").tabs();
	})
</script>
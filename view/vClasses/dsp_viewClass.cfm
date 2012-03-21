<h2>
	<cfoutput query="getClassInfo">
		#subjectcode#-#coursenumber#: #title# (#crn#)<br />
		#days# #timeFormat(starttime)# - #timeFormat(endtime)#
	</cfoutput>
</h2>
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
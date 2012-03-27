<cfif structKeyExists(form,"addSection")>
	<cfquery name="checkSectionExists">
		SELECT * FROM sections
		WHERE CRN = <cfqueryparam value="#form.CRN#">
		AND sectionNumber = <cfqueryparam value="#form.sectionNumber#">
	</cfquery>
	<cfif checkSectionExists.recordCount EQ 0>
		<cfquery name="addSection">
			INSERT INTO sections
			(
				CRN,
				sectionNumber,
				days,
				startTime,
				endTime,
				classID,
				teacher
			)
			VALUES
			(
				<cfqueryparam value="#form.CRN#">,
				<cfqueryparam value="#form.sectionNumber#">,
				<cfqueryparam value="#form.days#">,
				<cfqueryparam value="#form.startTime#">,
				<cfqueryparam value="#form.endTime#">,
				(SELECT ID from classes WHERE title = <cfqueryparam value="#form.classSelector#">),
				<cfqueryparam value="#form.teacher#">
			)
		</cfquery>
		Section Added.<br />
	<cfelse>
		Section already exists.<br />
	</cfif>
</cfif>
<cfif structKeyExists(form,"addClass")>
	<cfquery name="checkClassExists">
		SELECT * FROM classes 
		WHERE title = <cfqueryparam value="#form.title#">
	</cfquery>
	<cfif checkClassExists.recordCount EQ 0>
		<cfquery name="addClassAndSection">
			INSERT INTO Classes
			(
				subjectCode,
				courseNumber,
				title,
				schoolID
			)
			VALUES
			(
				<cfqueryparam value="#form.subjectCode#">,
				<cfqueryparam value="#form.courseNumber#">,
				<cfqueryparam value="#form.title#">,
				(SELECT ID from schools 
				 WHERE name = <cfqueryparam value="#form.school#">)
			)
			INSERT INTO sections
			(
				CRN,
				sectionNumber,
				days,
				startTime,
				endTime,
				classID,
				teacher
			)
			VALUES
			(
				<cfqueryparam value="#form.CRN#">,
				<cfqueryparam value="#form.sectionNumber#">,
				<cfqueryparam value="#form.days#">,
				<cfqueryparam value="#form.startTime#">,
				<cfqueryparam value="#form.endTime#">,
				(SELECT ID from classes WHERE title = <cfqueryparam value="#form.title#">),
				<cfqueryparam value="#form.teacher#">
			)
		</cfquery>
		Class Added.<br />
	<cfelse>
		Class already exists.<br />	
	</cfif>
</cfif>
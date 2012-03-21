<cfcomponent>
	<cffunction name="nameSearch" access="remote" returntype="Any">
		<cfargument name="searchString" required="true">
		<cfquery name="nameSearch">
			SELECT * from classes
			WHERE title LIKE <cfqueryparam value="%#searchString#%">
		</cfquery>
		<cfset results = arrayNew(1)>
		<cfloop query="nameSearch">
			<cfscript>
				nameSearchResults = createObject("component", "classes");
				nameSearchResults.id = nameSearch.ID;
				nameSearchResults.subjectCode = nameSearch.subjectCode;
				nameSearchResults.courseNumber = nameSearch.courseNumber;
				nameSearchResults.title = nameSearch.title;
				nameSearchResults.schoolID = nameSearch.schoolID;
				results[nameSearch.currentRow] = nameSearchResults;
			</cfscript>
		</cfloop>
		<cfreturn results>
	</cffunction>
		
	<cffunction name="crnSearch" access="remote">
		<cfargument name="crn" required="true">
		<cfquery name="crnSearch">
			SELECT * from sections			
			JOIN classes on sections.classID = classes.ID
			WHERE crn = <cfqueryparam value="#crn#">
		</cfquery>
		<cfset results = arrayNew(1)>
		<cfloop query="crnSearch">
			<cfscript>
				crnSearchResults = createObject("component", "classes");
				crnSearchResults.id = crnSearch.ID;
				crnSearchResults.crn = crnSearch.crn;
				crnSearchResults.subjectCode = crnSearch.subjectCode;
				crnSearchResults.courseNumber = crnSearch.courseNumber;
				crnSearchResults.title = crnSearch.title;
				crnSearchResults.schoolID = crnSearch.schoolID;
				results[crnSearch.currentRow] = crnSearchResults;
			</cfscript>
		</cfloop>
		<cfreturn results>
	</cffunction>
	
	<cffunction name="getClasses" access="remote">
		<cfquery name="getClasses">
			SELECT * FROM userClassRelation
			JOIN sections
				ON userClassRelation.sectionID = sections.ID
			JOIN classes
				ON sections.classID = classes.ID
			WHERE userID = <cfqueryparam value="#session.currentUser#">
		</cfquery>
		<cfset results = arrayNew(1)>
		<cfloop query="getClasses">
			<cfscript>
				classes = createObject("component", "classes");
				classes.id = getClasses.id;
				classes.sectionID = getClasses.sectionID;
				classes.subjectCode = getClasses.subjectcode;
				classes.coursenumber = getclasses.coursenumber;
				classes.title = getclasses.title;
				classes.crn = getclasses.crn;
				results[getclasses.currentrow] = classes;
			</cfscript>
		</cfloop>
		<cfreturn results>
	</cffunction>
</cfcomponent>
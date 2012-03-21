<cfset returnArray = ArrayNew(1) />

<cfquery name="schoolSearch">
	SELECT * FROM schools
	WHERE name LIKE <cfqueryparam value="%#url.term#%">
</cfquery>

<cfloop query="schoolSearch">
    <cfset schoolStruct = StructNew() />
    <cfset schoolStruct["label"] = name />
    <cfset ArrayAppend(returnArray,schoolStruct) />
</cfloop>

<cfoutput>
	#serializeJSON(returnArray)#
</cfoutput>

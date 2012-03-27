<cfset returnArray = ArrayNew(1) />

<cfquery name="schoolSearch">
	SELECT * FROM classes
</cfquery>

<cfloop query="schoolSearch">
    <cfset schoolStruct = StructNew() />
    <cfset schoolStruct["label"] = title />
    <cfset ArrayAppend(returnArray,schoolStruct) />
</cfloop>

<cfoutput>
	#serializeJSON(returnArray)#
</cfoutput>
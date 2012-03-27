<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/redmond/jquery-ui.css">
<script type="text/javascript" src="/resources/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery.validate.js"></script>
<script type="text/javascript" src="/resources/js/addClass.js"></script>
<style>
	.classField{
		display:none;
	}
	.sectionField{
		display:none;
	}
	.classAndSectionField{
		display:none;
	}
	.classFieldSubmit{
		display:none;
	}
	.sectionFieldSubmit{
		display:none;
	}
	#schoolSelector{
		width:300px;
	}
</style>
<div id="addClassContainer">
<form name="addClass" method="post" action="index.cfm?fuseaction=admin.saveNew">
<div id="schoolSelector">
	<label for="school">School:</label><input type="text" id="school" name="school">	
</div>
<table>
	<tr>
		<td><br /></td>
	</tr>
	<tr>
		<td><button id="newClassButton">New Class</button></td>
		<td><button id="newSectionButton">New Section</button></td>
	</tr>
	<tr>
		<td><br /></td>
	</tr>	
	<tr class="classField">
		<th><label for="subjectCode">Subject Code:</label></th>
		<td><input type="text" id="subjectCode" name="subjectCode"></td>
	</tr>
	<tr class="classField">
		<th><label for="courseNumber">Course Number:</label></th>
		<td><input type="number" id="courseNumber" name="courseNumber"></td>
	</tr>
	<tr class="classField">
		<th><label for="title">Title</label></th>
		<td><input type="text" id="title" name="title"></td>
	</tr>	
	<tr class="classAndSectionField">
		<th><label for="classSelector">Select Class:</label></th>
		<td><input type="text" id="classSelector" name="classSelector"</td>
	</tr>
	<tr class="sectionField">
		<th><label for="crn">CRN:</label></th>
		<td><input type="number" id="crn" name="crn" maxlength="5"></td>
	</tr>
	<tr class="sectionField">
		<th><label for="sectionNumber">Section Number:</label></th>
		<td><input type="number" id="sectionNumber" name="sectionNumber"></td>
	</tr>
	<tr class="sectionField">
		<th><label for="days">Days</label></th>
		<td><input type="text" id="days" name="days"></td>
	</tr>
	<tr class="sectionField">
		<th><label for="startTime">Start Time:</label></th>
		<td><input type="text" name="startTime" id="startTime"></td>
	</tr>	
	<tr class="sectionField">
		<th><label for="endTime">End Time:</label></th>
		<td><input type="text" name="endTime" id="endTime"></td>
	</tr>
	<tr class="sectionField">
		<th><label for="teacher">Teacher:</label></th>
		<td><input type="text" name="teacher" id="teacher"></td>
	</tr>	
	<tr class="sectionFieldSubmit">
		<th><input type="submit" name="addSection"></th>
	</tr>
	<tr class="classFieldSubmit">
		<th><input type="submit" name="addClass"></th>
	</tr>
</table>
</form>
</div>

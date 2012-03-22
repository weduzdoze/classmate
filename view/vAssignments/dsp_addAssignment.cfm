<h2>
	Add Assignment
</h2>
<fieldset>
<legend>
	New Assignment
</legend>
<form name="addAssignment" method="post" action="index.cfm?fuseaction=assignments.saveNew">
	<label for="title">Title:</label><input type="text" name="title" id="title"><br /><br />
	<label for="due">Due:</label><input type="text" name="due" id="due"><br /><br />
	<label for="summary">Summary:</label><textarea name="summary" id="summary"></textarea><br />
	<button name="add" id="addAssignment">Add</button>
</form>	
</fieldset>

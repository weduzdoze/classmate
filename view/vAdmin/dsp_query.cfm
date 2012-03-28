<script type="text/javascript">
$(document).ready(function() {  
    var options2 = {                      
		url: "/index.cfm?fuseaction=admin.executeQuery",
		datatype: "html",
		method: "post",
		success: function(data){
				$("#queryResults").html(data);
				}
	
		}
		 $('#queryForm').ajaxForm(options2); 
    });
</script>
<h2>Execute Query</h2>
<form method="post" name="queryForm" id="queryForm">
<textarea id="queryText" name="queryText" cols="50" rows="15"></textarea><br />
<button name="run" id="run">Run</button>
<h2>Results:</h2>
<div id="queryResults"></div>
</form>

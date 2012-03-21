function checkUsername(usr) {
    var ajaxRequest;
    try {
        ajaxRequest = new XMLHttpRequest();
    } catch (e) {
        try {
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Javascript error.");
                return false;
            }
        }
    }
    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == 4) {
            if (ajaxRequest.responseText == 1) {
                $("#badUsername").show();
                $("#username").val("");
                $("#username").focus();
            }
            else {
                $("#badUsername").hide();
            }
        }
    }
    ajaxRequest.open("GET", "model/mUser/checkusername.cfm?usr=" + usr, true);
    ajaxRequest.send(null);
}

function checkEmail(eml){
	var ajaxRequest;
	try {
		ajaxRequest = new XMLHttpRequest();
	} 
	catch (e) {
		try {
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} 
		catch (e) {
			try {
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} 
			catch (e) {
				alert("Javascript error.");
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.responseText == 1) {
				$("#badEmail").show();
				$("#email").val("");
				$("#email").focus();
			}
			else {
				$("#badEmail").hide();
			}
		}
	}
	ajaxRequest.open("GET", "model/mUser/act_validateUser.cfm?eml=" + eml, true);
	ajaxRequest.send(null);
}



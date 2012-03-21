$(function() {
	$("#createForm").validate({

	rules: {
		username: {
			required: true,
			remote: "model/mUser/checkusername.cfm"				
			},
	email: {
		required: true,
		email: true,
		remote: "model/mUser/checkemail.cfm"
		},
	school: {
		required: true,
		minlength: 2
		},
	password: {
		required: true,
		minlength: 5,
		equalTo: "#confirm"
	},
	confirm: {
		required: true,
		minlength: 5
	}
},
messages: {
username: {
			required: "Please enter a name",
			remote: "Username already in use"
	      },
email: {
			required: "Invalid email (aaa@bbb.ccc)",
			remote: "Email already in use"
		},
school: "Please enter your school",
password: "Enter a password",
confirm: "Enter a password"
}
});

});

$(function() {
$("#school").autocomplete({
	source: "model/mUser/qry_getSchools.cfm",
	minLength: 1
	});
});
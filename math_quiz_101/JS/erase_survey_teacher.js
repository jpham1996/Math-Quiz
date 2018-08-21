// This file isn't necessary.  

function doSubmit() {
	if (validateFirstName() == false) {
		alert("Invalid first name.  ");
		return;
	}
	if (validateLastName() == false) {
		alert("Invalid last name.  ");
		return;
	}
	if (validateGender() == false) {
		alert("Invalid gender.  ");
		return;
	}
	if (validateAge() == false) {
		alert("Invalid age.  ");
		return;
	}
	if (validateSalary() == false {
		alert("Invalid salary.  ");
		return;
	}
	alert("Your survey result had been submitted.  ");
	return;
}

function validateFirstName() {
	var vFirst_Name = document.checking.First_Name.value;
	if (vFirst_Name.length == 0) { return false; }
}

function validateLastName() {
	var vLast_Name = document.checking.First_Name.value;
	if (vLast_Name.length == 0) { return false; }
}

function validateGender() {
	var vGender = document.checking.Gender.value;
	if (vGender.equalsIgnoreCase("Male") || 
		vGender.equalsIgnoreCase("Female") || 
		vGender.equalsIgnoreCase("Other") || ) { 
		return false; 
	}
}

function validateAge() {
	var vAge = document.checking.Age.value;
	if (vAge <= 0 || vAge >= 1000) { return false; }
}

function validateSalary() {
	var vAge = document.checking.Salary.value;
	if (vAge < 0) { return false; }
}

function doClear()
{
	document.checking.First_Name.value = "";
	document.checking.Last_Name.value = "";	
	document.checking.getElementById('Gender').innerText = null;
	document.checking.Age.value = "";
	document.checking.Salary.value = "";
	return;
}
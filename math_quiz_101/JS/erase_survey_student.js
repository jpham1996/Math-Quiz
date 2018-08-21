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
	if (validateGradeLevel() == false {
		alert("Invalid grade level.  ");
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

function validateGradeLevel {
	var vGrade_Level = document.checking.Grade_Level.value;
	if (vGrade_Level.equalsIgnoreCase("Pre-School") || 
		vGrade_Level.equalsIgnoreCase("1st Grade") || 
		vGrade_Level.equalsIgnoreCase("2nd Grade") || 
		vGrade_Level.equalsIgnoreCase("3rd Grade") || 
		vGrade_Level.equalsIgnoreCase("4th Grade") || 
		vGrade_Level.equalsIgnoreCase("5th Grade") || 
		vGrade_Level.equalsIgnoreCase("After 5th Grade") || ) { 
		return false; 
	}
}

function doClear()
{
	document.checking.First_Name.value = "";
	document.checking.Last_Name.value = "";	
	document.checking.getElementById('Gender').innerText = null;
	document.checking.Age.value = "";
	document.getElementById('Grade_Level').innerText = null;
	return;
}
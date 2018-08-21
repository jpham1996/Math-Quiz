<!DOCTYPE html>

<?php
			
include ('connect.php');		
			
error_reporting(0);
			
$firstname = $_POST['First_Name'] ;
$lastname = $_POST['Last_Name'] ;
$gender = $_POST['Gender'] ;
$age = $_POST['Age'] ;
$grade_level = $_POST['Grade_Level'] ;
$add_comment = $_POST['Add_Comment'] ;
			
if (!$_POST['submit']){
	// echo "All fields are required.  ";
}
else {
	// Comment out unnecessary error messages, but will use those in case if page doesn't run.  
	// Insert submitted information into a table called Survey_Student.  
	$sql = "INSERT into Survey_Student (First_Name, Last_Name, Gender, Age, Grade_Level, Add_Comment)
	values ('$firstname', '$lastname', '$gender', '$age', '$grade_level', '$add_comment') ";
	if (mysqli_query($conn, $sql)) {
		// echo "Data creation successful.  ";
	}
	else{
		// echo "Something went wrong, try later.  ";
	}
}

?>

<html>
<title>Student Survey</title>
<link rel="stylesheet" type="text/css" href="Styles/survey_styles.css">
<script type="text/javascript" src="JS/erase_survey_student.js"></script>
<body>

<form name="checking" action="survey_student.php"  method="POST">
	<h3>Please fill in the online survey.  Your answer will be stored in a database.  </h3>
	<p><b>* are required fields.  </b></p>
	<p>First Name<i>*</i>:  <input type="text" name="First_Name" required>&nbsp;&nbsp;
	Last Name<i>*</i>:  <input type="text" name="Last_Name" required></p>
	<p>Gender<i>*</i>:  <select name="Gender" required>
		<option value="male">Male</option>
		<option value="female">Female</option>
		<option value="other">Other</option>
	</select></p>
	<p>Age<i>*</i>:  <input type="number" name="Age" required></p>
	<p>Grade Level<i>*</i>:  <select name="Grade_Level" required>
		<option value="preschool">Pre-School</option>
		<option value="grade1">1st Grade</option>
		<option value="grade2">2nd Grade</option>
		<option value="grade3">3rd Grade</option>
		<option value="grade4">4th Grade</option>
		<option value="grade5">5th Grade</option>
		<option value="higher_ed">After 5th Grade</option>
	</select></p>
	<p>Additional Comment:  </p>  
	<p><input type="text" name="Add_Comment" class="more_comment"></p>
	
	<p><input type="submit" name="submit" value="Submit the Survey"></p>
	<p><input type="reset" value="Clear Entries"></p>
</form>
	
<p><form action="home.html"><input type="submit" value="Go Back" /></p>

</body>
</html>
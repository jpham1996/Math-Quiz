<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "survey"; 

// Database name is "survey", it will have two tables, student.sql and teacher.sql.  

// Create connection
$conn = new mysqli($dbhost, $dbuser, $dbpass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
// echo "Connected successfully";
?>
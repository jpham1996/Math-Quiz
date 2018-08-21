-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2018 at 11:24 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travelpage`
--

-- --------------------------------------------------------

/* Table 1:  Survey_Student 
Corresponding to survey_student.php.  
*/

--
-- Table structure for table `Survey_Student`
--

CREATE TABLE `Survey_Student` (
  `First_Name` varchar(30) NOT NULL,
  `Last_Name` varchar(30) NOT NULL,
  `Gender` varchar(15) NOT NULL,
  `Age` int(3) NOT NULL,
  `Grade_Level` text(30) NOT NULL,
  `Add_Comment` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/* Insert data into the table Survey_Student.  */

--
-- Dumping data for table `Student_Survey`
--

INSERT INTO `Survey_Student` (`First_Name`, `Last_Name`, `Gender`, `Age`, `Grade_Level`, `Add_Comment`) VALUES
('Mark', 'Jackson', 'Male', 8, '4th Grade', 'I like math and science.  '),
('Lorraine', 'Brown', 'Female', 9, '5th Grade', 'I love Star Wars!  ');

-- --------------------------------------------------------

/* Table 2:  Survey_Student 
Corresponding to survey_teacher.php.  
*/

--
-- Table structure for table `Survey_Teacher`
--

CREATE TABLE `Survey_Teacher` (
  `First_Name` varchar(30) NOT NULL,
  `Last_Name` varchar(30) NOT NULL,
  `Gender` varchar(15) NOT NULL,
  `Age` int(3) NOT NULL,
  `Salary` text(30) NOT NULL,
  `Add_Comment` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/* Insert data into the table Survey_Teacher.  */

--
-- Dumping data for table `Survey_Teacher`
--

INSERT INTO `Survey_Teacher` (`First_Name`, `Last_Name`, `Gender`, `Age`, `Salary`, `Add_Comment`) VALUES
('Liang', 'Zhuge', 'Male', 44, '45680', ''),
('Muhammad', 'Ali', 'Female', 56, '33560', 'I voted Obama.  ');

-- --------------------------------------------------------

-- Commit to the database!  

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

<?php
if(isset($_POST['submit'])){
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$to='mhshuvoit@gmail.com';
$subject='Form Submission';
$message="Name: "$.name."\n". "phone: "\n". Wrote the following:"."\n\n.$msg;
$headers="From: ".$email;

if(mail($to, $subject, $message, $headers)){
   echo "<h1> Sent Successfull! Thank You"." ".$name.", We will contact you very soon! </h1>";
}
else{
	echo "Something went wrong!";
    }
  }


?>
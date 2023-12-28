<?php 
require('connection.php');

if(isset($_POST['name'])){
	$name = strtolower($_POST['name']);
	$query = mysqli_query($conn,"SELECT * FROM `users` WHERE name LIKE '$name%'");
	$errors = '';
	if(mysqli_num_rows($query)>0){
    	echo "<div class='alert alert-info'>User Found In Database </div>";
	}else{
    	echo "<div class='alert alert-danger'>User Not Found In Database</div>";
    }
}

 ?>
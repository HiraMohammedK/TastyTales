<?php

$hostName = "localhost:3306";
$dbUser = "root";
$dbPassword = "hira@1234";
$dbName = "recipeapp";
$conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName);
if (!$conn) {
    die("Something went wrong;");
}

?>
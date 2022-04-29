<?php
// $ superglobals
$servername = "localhost";
$username = "username";
$password = "password";

//connection
$conn = new mysqli($servername, $username, $password);
//Check conn
if ($conn->connection_error) {
    die("connection failed: " . $conn->connect_error);
}

//Database
$sql = "Create database myDB";
if ($conn->query($sql) === TRUE) {
    echo "Database created succefully";
} else {
    echo "error creating database: " . $conn->error;
}

$conn->close();


?>
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"];
    $name = $_POST["name"];
    $password = $_POST["pass"];

    // Validate password
    if (strlen($password) < 12 ||
        !preg_match('/[A-Z]/', $password) ||
        !preg_match('/[a-z]/', $password) ||
        !preg_match('/[0-9]/', $password) ||
        !preg_match('/[!@#$%^&*()\-_=+{};:,<.>]/', $password)) {
        http_response_code(400);
        echo json_encode(["message" => "Password does not meet requirements."]);
        exit;
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Create a new PDO connection to your MySQL database
    $dbHost = "localhost:3306"; // Replace with your database host
    $dbUser = "root"; // Replace with your database username
    $dbPass = "hira@1234"; // Replace with your database password
    $dbName = "recipeapp"; // Replace with your database name

    try {
        $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare and execute an SQL INSERT query to store the user data
        $stmt = $pdo->prepare("INSERT INTO users (email, name, password) VALUES (:email, :name, :password)");
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":password", $hashedPassword);
        $stmt->execute();

        // Send a response indicating success
        echo json_encode(["message" => "Registration successful."]);
    } catch (PDOException $e) {
        // Log and send an error response
        error_log("Database Error: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(["message" => "Failed to register. Please try again later."]);
    }

    // Close the database connection
    $pdo = null;
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed."]);
}
?>




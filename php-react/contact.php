<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Create a new PDO connection to your MySQL database
    $dbHost = "localhost:3306"; // Replace with your database host
    $dbUser = "root"; // Replace with your database username
    $dbPass = "hira@1234"; // Replace with your database password
    $dbName = "recipeapp"; // Replace with your database name

    try {
        $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare and execute an SQL INSERT query to store the form data
        $stmt = $pdo->prepare("INSERT INTO contact_messages (name, email, message) VALUES (:name, :email, :message)");
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":message", $message);
        $stmt->execute();

        // Send a response indicating success
        echo json_encode(["message" => "Your message has been submitted successfully."]);
    } catch (PDOException $e) {
        // Log and send an error response
        error_log("Database Error: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(["message" => "Failed to submit the message. Please try again later."]);
    }

    // Close the database connection
    $pdo = null;
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed."]);
}
?>

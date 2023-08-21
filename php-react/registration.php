<?php
header("Content-Type: application/json");
require_once "database.php";
require_once('cors.php');
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->fullname) || empty($data->email) || empty($data->password) || empty($data->repeat_password)) {
        http_response_code(400);
        echo json_encode(["message" => "All fields are required"]);
        exit();
    }

    $fullname = $data->fullname;
    $email = $data->email;
    $password = $data->password;
    $repeat_password = $data->repeat_password;

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Email is not valid"]);
        exit();
    }

    if (strlen($password) < 8) {
        http_response_code(400);
        echo json_encode(["message" => "Password must be at least 8 characters long"]);
        exit();
    }

    if ($password !== $repeat_password) {
        http_response_code(400);
        echo json_encode(["message" => "Password does not match"]);
        exit();
    }

    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) {
        http_response_code(400);
        echo json_encode(["message" => "Email already exists"]);
        exit();
    }

    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "sss", $fullname, $email, $passwordHash);

    if (mysqli_stmt_execute($stmt)) {
        http_response_code(201);
        echo json_encode(["message" => "Registration successful"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Something went wrong"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method Not Allowed"]);
}
?>

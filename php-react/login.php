<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $con = mysqli_connect("localhost:3306", "root", "hira@1234", "recipeapp");
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $query = "SELECT id, name, password FROM users WHERE email='$email'";
    $result = mysqli_query($con, $query);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $hashedPassword = $row["password"];

        if (password_verify($password, $hashedPassword)) {
            // Successful login, send user data
            echo json_encode(["status" => "success", "user_id" => $row["id"], "username" => $row["name"]]);
        } else {
            echo json_encode(["status" => "failed"]);
        }
    } else {
        echo json_encode(["status" => "failed"]);
    }

    mysqli_close($con);
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed."]);
}
?>

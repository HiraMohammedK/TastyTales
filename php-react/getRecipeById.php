<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $recipeId = $_GET["id"]; // Get the recipe ID from the request parameter

    // Create a database connection
    $con = mysqli_connect("localhost:3306", "root", "hira@1234", "recipeapp");

    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Fetch recipe details by ID
    $query = "SELECT * FROM recipes WHERE id = $recipeId";

    $result = mysqli_query($con, $query);

    if (!$result) {
        http_response_code(500);
        echo json_encode(["message" => "Failed to fetch recipe details."]);
    } else {
        $recipe = mysqli_fetch_assoc($result);
        echo json_encode($recipe);
    }

    mysqli_close($con);
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed."]);
}
?>

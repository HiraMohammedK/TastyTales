<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // Get the user's ID, you need to implement your authentication logic here
    $userId = getUserId();

    // Create a database connection
    $con = mysqli_connect("localhost:3306", "root", "hira@1234", "recipeapp");

    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Fetch recipes uploaded by the user
    $query = "SELECT * FROM recipes WHERE user_id = $userId"; // Replace 'user_id' with your user ID column name

    $result = mysqli_query($con, $query);

    if (!$result) {
        http_response_code(500);
        echo json_encode(["message" => "Failed to fetch user recipes."]);
    } else {
        $recipes = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $recipes[] = $row;
        }
        echo json_encode($recipes);
    }

    mysqli_close($con);
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed."]);
}
?>


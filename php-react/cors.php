<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow other HTTP methods besides GET and POST
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Allow the following headers to be sent with the request
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Allow cookies to be sent with the request
header("Access-Control-Allow-Credentials: true");

// Respond to preflight requests (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}
?>
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
header("Content-Type: application/json;charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Handle file upload
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["picture"]["name"]);

    if (move_uploaded_file($_FILES["picture"]["tmp_name"], $targetFile)) {
        $pictureUrl = $targetFile;
        $title = $_POST["title"];
        $summary = $_POST["summary"];
        $ingredients = $_POST["ingredients"];
        $instructions = $_POST["instructions"];
        
        $con = mysqli_connect("localhost:3306", "root", "hira@1234");
        
        if (!$con) {
            die("Connection failed: " . mysqli_connect_error());
        }
        
        mysqli_select_db($con, "recipeapp");

        $query = "INSERT INTO userrecipes (title, picture_url, ingredients, instructions, summary) VALUES ('$title', '$pictureUrl', '$ingredients', '$instructions', '$summary')";

        if (mysqli_query($con, $query)) {
            echo json_encode(["message" => "Recipe uploaded successfully."]);
        } else {
            // Log the MySQL error for debugging
            error_log("MySQL Error: " . mysqli_error($con));
            
            http_response_code(500);
            echo json_encode(["message" => "Failed to upload the recipe."]);
        }
        
        mysqli_close($con);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to upload the picture."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed."]);
}
?> */



// api/viewrecipe.php
require 'database.php'; // Create a database connection

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['recipeId'])) {
  $recipeId = $_GET['recipeId'];

  $query = "SELECT * FROM userrecipes WHERE id = $recipeId";
  $result = mysqli_query($conn, $query);

  $recipe = mysqli_fetch_assoc($result);

  header('Content-Type: application/json');
  echo json_encode($recipe);
}

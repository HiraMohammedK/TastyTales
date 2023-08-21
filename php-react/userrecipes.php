// api/userrecipes.php
require 'database.php'; // Create a database connection

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['userId'])) {
  $userId = $_GET['userId'];
  
  $query = "SELECT * FROM userrecipes WHERE user_id = $userId";
  $result = mysqli_query($conn, $query);

  $recipes = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $recipes[] = $row;
  }

  header('Content-Type: application/json');
  echo json_encode($recipes);
}

<?php
// Set CORS headers to allow requests from any origin
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

// Start a session or resume the current session
session_start();

// Check if the user is logged in by verifying the existence of user_id in the session
if (isset($_SESSION['user_id'])) {
    // If the user is logged in, return user information (including user ID and username)
    $user_id = $_SESSION['user_id'];
    $username = $_SESSION['username'];

    // Return user data as JSON
    echo json_encode(['user_id' => $user_id, 'username' => $username]);
} else {
    // If the user is not logged in, return an error response with a message
    http_response_code(401); // Unauthorized
    echo json_encode(['message' => 'User not logged in']);
}
?>


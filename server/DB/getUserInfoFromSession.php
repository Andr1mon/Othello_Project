<?php

include 'db_connect.php';
require_once 'db_connect.php';

$input = json_decode(file_get_contents("php://input"), true);

$token = $input['token'] ?? '';

if (empty($token)) {
    echo "Authentication token not provided";
    exit;
}

$sql = "SELECT username, email, country FROM joueur j INNER JOIN session s ON j.id = s.joueur_id WHERE s.token = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $token);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo "User not found";
}

$stmt->close();
$conn->close();


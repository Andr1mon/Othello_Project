<?php

include 'db_connect.php';
require_once 'db_connect.php';

$input = json_decode(file_get_contents("php://input"), true);

$username = $input['username'] ?? '';
$email = $input['email'] ?? '';
$password = $input['password'] ?? '';
$country = $input['country'] ?? '';

if (empty($username) || empty($email) || empty($password) || empty($country)) {
    echo "All fields are required";
    exit;
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO JOUEUR (username, email, password, country) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $username, $email, $hashedPassword, $country);

if ($stmt->execute()) {
    echo "Signup successful";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();


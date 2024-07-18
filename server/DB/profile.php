<?php

include 'db_connect.php';
require_once 'db_connect.php';

// Requête SQL pour récupérer les informations de l'utilisateur
$sql = "SELECT username, email, country FROM users WHERE user_id = ?"; // Remplacez users et user_id par les noms de votre table et votre colonne d'identifiant utilisateur
$user_id = 1; // Vous devez fournir l'identifiant de l'utilisateur actuellement connecté, vous pouvez le récupérer à partir de votre système d'authentification
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

// Vérifiez s'il y a des résultats
if ($result->num_rows > 0) {
    // Récupérez les données de l'utilisateur et renvoyez-les au format JSON
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo "Utilisateur non trouvé";
}

$stmt->close();
$conn->close();
<?php

include 'db_connect.php';
require_once 'db_connect.php';

// Récupérer les données de l'état du jeu depuis la requête HTTP
// Par exemple, si vous utilisez POST :
$game_state = $_POST['game_state'];

// Insérer l'état du jeu dans la base de données
$sql = "INSERT INTO game_state (state) VALUES ('$game_state')";

if ($conn->query($sql) === TRUE) {
    echo "L'état du jeu a été inséré avec succès.";
} else {
    echo "Erreur lors de l'insertion de l'état du jeu : " . $conn->error;
}

$conn->close();


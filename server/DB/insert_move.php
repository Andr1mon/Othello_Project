<?php

include 'db_connect.php';
require_once 'db_connect.php';

// Récupérer les données du formulaire ou de la requête
$player_id = $_POST['player_id'];
$move = $_POST['move'];

// Requête SQL pour insérer un mouvement dans la base de données
$sql = "INSERT INTO moves (player_id, move) VALUES ('$player_id', '$move')";

if ($conn->query($sql) === TRUE) {
    echo "Le mouvement du joueur a été inséré avec succès.";
} else {
    echo "Erreur lors de l'insertion du mouvement du joueur : " . $conn->error;
}

$conn->close();


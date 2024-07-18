<?php

include 'db_connect.php';
require_once 'db_connect.php';

// Récupérer l'identifiant du joueur
$player_id = $_GET['player_id'];

// Requête SQL pour récupérer les mouvements d'un joueur spécifique
$sql = "SELECT * FROM moves WHERE player_id='$player_id'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Player ID: " . $row["player_id"]. " - Move: " . $row["move"]. "<br>";
    }
} else {
    echo "0 résultats.";
}

// Fermer la connexion à la base de données
$conn->close();


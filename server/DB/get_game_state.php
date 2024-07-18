<?php

include 'db_connect.php';
require_once 'db_connect.php';

// Requête SQL pour récupérer l'état actuel du jeu
$sql = "SELECT * FROM game_states ORDER BY id DESC LIMIT 1";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "ID de l'état du jeu: " . $row["id"]. " - État: " . $row["state"]. "<br>";
    }
} else {
    echo "0 résultats.";
}

// Fermer la connexion à la base de données
$conn->close();



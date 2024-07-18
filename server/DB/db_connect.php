<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Informations de connexion à la base de données
$dsn = "mysql: dbname=id22208561_reversiadb; host=localhost";
$user = "id22208561projet4a";
$pswd = "BigPatate1";




// Créer une connexion
$conn = new PDO($dsn, $user, $pswd);
$conn->query("USE id22208561_reversiadb");

// Vérifier la connexion
if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}


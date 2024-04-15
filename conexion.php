<?php
$servername = "viaduct.proxy.rlwy.net";
$username = "root";
$password = "MtrUtVZHtOxCruAQplhJvgPxEAoOXQMH";
$database = "railway";
$port = 48448; // Cambia el puerto si es diferente

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database, $port);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

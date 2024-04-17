<!-- consulta.php -->

<?php
include 'conexion.php'; // Incluye el archivo de conexión

// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");

// Permitir solicitudes con los métodos GET, POST, PUT, DELETE y OPTIONS
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Permitir solicitudes con los encabezados 'Content-Type' y 'Authorization'
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Continúa con el resto de tu lógica para obtener los datos de la base de datos

$sql = "SELECT quienes_somos_contenido FROM product_data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $response = array();
    while($row = $result->fetch_assoc()) {
        $response[] = $row['quienes_somos_contenido'];
    }
    echo json_encode($response);
} else {
    echo "0 results";
}
$conn->close();

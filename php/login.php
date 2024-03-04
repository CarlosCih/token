<?php
// Credenciales de usuario (simulado)
$valid_username = 'carlos';
$valid_password = '12345';

// Verificar las credenciales
$username = $_POST['username'];
$password = $_POST['password'];

if ($username === $valid_username && $password === $valid_password) {
    // Generar token
    $payload = array(
        "username" => $username
    );
    $token = base64_encode(json_encode($payload));
    echo json_encode(array("token" => $token));
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Credenciales inválidas"));
}
?>

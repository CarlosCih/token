<?php
session_start();

// Verificar si el token de sesión está presente
if (!isset($_SESSION['token'])) {
    // Si el token no está presente, redirigir al usuario al formulario de inicio de sesión
    header("Location: ../index.html");
    exit();
}

// Si el token está presente, el usuario está autenticado y puede acceder al dashboard
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/dashboard.css">
    <title>Dashboard</title>
</head>
<body>
    <h2>Bienvenido al Dashboard</h2>
    <div id="user-info">
    </div>
    <button id="regresarLogin" >Regresar al Login</button>



    <script src="../js/script.js"></script>
</body>
</html>

<?php
session_start();

// Destruir todas las variables de sesión
$_SESSION = array();

// Si se desea destruir la sesión, también se debe borrar la cookie de sesión
// Nota: Esto destruirá la sesión, y no solo los datos de la sesión
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Finalmente, destruir la sesión
session_destroy();

// Redirigir al usuario de vuelta al formulario de inicio de sesión
header("Location: ../index.html");
exit();
?>

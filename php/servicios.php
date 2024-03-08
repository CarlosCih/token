<?php
include('conexion.php');

function login($user,$pass){
    $token = "NULL";
    $pass = md5($pass);
    $query = 'SELECT * FROM Usuarios WHERE Usuario = "'.$user.'" AND Contrasena = "'.$pass.'" LIMIT 1';
    $mysqli = Conectar();
    $result = $mysqli->query($query);
    if($result  && $result->num_rows > 0){
        $fila = $result->fetch_assoc();
        $token = SHA1($fila['usuario'].$fila['contrasena'].$fila['fecha_sesion']);
        $query2 = 'UPDATE Usuarios SET token = "'.$token.'" WHERE id ="'.$fila['id'].'"';
        $mysqli->query($query2);
    }
    return $token;
}

function validar(){
    // Verificar si se enviaron los datos del formulario
    if (isset($_POST['usuario']) && isset($_POST['contrasena'])) {
        $usuario = $_POST['usuario'];
        $contrasena = $_POST['contrasena'];
        return login($usuario, $contrasena);
    } else {
        return false;
    }
}

$token = validar();

if($token != "NULL"){
    session_start();
    $_SESSION['token'] = $token;
    header("Location: dashboard.php");
    exit();
}else{
    header("Location: ../index.html?error=1");
    exit();
}
?>
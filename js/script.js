document.addEventListener('DOMContentLoaded', function() {
    var generateTokenForm = document.getElementById('generate-token-form');
    var loginForm = document.getElementById('login-form');

    if (generateTokenForm) {
        generateTokenForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Generar un token aleatorio
            var token = generateRandomToken();
            console.log('Token generado:', token);

            // Mostrar el token generado en el div
            document.getElementById('generated-token').innerText = 'Token generado: ' + token;
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            var token = document.getElementById('token').value;

            fetch('php/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'token=' + encodeURIComponent(token),
            })
            .then(response => {
                if (response.ok) {
                    // El inicio de sesión fue exitoso, redirigir al dashboard
                    window.location.href = 'html/dashboard.html';
                } else {
                    // El token es inválido, mostrar un mensaje de error al usuario
                    throw new Error('Token inválido');
                }
            })
            .catch(error => {
                // Manejar errores de red u otros errores de inicio de sesión
                console.error('Error al iniciar sesión:', error);
            });
            // Por ahora, simplemente mostramos un mensaje en la consola
            console.log('Iniciando sesión con token:', token);

            localStorage.setItem('token', token); // Guardar el token en el almacenamiento local

        });
    }
});

function generateRandomToken() {
    // Generar un token aleatorio (aquí puedes utilizar tu propia lógica de generación de token)
    var tokenLength = 10;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var token = '';
    for (var i = 0; i < tokenLength; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

function redirectToLogin() {
    localStorage.removeItem('token'); // Eliminar el token almacenado
    window.location.href = '../index.html'; // Redirigir al login
}

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

            // Guardar el token generado en una variable global
            window.generatedToken = token;
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            var token = document.getElementById('token').value;
    
            // Validar el token ingresado con el token generado
            if (token === window.generatedToken) {
                // Guardar el token en el almacenamiento local
                localStorage.setItem('token', token);
                
                // Redirigir al dashboard
                window.location.href = 'html/dashboard.html';
            } else {
                // Mostrar mensaje de error si el token no coincide con el generado
                document.getElementById('error-message').textContent = 'Token inválido';
            }
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

document.addEventListener('DOMContentLoaded', function() {
    // Coloca tu código aquí
    var loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            fetch('php/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password),
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Credenciales inválidas');
                }
            })
            .then(data => {
                localStorage.setItem('token', data.token);
                window.location.href = 'html/dashboard.html'; // Redirigir al dashboard
            })
            .catch(error => {
                document.getElementById('error-message').textContent = error.message;
            });
        });
    }
});

function redirectToLogin() {
    localStorage.removeItem('token'); // Eliminar el token almacenado
    window.location.href = '../index.html'; // Redirigir al login
}

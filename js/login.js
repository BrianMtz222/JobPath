// Este código maneja la lógica de las páginas de login y perfil

// Lógica para la página de login
if (window.location.pathname.includes('login.html')) {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        
        // Guardamos el nombre de usuario en el almacenamiento local
        localStorage.setItem('loggedInUser', username);
        
        // Redirigimos al usuario a la página de perfil
        window.location.href = '/perfil/perfil.html';
    });

// Lógica para la página de perfil
} else if (window.location.pathname.includes('perfil.html')) {
    const userNameDisplay = document.getElementById('userNameDisplay');

    // Obtenemos el nombre de usuario del almacenamiento local
    const loggedInUser = localStorage.getItem('loggedInUser');

    // Verificamos si hay un nombre de usuario guardado
    if (loggedInUser) {
        // Si hay un usuario, lo mostramos en el encabezado
        userNameDisplay.textContent = loggedInUser;
    } else {
        // Si no hay un usuario guardado, lo redirigimos a la página de login
        window.location.href = '/registro/login.html';
    }
}
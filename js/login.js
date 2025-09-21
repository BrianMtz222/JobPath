// Este código maneja la lógica de las páginas de login y perfil

// Lógica para la página de login
if (window.location.pathname.includes('login.html')) {
    const usernameInput = document.getElementById('username');

    // Escucha cada vez que el valor del campo de texto cambia
    usernameInput.addEventListener('input', (event) => {
        // Guarda el nombre de usuario en el almacenamiento local en tiempo real
        localStorage.setItem('loggedInUser', event.target.value);
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
        // Si no hay un usuario, lo redirigimos a la página de login
        window.location.href = '../login/login.html'; 
    }
}
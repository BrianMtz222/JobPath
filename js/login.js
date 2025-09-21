// Este código maneja la lógica de las páginas de login y perfil

// Lógica para la página de login
if (window.location.pathname.endsWith('login.html')) {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        
        // Guardamos el nombre de usuario en el almacenamiento local
        localStorage.setItem('loggedInUser', username);
        
        // Redirigimos al usuario a la ruta especificada
        window.location.href = '/JobPath/perfil/perfil.html';
    });

// Lógica para la página de perfil
} else if (window.location.pathname.endsWith('perfil.html')) {
    const userNameDisplay = document.getElementById('userNameDisplay');

    // Obtenemos el nombre de usuario del almacenamiento local
    const loggedInUser = localStorage.getItem('loggedInUser');

    // Verificamos si hay un nombre de usuario guardado
    if (loggedInUser) {
        // Si hay un usuario, lo mostramos en el encabezado
        userNameDisplay.textContent = loggedInUser;
    } else {
        // Si no hay un usuario guardado (ej. la persona entró directamente), 
        // la redirigimos de vuelta a la página de login
        window.location.href = '/JobPath/login.html'; // Asegúrate de que esta ruta sea la correcta para tu login
    }
}
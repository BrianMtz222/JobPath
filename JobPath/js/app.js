// Este código maneja la lógica para ambas páginas.

// Verificar si estamos en la página de login
if (window.location.href.includes('login.html')) {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Detiene el envío del formulario

        const username = document.getElementById('username').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;

        // Validar que los campos no estén vacíos
        if (username && lastname && email) {
            const userData = {
                name: username,
                lastname: lastname,
                email: email
            };

            // Guardar los datos del usuario en localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(userData));

            // Redirigir a la página de perfil
            window.location.href = '../perfil/perfil.html';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

// Verificar si estamos en la página de perfil
} else if (window.location.href.includes('perfil.html')) {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userLastnameDisplay = document.getElementById('userLastnameDisplay');
    const userEmailDisplay = document.getElementById('userEmailDisplay');

    // Recuperar los datos del usuario de localStorage
    const storedUserData = localStorage.getItem('loggedInUser');

    if (storedUserData) {
        // Convertir la cadena JSON a un objeto JavaScript
        const userData = JSON.parse(storedUserData);

        // Mostrar los datos en los elementos del perfil
        userNameDisplay.textContent = userData.name;
        userLastnameDisplay.textContent = userData.lastname;
        userEmailDisplay.textContent = userData.email;
    } else {
        // Si no hay datos, redirigir al login
        window.location.href = '../login/login.html';
    }
}
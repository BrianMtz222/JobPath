// Este código maneja la lógica para ambas páginas.

// Obtenemos la URL actual para determinar qué lógica ejecutar.
const currentPath = window.location.href;

// Lógica para la página de login
if (currentPath.includes('login.html')) {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) { // Aseguramos que el formulario exista antes de agregar el evento
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
                window.location.href = '/JobPath/perfil/perfil.html';
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

// Lógica para la página de perfil
} else if (currentPath.includes('perfil.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        const userNameDisplay = document.getElementById('userNameDisplay');
        const userEmailDisplay = document.getElementById('userEmailDisplay');

        // Recuperar los datos del usuario de localStorage
        const storedUserData = localStorage.getItem('loggedInUser');

        if (storedUserData) {
            try {
                // Convertir la cadena JSON a un objeto JavaScript
                const userData = JSON.parse(storedUserData);
                
                // Mostrar los datos en los elementos del perfil
                userNameDisplay.textContent = `${userData.name} ${userData.lastname}`;
                userEmailDisplay.textContent = userData.email;

            } catch (e) {
                console.error("Error al parsear los datos de localStorage", e);
                // Si hay un error, redirigir al login
                window.location.href = '/JobPath/perfil/perfil.html';
            }
        } else {
            // Si no hay datos, redirigir al login
            window.location.href = '/JobPath/perfil/perfil.html';
        }
    });
}
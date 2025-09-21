// Este código maneja la lógica de las páginas de login y perfil

// Lógica para la página de login
if (window.location.pathname.includes('login.html')) {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        // Previene la recarga de la página para que el script pueda actuar
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;

        // Crear un objeto para almacenar todos los datos del usuario
        const userData = {
            name: username,
            lastname: lastname,
            email: email
        };

        // Convertir el objeto a una cadena JSON y guardarlo en localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(userData));
        
        // Redirigimos al usuario a la página de perfil
        window.location.href = '/JobPath/perfil/perfil.html';
    });

// Lógica para la página de perfil
} else if (window.location.pathname.includes('perfil.html')) {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userLastnameDisplay = document.getElementById('userLastnameDisplay');
    const userEmailDisplay = document.getElementById('userEmailDisplay');

    // Obtener los datos del usuario de localStorage
    const storedUserData = localStorage.getItem('loggedInUser');

    // Verificar si hay datos guardados
    if (storedUserData) {
        // Convertir la cadena JSON de vuelta a un objeto
        const userData = JSON.parse(storedUserData);

        // Mostrar los datos en los elementos HTML correspondientes
        userNameDisplay.textContent = userData.name;
        userLastnameDisplay.textContent = userData.lastname;
        userEmailDisplay.textContent = userData.email;
    } else {
        // Si no hay datos, redirigir al login
        window.location.href = '/JobPath/login.html'; 
    }
}
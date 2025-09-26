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
            window.location.href = "https://brianmtz222.github.io/JobPath/perfil/perfil.html";
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

// Verificar si estamos en la página de perfil
} else if (window.location.href.includes('perfil.html')) {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userLastnameDisplay = document.getElementById('userLastnameDisplay');
    const userEmailDisplay = document.getElementById('userEmailDisplay');
    const editBtn = document.querySelector('.edit-btn'); // Seleccionar el botón "Editar"

    // Recuperar los datos del usuario de localStorage
    const storedUserData = localStorage.getItem('loggedInUser');
    let userData = null;

    if (storedUserData) {
        // Convertir la cadena JSON a un objeto JavaScript
        userData = JSON.parse(storedUserData);

        // Mostrar los datos en los elementos del perfil
        userNameDisplay.textContent = userData.name;
        userLastnameDisplay.textContent = userData.lastname;
        userEmailDisplay.textContent = userData.email;
    } else {
        // Si no hay datos, redirigir al login
        window.location.href = "https://brianmtz222.github.io/JobPath/registro/login.html";
    }

    let isEditing = false; // Estado inicial: No editando

    // Lógica para el botón "Editar"
    editBtn.addEventListener('click', () => {
        isEditing = !isEditing;

        if (isEditing) {
            // 1. Entrar en modo edición
            
            // Habilita la edición en los elementos usando contentEditable
            userNameDisplay.contentEditable = true;
            userLastnameDisplay.contentEditable = true;
            userEmailDisplay.contentEditable = true;

            // Opcional: añade un estilo visual (debe estar en perfil.css)
            userNameDisplay.classList.add('is-editing');
            userLastnameDisplay.classList.add('is-editing');
            userEmailDisplay.classList.add('is-editing');

            editBtn.textContent = 'Guardar Cambios';
            alert(' Haz clic en tu nombre, apellido o email para modificar.');

        } else {
            // 2. Salir del modo edición y guardar
            
            // Deshabilita la edición
            userNameDisplay.contentEditable = false;
            userLastnameDisplay.contentEditable = false;
            userEmailDisplay.contentEditable = false;

            // Opcional: elimina el estilo visual
            userNameDisplay.classList.remove('is-editing');
            userLastnameDisplay.classList.remove('is-editing');
            userEmailDisplay.classList.remove('is-editing');

            // Captura los nuevos valores y elimina espacios extra
            const newName = userNameDisplay.textContent.trim();
            const newLastname = userLastnameDisplay.textContent.trim();
            const newEmail = userEmailDisplay.textContent.trim();
            
            // Validación simple
            if (!newName || !newLastname || !newEmail) {
                alert('Todos los campos de perfil deben tener contenido. Revierte o edita.');
                isEditing = true; // Permanece en modo edición
                return;
            }

            // Actualiza el objeto de datos del usuario
            userData.name = newName;
            userData.lastname = newLastname;
            userData.email = newEmail;
            
            // Guarda los datos actualizados en localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(userData));

            editBtn.textContent = 'Editar';
            alert('¡Perfil actualizado y guardado correctamente!');
        }
    });
}
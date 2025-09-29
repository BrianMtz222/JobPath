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
    document.addEventListener('DOMContentLoaded', () => {
        // 1. Declaración de variables y selectores
        const userNameDisplay = document.getElementById('userNameDisplay');
        const userLastnameDisplay = document.getElementById('userLastnameDisplay');
        const userEmailDisplay = document.getElementById('userEmailDisplay');
        const editBtn = document.querySelector('.edit-btn');
        let isEditing = false;

        // 2. Inicialización de datos de usuario (IMPORTANTE)
        // Intenta cargar los datos del localStorage o usa datos por defecto si no existen
        let userData;
        try {
            const storedUser = localStorage.getItem('loggedInUser');
            if (storedUser) {
                userData = JSON.parse(storedUser);
            } else {
                // Datos por defecto si es la primera vez que visita la página
                userData = {
                    name: "Usuario",
                    lastname: "JobPath",
                    email: "usuario.ejemplo@jobpath.com"
                };
            }
        } catch (e) {
            console.error("Error al cargar userData del localStorage:", e);
            // Fallback a datos por defecto si hay un error de parseo
            userData = {
                name: "Usuario",
                lastname: "JobPath",
                email: "usuario.ejemplo@jobpath.com"
            };
        }

        // 3. Función para renderizar los datos en el DOM
        const renderUserData = () => {
            userNameDisplay.textContent = userData.name;
            userLastnameDisplay.textContent = userData.lastname;
            userEmailDisplay.textContent = userData.email;
        };

        // Llamamos a la función para mostrar los datos al cargar la página
        renderUserData();


        // 4. Lógica del botón de edición (Tu código original, pero encapsulado)
        if (editBtn) {
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
                    alert('¡YA PUEDES MODIFICAR TUS DATOS!');

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
                        // Opcional: Re-habilita la edición y estilos si falla la validación
                        userNameDisplay.contentEditable = true;
                        userLastnameDisplay.contentEditable = true;
                        userEmailDisplay.contentEditable = true;
                        userNameDisplay.classList.add('is-editing');
                        userLastnameDisplay.classList.add('is-editing');
                        userEmailDisplay.classList.add('is-editing');
                        return;
                    }

                    // Actualiza el objeto de datos del usuario
                    userData.name = newName;
                    userData.lastname = newLastname;
                    userData.email = newEmail;

                    // Guarda los datos actualizados en localStorage
                    localStorage.setItem('loggedInUser', JSON.stringify(userData));

                    editBtn.textContent = 'Editar';
                    alert('¡TU PERFIL FUE ACTUALIZADO Y GUARDADO CORRECTAMENTE!');
                }
            });
        } else {
            console.error("El botón de edición no fue encontrado.");
        }
    })
}





function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatNumber(number) {
    return number.toLocaleString();
}

function generatePersistentStats() {
    const USER_EMAIL = 'usuario_simulado@gmail.com';

    if (!USER_EMAIL || USER_EMAIL === 'default_user') {
        return;
    }
    
    const publicationsKey = `stats_${USER_EMAIL}_publications`;
    const followersKey = `stats_${USER_EMAIL}_followers`;
    const pointsKey = `stats_${USER_EMAIL}_points`;

    let publications = localStorage.getItem(publicationsKey);
    let followers = localStorage.getItem(followersKey);
    let points = localStorage.getItem(pointsKey);

    if (!publications || !followers || !points) {
        publications = getRandomNumber(1, 5000).toString();
        followers = getRandomNumber(100, 5000).toString();
        points = getRandomNumber(1, 5000).toString();
        
        localStorage.setItem(publicationsKey, publications);
        localStorage.setItem(followersKey, followers);
        localStorage.setItem(pointsKey, points);
    }

    const publicationsElement = document.getElementById('publicationsCount');
    const followersElement = document.getElementById('followersCount');
    const pointsElement = document.getElementById('pointsCount');

    if (publicationsElement) {
        publicationsElement.textContent = publications;
    }
    if (followersElement) {
        followersElement.textContent = formatNumber(parseInt(followers, 10));
    }
    if (pointsElement) {
        pointsElement.textContent = points;
    }
}

document.addEventListener('DOMContentLoaded', generatePersistentStats);
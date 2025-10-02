


if (window.location.href.includes('login.html')) {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;

        if (username && lastname && email) {
            const userData = {
                name: username,
                lastname: lastname,
                email: email
            };

        
            localStorage.setItem('loggedInUser', JSON.stringify(userData));

            
            window.location.href = "https://brianmtz222.github.io/JobPath/perfil/perfil.html";
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });


} else if (window.location.href.includes('perfil.html')) {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userLastnameDisplay = document.getElementById('userLastnameDisplay');
    const userEmailDisplay = document.getElementById('userEmailDisplay');


    const storedUserData = localStorage.getItem('loggedInUser');

    if (storedUserData) {
       
        const userData = JSON.parse(storedUserData);

       
        userNameDisplay.textContent = userData.name;
        userLastnameDisplay.textContent = userData.lastname;
        userEmailDisplay.textContent = userData.email;
    } else {
      
        window.location.href = "https://brianmtz222.github.io/JobPath/registro/login.html";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const publicationsGrid = document.getElementById('publicationsGrid');
    const addImageBtn = document.getElementById('addImageBtn');

    // Función para crear un nuevo espacio de imagen
    const createPlaceholder = () => {
        const placeholder = document.createElement('div');
        placeholder.classList.add('image-placeholder');
        // El contenido que se muestra en el espacio
        placeholder.innerHTML = '<span>Haz click para agregar imagen</span>'; 

        // Lógica para el clic en el nuevo espacio
        placeholder.addEventListener('click', () => {
            alert('Lógica para seleccionar archivo o subir imagen.');
        });

        return placeholder;
    };

    // Evento del botón para agregar una nueva publicación
    if (addImageBtn) {
        addImageBtn.addEventListener('click', () => {
            const newPlaceholder = createPlaceholder();
            publicationsGrid.appendChild(newPlaceholder);
            
            // Opcional: Actualizar el contador de publicaciones
            const publicationsCountElement = document.getElementById('publicationsCount');
            let currentCount = parseInt(publicationsCountElement.textContent) || 0;
            publicationsCountElement.textContent = currentCount + 1;
        });
    }

    // Inicializar la funcionalidad del placeholder inicial (si existe)
    const initialPlaceholder = publicationsGrid ? publicationsGrid.querySelector('.image-placeholder') : null;
    if (initialPlaceholder) {
        initialPlaceholder.addEventListener('click', () => {
            alert('Lógica para seleccionar archivo o subir imagen.');
        });
    }
});
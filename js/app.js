


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
    const fileInput = document.getElementById('fileInput'); // Obtenemos el input de archivo

    // Función que maneja el clic en un placeholder
    const handlePlaceholderClick = (placeholderDiv) => {
        // Almacenamos una referencia al placeholder actual para saber dónde poner la imagen
        fileInput.placeholderToFill = placeholderDiv; 
        
        // Simula un clic en el input de archivo oculto, abriendo el diálogo del sistema
        fileInput.click(); 
    };

    // Función para crear un nuevo espacio de imagen
    const createPlaceholder = () => {
        const placeholder = document.createElement('div');
        placeholder.classList.add('image-placeholder');
        placeholder.innerHTML = '<span>Haz click para agregar imagen</span>'; 

        // Asignamos el manejador de clic
        placeholder.addEventListener('click', () => {
            handlePlaceholderClick(placeholder);
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
            handlePlaceholderClick(initialPlaceholder);
        });
    }

    // *** NUEVA LÓGICA PARA LEER EL ARCHIVO SELECCIONADO ***
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const placeholderDiv = fileInput.placeholderToFill; // El div que debe llenarse

        if (file && placeholderDiv) {
            const reader = new FileReader();

            reader.onload = (e) => {
                // 1. Crear el elemento de imagen
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Publicación de usuario';
                
                // 2. Limpiar el contenido del placeholder (eliminar el texto "Haz click...")
                placeholderDiv.innerHTML = '';
                
                // 3. Insertar la imagen en el placeholder
                placeholderDiv.appendChild(img);
                
                // Opcional: Eliminar la clase 'image-placeholder' para usar solo el estilo de imagen
                placeholderDiv.classList.remove('image-placeholder');
                
                // 4. Limpiar el input de archivo para poder seleccionar el mismo archivo de nuevo
                event.target.value = '';
                fileInput.placeholderToFill = null;
            };

            // Leer el archivo como una URL de datos
            reader.readAsDataURL(file);
        }
    });
});
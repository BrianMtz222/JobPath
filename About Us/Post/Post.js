document.addEventListener('DOMContentLoaded', () => {
    const addPostBtn = document.getElementById('addPostBtn');
    const feedContainer = document.getElementById('feedContainer');
    let postCounter = 0; // Contador para nombres de usuario únicos

    // Función para crear un nuevo elemento de post
    function createPostCard(imageUrl, userDetails, postText) {
        // Asegura que la imagen tenga un valor por defecto si el usuario cancela o no introduce nada
        const imgUrl = imageUrl || 'https://via.placeholder.com/150/808080/FFFFFF?text=Nuevo+Post';
        const details = userDetails || `Nuevo Usuario · ${Math.floor(Math.random() * 10) + 20} · Empresa XYZ`;
        const text = postText || '¡Este es un nuevo post creado dinámicamente!';
        const username = `User${Math.floor(Math.random() * 900) + 100}${postCounter++}`;


        // Utilizamos la plantilla HTML como cadena para la creación rápida del elemento
        const newPostHTML = `
            <div class="post-card">
                <div class="post-header">
                    <img class="user-img" src="${imgUrl}" alt="Foto de perfil de ${username}">
                    <span class="options-icon">!</span>
                </div>
                <div class="post-content">
                    <p class="user-details">${details.replace(/\*/g, '<strong>')}</p>
                    <p class="post-text">${text}</p>
                    <button class="show-more-btn">Show more ∨</button>
                    <div class="post-actions">
                        <div class="action-icon">❤️</div>
                        <button class="check-company-btn">Check Company</button>
                    </div>
                </div>
            </div>
        `;

        // Crear el elemento DOM a partir de la cadena de texto
        const newPost = document.createElement('div');
        newPost.innerHTML = newPostHTML.trim();

        // Devolver el nodo hijo (el post-card)
        return newPost.firstChild;
    }

    // Manejador de eventos para el botón '+'
    addPostBtn.addEventListener('click', () => {
        // 1. Pedir al usuario la URL de la imagen
        const imageUrl = prompt("Introduce la URL de la imagen (o déjala vacía):", "https://via.placeholder.com/150/007bff/FFFFFF?text=Post+Nuevo");

        // 2. Pedir los detalles del usuario
        // Nota: El uso de ** para negrita es solo un ejemplo para demostrar que la entrada se usa.
        const userDetails = prompt("Introduce los detalles del usuario (Ej: Nombre · Edad · Empresa):", "**Carlos** · 30 · **StartUp**");

        // 3. Pedir el texto del post
        const postText = prompt("Introduce el texto del post:", "Hoy aprendí a crear elementos dinámicos en JavaScript.");

        // Crear y añadir el post solo si el usuario no cancela (o si la URL de imagen no es null)
        if (imageUrl !== null) {
            const newPostElement = createPostCard(imageUrl, userDetails, postText);
            
            // Añadir el nuevo post después del botón y los posts existentes
            // Usamos insertBefore para añadirlo justo antes del primer post-card,
            // pero después del botón de añadir para que el botón siempre esté en la esquina.
            // Una implementación de feed real probablemente lo añadiría al principio o al final.
            const firstCard = feedContainer.querySelector('.post-card');
            if (firstCard) {
                 feedContainer.insertBefore(newPostElement, firstCard);
            } else {
                 feedContainer.appendChild(newPostElement);
            }
           
            // **Opcional: Resaltar el nuevo post por un momento**
            newPostElement.classList.add('highlighted');
            setTimeout(() => {
                newPostElement.classList.remove('highlighted');
            }, 3000);
        }
    });

    // Opcional: Agregar lógica para el botón "Show more"
    document.querySelectorAll('.show-more-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const postText = e.target.previousElementSibling;
            // Aquí iría la lógica para expandir/contraer el texto
            alert('Lógica de "Show more" no implementada completamente.');
        });
    });
});
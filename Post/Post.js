document.addEventListener('DOMContentLoaded', () => {
    const addPostBtn = document.getElementById('addPostBtn');
    const feedContainer = document.getElementById('feedContainer');
    let postCounter = 0;

    function createPostCard(imageUrl, userDetails, postText) {
        const imgUrl = imageUrl || 'https://via.placeholder.com/150/808080/FFFFFF?text=Nuevo+Post';
        const details = userDetails || `Nuevo Usuario · ${Math.floor(Math.random() * 10) + 20} · Empresa XYZ`;
        const text = postText || '¡Este es un nuevo post creado dinámicamente!';
        const username = `User${Math.floor(Math.random() * 900) + 100}${postCounter++}`;

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
                        <div class="action-icon">🤍</div>
                        <button class="check-company-btn">Check Company</button>
                    </div>
                </div>
            </div>
        `;

        const newPost = document.createElement('div');
        newPost.innerHTML = newPostHTML.trim();
        return newPost.firstChild;
    }

    addPostBtn.addEventListener('click', () => {
        const imageUrl = prompt("Introduce la URL de la imagen (o déjala vacía):", "");
        const userDetails = prompt("Introduce los detalles del usuario (Ej: Nombre · Edad · Empresa):");
        const postText = prompt("Introduce el texto del post:", "Hoy aprendí a crear elementos dinámicos en JavaScript.");

        if (imageUrl !== null) {
            const newPostElement = createPostCard(imageUrl, userDetails, postText);
            const firstCard = feedContainer.querySelector('.post-card');
            if (firstCard) {
                feedContainer.insertBefore(newPostElement, firstCard);
            } else {
                feedContainer.appendChild(newPostElement);
            }
            newPostElement.classList.add('highlighted');
            setTimeout(() => {
                newPostElement.classList.remove('highlighted');
            }, 3000);
        }
    });

    // Delegación de eventos
    feedContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('action-icon')) {
            e.target.classList.toggle('liked');
            e.target.textContent = e.target.classList.contains('liked') ? '❤️' : '🤍';
        }

        if (e.target.classList.contains('show-more-btn')) {
            alert('Lógica de "Show more" no implementada completamente.');
        }
    });
});

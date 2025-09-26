document.addEventListener('DOMContentLoaded', () => {
    const cvContent = document.getElementById('cv-content');
    const editToggleBtn = document.getElementById('editToggleBtn');
    const storageKey = 'userCVContent';

    // 1. Cargar el contenido guardado al iniciar
    const savedContent = localStorage.getItem(storageKey);
    if (savedContent) {
        cvContent.innerHTML = savedContent;
    }

    let isEditing = false;

    // 2. Función para alternar el modo de edición
    function toggleEditMode() {
        isEditing = !isEditing;
        cvContent.contentEditable = isEditing;

        if (isEditing) {
            editToggleBtn.textContent = 'Guardar CV';
            cvContent.focus(); // Pone el foco para empezar a editar
            alert('¡Modo de edición activado! Haz clic en cualquier texto para modificarlo.');
        } else {
            // Guarda el contenido cuando se sale del modo edición
            localStorage.setItem(storageKey, cvContent.innerHTML);
            editToggleBtn.textContent = 'Editar Currículum';
            alert('¡Contenido guardado localmente y modo de visualización activado!');
        }
    }

    // 3. Listener para el botón
    editToggleBtn.addEventListener('click', toggleEditMode);

    // *Opcional: Guardar automáticamente si el usuario sale de la página (experimental)*
    window.addEventListener('beforeunload', () => {
        if (isEditing) {
             localStorage.setItem(storageKey, cvContent.innerHTML);
        }
    });

    // *Opcional: Controlar el 'Enter' para no romper la estructura*
    // Esto es avanzado y para prevenir que el 'Enter' cree nuevos divs/p no deseados
    cvContent.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.tagName !== 'LI') {
            e.preventDefault(); // Evita el salto de línea por defecto
            // Se puede insertar un <br> si se quiere un salto de línea simple
            document.execCommand('insertLineBreak');
        }
    });
});
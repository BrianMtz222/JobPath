// curriculum.js

document.addEventListener('DOMContentLoaded', () => {
    const cvContentElement = document.getElementById('cv-content');
    const editToggleBtn = document.getElementById('editToggleBtn');

    // 1. OBTENER USUARIO ACTUAL Y CLAVE ÚNICA DE ALMACENAMIENTO
    const storedUserData = localStorage.getItem('loggedInUser');
    let currentUserEmail = null;

    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        currentUserEmail = userData.email;
    } else {
        // Si no hay usuario logueado, usa una clave por defecto y podrías redirigir.
        console.warn("No hay usuario logueado. Usando clave de CV por defecto.");
        // Opcional: Descomentar para forzar la redirección si el usuario no está logueado
        // window.location.href = "https://brianmtz222.github.io/JobPath/registro/login.html";
    }

    // Clave de almacenamiento única basada en el email del usuario.
    const cvStorageKey = currentUserEmail ? `cv_${currentUserEmail}` : 'cv_default_anonimo';

    // 2. CONTENIDO DEL CV POR DEFECTO (HTML original)
    // Usamos el innerHTML del div 'cv-content' del HTML original como plantilla.
    const defaultCVContent = `
        <header>
            <h1 id="cv-name">Nombre Apellido</h1>
            <p id="cv-title">Título Profesional / Puesto</p>
            <div class="contact-info">
                <span>📧 email@ejemplo.com</span> |
                <span>📞 +34 123 456 789</span> |
                <span>📍 Ciudad, País</span>
            </div>
        </header>
        
        <hr>

        <section>
            <h2>📝 Perfil Profesional</h2>
            <p>Soy un profesional con experiencia en [Área] y apasionado por [Tema]. Busco utilizar mis habilidades en [Habilidad 1] y [Habilidad 2] para contribuir al éxito de su proyecto.</p>
        </section>

        <section>
            <h2>💼 Experiencia Laboral</h2>
            <div class="job-entry">
                <h3>Puesto en Empresa A</h3>
                <p class="date-range">Enero 2020 – Actualidad</p>
                <ul>
                    <li>Logro clave o responsabilidad principal 1.</li>
                    <li>Logro clave o responsabilidad principal 2.</li>
                </ul>
            </div>
            <div class="job-entry">
                <h3>Puesto en Empresa B</h3>
                <p class="date-range">Marzo 2018 – Diciembre 2019</p>
                <ul>
                    <li>Responsabilidad importante en la empresa B.</li>
                </ul>
            </div>
        </section>

        <section>
            <h2>🎓 Educación</h2>
            <div class="education-entry">
                <h3>Grado/Título en Universidad/Instituto</h3>
                <p class="date-range">2014 – 2018 | Ciudad, País</p>
            </div>
        </section>

        <section>
            <h2>💡 Habilidades</h2>
            <p>HTML, CSS, JavaScript, React, SQL, Comunicación, Liderazgo.</p>
        </section>
    `;

    let isEditing = false;

    // 3. FUNCIÓN PARA CARGAR EL CV
    function loadCV() {
        const savedCV = localStorage.getItem(cvStorageKey);

        if (savedCV) {
            // Carga el CV guardado para este usuario
            cvContentElement.innerHTML = savedCV;
            console.log(`CV cargado para: ${currentUserEmail}`);
        } else {
            // Si no hay CV guardado, carga el CV por defecto
            cvContentElement.innerHTML = defaultCVContent;
            console.log(`Cargando CV por defecto para: ${currentUserEmail}`);
        }
    }

    // 4. FUNCIÓN PARA GUARDAR EL CV (usando la clave única)
    function saveCV() {
        localStorage.setItem(cvStorageKey, cvContentElement.innerHTML);
        console.log(`CV guardado con clave: ${cvStorageKey}`);
    }

    // 5. Función para alternar el modo de edición
    function toggleEditMode() {
        isEditing = !isEditing;
        cvContentElement.contentEditable = isEditing;

        if (isEditing) {
            editToggleBtn.textContent = 'Guardar CV';
            cvContentElement.focus();
            // Opcional: podrías agregar una clase CSS para visualmente indicar que es editable
            // cvContentElement.classList.add('editing');
            alert('YA PUEDES MODIFICAR TU CURRÍCULUM !!!');
        } else {
            // Al salir del modo edición, guardamos el contenido con la clave única
            saveCV();
            editToggleBtn.textContent = 'Editar Currículum';
            // cvContentElement.classList.remove('editing');
            alert('¡SE GUARDO TU CURRÍCULUM CORRECTAMTE!');
        }
    }

    // Listener para el botón de edición
    editToggleBtn.addEventListener('click', toggleEditMode);

    // Cargar el CV al iniciar la página
    loadCV();

    // *Opcional: Controlar el 'Enter' para no romper la estructura*
    cvContentElement.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.tagName !== 'LI') {
            e.preventDefault();
            document.execCommand('insertLineBreak');
        }
    });
});
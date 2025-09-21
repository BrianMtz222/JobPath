// Este código maneja el formulario de login.html
const loginForm = document.getElementById('loginForm');

// Escuchamos el evento de "submit" (cuando el usuario hace clic en el botón de Entrar)
loginForm.addEventListener('submit', (event) => {
    // Evitamos que la página se recargue, que es el comportamiento por defecto de un formulario
    event.preventDefault(); 

    // Obtenemos los valores de los campos de usuario y contraseña
    const username = document.getElementById('username').value;
    
    // NOTA: En un caso real, nunca guardarías la contraseña en el navegador.
    // Aquí solo la leemos para fines de demostración.
    const password = document.getElementById('password').value; 

    // Usamos el almacenamiento local del navegador para guardar el nombre del usuario
    // La clave es 'loggedInUser' y el valor es el nombre que se ingresó
    localStorage.setItem('loggedInUser', username);
    
    // Redirigimos al usuario a la página de perfil
    window.location.href = 'perfil.html';
});
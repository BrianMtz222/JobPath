// Lógica para la página de login
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;

    const userData = {
        name: username,
        lastname: lastname,
        email: email
    };

    localStorage.setItem('loggedInUser', JSON.stringify(userData));
    
    // Ruta corregida
    window.location.href = '../perfil/perfil.html';
});
// Lógica para la página de perfil
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
    // Ruta corregida
    window.location.href = '../login/login.html'; 
}
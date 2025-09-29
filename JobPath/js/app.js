
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
    const editBtn = document.querySelector('.edit-btn');


    const storedUserData = localStorage.getItem('loggedInUser');
    let userData = null;

    if (storedUserData) {

        userData = JSON.parse(storedUserData);


        userNameDisplay.textContent = userData.name;
        userLastnameDisplay.textContent = userData.lastname;
        userEmailDisplay.textContent = userData.email;
    } else {

        window.location.href = "https://brianmtz222.github.io/JobPath/registro/login.html";
    }

    let isEditing = false;


    document.addEventListener('DOMContentLoaded', () => {

        const userNameDisplay = document.getElementById('userNameDisplay');
        const userLastnameDisplay = document.getElementById('userLastnameDisplay');
        const userEmailDisplay = document.getElementById('userEmailDisplay');
        const editBtn = document.querySelector('.edit-btn');
        let isEditing = false;


        let userData;
        try {
            const storedUser = localStorage.getItem('loggedInUser');
            if (storedUser) {
                userData = JSON.parse(storedUser);
            } else {

                userData = {
                    name: "Usuario",
                    lastname: "JobPath",
                    email: "usuario.ejemplo@jobpath.com"
                };
            }
        } catch (e) {
            console.error("Error al cargar userData del localStorage:", e);

            userData = {
                name: "Usuario",
                lastname: "JobPath",
                email: "usuario.ejemplo@jobpath.com"
            };
        }


        const renderUserData = () => {
            userNameDisplay.textContent = userData.name;
            userLastnameDisplay.textContent = userData.lastname;
            userEmailDisplay.textContent = userData.email;
        };


        renderUserData();



        if (editBtn) {
            editBtn.addEventListener('click', () => {
                isEditing = !isEditing;

                if (isEditing) {



                    userNameDisplay.contentEditable = true;
                    userLastnameDisplay.contentEditable = true;
                    userEmailDisplay.contentEditable = true;

                    userNameDisplay.classList.add('is-editing');
                    userLastnameDisplay.classList.add('is-editing');
                    userEmailDisplay.classList.add('is-editing');

                    editBtn.textContent = 'Guardar Cambios';
                    alert('¡YA PUEDES MODIFICAR TUS DATOS!');

                } else {



                    userNameDisplay.contentEditable = false;
                    userLastnameDisplay.contentEditable = false;
                    userEmailDisplay.contentEditable = false;

                    userNameDisplay.classList.remove('is-editing');
                    userLastnameDisplay.classList.remove('is-editing');
                    userEmailDisplay.classList.remove('is-editing');


                    const newName = userNameDisplay.textContent.trim();
                    const newLastname = userLastnameDisplay.textContent.trim();
                    const newEmail = userEmailDisplay.textContent.trim();

                    if (!newName || !newLastname || !newEmail) {
                        alert('Todos los campos de perfil deben tener contenido. Revierte o edita.');
                        isEditing = true;

                        userNameDisplay.contentEditable = true;
                        userLastnameDisplay.contentEditable = true;
                        userEmailDisplay.contentEditable = true;
                        userNameDisplay.classList.add('is-editing');
                        userLastnameDisplay.classList.add('is-editing');
                        userEmailDisplay.classList.add('is-editing');
                        return;
                    }

                    userData.name = newName;
                    userData.lastname = newLastname;
                    userData.email = newEmail;

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
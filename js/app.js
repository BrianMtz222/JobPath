


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


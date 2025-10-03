


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
    const fileInput = document.getElementById('fileInput'); 
    const handlePlaceholderClick = (placeholderDiv) => {
       
        fileInput.placeholderToFill = placeholderDiv; 
        
       
        fileInput.click(); 
    };

 
    const createPlaceholder = () => {
        const placeholder = document.createElement('div');
        placeholder.classList.add('image-placeholder');
        placeholder.innerHTML = '<span>Haz click para agregar imagen</span>'; 

       
        placeholder.addEventListener('click', () => {
            handlePlaceholderClick(placeholder);
        });

        return placeholder;
    };

    
    if (addImageBtn) {
        addImageBtn.addEventListener('click', () => {
            const newPlaceholder = createPlaceholder();
            publicationsGrid.appendChild(newPlaceholder);
            
        
            const publicationsCountElement = document.getElementById('publicationsCount');
            let currentCount = parseInt(publicationsCountElement.textContent) || 0;
            publicationsCountElement.textContent = currentCount + 1;
        });
    }

   
    const initialPlaceholder = publicationsGrid ? publicationsGrid.querySelector('.image-placeholder') : null;
    if (initialPlaceholder) {
        initialPlaceholder.addEventListener('click', () => {
            handlePlaceholderClick(initialPlaceholder);
        });
    }

   
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const placeholderDiv = fileInput.placeholderToFill; 

        if (file && placeholderDiv) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Publicación de usuario';
                
               
                placeholderDiv.innerHTML = '';
                
                
                placeholderDiv.appendChild(img);
                
                placeholderDiv.classList.remove('image-placeholder');
                
                event.target.value = '';
                fileInput.placeholderToFill = null;
            };

            reader.readAsDataURL(file);
        }
    });
});
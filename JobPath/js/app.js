// Obtenemos el nombre del archivo actual
const currentPath = window.location.pathname;

// --- LOGIN ---
if (currentPath.includes("login.html")) {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const lastname = document.getElementById("lastname").value;
            const email = document.getElementById("email").value;

            if (username && lastname && email) {
                const userData = { name: username, lastname, email };

                localStorage.setItem("loggedInUser", JSON.stringify(userData));

                // Redirigir al perfil (ruta relativa en GitHub Pages)
                window.location.href = "../perfil/perfil.html";
            } else {
                alert("Por favor, completa todos los campos.");
            }
        });
    }

// --- PERFIL ---
} else if (currentPath.includes("perfil.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        const userNameDisplay = document.getElementById("userNameDisplay");
        const userEmailDisplay = document.getElementById("userEmailDisplay");

        const storedUserData = localStorage.getItem("loggedInUser");

        if (storedUserData) {
            try {
                const userData = JSON.parse(storedUserData);
                userNameDisplay.textContent = `${userData.name} ${userData.lastname}`;
                userEmailDisplay.textContent = userData.email;
            } catch (e) {
                console.error("Error al parsear los datos", e);
                window.location.href = "../login/login.html";
            }
        } else {
            window.location.href = "../login/login.html";
        }
    });
}

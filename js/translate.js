// 1. Inicializa el widget de Google Translate (función global requerida)
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',          // Idioma original de tu página
        includedLanguages: 'en,es',  // Idiomas ofrecidos para traducir
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false           // Oculta el widget estándar de Google, ya que usas tus propios botones
    }, 'google_translate_element');
}

// 2. Función para cambiar el idioma usando tus botones
function cambiarIdioma(lang) {
    // La cookie 'googtrans' es el mecanismo oficial. El formato es /idioma_original/idioma_destino
    const cookieValue = `/es/${lang}`;

    // Establece la cookie con la ruta '/' para que se aplique a todo el sitio.
    document.cookie = `googtrans=${cookieValue}; path=/;`;

    // Recarga la página. Al recargar, el script de Google detecta la cookie y aplica la traducción.
    location.reload();
}
// 1. Inicializa el widget de Google Translate (función global requerida)
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',           // Idioma original de tu página
        includedLanguages: 'en,es',   // Idiomas ofrecidos para traducir
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false            // Oculta el widget estándar de Google
    }, 'google_translate_element');
}

// 2. Función para cambiar el idioma (¡sin recargar la página!)
function cambiarIdioma(lang) {
    // 1. Crear el valor de la cookie en el formato oficial: /idioma_original/idioma_destino
    const langPair = `/es/${lang}`;
    
    // 2. Establecer la cookie de Google Translate
    // Esto asegura que la traducción persista si el usuario navega a otra página
    document.cookie = `googtrans=${langPair}; path=/;`;

    // 3. Obtener la función de cambio de idioma de Google Translate
    // Google expone una función global para cambiar el idioma
    // Esta función típicamente se llama de forma interna por el widget
    if (typeof goog != 'undefined' && goog.hasOwnProperty('dom') && goog.dom.hasOwnProperty('jstiming') && goog.dom.jstiming.hasOwnProperty('load') && goog.dom.jstiming.load.hasOwnProperty('cl')) {
        // La función oculta para cambiar el idioma es llamada, forzando la traducción
        goog.dom.jstiming.load.cl(lang, '', null);
    } else {
        // Si el método no funciona (p. ej., la función interna no existe o cambió),
        // se recurre al método de recarga de página para asegurar el cambio.
        location.reload();
    }
}
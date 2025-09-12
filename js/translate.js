function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',
    includedLanguages: 'es,en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}

function cambiarIdioma(lang) {
  document.cookie = "googtrans=/es/" + lang + ";path=/";
  location.reload();
}

// Cargar el script de Google Translate dinámicamente
(function() {
  var gtScript = document.createElement("script");
  gtScript.type = "text/javascript";
  gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.appendChild(gtScript);
})();

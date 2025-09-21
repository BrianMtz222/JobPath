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

(function() {
  var gtScript = document.createElement("script");
  gtScript.type = "text/javascript";
  gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.appendChild(gtScript);
})();

 function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'es',
                includedLanguages: 'es,en',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        }

        function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'en,es'}, 'google_translate_element');
}
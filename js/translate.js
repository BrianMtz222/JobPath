function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en,es',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

function cambiarIdioma(lang) {
    const langPair = `/es/${lang}`;
    document.cookie = `googtrans=${langPair}; path=/;`;
    if (typeof goog != 'undefined' && goog.dom?.jstiming?.load?.cl) {
        goog.dom.jstiming.load.cl(lang, '', null);
    } else {
        location.reload();
    }
}
 WebTransportBidirectionalStream;
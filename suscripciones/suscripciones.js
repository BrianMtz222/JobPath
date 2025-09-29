



function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',
    includedLanguages: 'es,en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}


function cambiarIdioma(lang) {
  var fromLang = 'es';
  document.cookie = "googtrans=/" + fromLang + "/" + lang + ";path=/";
  location.reload();
}


window.addEventListener('load', () => {
  setTimeout(() => {
    const banner = document.querySelector('.goog-te-banner-frame.skiptranslate');
    if (banner) {
      banner.style.display = 'none';
      document.body.style.top = '0px';
    }
  }, 500);
});
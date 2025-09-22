document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos los contenedores de tarjetas
    const visibleCards = document.querySelector('.visible-cards');
    const hiddenCards = document.querySelector('.hidden-cards');
    
    // Obtenemos los botones de navegación
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    // Inicialmente, las tarjetas "visibles" están activas
    let isVisible = true;

    // Función para manejar el clic en la flecha "siguiente"
    const showNext = () => {
        // Si las tarjetas visibles están activas, las ocultamos y mostramos las nuevas
        if (isVisible) {
            visibleCards.style.opacity = '0'; // Inicia la transición de desvanecimiento
            setTimeout(() => {
                visibleCards.style.display = 'none'; // Oculta el contenedor
                hiddenCards.style.display = 'flex'; // Muestra el nuevo contenedor
                hiddenCards.style.opacity = '1'; // Inicia la transición de aparición
            }, 500); // Espera a que termine la transición de desvanecimiento
            isVisible = false;
        }
    };

    // Función para manejar el clic en la flecha "anterior"
    const showPrev = () => {
        // Si las tarjetas ocultas están activas, las ocultamos y mostramos las originales
        if (!isVisible) {
            hiddenCards.style.opacity = '0';
            setTimeout(() => {
                hiddenCards.style.display = 'none';
                visibleCards.style.display = 'flex';
                visibleCards.style.opacity = '1';
            }, 500);
            isVisible = true;
        }
    };

    // Agregamos los escuchadores de eventos a los botones
    nextArrow.addEventListener('click', showNext);
    prevArrow.addEventListener('click', showPrev);
});
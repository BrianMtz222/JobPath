document.addEventListener('DOMContentLoaded', () => {
    const visibleCards = document.querySelector('.visible-cards');
    const hiddenCards = document.querySelector('.hidden-cards');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    let isVisible = true; // control de estado

    const showNext = () => {
        if (isVisible) {
            visibleCards.style.transition = 'opacity 0.5s';
            hiddenCards.style.transition = 'opacity 0.5s';

            visibleCards.style.opacity = '0';
            setTimeout(() => {
                visibleCards.style.display = 'none';
                hiddenCards.style.display = 'flex';
                hiddenCards.style.opacity = '1';
            }, 500);
            isVisible = false;
        }
    };

    const showPrev = () => {
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

    nextArrow.addEventListener('click', showNext);
    prevArrow.addEventListener('click', showPrev);
});

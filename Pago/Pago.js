document.addEventListener('DOMContentLoaded', () => {
    const subscriptionSelect = document.getElementById('subscription-select');
    const consultationPlanName = document.getElementById('consultation-plan-name');
    const consultationPrice = document.getElementById('consultation-price');
    const totalPrice = document.getElementById('total-price');

    /**
     * Función para actualizar el resumen del pago.
     * @param {string} price - El precio del plan seleccionado.
     * @param {string} name - El nombre del plan seleccionado.
     */
    function updateSummary(price, name) {
        const formattedPrice = `$${parseFloat(price).toFixed(2)}`;
        
        // Actualiza el texto de la "Consultation Fee"
        consultationPlanName.innerHTML = `**${name} Plan**<br>Este es el precio de la susbcripcion que usted esta por comprar ahora , verfique antes de hacer el pago!!!`;
        
        // Actualiza los precios
        consultationPrice.textContent = formattedPrice;
        totalPrice.textContent = formattedPrice;
    }

    // Manejador de evento para el cambio en el selector
    subscriptionSelect.addEventListener('change', (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const newPrice = selectedOption.value;
        const newName = selectedOption.getAttribute('data-plan-name');
        
        updateSummary(newPrice, newName);
    });

    // Inicializa el resumen con la opción seleccionada por defecto (Master)
    const defaultOption = subscriptionSelect.options[subscriptionSelect.selectedIndex];
    const defaultPrice = defaultOption.value;
    const defaultName = defaultOption.getAttribute('data-plan-name');
    
    updateSummary(defaultPrice, defaultName);
});
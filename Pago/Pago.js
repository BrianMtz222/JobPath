document.addEventListener('DOMContentLoaded', () => {
    const subscriptionSelect = document.getElementById('subscription-select');
    const consultationPlanName = document.getElementById('consultation-plan-name');
    const consultationPrice = document.getElementById('consultation-price');
    const totalPrice = document.getElementById('total-price');

    const emailInput = document.getElementById('email');
    const cardNumberInput = document.getElementById('card-number');
    const cvcInput = document.getElementById('cvc-code');
    const expiryInput = document.getElementById('expiry-date');
    const btnPay = document.getElementById('btn-pay');
    const mensaje = document.getElementById('mensaje');

    function updateSummary(price, name) {
        const formattedPrice = `$${parseFloat(price).toFixed(2)}`;
        consultationPlanName.innerHTML = `**${name} Plan**<br>Este es el precio de la susbcripcion que usted esta por comprar ahora , verfique antes de hacer el pago!!!`;
        consultationPrice.textContent = formattedPrice;
        totalPrice.textContent = formattedPrice;
    }

    subscriptionSelect.addEventListener('change', (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const newPrice = selectedOption.value;
        const newName = selectedOption.getAttribute('data-plan-name');
        updateSummary(newPrice, newName);
    });

    const defaultOption = subscriptionSelect.options[subscriptionSelect.selectedIndex];
    const defaultPrice = defaultOption.value;
    const defaultName = defaultOption.getAttribute('data-plan-name');
    updateSummary(defaultPrice, defaultName);

    function validarPago() {
        mensaje.textContent = "";
        let errores = [];

        const email = emailInput.value.trim();
        const cardNumber = cardNumberInput.value.trim();
        const cvc = cvcInput.value.trim();
        const expiry = expiryInput.value.trim();

        if (!email.includes('@') || email === "") {
            errores.push("Ingrese un correo válido");
        }

        if (!/^\d{13,18}$/.test(cardNumber)) {
            errores.push("Ingrese una tarjeta válida (13 a 18 dígitos)");
        }

        if (!/^\d{3}$/.test(cvc)) {
            errores.push("Ingrese un código de seguridad válido (3 dígitos)");
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
            errores.push("Ingrese una fecha válida (MM/AA)");
        }

        if (errores.length > 0) {
            mensaje.style.color = "red";
            mensaje.innerHTML = errores.join("<br>");
            alert("Pago inválido");
        } else {
            mensaje.style.color = "green";
            mensaje.textContent = "Pago exitoso";
            alert("Pago exitoso");
            window.location.href = "https://brianmtz222.github.io/JobPath/";
        }
    }

    btnPay.addEventListener('click', (e) => {
        e.preventDefault();
        validarPago();
    });
});

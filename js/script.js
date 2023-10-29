document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-validation");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const confirmEmail = document.getElementById("confirmEmail").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const nombreError = document.getElementById("nombreError");
        const emailError = document.getElementById("emailError");
        const confirmEmailError = document.getElementById("confirmEmailError");
        const telefonoError = document.getElementById("telefonoError");
        const mensajeError = document.getElementById("mensajeError");

        // Restablecer mensajes de error
        nombreError.textContent = "";
        emailError.textContent = "";
        confirmEmailError.textContent = "";
        telefonoError.textContent = "";
        mensajeError.textContent = "";

        // Validar nombre
        if (nombre === "") {
            nombreError.textContent = "Por favor, ingresa tu nombre.";
            nombreError.style.display = "block";
            return;
        }

        // Validar email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
            emailError.style.display = "block";
            return;
        } else {
            emailError.style.display = "none";
        }

        // Validar confirmación de email
        if (email !== confirmEmail) {
            confirmEmailError.textContent = "Los correos electrónicos no coinciden.";
            confirmEmailError.style.display = "block";
            return;
        } else {
            confirmEmailError.style.display = "none";
        }

        // Validar teléfono
        if (telefono === "") {
            telefonoError.textContent = "Por favor, ingresa tu número de teléfono.";
            telefonoError.style.display = "block";
            return;
        } else {
            telefonoError.style.display = "none";
        }
        // Validar mensaje
        if (mensaje === "") {
            mensajeError.textContent = "Por favor, ingresa tu mensaje.";
            mensajeError.style.display = "block";
            return;
        } else {
            mensajeError.style.display = "none";
        }
        
        // Todos los campos son válidos, mostrar mensaje de enviado
        //alert("¡Formulario enviado con éxito!");
        showSuccessMessage("Su mensaje ha sido enviado.");
    
        // Reiniciar el formulario después de 5 segundos
        setTimeout(function() {
            form.reset();
        }, 5000);

    });

    function showSuccessMessage(message) {
        successMessage.textContent = message;
        successMessage.style.display = "block";
    
        // Oculta el mensaje de éxito después de unos segundos (por ejemplo, 3 segundos)
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 5000); // 5000 milisegundos = 3 segundos
    }

});

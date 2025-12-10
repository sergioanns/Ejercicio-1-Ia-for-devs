// Este archivo debe contener la lógica JavaScript para validar el formulario.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío por defecto del formulario

        // Limpiar estilos y contenido al inicio
        successMessage.textContent = ''; 
        successMessage.className = ''; // Limpia todas las clases

        const isFormValid = validateForm();

        if (isFormValid) {
            successMessage.textContent = '¡Registro exitoso! Los datos han sido validados.';
            successMessage.classList.add('success'); // Clase para color verde
            form.reset(); 
        } else {
            successMessage.textContent = 'Por favor, corrige los errores en el formulario.';
            successMessage.classList.add('error'); // Clase para color rojo
        }
    });
});


function validateForm() {
    // 1. Obtener elementos de entrada y de error
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // 2. Obtener valores y limpiar espacios para username/email
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value; // No se limpia el espacio en contraseñas

    // 3. Limpiar errores previos en todos los campos
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // Bandera de validación
    let formIsValid = true;

    /*
     * VALIDACIÓN 1: NOMBRE DE USUARIO (Obligatorio, Mínimo 5 caracteres)
     */
    if (usernameValue === '') {
        usernameError.textContent = 'El nombre de usuario es obligatorio.';
        formIsValid = false;
    } else if (usernameValue.length < 5) {
        usernameError.textContent = 'El nombre de usuario debe tener al menos 5 caracteres.';
        formIsValid = false;
    }

    /*
     * VALIDACIÓN 2: EMAIL (Obligatorio, Formato válido)
     */
    // Patrón de email común: usuario@dominio.tld
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        emailError.textContent = 'El email es obligatorio.';
        formIsValid = false;
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'El formato del email no es válido (ej: usuario@dominio.com).';
        formIsValid = false;
    }

    /*
     * VALIDACIÓN 3: CONTRASEÑA (Obligatoria, Mínimo 8 caracteres, 1 mayúscula, 1 número)
     */
    if (passwordValue === '') {
        passwordError.textContent = 'La contraseña es obligatoria.';
        formIsValid = false;
    } else if (passwordValue.length < 8) {
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        formIsValid = false;
    } else if (!/[A-Z]/.test(passwordValue)) { // Al menos una mayúscula
        passwordError.textContent = 'Debe contener al menos una letra mayúscula.';
        formIsValid = false;
    } else if (!/[0-9]/.test(passwordValue)) { // Al menos un número
        passwordError.textContent = 'Debe contener al menos un número.';
        formIsValid = false;
    }

    // Retorna el estado final de la validación
    return formIsValid;
}
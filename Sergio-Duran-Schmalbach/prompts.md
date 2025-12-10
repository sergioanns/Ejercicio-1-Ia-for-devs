

# Gemini 

## Prompt 1 - Tree of Thoughts, Few-shot, Chain of Thoughts

Eres un Senior Front-End Developer especializado en JavaScript. Dentro de tu equipo se te asigno la tarea de crear las validaciones de un formulario.

El formulario contiene los campos:

1. Nombre de usuario: obligatorio, mínimo 5 caracteres
2. Email: obligatorio, formato válido
3. Contraseña: obligatoria, mínimo 8 caracteres, contiene al menos un mayúscula y mínimo un número.

Mensaje de éxito:

Asegúrate de mostrar un mensaje de error claro en color rojo en el div de error correspondiente a cada campo si la validación falla. Si la validación es exitosa, el formulario debe mostrar un mensaje de éxito (`#successMessage`) y limpiarse.

Los siguientes snippets son los archivos del proyecto donde script.js es el que modificaras. Las validaciones deben ir dentro de la función validateForm() la cual se ejecuta al momento de hacer submit al formulario.

1. index.html

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"], input[type="email"], input[type="password"] {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .error { color: red; font-size: 0.9em; margin-top: 5px; }
    </style>
</head>
<body>
    <h1>Registro de Usuario</h1>
    <form id="registrationForm">
        <div class="form-group">
            <label for="username">Nombre de Usuario:</label>
            <input type="text" id="username" name="username">
            <div id="usernameError" class="error"></div>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <div id="emailError" class="error"></div>
        </div>
        <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password">
            <div id="passwordError" class="error"></div>
        </div>
        <button type="submit">Registrar</button>
        <div id="successMessage" class="error" style="color: green;"></div>
    </form>
    <script src="script.js"></script>
</body>
</html>
```

2. script.js

```
// Este archivo debe contener la lógica JavaScript para validar el formulario.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío por defecto del formulario
        const isFormValid = validateForm();
        if (isFormValid) {
            document.getElementById('successMessage').textContent = '¡Registro exitoso!';
            form.reset();
        } else {
            document.getElementById('successMessage').textContent = 'Por favor, corrige los errores en el formulario.';
        }
    });
});

function validateForm() {
 // Validacion del form
}
```

Para garantizar la optimización del código:

1. Por cada `<input>` haz 3 posibles soluciones que cumplan con los requerimientos técnicos de las validaciones.
2. Luego, genera una 4 solución donde combines lo mejor de las 3 siguiendo eficiencia y mantenimiento.
3. Vas a evaluar las soluciones en el siguiente formato:

```
Solución Nombre de Usuario 1:

<codigo>
Pros:
- ...
Contras:
- ...

Solución Nombre de Usuario 2:
<codigo>
Pros:
- ...
Contras:
- ...

Solución Nombre de Usuario 3:
<codigo>
Pros:
- ...
Contras:
- ...

Solucion Nombre de Usuario Final:
<codigo>

// Luego las 3 soluciones de los siguientes inputs y su solucion final.
```
Y por ultimo genera un snippet de script.js (completo) modificado con las validaciones finales.

## Prompt 2 - Self-Correction

Identifica por qué el mensaje de éxito siempre queda verde apesar de que el formulario es invalido. Luego corrige ese problema y extrae todo el bloque `<style>` y muévelo a un archivo `styles.css` externo.

Requisitos:

- Corregir solo lo necesario.
- Separar correctamente el CSS.
- Mantener la lógica original.

index.html

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"], input[type="email"], input[type="password"] {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .error { color: red; font-size: 0.9em; margin-top: 5px; }
    </style>
</head>

<body>
    <h1>Registro de Usuario</h1>
    <form id="registrationForm">
        <div class="form-group">
            <label for="username">Nombre de Usuario:</label>
            <input type="text" id="username" name="username">
            <div id="usernameError" class="error"></div>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <div id="emailError" class="error"></div>
        </div>
        <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password">
            <div id="passwordError" class="error"></div>
        </div>
        <button type="submit">Registrar</button>
        <div id="successMessage" class="error" style="color: green;"></div>
    </form>
    <script src="script.js"></script>
</body>
</html>
```

script.js

```
// Este archivo debe contener la lógica JavaScript para validar el formulario.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío por defecto del formulario
        // Limpiar mensaje de éxito/error genérico al inicio de la validación
        successMessage.textContent = '';
        const isFormValid = validateForm();
        if (isFormValid) {
            successMessage.textContent = '¡Registro exitoso! Los datos han sido validados.';
            // Opcional: Ocultar el formulario o redirigir
            form.reset();
        } else {
            // El mensaje de error general se deja en blanco para que solo se vean los errores específicos.
            successMessage.textContent = 'Por favor, corrige los errores en el formulario.';
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
```
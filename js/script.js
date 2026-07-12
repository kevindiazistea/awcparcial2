const formulario = document.getElementById('formulario');
const ingresarElement = document.getElementById('ingresar');
const emailErrorElement = document.getElementById('emailError');
const latErrorElement = document.getElementById('latError');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    emailErrorElement.textContent = "";
    emailErrorElement.style.display = "none";
    latErrorElement.textContent = "";
    latErrorElement.style.display = "none";
    ingresarElement.textContent = "";

    const email = document.getElementById('email').value.trim();
    const lat = document.getElementById('lat').value.trim();

    try {
        // Api de users
        const ingresar = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await ingresar.json();
        const userByEmail = users.find(u => u.email === email);

        if (userByEmail) {
            if (userByEmail.address.geo.lat === lat) {
                ingresarElement.textContent = "Usuario correcto, sera redirigido";
                setTimeout(() => {
                    window.location.href = 'detalle.html';}, 1000);
            } else {
                latErrorElement.textContent = "La latitud es incorrecta, intentar nuevamente.";
                latErrorElement.style.display = "block";
            }
        } else {
            emailErrorElement.textContent = "El email no se encuentra registrado.";
            emailErrorElement.style.display = "block";
        }
    } catch (error) {
        ingresarElement.textContent = `Error: ${error.message}`;
    }
});

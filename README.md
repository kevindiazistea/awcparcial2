# Parcial 2 - Apliaciones Web Cliente

El objetivo del parcial 2 es desarrollar una demo funcional que permita autenticación de usuarios y consumo de APIs externas para obtener información sobre género y nacionalidad a partir de un nombre ingresado por el usuario.
La aplicación simula un flujo real de un sitio web corporativo:
primero se valida el acceso del usuario y luego se muestra una vista principal con consultas dinámicas.
  
[GitHub Kevin Diaz - Parcial 2](https://kevindiazistea.github.io/awcparcial2/#)

## Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **APIs externas:**
- https://jsonplaceholder.typicode.com/users (Login)
- https://genderize.io/ (Género del nombre)
- https://nationalize.io/ (Nacionalidad del nombre)

## Estructura del proyecto

- index.html                    → Ingreso de Login
- detalle.html                  → Consultar género y nacionalidad
- /css/formulario.css           → Estilos del login
- /css/tabla.css                → Estilos de la tabla de resultados de genero y nacionalidad
- /js/script.js                 → Lógica del login (validación contra API)
- /js/tabla.js                  → Lógica de consultas (genderize + nationalize contra APIS)

## La web nos debe permitir

- *Autenticación – Login*
- Ingresar email y latitud como contraseña.
- Validar ambos datos contra la *API*: https://jsonplaceholder.typicode.com/users
- Validar datos correctos o incorrectos mediante mensaje, si es correcto avanzamos a la segunda pantalla. (detalle.html)
- *Consultar mediante el nombre el género y la nacionalidad*
- El usuario ingresa un nombre y este valida a la *API* https://api.genderize.io/?name=nombre el genero
- Ademas valida la nacionalidad mediante la *API* https://api.nationalize.io/?name=nombre
- *Muestra resultado en tablas*
- Primera fila, Nombre y género
- Segunda fila, Naciolidad con mas probabilidades

## Autor

Kevin Díaz

*Parcial 2 — Aplicaciones Web Cliente (ISTEA)*

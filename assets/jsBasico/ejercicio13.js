//Local Storage
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

/**
 * nombal: nombreUsuario.innerHTML = nombreUsuario.innerHTML + nombre
 * abreviado: nombreUsuario
 */

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre");
  nombreUsuario.innerHTML = "Bienvenido/a: " + nombre;
  localStorage.setItem("nombre", nombre); //local storage
  console.log(nombre);
};

if (localStorage.getItem("nombre")) {
  nombreUsuario.innerHTML = "Bienvenido/a: " + localStorage.getItem("nombre"); // para que guarde en local storage
}

//eventos --- recomendados hacer al final
ejecutar.onclick = () => {
  cambiarNombre();
};

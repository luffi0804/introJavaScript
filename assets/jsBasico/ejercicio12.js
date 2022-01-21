//DOM
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

/**
 * nombal: nombreUsuario.innerHTML = nombreUsuario.innerHTML + nombre
 * abreviado: nombreUsuario
 */

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre");
  nombreUsuario.innerHTML = "Bienvenido/a: " + nombre;
};

//eventos --- recomendados hacer al final
ejecutar.onclick =  () => {
  cambiarNombre();
};

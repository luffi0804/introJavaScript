let ejecutar = document.getElementById("btnEjecutar");
let nombreUser = document.getElementById("nombreUser");
let edadUser = document.getElementById("edadUser");
let direccionUser = document.getElementById("direccionUser");
let telefonoUser = document.getElementById("telefonoUser");
let documentoUser = document.getElementById("documentoUser");

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre");
  nombreUser.innerHTML = "Nombre: " + nombre;
  localStorage.setItem("nombre", nombre);
};

const cambiarEdad = () => {
  let edad = prompt("Ingresa tu edad");
  edadUser.innerHTML = "Edad: " + edad;
  localStorage.setItem("edad", edad);
};

const cambiarDireccion = () => {
  let direccion = prompt("Ingresa tu direccion");
  direccionUser.innerHTML = "Direccion: " + direccion;
  localStorage.setItem("direccion", direccion);
};

const cambiarTelefono = () => {
  let telefono = prompt("Ingresa tu telefono");
  telefonoUser.innerHTML = "Telefono: " + telefono;
  localStorage.setItem("telefono", telefono);
};

const cambiarDocumento = () => {
  let documento = prompt("Ingresa tu documento");
  documentoUser.innerHTML = "Documento: " + documento;
  localStorage.setItem("documento", documento);
};

// if (localStorage.getItem("nombre" || "edad" || "direccion" || "telefono" || !direccion) ) {

// }
if (localStorage.getItem("nombre")) {
  nombreUser.innerHTML = "Nombre: " + localStorage.getItem("nombre");
}
if (localStorage.getItem("edad")) {
  edadUser.innerHTML = "Edad: " + localStorage.getItem("edad");
}
if (localStorage.getItem("direccion")) {
  direccionUser.innerHTML = "Direccion:  " + localStorage.getItem("direccion");
}
if (localStorage.getItem("telefono")) {
  telefonoUser.innerHTML = "Telefono: " + localStorage.getItem("telefono");
}
if (localStorage.getItem("documento")) {
  documentoUser.innerHTML = "Documento: " + localStorage.getItem("documento");
}

ejecutar.onclick = () => {
  cambiarNombre();
  cambiarEdad();
  cambiarDireccion();
  cambiarTelefono();
  cambiarDocumento();
};

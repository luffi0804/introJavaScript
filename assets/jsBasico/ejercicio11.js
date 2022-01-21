//DOM
let ejecutar = document.getElementById("btnEjecutar"); // este me devuelve el boton por medio del getElementById y por medio del Id lo trae

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre");
  alert("Tu nombre es:" + nombre);
};

//eventos --- recomendados hacer al final
ejecutar.onclick =  () => {
  cambiarNombre();
};

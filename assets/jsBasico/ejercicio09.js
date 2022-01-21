let ciudad = prompt("Ingresa tu ciudad");

switch (edad) {
  case "bogota":
    alert("clima frio");
    break;
  case "medellin":
    alert("clima templado");
    break;
case "pasto":
    alert("clima frio");
    break;
  default:
    alert("No es una ciudad validad");
    break;
}

// if-else anidados
if (ciudad === "bogota" || ciudad === "armenia") {
  alert("clima frio");
} else {
  if (ciudad === "medellin" || ciudad === "pasto") {
    alert("clima templado");
  } else {
    alert("no ingreso una ciudad valida");
  }
}

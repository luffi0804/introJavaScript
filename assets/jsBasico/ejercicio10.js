let dia = prompt("Ingrese un dia a la semana").toLowerCase();

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "miércoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert("Es un dia entre semana");
} else {
  if (dia === "sabado" || dia === "sábado" || dia === "domingo") {
    alert("Fin de semana");
  } else {
    alert("Favor ingresar un dia de la semana");
  }
}

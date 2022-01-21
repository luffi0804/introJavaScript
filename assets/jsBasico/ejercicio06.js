// Funciones
// como consejo no repetir variables no importa si es global o local
let nombre = "Tere" //variable global

function nombreUsuario() {
    let nombre = prompt("Ingresa tu nombre"); //variable local
    alert("tu nombre es: "+ nombre);
    console.log("Tu nombre es: " + nombre);
}

// nombreUsuario(); // invocamos la funcion o metodo
console.log(nombre);
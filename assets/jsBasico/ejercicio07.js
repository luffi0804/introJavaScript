// Funciones

let nombre = "Tere"

const nombreUsuario = () => { // funciones flechas, recomendadas por seguridad
    let nombre = prompt("Ingresa tu nombre"); //variable local
    alert("tu nombre es: "+ nombre);
    console.log("Tu nombre es: " + nombre);
}

console.log(nombre);
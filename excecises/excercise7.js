/*
Ejercicio 7: Validar contraseñas
Crea una función llamada validarContrasena(contrasena) que verifique si una contraseña cumple con las siguientes reglas:

Debe tener al menos 8 caracteres.
Debe contener al menos un número.
Si cumple con ambas, retornar "Contraseña válida", de lo contrario "Contraseña no válida".
*/
function validarContrasena(contrasena) {
    // TODO: Resolver
    if (contrasena.length < 8) {
        return "Contraseña no válida";
    }
    
    let contieneNumero = /\d/.test(contrasena);
    
    if (contieneNumero) {
        return "Contraseña válida";
    } 
    else {
        return "Contraseña no válida";
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 7")
console.log("-----------------------------------")
console.log(validarContrasena("pass1234")); // "Contraseña válida"
console.log(validarContrasena("password")); // "Contraseña no válida"
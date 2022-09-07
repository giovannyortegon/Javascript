/*
 * Tipos de Datos JavaScript
 */
var name = 'Giovanny';      // tipo de dato string
var apellido = "Ortegon"
var numero = 10;                    // numerico
var float = 10.5
var object = {                      // tipo objeto
    nombre: "Juan",
    apellido: "Peres",
    telefono: 4352423424
}

var booleano = true                  // tipo booleano

console.log(typeof name);
console.log(numero)
console.log( object)
console.log(typeof booleano)
console.log(booleano)

function myfunction() {
    return 10 + 5;
}

var result = myfunction()
console.log(myfunction)
console.log(result)

var simbolo = Symbol("mi simbolo")
console.log(simbolo)

class Persona {
    constructor(name, apellido) {
        this.name = name;
        this.apellido = apellido;
    }
}

console.log(Persona)

var x;
console.log(x)

var y = null;
console.log(y)
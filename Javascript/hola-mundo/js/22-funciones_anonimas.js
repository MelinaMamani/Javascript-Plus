"use strict"
//Funcion anonima: una función que no tiene nombre

var pelicula = function (nombre) {
    return "La pelicula es: " + nombre;
}

console.log(pelicula("Tierra de osos"));

function sumame(n1, n2, sumaYMuestra, sumaPorDos) {
    var sumar = n1 + n2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

//Funciones de callback sin flecha
sumame(5,9, function (dato) {
    console.log("La suma es: "+ dato)
}, function (dato) {
    console.log("La suma por 2 es: "+dato*2)
});

//Funciones de callback con flecha
sumame(5,5, dato =>{
    console.log("La suma es: "+ dato)
}, dato =>{
    console.log("La suma por 2 es: "+dato*2)
});
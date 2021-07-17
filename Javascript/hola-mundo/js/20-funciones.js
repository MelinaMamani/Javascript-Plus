"use strict"

function miNombre(params) {
    console.log("Hola soy Meli");
}

miNombre();

function suma(n1, n2) {
    return n1 + n2;
}

console.log("Suma: "+suma(1,2));

function resta(n1, n2, mostrar = false) {
    if (!mostrar) {
        console.log("Resta: "+ (n1-n2));
    } else {
        document.write("<p>Resta: "+(n1-n2)+"</p>");
    }
}

resta(10,9);

function porConsola(n1, n2) {
    console.log("Resta: "+ (n1-n2));
    console.log("Suma: "+ (n1+n2));
    console.log("Multiplicación: "+ (n1*n2));
    console.log("División: "+ (n1/n2));
}

function porPantalla(n1, n2) {
    document.write("<p>Resta: "+(n1-n2)+"</p>");
    document.write("<p>Suma: "+ (n1+n2)+"</p>");
    document.write("<p>Multiplicación: "+ (n1*n2)+"</p>");
    document.write("<p>División: "+ (n1/n2)+"</p>");
}

function operaciones(n1, n2, mostrar = false) {
    if (!mostrar) {
        porConsola(n1, n2);
    } else {
        porPantalla(n1, n2);
    }
}

operaciones(10,2,true);
operaciones(10,4);
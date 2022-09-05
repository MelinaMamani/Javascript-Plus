// Variables
var pais = "España";
var continente = "Europa";
var antiguedad = "2021";
var pais_y_continente = pais + " " + continente;

pais = "Argentina";
continente = "America";

console.log(pais, continente, antiguedad);
console.log(pais_y_continente);

var x = 10;
var y = undefined;
var z = x + y;

console.log(z);

function Calculo(num) {
    let retorno = ((num * 2)*10)/100;
    return retorno;
}

console.log(Calculo(1000));

function Promedio(x,y,z) {
    let suma = x + y + z;
    let promedio = suma/3;
    return promedio;
}

console.log(Promedio(8,7,10));

const today = new Date();
const year = today.getFullYear();

console.log(year);

function DobleCalculo(x) {
    let doble = x * 2;
    doble = Math.round(doble);
    return retorno;
}

function Redirecciona() {
    window.location.href = "http://www.google.com";
}

function CalculoPorAnio(num,anio) {
    let retorno;
    if (anio % 2 == 0) {
        retorno = num * 2;
    } else {
        retorno = undefined;
    }

    return retorno;
}

console.log(CalculoPorAnio(11,2020));

function MostrarPrimero() {
    let array = [];
    return array(0);
}

function Factorial(x) {
    let r = 1;
    for(let i = x; i>0; i--){
        r *= i;
    }

    return r;
}

console.log(Factorial(6));

function verdadero(){
    if (4 == '5') {
        return "si";
    } else {
        return "no";
    }
}

console.log(verdadero());
console.log("21"+9);

var nombre = "sdk";
var Nombre = "aaa";

console.log(nombre + Nombre);
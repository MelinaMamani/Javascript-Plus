"use strict"

var nombre = prompt("Ingresa tu nombre: ");
var apellido = prompt("Ingresa tu apellido: ");

var texto = "Mi nombre es "+nombre+" y mi apellido es "+apellido;

var plantilla = `
<h1> Hola k tal </h1>
<h2> Mi nombre es ${nombre} y mi apellido es ${apellido}</h2>`;

document.write("<h2>"+plantilla+"</h2>");
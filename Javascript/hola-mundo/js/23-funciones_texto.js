"use strict"

//Texto a convertir
var numero = 44;
var texto1 = "Te quiero Michi";
var texto2 = "El buen Michi";

var numeroATexto = numero.toString();

console.log(numeroATexto, texto1.toLowerCase(), texto2.toUpperCase());

//Calcular longitud

var nombre = "Hola ";
var array = ["Michi", "es", "gato"];

console.log(nombre.length);
console.log(array.length);

//Concatenar 

var muchoTexto = texto1.concat(" " + texto2);

console.log(muchoTexto);

//Busqueda de palabras

var primerMichi = muchoTexto.indexOf("Michi");
console.log(primerMichi);

var ultimoMichi = muchoTexto.lastIndexOf("Michi");
console.log(ultimoMichi);

var searchMichi = muchoTexto.search("Michi");
console.log(searchMichi);

var matchMichi = muchoTexto.match("Michi");
console.log(matchMichi);

var extraerMichi = muchoTexto.substr(10,5);
console.log(extraerMichi);

var inclMichi = muchoTexto.includes("Michi");
console.log(inclMichi);

//Transformar texto

var repMichi = texto1.replace("Michi", "Nena");
console.log(repMichi);

var newMichi = muchoTexto.slice(3);
console.log(newMichi);

var arrayTexto = muchoTexto.split(" ");
console.log(arrayTexto);

var textoConEspacios = "   adkjkjda  ";
var textoLimpio = textoConEspacios.trim();
console.log(textoLimpio);
"use strict"

var nombre = "Melina Mamaní";
var nombresP = ["Nico", "Nina", "Lolo", "Laura", "Rocío", "Juan"];
var lenguajes = new Array("PHP", "Javascript", "Java", "Go", "C", "Pascal");

console.log(nombresP);
console.log(lenguajes);

//var elemento = parseInt(prompt("Que elemento del array querés?",0));

/*if (elemento > lenguajes.length) {
    alert("Error. Introduce un número menor que: "+lenguajes.length);
} else {
    alert("Tu elemento es: "+lenguajes[elemento]);
}
*/
document.write("<h1>Nombres populares</h1>");

/*for (let i = 0; i < nombresP.length; i++) {
    document.write("<p>"+nombresP[i]+"</p>");
}*/

nombresP.forEach((elemento, indice, array)=>{
    console.log(array);
    document.write("<p>"+indice+"- "+elemento+"</p>");
});

var generos = ["Terror", "Comedia", "Suspenso"];
var peliculas = ["Exorcismo de Emily Rose", "Me quiero robar a la novia", "Corre"];

var cine = [generos, peliculas];

console.log(cine[1][0]);

/*
Ingresa elementos en el array peliculas
do {
    var elementoP = prompt("Ingrese una película");
    peliculas.push(elementoP);

} while (elementoP !="...");*/

//Borro el ultimo elemento

peliculas.pop();

var indice = peliculas.indexOf("Me quiero robar a la novia");

if (indice > -1) {
    //Borro el elemento elegido
    peliculas.splice(indice, 1);
}
//Paso el array a una cadena separada por comas
var peliculaString = peliculas.join();

//Paso la una cadena separada por comas a un array
var cadena = "Calor, Frío, Templado, Seco, Lluvioso";
var cadenaArray = cadena.split(", ");

//Sort combinado con reverse me ordena el array descendentemente
//Ordeno peliculas alfabeticamente
peliculas.sort()
//Da la vuelta al array
peliculas.reverse();
console.log(peliculas);

document.write("<h2>Géneros de peliculas</h2>");
//genero es el indice
for (let genero in generos) {
    document.write("<p>"+generos[genero]+"</p>");
}

//Busquedas en el array
var terror = generos.find(function(genero) {
    return genero == "Terror";
});

var comedia = generos.find(genero => genero == "Comedia");
//Devuelve el index de Comedia
var comediaI = generos.findIndex(genero => genero == "Comedia");
//Devuelve true si hay precios superiores a 20
var precios = [10,20,30,40,50];
var preciosSup = precios.some(precio => precio >= 20);
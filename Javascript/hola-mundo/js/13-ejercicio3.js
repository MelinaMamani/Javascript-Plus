"use strict"

var n1 = parseInt(prompt("Ingresa el primer número: "));
var n2 = parseInt(prompt("Ingresa el último número: "));

document.write("<h2>De número "+n1+" a número "+n2+"</h2>");

for (let i = n1; i <= n2; i++) {
    document.write("<p>"+i+"</p>");
    
}
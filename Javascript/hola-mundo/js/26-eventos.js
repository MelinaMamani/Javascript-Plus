"use strict"

window.addEventListener('load', function() {
    var boton = document.querySelector("#boton");

    function cambiarColorBoton() {
        let bg = boton.style.background;
        if (bg == "red") {
            boton.style.background = "green";
        } else {
            boton.style.background = "red";
        }
        
        return true;
    }

    boton.addEventListener('click',function(){
        cambiarColorBoton();
    });

    boton.addEventListener('mouseover', function() {
        boton.style.background = "blue";
        boton.style.color = "white";
    });

    boton.addEventListener('mouseout', function() {
        boton.style.background = "#ccc";
    });

    var nombre = document.querySelector("#campo_nombre");

    nombre.addEventListener('focus', function() {
        console.log("Estoy adentro del input");
    });

    nombre.addEventListener('blur', function() {
        console.log("Estoy fuera del input");
    });


    nombre.addEventListener('keydown', function(evento) {
        console.log("Pulsando tecla ",String.fromCharCode(evento.keyCode));
    });

    nombre.addEventListener('keypress', function(evento) {
        console.log("Presionando tecla ",String.fromCharCode(evento.keyCode));
    });

    nombre.addEventListener('keyup', function(evento) {
        console.log("Tecla soltada ",String.fromCharCode(evento.keyCode));
    });
});


"use strict";
function getNombre() {
    return "Fernando";
}
var persona = "juan";
var apellido = "perez";
var edad = 23;
//let texto = "hola, " + persona + " "+  apellido +"(" + edad +")"
var texto = "hola, " + persona + " " + apellido + "  (" + edad + ")";
//Los templates literales no sirven solo para llamar variables, dentro de '${ }'
//podemos poner cualquier tipo de codigo JavaScript
var texto2 = "" + getNombre();
/*function oeoeoe(nombre:string, apellido?:string, edad:number=2){
    console.log(`hola, ${ nombre } ${ apellido }  ${ edad }`)
}*/ 

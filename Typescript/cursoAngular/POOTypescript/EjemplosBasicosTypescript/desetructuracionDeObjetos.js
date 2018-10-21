"use strict";
var estudiante = {
    nombre1: "andres",
    apellido1: "suarez",
    curso: "noveno"
};
// En las siguientes lineas se muestra como seria normalmente
/*let nombre1= estudiante.nombre;
let apellido1 = estudiante.apellido;
let curso = estudiante.curso*/
//En la siguiente linea se muestra como se desestructua el objeto en una sola linea
// no importa el orden en que desestruturemos mientras que los campos tengan los mismos nombres
var nombre1 = estudiante.nombre1, apellido1 = estudiante.apellido1, curso = estudiante.curso;
//En las siguientes lineas vemos la Desetructuracion pero con vectores, en este si importa el orden
var estudiantes = [{ nombre: "andres", apellido: "suarez" }, { nombre: "juan", apellido: "zuluaga" }];
var estudiante1 = estudiantes[0], estudiante2 = estudiantes[1];

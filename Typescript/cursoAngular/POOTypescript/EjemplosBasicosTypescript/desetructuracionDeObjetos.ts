

let estudiante ={
    nombre1: "andres",
    apellido1:"suarez",
    curso:"noveno"

}




// En las siguientes lineas se muestra como seria normalmente
/*let nombre1= estudiante.nombre;
let apellido1 = estudiante.apellido;
let curso = estudiante.curso*/

//En la siguiente linea se muestra como se desestructua el objeto en una sola linea
// no importa el orden en que desestruturemos mientras que los campos tengan los mismos nombres
let {nombre1, apellido1, curso } = estudiante

//En las siguientes lineas vemos la Desetructuracion pero con vectores, en este si importa el orden

let estudiantes:object[]=[{nombre:"andres",apellido:"suarez"},{nombre:"juan",apellido:"zuluaga"}]
let[estudiante1,estudiante2]=estudiantes


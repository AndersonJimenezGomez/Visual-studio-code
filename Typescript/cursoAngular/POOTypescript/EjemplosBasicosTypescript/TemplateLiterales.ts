function getNombre(){
    return "Fernando"
}

let persona:string = "juan";
let apellido:string = "perez"
let edad:number= 23

//let texto = "hola, " + persona + " "+  apellido +"(" + edad +")"
let texto = `hola, ${ persona } ${ apellido }  (${ edad })`


//Los templates literales no sirven solo para llamar variables, dentro de '${ }'
//podemos poner cualquier tipo de codigo JavaScript
let texto2 =`${ getNombre() }`


/*function oeoeoe(nombre:string, apellido?:string, edad:number=2){
    console.log(`hola, ${ nombre } ${ apellido }  ${ edad }`)
}*/
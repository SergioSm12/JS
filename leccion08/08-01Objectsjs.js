// funcion constructor para objetos de tipo persona 
function Persona(nombre, apellido, email){
  this.nombre = nombre;
  this.apellido=apellido;
  this.email=email;
  this.nombreCompleto= function(){
      return this.nombre + ' ' + this.apellido;
  }
}

//Añadir propiedades a todos los objetos
Persona.prototype.tel= '123698754';

let padre = new Persona('Juan','Perez','jperez@gmail.com');
console.log(padre.tel)
// actualizar propiedad 
padre.tel='45875654';
console.log(padre.tel)
console.log(padre.nombreCompleto());

let madre = new Persona('Laura','quintero', 'lquintero@gmail.com');
console.log(madre);
console.log(madre.tel)
console.log(madre.nombreCompleto());

/*
//update 
padre.nombre='carlos';
console.log(padre);
*/
/*
//formas recomendadas
let miObjeto = new Object();
// froma recomendada de declarar un arreglo
let miObjeto2={};

let miCadena1= new String('Hola');
// forma recomendada de declara una cadena
let miCadena2 = 'Hola';

let miNumero = new Number(1);
// forma recomendada de hacer un numero
let miNumero2=1;

let miBolean = new Boolean(false);
//forma recomendada
let miBoolean= false;

let miArreglo1 = new Array();
//forma recomendada 
let miArreglo2= [];

let miFuncion= new Function();
// forma recomendada
let miFuncion2 = function(){};





/*

let persona={
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    
    edad:28,
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    //set modifica valores de nuestro objeto
    set lang( lang ){
       this.idioma=lang.toUpperCase();
    },
    //Metodos de nuestro objeto
    get nombreCompleto(){
       return this.nombre + ' ' + this.apellido;
    }
}*/
/*
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto)
console.log(persona);

let persona2 =new Object();
persona2.nombre='Cralos';
persona2.direccion= 'saturno 15';
persona2.tel = '45545656';

console.log(persona2.tel);

console.log(persona.nombreCompleto);

console.log(persona['apellido']);

// for in para recorrer propiedades del objeto
for (nombrePropiedad in persona){
    console.log( nombrePropiedad );
    console.log(persona[nombrePropiedad])
}

//Agregar y quitar propiedades al objeto
//add
persona.tel='7889987';
console.log(persona);
//update object
persona.tel='3215987';
console.log(persona);
//delete
delete persona.tel;
console.log(persona);

//formas de imprimir object
//concatenar
console.log( persona.nombre +', ' + persona.apellido);
//for in
for(nombrePropiedad in persona){
    console.log( persona[nombrePropiedad] );
}
//values
let personArray = Object.values( persona );
console.log(personArray);
//JSON
let personaString = JSON.stringify( persona );
console.log( personaString );

//Metodo Get 
console.log( persona.nombreCompleto );

console.log( persona.lang);
//Metodo set
persona.lang ='en';
console.log(persona.lang);
console.log( persona.idioma);*/



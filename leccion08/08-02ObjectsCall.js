// llamar un metodo de un objeto ah otro objeto

let persona1={
    nombre:'juan',
    apellido:'Perez',
    //Argumentos de la funcion
    nombreCompleto: function(titulo, telefono){
        //return this.nombre + ' ' + this.apellido; 
       return titulo + ': '+ this.nombre + ' ' +this.apellido+ ' '+ telefono;
    }
}

let persona2={
    nombre: 'carlos',
    apellido: 'lara'

}

//uso de call para utilizar metodos de otro objeto

console.log(persona1.nombreCompleto('lic','846554'));

//add argumentos
console.log(persona1.nombreCompleto.call( persona2,'lic','655694'));

//apply
let arreglo= ['Ing','65566556'];
console.log(persona1.nombreCompleto.apply( persona2, arreglo));
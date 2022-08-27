
let x = 10;

function cambiarValor(a){
    a=20;
}


//paso por valor 
cambiarValor(x);
console.log(x);

//Paso por referencia

const Persona={
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre='Carlos';
    p1.apellido='Lara';
}


cambiarValorObjeto(Persona);
console.log(Persona);
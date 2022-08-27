let myFunction= function (){
    console.log('Saludos desde mi funcion');
}

/*
const miFuncionFlecha= ()=>{

    console.log('saludos desde mi funcion flecha')
}*/

//const miFuncionFlecha=() => console.log('saludos desde mi funcion flecha')

//miFuncionFlecha();
//myFunction();

/*
const saludar = ()=>{
    return 'Saludos desde funcion flecha'
} */

const saludar = () => 'Saludos desde la funcion flecha';

console.log( saludar() )

const regresaObjeto =() =>({nombre: 'Juan', apellido: 'lara'});

console.log(regresaObjeto());

const functionConParametros= (mensaje)=> console.log(mensaje);
functionConParametros('hola');

const funcionConVariosParametros = (op1,op2,op3) => op1+op2+op3;
console.log(funcionConVariosParametros(3,5,6));

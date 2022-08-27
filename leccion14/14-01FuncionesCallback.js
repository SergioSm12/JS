function miFuncion1(){
    console.log('funcion 1');
}

function miFuncion2(){
    console.log('funcion 2');
}

miFuncion2();
miFuncion1();


// Funcion callback

function imprimir (mensaje){
    console.log(mensaje);
}

function sumar(op1,op2, funcionCallBack){
    let resultado = op1+op2;
    funcionCallBack(`Resultado : ${resultado}`)

}

sumar(5,3,imprimir);

// Llamdas aincronas con uso de setTimeout

function miFuncionCallback(){
    console.log('saludo asincrono despues de 3sg');
}

setTimeout(miFuncionCallback,3000); //Despues de 3sg 

setTimeout(function (){console.log('Saludo aincrono 2')}, 4000);

setTimeout( () => console.log('saludo asincrono 3'),6000);


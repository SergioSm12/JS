function miFuncion(a,b){

   // saber cantidad de argumentos  
   console.log(arguments.length); 
   return a+b;
}

//llamando de la funcion
let resultado =miFuncion(2,3);
console.log(resultado);

//funciones tipo expresion

let sumar = function (a,b){
    // imprimir argumentos que entran a los parametros de la funcion
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a+b
};

resultado = sumar(3,8);
console.log(resultado);

// funciones self invoque ella misma se llama 

(function(a,b){
    console.log('la suma de a + b :' , (a+b));
})(3,4);

console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
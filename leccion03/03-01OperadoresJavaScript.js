/*let a =3, b=2;

let z= a+b;
console.log('Resultado de la suma : '+ z);

z= a-b;
console.log('Resultado de la resta es '+ z);

z= a*b;
console.log('Resultado de la multiplicacion '+ z);

z=a/b;
console.log('Resultado de la divicion: ', z);

z= a%b;
console.log('Resultado del modulo o residuo de la divion '+z);

z= a**b;
console.log('Resultado de el exponente o elevar : '+z);

//Operadores de Incremento y decremento
//Incremento
//pre-incremento (el operador ++ antes de la variable)
// incrementa antes de usar 
z= ++a;
console.log('Incremento de la variable a : '+ z);

//post-incremento (el operador de ++ despues de la variable)
// incrementa despues de usar
z=b++;
console.log(z);
console.log(b);

//Decremento
//predecremento
z=--a;
console.log(z)

//postDecremento
z=b--;
console.log(z)
console.log(b)*/
/*
//Orden de operaciones js
let a= 3, b=2, c=1,d=4;

let z =a*b+c/d;
console.log(z);

z=c+a*b/d;
console.log(z);

z= (c+ a)*b/c;
console.log(z);*/
/*
//Operadores de asignacion 

let a  =1;

a +=3; //a=a+3
console.log(a)

a -=2;// a=a-2
console.log(a)

/*
*=
/=
%=
**=
*/ 
/*
//Operadores de Comparacion

let a =3, b=2, c='3';

let z=  a <= b;
console.log(z);

z= a>b;
console.log(z);*/

//Par de un numero
let a = 10;

if( a%2 == 0){
    console.log('Es un numero Par');
}
else{
    console.log('Es un numero impar');
}
// mayor o no 
let edad= 22, mayor=18;

if(edad>=mayor){
    console.log('Es un adulto');
}else{
    console.log('no es un adulto');
}
// operadores logicos
let A=5;

let valMin= 0 , valMax=10;

if(A>= valMin && A <= valMax){
    console.log('Dentro de rango');
}else{
    console.log('Fuera de rango');
}

// operador de or

let Vacaciones = true, diaDescanso= false;

if(Vacaciones== true || diaDescanso== true){
    console.log('Puede aistir al juego');

}else{
    console.log('el padre no puede asistir al juego');
}

//Operador Ternario

let resultado = (3>2) ? "Verdadero" : "Falso";
console.log(resultado);

//Par con operador ternario 
let numero = 8;
resultado= (numero%2==0)?'Numero Par':'Numero Impar';
console.log(resultado)

// string a int
let miNumero='18';


//console.log(typeof miNumero);
//convertir un numero

let Edad = Number(miNumero);

console.log(Edad);

// Preguntar si es o no numero
if( isNaN(Edad) ){
    console.log('No es un numero');
}else{
    if(Edad>=18){
        console.log('puede votar');
    
    }else{
        console.log('No puede votar');
    }
    let votar=(Edad>=18 )? 'Puede votar' : 'No puede Votar';
    console.log(votar);
}

let x = 5, y=10, z=++x+y--;
console.log(x);
console.log(y);
console.log(z);

let resultado1= 4+5*6/3;
console.log(resultado1);

resultado1=(4+5)*6/3;
console.log(resultado1);








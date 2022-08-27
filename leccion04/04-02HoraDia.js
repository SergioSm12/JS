let hora=24;
let saludo;

if(hora>= 6 && hora<=11){
    saludo='Buenos Dias ';
}else if(hora>=12 && hora<=18){
    saludo='Buenas tardes';
}else if(hora>=19 && hora<=24){
    saludo='Buenas Noches';
}else if(hora>=0 && hora<6){
    saludo='Durmiendo';
}else{
    saludo='No existe esa hora';
}

console.log(saludo);
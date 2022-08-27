/*let numero=2;
let numeroTexto= 'valor desconocido';

switch( numero ){
    case 1:
        numeroTexto='Numero 1';
        break;
    case 2:
        numeroTexto='Numero 2';
        break;
    case 3:
        numeroTexto='Numero 3';
        break;
    case 4:
        numeroTexto='Numero 4';
        break;
    default:
        numeroTexto='Caso no encontrado';    
}

console.log(numeroTexto)*/

let mes = 5;
let estacion= 'Estacion Desconocida';

switch( mes ){
    case 1: case 2: case 12:
        estacion='Invierno';
        breaK;
    case 3: case 4: case 5:
        estacion='Primavera';
        break;
    case 6: case 7: case 8:
        estacion= 'Verano';
        break;
    case 9: case 10: case 11:
        estacion='Otoño';
        break;
    default:
        estacion='Valor Incorrecto';    

}
console.log(estacion)
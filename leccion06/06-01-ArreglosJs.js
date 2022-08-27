//let autos = new Array('BMW','Mercedes','Benz','Volvo');

const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

//acceder al elemento del arreglo
console.log(autos[0]);
console.log(autos[2]);

// recorrer el arreglo 
for(let i=0; i < autos.length;i++){
    console.log(i + ' : '+ autos[i]);
}

//modificar y agregar en arreglos

autos[1] = 'MercedezBenz';
console.log(autos[1]);

//add
autos.push('Audi');
console.log(autos);

console.log(autos.length);

autos[autos.length]='Cadillac';
console.log(autos);

autos[6]= 'Porche';
console.log(autos);


//Preguntar si es un arreglo
console.log(typeof autos);
console.log(Array.isArray(autos));
console.log(autos instanceof Array);

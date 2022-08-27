/*let miPromesa = new Promise((resolver, rechazar) =>{
   let expresion=false;
   if(expresion){
       resolver('Resolvio Correcto')
   }else{
       rechazar('Se produjo un error ')
   }

});*/

//miPromesa.then(valor => console.log(valor),error => console.log(error));
/*
miPromesa
.then( valor=> console.log(valor))
.catch(error=>console.log(error));*/

let promesa = new Promise((resolved)=>{
    //console.log('inicio promesa');
    setTimeout( ()=> resolved('saludos con promesa y timeout'), 3000);
    //console.log('fin promesa');
});

//promesa.then(valor=> console.log(valor));
// async indica que una funcion regresa una promesa

async function miFunctionConPromesa(){
    return 'saludos con promesa y async'
}

//miFunctionConPromesa().then(valor=> console.log(valor));

//async con awayt

async function functionConPromesaAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('promesa con await');
    });

    console.log(await miPromesa);
}

//functionConPromesaAwait();

// promesas await async settimeout

async function funcionConPromesaAwaitTimeout(){
    console.log('inicio de la promesa')
    let miPromesa = new Promise(resolved=>{
        setTimeout(()=> resolved('promesa con await y timeout'), 5000);
    });

    console.log(await miPromesa);
    console.log('Fin de la promesa')
}

funcionConPromesaAwaitTimeout();

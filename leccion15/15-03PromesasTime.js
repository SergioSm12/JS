let promise = new Promise((resolved)=>{
    setTimeout( ()=> resolved('saludos desde practica'),6000);
});

promise
.then(valor => console.log(valor));
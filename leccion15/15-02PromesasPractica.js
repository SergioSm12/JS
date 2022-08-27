let myPromise = new Promise((resolved, rejected ) =>{
     let expresion = false;
     if(expresion){
         console.log('la promesa usa resolved')
     }
     else{
         console.log('la promesa usa rejected')
     }
});

myPromise
.then(valor => console.log(valor))
.catch(error => console.log(error));
async function functionTime(){
    let myPromise= new Promise(resolve =>{
         
        setTimeout(()=> resolve('Promise in practice'),5000);

    });

    console.log(await myPromise);
}

//functionTime();

async function functionDate(){
   let myPromise1 = new Promise(resolve=>{
      let reloj = ()=>{
          let fecha =  new Date();
          console.log(`hours ${fecha.getHours()} minutes ${fecha.getMinutes()} seconds ${fecha.getSeconds()}`);
      }
      setInterval(()=>resolve(reloj()), 5000);    

   });

   console.log(await myPromise1);

}

functionDate();
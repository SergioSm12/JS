// Declaracion de variables, condicion, incremento 
for(let contador=0;contador<5;contador++){
   console.log(contador);
}
console.log('Fin ciclo for ');

//breake
for(let contador=0; contador<=10; contador++){
   if(contador%2==0){
       console.log(contador);
       break; // para imprimir solo el primer numero
   }else{
       console.log(contador);
   }
}  
 console.log('Fin del ciclo for ');

 //continue y etiquetas
 inicio:
 for(let contador =0; contador<=10; contador++){
     if(contador% 2 !=0){
         continue inicio;// ir a la siguiente iteracion
     }
     console.log(contador);
 }

 
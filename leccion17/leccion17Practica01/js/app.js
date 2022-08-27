console.log('hola')
function sum(){
    const form = document.getElementById('form');
    let operandA = form['operandA'];
    let operandB = form['operandB'];

    let result = parseInt(operandA.value) + parseInt(operandB.value);
    if(isNaN(result)){
        result='The operation does not include numbers';
    } 
    document.getElementById('result').innerHTML= `Result: ${result}`;
}

const form =document.getElementById('form');


form.addEventListener("focus", (event)=>{
  let component = event.target;
  component.style.background='#A5F759';
},true);


form.addEventListener("blur", (event)=>{
    let component= event.target;
    component.style.background='';
}, true);

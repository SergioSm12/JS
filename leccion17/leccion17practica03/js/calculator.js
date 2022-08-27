function sum(){
    const form = document.getElementById('form');

    let number1 = form['number1'];
    let number2  = form['number2'];

    let result = parseInt(number1.value) + parseInt(number2.value);
    
    if(isNaN(result)){
        result= 'The sum does not include numbers';
    }

    document.getElementById('result').innerHTML= `Result ${result}`;
}

const form = document.getElementById('form');

form.addEventListener("focus", (event)=>{
   let component = event.target;
   component.style.background= '#C1E8D2';

},true);

form.addEventListener("blur", (event)=>{
   let component = event.target;
   component.style.background='';
}, true);
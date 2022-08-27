const persons =[
    new Person('Arturo', 'Hernandez'),
    new Person('Marcela', 'Buitrago')
];

function showPerson(){
    let text = '';

    for (let person of persons){
        text += `<Li>${person.idPerson} ${person.name} ${person.lastName}</>`;
    }

    document.getElementById('person').innerHTML=text;
}

function addPerson(){
    const form = document.forms["form"];
    const name = form['name'];
    const lastName = form['lastName'];

    if(name.value != '' && lastName.value !=''){
        const person = new Person(name.value, lastName.value);
        console.log(person);
        persons.push(person);
        showPerson();
    }else{
        console.log('fields cannot be empty');
        alert('fields cannot be empty');
    }

}

const form = document.getElementById('form');

form.addEventListener("focus", (event)=>{
  let component = event.target;
  component.style.background='#98EBCC';

},true)

form.addEventListener("blur", (event)=>{
   let component = event.target;
   component.style.background='';
},true)
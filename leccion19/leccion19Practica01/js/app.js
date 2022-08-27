const persons = [
  new Person("Sergio", "mesa"),
  new Person("Rosa", "Sanchez")
];

function showPersons() {
  let text = "";


  for (let person of persons) {
    text += `<li> ${person.idPerson} ${person.name} ${person.lastName}</li>`;
  }
  document.getElementById("person").innerHTML = text;
}

function addPerson(){

  const form = document.getElementById('form');
  const name = form['name'];
  const lastName = form['lastName'];
  

  if(name.value == '' && lastName.value == ''){
    console.log('Fields cannot be empty');
    alert('Fields cannot be empty');
  }else{
    const person = new Person(name.value, lastName.value);
    console.log(person);
    persons.push(person);
    showPersons()
  }
}

const form = document.getElementById('form');

form.addEventListener("focus", (event)=>{
  let component = event.target;
  component.style.background='#98EBCC';
}, true)

form.addEventListener("blur", (event)=>{
   let component = event.target;
   component.style.background='';
},true)

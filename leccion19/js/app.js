const persons = [
  new Persona("Juan", "Perez"),
  new Persona("Karla", "Lara"),
  new Persona("Sergio", "Mesa"),
];

function showPersons() {
  let text = "";

  for (let person of persons) {
    text += `<li>${person.name} ${person.lastName} </li>`;
  }

  document.getElementById("person").innerHTML = text;
}

function addPerson() {
  const form = document.forms["form"];
  const name = form["name"];
  const lastName = form["lastName"];

  if (name.value != "" && lastName.value != "") {
    const person = new Person(name.value, lastName.value);

    console.log(person);
    persons.push(person);
    showPersons();
  }else{
      console.log('No hay informacion que Agregar');
  }
}



class Persona{
 constructor(nombre,apellido){
    this._nombre=nombre;
    this._apellido=apellido;
 }

 get nombre(){
     return this._nombre;
 }

 set nombre(nombre){
     this._nombre= nombre;
 }
 get apellido(){
     return this._apellido;
 }
 set apellido(apellido){
     this._apellido=apellido
 }
}

let persona1 = new Persona('Juan','Perez');
console.log(persona1.nombre)
// uso de set
persona1._nombre='Juan Carlos';
// uso de get
console.log(persona1.nombre)





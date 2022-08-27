
class Persona {

    //Variables estaticas 
    static contadorPersonas=0;//strinuto de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }
    

    constructor(nombre,apellido){
       this._nombre=nombre;
       this._apellido=apellido;
       if(Persona.contadorPersonas < Persona.MAX_OBJ){
           this.idPersona=++Persona.contadorPersonas;
       }else{
           console.log('Se han superado el maximo de objetos permitidos')
       }
       
       
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
        this._apellido=apellido;
    }
    //Funcion
    nombreCompleto(){
        return  this.idPersona+' '+this._nombre+ ' '+ this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    
    //El metodo estatico se asocia a la clase pero no a los objetos
    static saludar(){
        console.log('Saludos desde el metodo static')
    }

    static saludar2(persona){
           console.log(persona.nombre + ' '+ persona.apellido);
    }
   }

   // uso de herencia
   class Empleado extends Persona{
     constructor(nombre,apellido,departamento){
         super(nombre,apellido);
         this._departamento =departamento;
     }
     get departamento(){
         return this._departamento;
     }

     set departamento(departamento){
         this._departamento=departamento;
     }

     //Sobrescritura
     nombreCompleto(){
         return super.nombreCompleto()+' '+this.departamento
     }
   }

 let persona1 = new Persona('Juan','Perez');
 console.log(persona1.toString());
 
 let empleado1 = new Empleado('Sergio','Mesa','Sistemas');
 console.log(empleado1);
 console.log(empleado1.nombreCompleto());

 // Uso del metodo to string
 console.log(empleado1.toString());

 //Uso de metodo static

 Persona.saludar();
 Persona.saludar2(persona1);

 Empleado.saludar();
 Empleado.saludar2(empleado1);

/*
 //Acceder a variables estaticas 
 console.log(Persona.contadorObjetosPersona);

// acceder desde el hijo
 console.log( Empleado.contadorObjetosPersona);
*/

// acceder a variable statica get solo lectura 
console.log(Persona.MAX_OBJ);

let persona2 = new Persona('carlos','lara');
console.log(persona2);

let empleado2 = new Empleado('David', 'Buitrago','Sistemas');
console.log(empleado2);

let persona3= new Persona('Laura','Ruiz');
console.log(persona3);

let persona4= new Persona('Andres','quintero');
console.log(persona4)


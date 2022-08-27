class Persona{

   static contadorPersonas=0;
   constructor(nombre,apellido,edad){
       this._idPersona=++Persona.contadorPersonas;
       this._nombre= nombre;
       this._apellido=apellido;
       this._edad=edad;
   }

   get idPersona(){
       return this._idPersona;
   }

   get nombre(){
       return this._nombre;
   }
   set nombre(nombre){
       this._nombre=nombre
   }

   get apellido(){
       return this._apellido;
   }
   set apellido(apellido){
       this._apellido=apellido;
   }

   get edad(){
       return this._edad;
   }

   set edad(edad){
       this._edad=edad;   
   }

   toString(){
       return this._idPersona+ ' ' + this._nombre+' '+ this._apellido+' '+ this._edad;
   } 

}

class Empleado extends Persona{

    static contadorEmpleado=0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado=++Empleado.contadorEmpleado;
        this._sueldo=sueldo;
    }
    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo=sueldo;
    }

    toString(){
        return super.toString()+' '+this._idEmpleado+' '+ this._sueldo;
    }


}

class Cliente extends Persona{
    static contadorClientes=0;
    constructor(nombre,apellido,edad,fecha){
        super(nombre,apellido,edad);
        this._idCliente=++Cliente.contadorClientes;
        fecha = new  Date();
        this._fechaRegistro=fecha;
    }
get Cliente(){
    return this._idCliente;
}
    
get fechaRegistro(){
    return this.fechaRegistro;
}

set fechaRegistro(fechaRegistro){
    this._fechaRegistro=fechaRegistro;
}

toString(){
    return this._idCliente+' '+super.toString()+' '+this._fechaRegistro;
}


}

let persona1 = new Persona('Sergio','Mesa','22');
console.log(persona1);

let empleado1= new Empleado('David', 'Buitrago', '22', 5000000);
console.log(empleado1);

let cliente1 = new Cliente('Andres','mesa','36');
console.log(cliente1);
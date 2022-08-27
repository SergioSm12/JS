class Person{

    static personCounter=0;
    constructor(name, lastname){
        this._idPerson= ++ Person.personCounter;
        this._name= name;
        this._lastname= lastname;
    }

    get idPerson(){
        return this._idPerson;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name=name;
    }

    get lastName(){
        return this._lastname;
    }
    set lastName(lastName){
        this._lastname=lastName;
    }
}
class Employee{

    constructor(name,salary){
        this._name=name;
        this._salary=salary;
    }

    get name(){
         return this._name;
    }
    
    set name(name){
        this._name=name;
    }

    get salary(){
        return this._salary;

    }
    set salary(salary){
        this._salary=salary;
    }

    getDetails(){
        return `Employee : name: ${this._name}, salary: ${this._salary} `;
    }
}

class Manager extends Employee{
    constructor(name, salary, department){
        super(name, salary);
        this._department=department;
    }

    get department(){
        return this._department;
    }

    set department(department){
        this._department=department;
    }

    getDetails(){
        return `Manager : ${super.getDetails()} department: ${this._department}`;
    }
}

let employe1 = new Employee('Juan', 4000000);
console.log(employe1.getDetails())

let  manager1 = new Manager('carlos', 18000000, 'System')
console.log(manager1.getDetails());
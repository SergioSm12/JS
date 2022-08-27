class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }

    get Marca() {
        return this._marca;
    }

    set Marca(marca){
        this._marca=marca;
    }

    toString(){
        return `Tipo de Entrada : ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRaton=0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton=++Raton.contadorRaton;

    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton  ${this._idRaton}  ${super.toString()}` ;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados=0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado=++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado  ${this._idTeclado}  ${super.toString()}` ;
    }
}

let raton1 = new Raton('USB','CORSAY');
let raton2 = new Raton('Bluetooth','hp');

let teclado1 = new Teclado('USB', 'APPLE');
let teclado2 = new Teclado('USB', 'SAMSUNG');

console.log(raton1.toString());
console.log(raton2.toString());
console.log(teclado1.toString());
console.log(teclado2.toString());

class Monitor{
    static contadorMonitor=0;
    constructor(marca,tamaño){
        this._idMonitor=++Monitor.contadorMonitor;
        this._marca=marca;
        this._tamaño=tamaño;
    }

    get idMonitor(){
        return this._idMonitor
    }

    get marca(){
        return this._marca;

    }
    set marca(marca){
        this._marca=marca;
    }

    get tamaño(){
        return this._tamaño;
    }
   
    set tamaño( tamaño){
        this._tamaño=tamaño
    }

    toString(){
        return `Monitor: ${this._idMonitor}, Marca:  ${this._marca}, Tamaño: ${this._tamaño} `
    }
}

let monitor1 = new Monitor('Samsung','22pg');
let monitor2 = new Monitor('LG','20pg');

console.log(monitor1.toString());
console.log(monitor2.toString());

class Computadora{
    static contadorComputadora=0;
    constructor(nombre, monitor, raton, teclado){
      this._idComputadora=++Computadora.contadorComputadora;
      this._nombre=nombre;
      this._monitor=monitor;
      this._raton=raton;
      this._teclado=teclado;
    }

    toString(){
        return `Computadora  ${this._idComputadora}: ${this._nombre} \n ${this._raton} \n ${this._teclado} \n ${this._monitor}`;
    }
}

let computadora1 = new Computadora('HP',monitor1,raton2,teclado1);
let computadora2 = new Computadora('MSI',monitor2,raton1,teclado2);

console.log(computadora1.toString());
console.log(computadora2.toString());

class Orden{
    static contadorOrdenes=0;

    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._computadoras=[];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadoraOrden= '';
        for(let computadora of this._computadoras){
            computadoraOrden+='\n{'+ computadora.toString()+ '}';
        }
        console.log(`Orden ${this._idOrden}: Computadoras: ${computadoraOrden}`);
    }
}

let orden1= new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();
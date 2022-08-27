class Egreso extends Dato{
    static contadorEgreso=0;
    constructor(descripcion, valor){
         super(descripcion,valor);
         this._idEgreso= ++Egreso.contadorEgreso;
    }

    get IdEgreso(){
        return this._IdEgreso;
    }
}
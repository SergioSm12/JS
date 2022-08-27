class Outflow extends Data{
    static outflowsCounter=0;
    
    constructor(description, value){
        super(description, value);
        this._id=++Outflow.outflowsCounter;

    }

    get id(){
        return this._id;
    }
}
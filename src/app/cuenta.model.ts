export class Cuenta {
    constructor (private descripcion:string, private valor:number) {

    }

    getvalor = ()=> {
        return this.valor
    }
}

import { Cuenta } from "./cuenta.model"
import {EventEmitter} from '@angular/core'

export class Registros {



    constructor () {

    }


    ingresos= [new Cuenta("venta guitarra",200), new Cuenta ("venta de auto",2000)]
    egresos= [new Cuenta("pagar internet",50)]


     setIngreso = (ingreso:Cuenta)=>{
        this.ingresos.push(ingreso)
    }

    setEgreso = (egreso:Cuenta) => {
       this.egresos.push(egreso)
    }

    deleteIngreso(index:number) {
        this.ingresos.splice(index, 1)
    }

     deleteEgreso = (index:number)  =>{
        this.egresos.splice(index, 1)
    }

    

}
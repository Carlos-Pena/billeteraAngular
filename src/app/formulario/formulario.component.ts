import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Cuenta} from '../cuenta.model';
import { Registros } from '../Registros.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output('nuevoIngreso') ingreso = new EventEmitter<Cuenta>();
  @Output('nuevoEgreso') egreso = new EventEmitter<Cuenta>();

  tipoIngreso:string = "+";
  descripcion:string;
  valor:number ;

  constructor(private registroService:Registros) { }

  ngOnInit(): void {
  }

  nuevoRegistro (){
    let nuevoRegistro = new Cuenta(this.descripcion,this.valor);
    if(this.tipoIngreso === "+"){
      this.registroService.setIngreso(nuevoRegistro)
    }else if(this.tipoIngreso === "-"){
      this.registroService.setEgreso(nuevoRegistro)
    }

    this.descripcion = '';
    this.valor = null;

  }

  selectedChange(selected){
    this.tipoIngreso = selected
  }

}

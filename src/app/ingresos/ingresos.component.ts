import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cuenta } from '../cuenta.model';
import { Registros } from '../Registros.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
})
export class IngresosComponent implements OnInit {
  title: string = 'INGRESOS';
  ingresos= []

  constructor(private registroService : Registros) {
    this.ingresos = registroService.ingresos;
    
  }

  ngOnInit(): void {}

  eliminarIngreso(index) {
    this.registroService.deleteIngreso(index)
  }
  
}

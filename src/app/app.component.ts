import { Component, OnChanges, OnInit, Pipe } from '@angular/core';
import { Registros } from './Registros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' , '../normalize.css'],
})
export class AppComponent {
  ingresoTotal = [];
  egresoTotal = [];
  title = 'Presupuesto Disponible:';
  ingresos: number;
  egresos: number;
  egresosPorcentaje : number;
  

  constructor(private registroService: Registros) {
    this.ingresoTotal = registroService.ingresos;
    this.egresoTotal = registroService.egresos;
    
  }

  getIngresosTotal() {
    let ingresoTotal = 0;
    this.ingresoTotal.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresosTotal() {
    let egresoTotal = 0;
    this.egresoTotal.forEach((egreso) => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }
  

  ngDoCheck(){

    this.ingresos = this.getIngresosTotal();
    this.egresos = this.getEgresosTotal();
    this.egresosPorcentaje = this.egresos/this.ingresos*100
    
  }

 
}

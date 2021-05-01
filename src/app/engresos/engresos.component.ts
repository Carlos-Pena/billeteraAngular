import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cuenta } from '../cuenta.model';
import { Registros } from '../Registros.service';

@Component({
  selector: 'app-engresos',
  templateUrl: './engresos.component.html',
  styleUrls: ['./engresos.component.css'],
})
export class EngresosComponent implements OnInit {
  @Input() ingresoTotal: number;

  title: string = 'EGRESOS';
  egresos = [];
  constructor(private registroService: Registros) {
    this.egresos = registroService.egresos;
  }

  ngOnInit(): void {}

  eliminarEgreso(index) {
    this.registroService.deleteEgreso(index);
  }

  calcularPorcentaje (egreso) {
    console.log(egreso)
    return egreso/this.ingresoTotal * 100
  }
}

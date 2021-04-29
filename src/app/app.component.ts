import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.presupuestoDisponible = this.ingresos - this.egresos
    }
  title = 'Presupuesto Disponible:';

  presupuestoDisponible : number = 1000;
  ingresos : number = 4500;
  egresos : number = 1000;
}

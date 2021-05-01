import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EngresosComponent } from './engresos/engresos.component';
import { FormsModule } from '@angular/forms';
import { Registros } from './Registros.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IngresosComponent,
    EngresosComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [Registros],
  bootstrap: [AppComponent]
})
export class AppModule { }

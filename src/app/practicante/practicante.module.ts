import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticanteRoutingModule } from './practicante-routing.module';
import { VistaFormatosComponent } from './vista-formatos/vista-formatos.component';
import { RecursosModule } from '../recursos/recursos.module';


@NgModule({
  declarations: [
    VistaFormatosComponent
  ],
  imports: [
    CommonModule,
    PracticanteRoutingModule,
    RecursosModule
  ]
})
export class PracticanteModule { }

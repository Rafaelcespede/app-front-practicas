import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AsignarTutorComponent } from './asignar-tutor/asignar-tutor.component';
import { VistaSolicitudesComponent } from './vista-solicitudes/vista-solicitudes.component';
import { RecursosModule } from '../recursos/recursos.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AsignarTutorComponent,
    VistaSolicitudesComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    RecursosModule,
    FormsModule
  ]
})
export class AdministracionModule { }

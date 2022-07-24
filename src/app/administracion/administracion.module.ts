import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AsignarTutorComponent } from './asignar-tutor/asignar-tutor.component';
import { VistaSolicitudesComponent } from './vista-solicitudes/vista-solicitudes.component';


@NgModule({
  declarations: [
    AsignarTutorComponent,
    VistaSolicitudesComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }

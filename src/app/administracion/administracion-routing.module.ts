import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarTutorComponent } from './asignar-tutor/asignar-tutor.component';
import { VistaSolicitudesComponent } from './vista-solicitudes/vista-solicitudes.component';

const routes: Routes = [
  {path: 'asignartutor', component: AsignarTutorComponent},
  {path: 'vistasolicitudes', component: VistaSolicitudesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

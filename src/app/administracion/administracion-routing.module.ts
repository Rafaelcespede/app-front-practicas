import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarTutorComponent } from './asignar-tutor/asignar-tutor.component';
import { RegistrarOrgComponent } from './registrar-org/registrar-org.component';
import { VistaSolicitudesComponent } from './vista-solicitudes/vista-solicitudes.component';

const routes: Routes = [
  {path: 'asignartutor', component: AsignarTutorComponent},
  {path: 'organizacion', component: RegistrarOrgComponent},
  {path: 'vistasolicitudes', component: VistaSolicitudesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarOrgComponent } from './registrar-org/registrar-org.component';
import { VistaFormatosComponent } from './vista-formatos/vista-formatos.component';

const routes: Routes = [
  {path: 'formatos', component: VistaFormatosComponent},
  {path: 'organizacion', component: RegistrarOrgComponent},
  { path: '', component:VistaFormatosComponent},
  { path: '**', component:VistaFormatosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticanteRoutingModule { }

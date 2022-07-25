import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaFormatosComponent } from './vista-formatos/vista-formatos.component';

const routes: Routes = [
  {path: 'formatos', component: VistaFormatosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticanteRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'practicante', loadChildren: () => import('./practicante/practicante.module').then((m) => m.PracticanteModule) },
    { path: 'admin', loadChildren: () => import('./administracion/administracion.module').then((m) => m.AdministracionModule) }
];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
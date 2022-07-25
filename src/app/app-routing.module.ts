import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    { path: '', component:LoginComponent},
    { path: 'practicante', loadChildren: () => import('./practicante/practicante.module').then((m) => m.PracticanteModule) },
    { path: 'admin', loadChildren: () => import('./administracion/administracion.module').then((m) => m.AdministracionModule) },
    { path: '**', component:LoginComponent}
];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes),
      FormsModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
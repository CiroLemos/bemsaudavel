import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'login', loadChildren: './login/login-user.module#LoginUserModule'},
  {path:'', loadChildren: './home/pagina-inicial/pagina-inicial.module#PaginaInicialModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInicialComponent } from './pagina-inicial.component';

const routes: Routes = [
  {path: '', component: PaginaInicialComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [PaginaInicialComponent]
})
export class PaginaInicialModule { }

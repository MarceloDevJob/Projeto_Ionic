import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';
import { PrincipalPage } from '../principal/principal.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
   
  },
  {path:'endereco/:id',
    component: PrincipalPage}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}

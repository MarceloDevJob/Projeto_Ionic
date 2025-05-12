import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PrincipalPage } from './principal.page';
import { PerfilPage } from '../perfil/perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}

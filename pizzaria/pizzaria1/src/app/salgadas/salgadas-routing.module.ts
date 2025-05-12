import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalgadasPage } from './salgadas.page';

const routes: Routes = [
  {
    path: '',
    component: SalgadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalgadasPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocesPage } from './doces.page';

const routes: Routes = [
  {
    path: '',
    component: DocesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocesPageRoutingModule {}

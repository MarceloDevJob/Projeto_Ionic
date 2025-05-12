import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pizza1Page } from './pizza1.page';

const routes: Routes = [
  {
    path: '',
    component: Pizza1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pizza1PageRoutingModule {}

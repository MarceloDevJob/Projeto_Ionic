import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pizza4Page } from './pizza4.page';

const routes: Routes = [
  {
    path: '',
    component: Pizza4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pizza4PageRoutingModule {}

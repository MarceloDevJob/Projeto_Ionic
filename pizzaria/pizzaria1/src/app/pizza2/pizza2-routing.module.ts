import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pizza2Page } from './pizza2.page';

const routes: Routes = [
  {
    path: '',
    component: Pizza2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pizza2PageRoutingModule {}

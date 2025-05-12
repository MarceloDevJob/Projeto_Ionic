import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pizza5Page } from './pizza5.page';

const routes: Routes = [
  {
    path: '',
    component: Pizza5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pizza5PageRoutingModule {}

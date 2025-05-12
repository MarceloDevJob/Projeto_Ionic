import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pizza3Page } from './pizza3.page';

const routes: Routes = [
  {
    path: '',
    component: Pizza3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pizza3PageRoutingModule {}

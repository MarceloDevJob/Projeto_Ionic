import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pizza4PageRoutingModule } from './pizza4-routing.module';

import { Pizza4Page } from './pizza4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pizza4PageRoutingModule
  ],
  declarations: [Pizza4Page]
})
export class Pizza4PageModule {}

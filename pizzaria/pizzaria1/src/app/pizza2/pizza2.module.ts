import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pizza2PageRoutingModule } from './pizza2-routing.module';

import { Pizza2Page } from './pizza2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pizza2PageRoutingModule
  ],
  declarations: [Pizza2Page]
})
export class Pizza2PageModule {}

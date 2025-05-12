import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pizza1PageRoutingModule } from './pizza1-routing.module';

import { Pizza1Page } from './pizza1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pizza1PageRoutingModule
  ],
  declarations: [Pizza1Page]
})
export class Pizza1PageModule {}

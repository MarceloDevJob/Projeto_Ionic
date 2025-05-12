import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pizza3PageRoutingModule } from './pizza3-routing.module';

import { Pizza3Page } from './pizza3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pizza3PageRoutingModule
  ],
  declarations: [Pizza3Page]
})
export class Pizza3PageModule {}

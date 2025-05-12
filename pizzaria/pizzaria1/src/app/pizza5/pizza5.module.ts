import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pizza5PageRoutingModule } from './pizza5-routing.module';

import { Pizza5Page } from './pizza5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pizza5PageRoutingModule
  ],
  declarations: [Pizza5Page]
})
export class Pizza5PageModule {}

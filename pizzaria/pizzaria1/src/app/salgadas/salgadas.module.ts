import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalgadasPageRoutingModule } from './salgadas-routing.module';

import { SalgadasPage } from './salgadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalgadasPageRoutingModule
  ],
  declarations: [SalgadasPage]
})
export class SalgadasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocesPageRoutingModule } from './doces-routing.module';

import { DocesPage } from './doces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocesPageRoutingModule
  ],
  declarations: [DocesPage]
})
export class DocesPageModule {}

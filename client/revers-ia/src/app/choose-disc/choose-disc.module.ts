import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseDiscPageRoutingModule } from './choose-disc-routing.module';

import { ChooseDiscPage } from './choose-disc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseDiscPageRoutingModule
  ],
  declarations: [ChooseDiscPage]
})
export class ChooseDiscPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowToPlayPageRoutingModule } from './how-to-play-routing.module';

import { HowToPlayPage } from './how-to-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowToPlayPageRoutingModule
  ],
  declarations: [HowToPlayPage]
})
export class HowToPlayPageModule {}

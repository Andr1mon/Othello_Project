import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerVsAiPageRoutingModule } from './player-vs-ai-routing.module';

import { PlayerVsAiPage } from './player-vs-ai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerVsAiPageRoutingModule
  ],
  declarations: [PlayerVsAiPage]
})
export class PlayerVsAiPageModule {}

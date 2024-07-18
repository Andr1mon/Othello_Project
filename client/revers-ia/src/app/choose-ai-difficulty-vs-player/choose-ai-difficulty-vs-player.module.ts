import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseAiDifficultyVsPlayerPageRoutingModule } from './choose-ai-difficulty-vs-player-routing.module';

import { ChooseAiDifficultyVsPlayerPage } from './choose-ai-difficulty-vs-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseAiDifficultyVsPlayerPageRoutingModule
  ],
  declarations: [ChooseAiDifficultyVsPlayerPage]
})
export class ChooseAiDifficultyVsPlayerPageModule {}

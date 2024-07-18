import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseAiDifficultyVsAiSecondPageRoutingModule } from './choose-ai-difficulty-vs-ai-second-routing.module';

import { ChooseAiDifficultyVsAiSecondPage } from './choose-ai-difficulty-vs-ai-second.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseAiDifficultyVsAiSecondPageRoutingModule
  ],
  declarations: [ChooseAiDifficultyVsAiSecondPage]
})
export class ChooseAiDifficultyVsAiSecondPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseAiDifficultyVsAiFirstPageRoutingModule } from './choose-ai-difficulty-vs-ai-first-routing.module';

import { ChooseAiDifficultyVsAiFirstPage } from './choose-ai-difficulty-vs-ai-first.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseAiDifficultyVsAiFirstPageRoutingModule
  ],
  declarations: [ChooseAiDifficultyVsAiFirstPage]
})
export class ChooseAiDifficultyVsAiFirstPageModule {}

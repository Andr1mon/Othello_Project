import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseAiDifficultyVsAiSecondPage } from './choose-ai-difficulty-vs-ai-second.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseAiDifficultyVsAiSecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseAiDifficultyVsAiSecondPageRoutingModule {}

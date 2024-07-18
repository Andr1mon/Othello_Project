import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseAiDifficultyVsAiFirstPage } from './choose-ai-difficulty-vs-ai-first.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseAiDifficultyVsAiFirstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseAiDifficultyVsAiFirstPageRoutingModule {}

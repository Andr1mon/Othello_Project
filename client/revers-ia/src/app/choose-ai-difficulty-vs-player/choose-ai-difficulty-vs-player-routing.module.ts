import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseAiDifficultyVsPlayerPage } from './choose-ai-difficulty-vs-player.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseAiDifficultyVsPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseAiDifficultyVsPlayerPageRoutingModule {}

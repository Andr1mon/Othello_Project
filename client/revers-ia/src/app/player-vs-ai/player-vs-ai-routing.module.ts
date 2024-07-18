import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerVsAiPage } from './player-vs-ai.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerVsAiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerVsAiPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AiVsAiPage } from './ai-vs-ai.page';

const routes: Routes = [
  {
    path: '',
    component: AiVsAiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AiVsAiPageRoutingModule {}

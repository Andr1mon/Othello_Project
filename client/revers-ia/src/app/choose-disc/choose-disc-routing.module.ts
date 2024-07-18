import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseDiscPage } from './choose-disc.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseDiscPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseDiscPageRoutingModule {}

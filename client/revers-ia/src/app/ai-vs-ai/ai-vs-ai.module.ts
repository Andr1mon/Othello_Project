import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AiVsAiPageRoutingModule } from './ai-vs-ai-routing.module';

import { AiVsAiPage } from './ai-vs-ai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AiVsAiPageRoutingModule
  ],
  declarations: [AiVsAiPage]
})
export class AiVsAiPageModule {}

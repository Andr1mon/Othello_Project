import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OfflinePageRoutingModule } from './offline-routing.module';
import { OfflinePage } from './offline.page';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfflinePageRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: OfflinePage,
      },
    ]),
  ],
  declarations: [OfflinePage],
  providers: [ApiService],
})
export class OfflinePageModule {}



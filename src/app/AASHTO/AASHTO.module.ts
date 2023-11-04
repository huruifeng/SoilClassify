import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AASHTOPage } from './AASHTO.page';

import { AASHTOPageRoutingModule } from './AASHTO-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AASHTOPageRoutingModule
  ],
  declarations: [AASHTOPage]
})
export class AASHTOPageModule {}

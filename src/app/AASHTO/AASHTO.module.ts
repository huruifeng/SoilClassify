import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AASHTOPage } from './AASHTO.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AASHTOPageRoutingModule } from './AASHTO-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AASHTOPageRoutingModule
  ],
  declarations: [AASHTOPage]
})
export class AASHTOPageModule {}

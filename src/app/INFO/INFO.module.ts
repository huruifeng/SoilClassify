import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { INFOPage } from './INFO.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { INFOPageRoutingModule } from './INFO-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    INFOPageRoutingModule
  ],
  declarations: [INFOPage]
})
export class INFOPageModule {}

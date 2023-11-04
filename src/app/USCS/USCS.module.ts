import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { USCSPage } from './USCS.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { USCSPageRoutingModule } from './USCS-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    USCSPageRoutingModule
  ],
  declarations: [USCSPage]
})
export class USCSPageModule {}

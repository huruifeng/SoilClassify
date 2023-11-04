import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AASHTOPage } from './AASHTO.page';

const routes: Routes = [
  {
    path: '',
    component: AASHTOPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AASHTOPageRoutingModule {}

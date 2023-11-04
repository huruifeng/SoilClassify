import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INFOPage } from './INFO.page';

const routes: Routes = [
  {
    path: '',
    component: INFOPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class INFOPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { USCSPage } from './USCS.page';

const routes: Routes = [
  {
    path: '',
    component: USCSPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class USCSPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'AASHTO',
        loadChildren: () => import('../AASHTO/AASHTO.module').then(m => m.AASHTOPageModule)
      },
      {
        path: 'USCS',
        loadChildren: () => import('../USCS/USCS.module').then(m => m.USCSPageModule)
      },
      {
        path: 'INFO',
        loadChildren: () => import('../INFO/INFO.module').then(m => m.INFOPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/AASHTO',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/AASHTO',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

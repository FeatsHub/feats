import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPage } from './admin.page';
import { StatsPage } from './stats/stats.page';
import { AdminTabsComponent } from './admin-tabs/admin-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsComponent,
    children: [
      {
        path: '',
        component: StatsPage
      },
      {
        path: 'stats',
        component: StatsPage
      },
      {
        path: 'stats',
        component: StatsPage
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

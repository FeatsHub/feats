import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPage } from './admin.page';
import { StatsPage } from './stats/stats.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
  },
  {
      path: 'stats',
      component: StatsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

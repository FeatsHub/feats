import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPage } from './admin.page';
import { StatsPage } from './stats/stats.page';
import { AdminTabsComponent } from './admin-tabs/admin-tabs.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'stats',
        pathMatch: 'full'
      },
      {
        path: 'stats',
        component: StatsPage
      },
      {
        path: 'options',
        component: AdminPage
      },
      {
        path: 'options/products',
        component: ProductListComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

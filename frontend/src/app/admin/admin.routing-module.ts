import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPage } from './admin.page';
import { AdminTabsComponent } from './admin-tabs/admin-tabs.component';
import { StatsPage } from './stats/stats.page';
import { ProductListComponent } from './product-list/product-list.component';
import { AllergenListComponent } from './allergen-list/allergen-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'options',
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
      {
        path: 'options/allergens',
        component: AllergenListComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { AdminRoutingModule } from './admin.routing-module';
import { StatsPage } from './stats/stats.page';
import { AdminTabsComponent } from './admin-tabs/admin-tabs.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AllergenListComponent } from './allergen-list/allergen-list.component';
@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminPage,
    StatsPage,
    AdminTabsComponent,
    ProductListComponent,
    AllergenListComponent
  ]
})
export class AdminModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { StatsPage } from './stats/stats.page';
import { AdminRoutingModule } from './admin.routing-module';
import { AdminTabsComponent } from './admin-tabs/admin-tabs.component';
import { ProductListComponent } from './product-list/product-list.component';
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
    ProductListComponent
  ]
})
export class AdminModule {}

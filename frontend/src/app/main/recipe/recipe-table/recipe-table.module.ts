import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RecipeTablePage } from './recipe-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    RecipeTablePage
  ],
  exports: [
    RecipeTablePage
  ]
})
export class RecipeTableModule {}

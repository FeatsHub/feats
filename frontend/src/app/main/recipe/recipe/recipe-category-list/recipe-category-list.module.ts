import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RecipeCategoryList } from './recipe-category-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [
    RecipeCategoryList
  ],
  exports: [
    RecipeCategoryList
  ]
})
export class RecipeCategoryListModule {}

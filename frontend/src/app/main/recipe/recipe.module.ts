import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeDetailPage } from './recipe-retrieve/recipe-retrieve.page';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeFormPage } from './recipe-form/recipe-form.page';
import { RecipeListPage } from './recipe-list/recipe-list.page';
import { RouterModule } from '@angular/router';
import { ImagePickerModule } from 'src/app/components/image-picker/image-picker.module';

@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RecipeRoutingModule,
    ReactiveFormsModule,
    ImagePickerModule
  ],
  declarations: [
    RecipeDetailPage,
    RecipeFormPage,
    RecipeListPage,
  ]
})
export class RecipeModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RouterModule } from '@angular/router';
import { ImagePickerModule } from 'src/app/components/image-picker/image-picker.module';
import { AllergensListModule } from 'src/app/components/allergen-list/allergen-list.module';
import { SearchComponent } from './search-component/search-component.component';
import { UserListModule } from '../user/user-list-component/user-list.module';
import { RecipeTableModule } from './recipe/recipe-table/recipe-table.module';
import { RecipeDetailPage } from './recipe/recipe-retrieve/recipe-retrieve.page';
import { RecipeFormPage } from './recipe/recipe-form/recipe-form.page';
import { RecipeListPage } from './recipe/recipe-list/recipe-list.page';
import { StepFormPage } from './recipe/recipe-steps-form/recipe-steps-form.page';
import { IngredientsFormPage } from './ingredient/ingredients-form/ingredients-form.page';
import { RecipeCategoryListModule } from './recipe/recipe-category-list/recipe-category-list.module';

@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RecipeRoutingModule,
    ReactiveFormsModule,
    ImagePickerModule,
    RecipeTableModule,
    AllergensListModule,
    UserListModule,
    RecipeCategoryListModule
  ],
  declarations: [
    RecipeDetailPage,
    RecipeFormPage,
    RecipeListPage,
    SearchComponent,
    IngredientsFormPage,
    StepFormPage
  ]
})
export class RecipeModule {}

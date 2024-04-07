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
import { RecipeTableModule } from './recipe-table/recipe-table.module';
import { AllergensListModule } from 'src/app/components/allergen-list/allergen-list.module';
import { SearchComponent } from './search-component/search-component.component';
import { UserListModule } from '../user/user-list-component/user-list.module';
import { IngredientsFormPage } from './ingredients-form/ingredients-form.page';

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
    UserListModule
  ],
  declarations: [
    RecipeDetailPage,
    RecipeFormPage,
    RecipeListPage,
    SearchComponent,
    IngredientsFormPage
  ]
})
export class RecipeModule {}

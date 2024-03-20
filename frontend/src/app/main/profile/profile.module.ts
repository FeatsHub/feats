import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { RouterModule } from '@angular/router';
import { ProfileRetrievePage } from './profile-retrieve/profile-retrieve.page';
import { ProfileFormPage } from './profile-form/profile-form.page';
import { ImagePickerModule } from 'src/app/components/image-picker/image-picker.module';
import { SavedRecipesPage } from './saved-recipes/saved-recipes-list/saved-recipes.page';
import { RecipeTableModule } from '../recipe/recipe-table/recipe-table.module';

@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    ImagePickerModule,
    RecipeTableModule
  ],
  declarations: [
    ProfileRetrievePage,
    ProfileFormPage,
    SavedRecipesPage
  ]
})
export class ProfileModule {}

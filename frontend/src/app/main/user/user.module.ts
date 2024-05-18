import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { ProfileRetrievePage } from './profile/profile-retrieve/profile-retrieve.page';
import { ProfileFormPage } from './profile/profile-form/profile-form.page';
import { ImagePickerModule } from 'src/app/components/image-picker/image-picker.module';
import { SavedRecipesPage } from './profile/saved-recipes-list/saved-recipes.page';
import { RecipeTableModule } from '../recipe/recipe/recipe-table/recipe-table.module';
import { ProfileRecipesComponent } from './profile/profile-retrieve/components/profile-recipes-component/profile-recipes.component';
import { ProfileRecipeListsComponent } from './profile/profile-retrieve/components/profile-recipe-lists-component/profile-recipe-lists.component';

@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    ImagePickerModule,
    RecipeTableModule,
  ],
  declarations: [
    ProfileRetrievePage,
    ProfileFormPage,
    SavedRecipesPage,
    ProfileRecipesComponent,
    ProfileRecipeListsComponent
  ]
})
export class ProfileModule {}

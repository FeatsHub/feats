import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileRetrievePage } from './profile-retrieve/profile-retrieve.page';
import { ProfileFormPage } from './profile-form/profile-form.page';
import { SavedRecipesPage } from './saved-recipes/saved-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileRetrievePage,
  },
  {
      path: 'edit',
      component: ProfileFormPage,
  },
  {
    path: 'recipes/:id',
    component: SavedRecipesPage,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}

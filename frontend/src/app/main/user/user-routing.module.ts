import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileRetrievePage } from './profile/profile-retrieve/profile-retrieve.page';
import { ProfileFormPage } from './profile/profile-form/profile-form.page';
import { SavedRecipesPage } from './profile/saved-recipes-list/saved-recipes.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/profile',
    pathMatch: 'full'
  },
  {
      path: 'edit',
      component: ProfileFormPage,
  },
  {
    path: 'recipes/:id',
    component: SavedRecipesPage,
  },
  {
    path: ':id',
    component: ProfileRetrievePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}

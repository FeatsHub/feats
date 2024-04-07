import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListPage } from './recipe-list/recipe-list.page';
import { RecipeFormPage } from './recipe-form/recipe-form.page';
import { RecipeDetailPage } from './recipe-retrieve/recipe-retrieve.page';
import { IngredientsFormPage } from './ingredients-form/ingredients-form.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/recipes',
    pathMatch: 'full'
  },
  {
    path: 'ingredients',
    component: IngredientsFormPage,
  },
  {
    path: 'new',
    component: RecipeFormPage,
  },
  {
    path: ':id/edit',
    component: RecipeFormPage,
  },
  {
    path: ':id',
    component: RecipeDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}

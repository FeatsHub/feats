import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeFormPage } from './recipe/recipe-form/recipe-form.page';
import { StepFormPage } from './recipe/recipe-steps-form/recipe-steps-form.page';
import { RecipeDetailPage } from './recipe/recipe-retrieve/recipe-retrieve.page';
import { IngredientsFormPage } from './ingredient/ingredients-form/ingredients-form.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/recipes',
    pathMatch: 'full'
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
    path: ':id/edit/ingredients',
    component: IngredientsFormPage,
  },
  {
    path: ':id/edit/steps',
    component: StepFormPage,
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

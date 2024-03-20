import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from "./main/login/login.page";
import { RegisterPage } from './main/register/register.page';
import { SettingsPage } from './main/settings/settings.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./main/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: RegisterPage
  },
  {
    path: 'recipes',
    loadChildren: () => import('./main/recipe/recipe.module').then(m => m.RecipeModule)
  },
  {
    path: 'settings',
    component: SettingsPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from "./main/login/login.page";
import { RegisterPage } from './main/register/register.page';
import { SettingsPage } from './main/settings/settings.page';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'recipes',
        pathMatch: 'full'
      },
      {
        path: 'recipes',
        loadChildren: () => import('./main/recipe/recipe-list/recipe-list.page').then((m) => m.RecipeListPage),
      },
      {
        path: 'profile',
        loadChildren: () => import('./main/profile/profile-retrieve/profile-retrieve.page').then((m) => m.ProfileRetrievePage),
      },
    ]
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

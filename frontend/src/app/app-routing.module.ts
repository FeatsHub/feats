import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from "./main/login/login.page";
import { RegisterPage } from './main/register/register.page';
import { SettingsPage } from './main/settings/settings.page';
import { RecipeListPage } from './main/recipe/recipe-list/recipe-list.page';
import { ProfileRetrievePage } from './main/profile/profile-retrieve/profile-retrieve.page';
import { TabsComponent } from './main/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: '',
        component: RecipeListPage
      },
      {
        path: 'recipes',
        component: RecipeListPage
      },
      {
        path: 'profile',
        component: ProfileRetrievePage
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
    path: 'recipes',
    loadChildren: () => import('./main/recipe/recipe.module').then(m => m.RecipeModule)
  },
  {
    path: 'settings',
    component: SettingsPage
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./main/profile/profile.module').then(m => m.ProfileModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

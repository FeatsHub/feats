import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from "./main/user/login/login.page";
import { ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from 'src/api/api.module';
import { AuthInterceptor } from './auth/auth.interceptor';
import { Router } from '@angular/router';
import { RegisterPage } from './main/user/register/register.page';
import { StepCheckEmailComponent } from './main/user/register/components/step-check-email/step-check-email.component';
import { StepCheckUsernameComponent } from './main/user/register/components/step-check-username/step-check-username.component';
import { SettingsPage } from './main/settings/settings.page';
import { TabsComponent } from './components/app-tabs/tabs.component';
import { AllergensListModule } from './components/allergen-list/allergen-list.module';
import { StepFavoriteCategoriesComponent } from './main/user/register/components/step-favorite-categories/step-favorite-categories.component';
import { RecipeCategoryListModule } from './main/recipe/recipe/recipe-category-list/recipe-category-list.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    RegisterPage,
    SettingsPage,
    StepCheckEmailComponent,
    StepCheckUsernameComponent,
    StepFavoriteCategoriesComponent,
    TabsComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AllergensListModule,
    RecipeCategoryListModule,
    //ApiModule.forRoot({ rootUrl: 'http://localhost:8000' }),
    ApiModule.forRoot({ rootUrl: 'https://api.feats-app.com' })
  ],
  providers: [
    Router,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [Router],
    } as any,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

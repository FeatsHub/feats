/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ImageLibraryService } from './services/image-library.service';
import { ProductService } from './services/product.service';
import { ProductAllergenService } from './services/product-allergen.service';
import { RecipeService } from './services/recipe.service';
import { RecipeCategoryService } from './services/recipe-category.service';
import { RecipeIngredientService } from './services/recipe-ingredient.service';
import { RecipeListService } from './services/recipe-list.service';
import { SchemaService } from './services/schema.service';
import { UserService } from './services/user.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ImageLibraryService,
    ProductService,
    ProductAllergenService,
    RecipeService,
    RecipeCategoryService,
    RecipeIngredientService,
    RecipeListService,
    SchemaService,
    UserService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}

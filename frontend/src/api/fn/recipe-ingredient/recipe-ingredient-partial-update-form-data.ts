/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedRecipeIngredient } from '../../models/patched-recipe-ingredient';
import { RecipeIngredient } from '../../models/recipe-ingredient';

export interface RecipeIngredientPartialUpdate$FormData$Params {

/**
 * A unique integer value identifying this recipe ingredient.
 */
  id: number;
      body?: PatchedRecipeIngredient
}

export function recipeIngredientPartialUpdate$FormData(http: HttpClient, rootUrl: string, params: RecipeIngredientPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
  const rb = new RequestBuilder(rootUrl, recipeIngredientPartialUpdate$FormData.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RecipeIngredient>;
    })
  );
}

recipeIngredientPartialUpdate$FormData.PATH = '/api/recipe_ingredient/{id}/';

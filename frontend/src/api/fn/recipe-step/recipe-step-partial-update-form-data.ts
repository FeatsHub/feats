/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedRecipeIngredient } from '../../models/patched-recipe-ingredient';
import { RecipeIngredient } from '../../models/recipe-ingredient';

export interface RecipeStepPartialUpdate$FormData$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;

/**
 * A unique integer value identifying this recipe ingredient.
 */
  id: number;
      body?: PatchedRecipeIngredient
}

export function recipeStepPartialUpdate$FormData(http: HttpClient, rootUrl: string, params: RecipeStepPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
  const rb = new RequestBuilder(rootUrl, recipeStepPartialUpdate$FormData.PATH, 'patch');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
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

recipeStepPartialUpdate$FormData.PATH = '/api/recipe_step/{id}/';

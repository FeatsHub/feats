/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedRecipe } from '../../models/patched-recipe';
import { Recipe } from '../../models/recipe';

export interface RecipePartialUpdate$Json$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;

/**
 * A unique integer value identifying this recipe.
 */
  id: number;
      body?: PatchedRecipe
}

export function recipePartialUpdate$Json(http: HttpClient, rootUrl: string, params: RecipePartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Recipe>> {
  const rb = new RequestBuilder(rootUrl, recipePartialUpdate$Json.PATH, 'patch');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Recipe>;
    })
  );
}

recipePartialUpdate$Json.PATH = '/api/recipe/{id}/';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedRecipeList } from '../../models/patched-recipe-list';
import { RecipeList } from '../../models/recipe-list';

export interface RecipeListPartialUpdate$Json$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * A unique integer value identifying this recipe list.
 */
  id: number;
      body?: PatchedRecipeList
}

export function recipeListPartialUpdate$Json(http: HttpClient, rootUrl: string, params: RecipeListPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
  const rb = new RequestBuilder(rootUrl, recipeListPartialUpdate$Json.PATH, 'patch');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RecipeList>;
    })
  );
}

recipeListPartialUpdate$Json.PATH = '/api/recipe_list/{id}/';

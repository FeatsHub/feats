/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedRecipeList } from '../../models/patched-recipe-list';
import { RecipeList } from '../../models/recipe-list';

export interface RecipeListPartialUpdate$FormData$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;

/**
 * A unique integer value identifying this recipe list.
 */
  id: number;
      body?: PatchedRecipeList
}

export function recipeListPartialUpdate$FormData(http: HttpClient, rootUrl: string, params: RecipeListPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
  const rb = new RequestBuilder(rootUrl, recipeListPartialUpdate$FormData.PATH, 'patch');
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
      return r as StrictHttpResponse<RecipeList>;
    })
  );
}

recipeListPartialUpdate$FormData.PATH = '/api/recipe_list/{id}/';

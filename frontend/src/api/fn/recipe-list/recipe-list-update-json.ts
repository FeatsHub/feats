/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RecipeList } from '../../models/recipe-list';

export interface RecipeListUpdate$Json$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * A unique integer value identifying this recipe list.
 */
  id: number;
      body: RecipeList
}

export function recipeListUpdate$Json(http: HttpClient, rootUrl: string, params: RecipeListUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
  const rb = new RequestBuilder(rootUrl, recipeListUpdate$Json.PATH, 'put');
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

recipeListUpdate$Json.PATH = '/api/recipe_list/{id}/';

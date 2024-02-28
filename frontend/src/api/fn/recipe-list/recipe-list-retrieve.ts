/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RecipeList } from '../../models/recipe-list';

export interface RecipeListRetrieve$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * A unique integer value identifying this recipe list.
 */
  id: number;
}

export function recipeListRetrieve(http: HttpClient, rootUrl: string, params: RecipeListRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
  const rb = new RequestBuilder(rootUrl, recipeListRetrieve.PATH, 'get');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.path('id', params.id, {});
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

recipeListRetrieve.PATH = '/api/recipe_list/{id}/';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RecipeList } from '../../models/recipe-list';

export interface RecipeListCreate$Json$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;
      body: RecipeList
}

export function recipeListCreate$Json(http: HttpClient, rootUrl: string, params: RecipeListCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
  const rb = new RequestBuilder(rootUrl, recipeListCreate$Json.PATH, 'post');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
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

recipeListCreate$Json.PATH = '/api/recipe_list/';

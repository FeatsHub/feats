/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Empty } from '../../models/empty';
import { Recipe } from '../../models/recipe';

export interface RecipeSaveCreate$XWwwFormUrlencoded$Params {

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

/**
 * List ID
 */
  list_id?: string;
      body?: Empty
}

export function recipeSaveCreate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: RecipeSaveCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Recipe>> {
  const rb = new RequestBuilder(rootUrl, recipeSaveCreate$XWwwFormUrlencoded.PATH, 'post');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
    rb.path('id', params.id, {});
    rb.query('list_id', params.list_id, {});
    rb.body(params.body, 'application/x-www-form-urlencoded');
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

recipeSaveCreate$XWwwFormUrlencoded.PATH = '/api/recipe/{id}/save/';

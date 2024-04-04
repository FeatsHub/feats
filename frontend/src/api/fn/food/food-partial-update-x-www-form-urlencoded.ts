/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Food } from '../../models/food';
import { PatchedFood } from '../../models/patched-food';

export interface FoodPartialUpdate$XWwwFormUrlencoded$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;

/**
 * A unique integer value identifying this food.
 */
  id: number;
      body?: PatchedFood
}

export function foodPartialUpdate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: FoodPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Food>> {
  const rb = new RequestBuilder(rootUrl, foodPartialUpdate$XWwwFormUrlencoded.PATH, 'patch');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-www-form-urlencoded');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Food>;
    })
  );
}

foodPartialUpdate$XWwwFormUrlencoded.PATH = '/api/food/{id}/';

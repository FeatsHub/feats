/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FoodAllergen } from '../../models/food-allergen';

export interface FoodAllergenCreate$Json$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;
      body: FoodAllergen
}

export function foodAllergenCreate$Json(http: HttpClient, rootUrl: string, params: FoodAllergenCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
  const rb = new RequestBuilder(rootUrl, foodAllergenCreate$Json.PATH, 'post');
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
      return r as StrictHttpResponse<FoodAllergen>;
    })
  );
}

foodAllergenCreate$Json.PATH = '/api/food_allergen/';

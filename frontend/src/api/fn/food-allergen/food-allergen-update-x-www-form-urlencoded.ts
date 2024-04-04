/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FoodAllergen } from '../../models/food-allergen';

export interface FoodAllergenUpdate$XWwwFormUrlencoded$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;

/**
 * A unique integer value identifying this food allergen.
 */
  id: number;
      body: FoodAllergen
}

export function foodAllergenUpdate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: FoodAllergenUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
  const rb = new RequestBuilder(rootUrl, foodAllergenUpdate$XWwwFormUrlencoded.PATH, 'put');
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
      return r as StrictHttpResponse<FoodAllergen>;
    })
  );
}

foodAllergenUpdate$XWwwFormUrlencoded.PATH = '/api/food_allergen/{id}/';

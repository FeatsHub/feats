/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FoodAllergen } from '../../models/food-allergen';
import { PatchedFoodAllergen } from '../../models/patched-food-allergen';

export interface FoodAllergenPartialUpdate$FormData$Params {

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
      body?: PatchedFoodAllergen
}

export function foodAllergenPartialUpdate$FormData(http: HttpClient, rootUrl: string, params: FoodAllergenPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
  const rb = new RequestBuilder(rootUrl, foodAllergenPartialUpdate$FormData.PATH, 'patch');
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
      return r as StrictHttpResponse<FoodAllergen>;
    })
  );
}

foodAllergenPartialUpdate$FormData.PATH = '/api/food_allergen/{id}/';

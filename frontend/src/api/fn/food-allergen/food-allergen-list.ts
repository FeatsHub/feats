/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedFoodAllergenList } from '../../models/paginated-food-allergen-list';

export interface FoodAllergenList$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;

/**
 * Number of results to return per page.
 */
  limit?: number;
  name?: string;

/**
 * The initial index from which to return the results.
 */
  offset?: number;

/**
 * Which field to use when ordering the results.
 */
  ordering?: string;

/**
 * A search term.
 */
  search?: string;
}

export function foodAllergenList(http: HttpClient, rootUrl: string, params?: FoodAllergenList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedFoodAllergenList>> {
  const rb = new RequestBuilder(rootUrl, foodAllergenList.PATH, 'get');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
    rb.query('limit', params.limit, {});
    rb.query('name', params.name, {});
    rb.query('offset', params.offset, {});
    rb.query('ordering', params.ordering, {});
    rb.query('search', params.search, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedFoodAllergenList>;
    })
  );
}

foodAllergenList.PATH = '/api/food_allergen/';

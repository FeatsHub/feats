/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedRecipeListList } from '../../models/paginated-recipe-list-list';

export interface RecipeListList$Params {

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

/**
 * The initial index from which to return the results.
 */
  offset?: number;

/**
 * Which field to use when ordering the results.
 */
  ordering?: string;
  owner?: number;
  recipes?: Array<number>;

/**
 * A search term.
 */
  search?: string;
}

export function recipeListList(http: HttpClient, rootUrl: string, params?: RecipeListList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedRecipeListList>> {
  const rb = new RequestBuilder(rootUrl, recipeListList.PATH, 'get');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
    rb.query('limit', params.limit, {});
    rb.query('offset', params.offset, {});
    rb.query('ordering', params.ordering, {});
    rb.query('owner', params.owner, {});
    rb.query('recipes', params.recipes, {"style":"form","explode":true});
    rb.query('search', params.search, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedRecipeListList>;
    })
  );
}

recipeListList.PATH = '/api/recipe_list/';

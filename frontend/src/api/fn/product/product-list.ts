/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedProductList } from '../../models/paginated-product-list';

export interface ProductList$Params {

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
 * A search term.
 */
  search?: string;
}

export function productList(http: HttpClient, rootUrl: string, params?: ProductList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedProductList>> {
  const rb = new RequestBuilder(rootUrl, productList.PATH, 'get');
  if (params) {
    rb.query('limit', params.limit, {});
    rb.query('name', params.name, {});
    rb.query('offset', params.offset, {});
    rb.query('search', params.search, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedProductList>;
    })
  );
}

productList.PATH = '/api/product/';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductAllergen } from '../../models/product-allergen';

export interface ProductAllergenUpdate$XWwwFormUrlencoded$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;

/**
 * A unique integer value identifying this product allergen.
 */
  id: number;
      body: ProductAllergen
}

export function productAllergenUpdate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: ProductAllergenUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
  const rb = new RequestBuilder(rootUrl, productAllergenUpdate$XWwwFormUrlencoded.PATH, 'put');
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
      return r as StrictHttpResponse<ProductAllergen>;
    })
  );
}

productAllergenUpdate$XWwwFormUrlencoded.PATH = '/api/product_allergen/{id}/';

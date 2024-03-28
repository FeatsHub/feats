/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedProductAllergen } from '../../models/patched-product-allergen';
import { ProductAllergen } from '../../models/product-allergen';

export interface ProductAllergenPartialUpdate$Json$Params {

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
      body?: PatchedProductAllergen
}

export function productAllergenPartialUpdate$Json(http: HttpClient, rootUrl: string, params: ProductAllergenPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
  const rb = new RequestBuilder(rootUrl, productAllergenPartialUpdate$Json.PATH, 'patch');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

productAllergenPartialUpdate$Json.PATH = '/api/product_allergen/{id}/';

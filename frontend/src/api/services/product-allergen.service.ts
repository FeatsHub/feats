/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedProductAllergenList } from '../models/paginated-product-allergen-list';
import { ProductAllergen } from '../models/product-allergen';
import { productAllergenCreate$FormData } from '../fn/product-allergen/product-allergen-create-form-data';
import { ProductAllergenCreate$FormData$Params } from '../fn/product-allergen/product-allergen-create-form-data';
import { productAllergenCreate$Json } from '../fn/product-allergen/product-allergen-create-json';
import { ProductAllergenCreate$Json$Params } from '../fn/product-allergen/product-allergen-create-json';
import { productAllergenCreate$XWwwFormUrlencoded } from '../fn/product-allergen/product-allergen-create-x-www-form-urlencoded';
import { ProductAllergenCreate$XWwwFormUrlencoded$Params } from '../fn/product-allergen/product-allergen-create-x-www-form-urlencoded';
import { productAllergenDestroy } from '../fn/product-allergen/product-allergen-destroy';
import { ProductAllergenDestroy$Params } from '../fn/product-allergen/product-allergen-destroy';
import { productAllergenList } from '../fn/product-allergen/product-allergen-list';
import { ProductAllergenList$Params } from '../fn/product-allergen/product-allergen-list';
import { productAllergenPartialUpdate$FormData } from '../fn/product-allergen/product-allergen-partial-update-form-data';
import { ProductAllergenPartialUpdate$FormData$Params } from '../fn/product-allergen/product-allergen-partial-update-form-data';
import { productAllergenPartialUpdate$Json } from '../fn/product-allergen/product-allergen-partial-update-json';
import { ProductAllergenPartialUpdate$Json$Params } from '../fn/product-allergen/product-allergen-partial-update-json';
import { productAllergenPartialUpdate$XWwwFormUrlencoded } from '../fn/product-allergen/product-allergen-partial-update-x-www-form-urlencoded';
import { ProductAllergenPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/product-allergen/product-allergen-partial-update-x-www-form-urlencoded';
import { productAllergenRetrieve } from '../fn/product-allergen/product-allergen-retrieve';
import { ProductAllergenRetrieve$Params } from '../fn/product-allergen/product-allergen-retrieve';
import { productAllergenUpdate$FormData } from '../fn/product-allergen/product-allergen-update-form-data';
import { ProductAllergenUpdate$FormData$Params } from '../fn/product-allergen/product-allergen-update-form-data';
import { productAllergenUpdate$Json } from '../fn/product-allergen/product-allergen-update-json';
import { ProductAllergenUpdate$Json$Params } from '../fn/product-allergen/product-allergen-update-json';
import { productAllergenUpdate$XWwwFormUrlencoded } from '../fn/product-allergen/product-allergen-update-x-www-form-urlencoded';
import { ProductAllergenUpdate$XWwwFormUrlencoded$Params } from '../fn/product-allergen/product-allergen-update-x-www-form-urlencoded';

@Injectable({ providedIn: 'root' })
export class ProductAllergenService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productAllergenList()` */
  static readonly ProductAllergenListPath = '/api/product_allergen/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenList()` instead.
   *
   * This method doesn't expect any request body.
   */
  productAllergenList$Response(params?: ProductAllergenList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedProductAllergenList>> {
    return productAllergenList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productAllergenList(params?: ProductAllergenList$Params, context?: HttpContext): Observable<PaginatedProductAllergenList> {
    return this.productAllergenList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedProductAllergenList>): PaginatedProductAllergenList => r.body)
    );
  }

  /** Path part for operation `productAllergenCreate()` */
  static readonly ProductAllergenCreatePath = '/api/product_allergen/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productAllergenCreate$Json$Response(params: ProductAllergenCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
    return productAllergenCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productAllergenCreate$Json(params: ProductAllergenCreate$Json$Params, context?: HttpContext): Observable<ProductAllergen> {
    return this.productAllergenCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductAllergen>): ProductAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productAllergenCreate$XWwwFormUrlencoded$Response(params: ProductAllergenCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
    return productAllergenCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productAllergenCreate$XWwwFormUrlencoded(params: ProductAllergenCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductAllergen> {
    return this.productAllergenCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductAllergen>): ProductAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productAllergenCreate$FormData$Response(params: ProductAllergenCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
    return productAllergenCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productAllergenCreate$FormData(params: ProductAllergenCreate$FormData$Params, context?: HttpContext): Observable<ProductAllergen> {
    return this.productAllergenCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductAllergen>): ProductAllergen => r.body)
    );
  }

  /** Path part for operation `productAllergenRetrieve()` */
  static readonly ProductAllergenRetrievePath = '/api/product_allergen/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  productAllergenRetrieve$Response(params: ProductAllergenRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
    return productAllergenRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productAllergenRetrieve(params: ProductAllergenRetrieve$Params, context?: HttpContext): Observable<ProductAllergen> {
    return this.productAllergenRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductAllergen>): ProductAllergen => r.body)
    );
  }

  /** Path part for operation `productAllergenUpdate()` */
  static readonly ProductAllergenUpdatePath = '/api/product_allergen/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productAllergenUpdate$Json$Response(params: ProductAllergenUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
    return productAllergenUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productAllergenUpdate$Json(params: ProductAllergenUpdate$Json$Params, context?: HttpContext): Observable<ProductAllergen> {
    return this.productAllergenUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductAllergen>): ProductAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productAllergenUpdate$XWwwFormUrlencoded$Response(params: ProductAllergenUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
    return productAllergenUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productAllergenUpdate$XWwwFormUrlencoded(params: ProductAllergenUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductAllergen> {
    return this.productAllergenUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductAllergen>): ProductAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productAllergenUpdate$FormData$Response(params: ProductAllergenUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
    return productAllergenUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productAllergenUpdate$FormData(params: ProductAllergenUpdate$FormData$Params, context?: HttpContext): Observable<ProductAllergen> {
    return this.productAllergenUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductAllergen>): ProductAllergen => r.body)
    );
  }

  /** Path part for operation `productAllergenDestroy()` */
  static readonly ProductAllergenDestroyPath = '/api/product_allergen/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  productAllergenDestroy$Response(params: ProductAllergenDestroy$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return productAllergenDestroy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productAllergenDestroy(params: ProductAllergenDestroy$Params, context?: HttpContext): Observable<void> {
    return this.productAllergenDestroy$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `productAllergenPartialUpdate()` */
  static readonly ProductAllergenPartialUpdatePath = '/api/product_allergen/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productAllergenPartialUpdate$Json$Response(params: ProductAllergenPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
    return productAllergenPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productAllergenPartialUpdate$Json(params: ProductAllergenPartialUpdate$Json$Params, context?: HttpContext): Observable<ProductAllergen> {
    return this.productAllergenPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductAllergen>): ProductAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productAllergenPartialUpdate$XWwwFormUrlencoded$Response(params: ProductAllergenPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
    return productAllergenPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productAllergenPartialUpdate$XWwwFormUrlencoded(params: ProductAllergenPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductAllergen> {
    return this.productAllergenPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductAllergen>): ProductAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productAllergenPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productAllergenPartialUpdate$FormData$Response(params: ProductAllergenPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductAllergen>> {
    return productAllergenPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productAllergenPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productAllergenPartialUpdate$FormData(params: ProductAllergenPartialUpdate$FormData$Params, context?: HttpContext): Observable<ProductAllergen> {
    return this.productAllergenPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductAllergen>): ProductAllergen => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedProductList } from '../models/paginated-product-list';
import { Product } from '../models/product';
import { productCreate$FormData } from '../fn/product/product-create-form-data';
import { ProductCreate$FormData$Params } from '../fn/product/product-create-form-data';
import { productCreate$Json } from '../fn/product/product-create-json';
import { ProductCreate$Json$Params } from '../fn/product/product-create-json';
import { productCreate$XWwwFormUrlencoded } from '../fn/product/product-create-x-www-form-urlencoded';
import { ProductCreate$XWwwFormUrlencoded$Params } from '../fn/product/product-create-x-www-form-urlencoded';
import { productDestroy } from '../fn/product/product-destroy';
import { ProductDestroy$Params } from '../fn/product/product-destroy';
import { productList } from '../fn/product/product-list';
import { ProductList$Params } from '../fn/product/product-list';
import { productPartialUpdate$FormData } from '../fn/product/product-partial-update-form-data';
import { ProductPartialUpdate$FormData$Params } from '../fn/product/product-partial-update-form-data';
import { productPartialUpdate$Json } from '../fn/product/product-partial-update-json';
import { ProductPartialUpdate$Json$Params } from '../fn/product/product-partial-update-json';
import { productPartialUpdate$XWwwFormUrlencoded } from '../fn/product/product-partial-update-x-www-form-urlencoded';
import { ProductPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/product/product-partial-update-x-www-form-urlencoded';
import { productRetrieve } from '../fn/product/product-retrieve';
import { ProductRetrieve$Params } from '../fn/product/product-retrieve';
import { productUpdate$FormData } from '../fn/product/product-update-form-data';
import { ProductUpdate$FormData$Params } from '../fn/product/product-update-form-data';
import { productUpdate$Json } from '../fn/product/product-update-json';
import { ProductUpdate$Json$Params } from '../fn/product/product-update-json';
import { productUpdate$XWwwFormUrlencoded } from '../fn/product/product-update-x-www-form-urlencoded';
import { ProductUpdate$XWwwFormUrlencoded$Params } from '../fn/product/product-update-x-www-form-urlencoded';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productList()` */
  static readonly ProductListPath = '/api/product/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productList()` instead.
   *
   * This method doesn't expect any request body.
   */
  productList$Response(params?: ProductList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedProductList>> {
    return productList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productList(params?: ProductList$Params, context?: HttpContext): Observable<PaginatedProductList> {
    return this.productList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedProductList>): PaginatedProductList => r.body)
    );
  }

  /** Path part for operation `productCreate()` */
  static readonly ProductCreatePath = '/api/product/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productCreate$Json$Response(params: ProductCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productCreate$Json(params: ProductCreate$Json$Params, context?: HttpContext): Observable<Product> {
    return this.productCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productCreate$XWwwFormUrlencoded$Response(params: ProductCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productCreate$XWwwFormUrlencoded(params: ProductCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Product> {
    return this.productCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productCreate$FormData$Response(params: ProductCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productCreate$FormData(params: ProductCreate$FormData$Params, context?: HttpContext): Observable<Product> {
    return this.productCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /** Path part for operation `productRetrieve()` */
  static readonly ProductRetrievePath = '/api/product/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  productRetrieve$Response(params: ProductRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productRetrieve(params: ProductRetrieve$Params, context?: HttpContext): Observable<Product> {
    return this.productRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /** Path part for operation `productUpdate()` */
  static readonly ProductUpdatePath = '/api/product/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productUpdate$Json$Response(params: ProductUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productUpdate$Json(params: ProductUpdate$Json$Params, context?: HttpContext): Observable<Product> {
    return this.productUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productUpdate$XWwwFormUrlencoded$Response(params: ProductUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productUpdate$XWwwFormUrlencoded(params: ProductUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Product> {
    return this.productUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productUpdate$FormData$Response(params: ProductUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productUpdate$FormData(params: ProductUpdate$FormData$Params, context?: HttpContext): Observable<Product> {
    return this.productUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /** Path part for operation `productDestroy()` */
  static readonly ProductDestroyPath = '/api/product/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  productDestroy$Response(params: ProductDestroy$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return productDestroy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productDestroy(params: ProductDestroy$Params, context?: HttpContext): Observable<void> {
    return this.productDestroy$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `productPartialUpdate()` */
  static readonly ProductPartialUpdatePath = '/api/product/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productPartialUpdate$Json$Response(params: ProductPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productPartialUpdate$Json(params: ProductPartialUpdate$Json$Params, context?: HttpContext): Observable<Product> {
    return this.productPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productPartialUpdate$XWwwFormUrlencoded$Response(params: ProductPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productPartialUpdate$XWwwFormUrlencoded(params: ProductPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Product> {
    return this.productPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productPartialUpdate$FormData$Response(params: ProductPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productPartialUpdate$FormData(params: ProductPartialUpdate$FormData$Params, context?: HttpContext): Observable<Product> {
    return this.productPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

}

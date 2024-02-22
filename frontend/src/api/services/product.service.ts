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
import { productGetOrCreateCreate$FormData } from '../fn/product/product-get-or-create-create-form-data';
import { ProductGetOrCreateCreate$FormData$Params } from '../fn/product/product-get-or-create-create-form-data';
import { productGetOrCreateCreate$Json } from '../fn/product/product-get-or-create-create-json';
import { ProductGetOrCreateCreate$Json$Params } from '../fn/product/product-get-or-create-create-json';
import { productGetOrCreateCreate$XWwwFormUrlencoded } from '../fn/product/product-get-or-create-create-x-www-form-urlencoded';
import { ProductGetOrCreateCreate$XWwwFormUrlencoded$Params } from '../fn/product/product-get-or-create-create-x-www-form-urlencoded';
import { productList } from '../fn/product/product-list';
import { ProductList$Params } from '../fn/product/product-list';

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

  /** Path part for operation `productGetOrCreateCreate()` */
  static readonly ProductGetOrCreateCreatePath = '/api/product/get_or_create/';

  /**
   * Method to create a tag (if exist return tag selected)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productGetOrCreateCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productGetOrCreateCreate$Json$Response(params: ProductGetOrCreateCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productGetOrCreateCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Method to create a tag (if exist return tag selected)
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productGetOrCreateCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productGetOrCreateCreate$Json(params: ProductGetOrCreateCreate$Json$Params, context?: HttpContext): Observable<Product> {
    return this.productGetOrCreateCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /**
   * Method to create a tag (if exist return tag selected)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productGetOrCreateCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productGetOrCreateCreate$XWwwFormUrlencoded$Response(params: ProductGetOrCreateCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productGetOrCreateCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * Method to create a tag (if exist return tag selected)
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productGetOrCreateCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productGetOrCreateCreate$XWwwFormUrlencoded(params: ProductGetOrCreateCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Product> {
    return this.productGetOrCreateCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /**
   * Method to create a tag (if exist return tag selected)
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productGetOrCreateCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productGetOrCreateCreate$FormData$Response(params: ProductGetOrCreateCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return productGetOrCreateCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * Method to create a tag (if exist return tag selected)
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productGetOrCreateCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productGetOrCreateCreate$FormData(params: ProductGetOrCreateCreate$FormData$Params, context?: HttpContext): Observable<Product> {
    return this.productGetOrCreateCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

}

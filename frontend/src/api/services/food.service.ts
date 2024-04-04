/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Food } from '../models/food';
import { foodCreate$FormData } from '../fn/food/food-create-form-data';
import { FoodCreate$FormData$Params } from '../fn/food/food-create-form-data';
import { foodCreate$Json } from '../fn/food/food-create-json';
import { FoodCreate$Json$Params } from '../fn/food/food-create-json';
import { foodCreate$XWwwFormUrlencoded } from '../fn/food/food-create-x-www-form-urlencoded';
import { FoodCreate$XWwwFormUrlencoded$Params } from '../fn/food/food-create-x-www-form-urlencoded';
import { foodDestroy } from '../fn/food/food-destroy';
import { FoodDestroy$Params } from '../fn/food/food-destroy';
import { foodList } from '../fn/food/food-list';
import { FoodList$Params } from '../fn/food/food-list';
import { foodPartialUpdate$FormData } from '../fn/food/food-partial-update-form-data';
import { FoodPartialUpdate$FormData$Params } from '../fn/food/food-partial-update-form-data';
import { foodPartialUpdate$Json } from '../fn/food/food-partial-update-json';
import { FoodPartialUpdate$Json$Params } from '../fn/food/food-partial-update-json';
import { foodPartialUpdate$XWwwFormUrlencoded } from '../fn/food/food-partial-update-x-www-form-urlencoded';
import { FoodPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/food/food-partial-update-x-www-form-urlencoded';
import { foodRetrieve } from '../fn/food/food-retrieve';
import { FoodRetrieve$Params } from '../fn/food/food-retrieve';
import { foodUpdate$FormData } from '../fn/food/food-update-form-data';
import { FoodUpdate$FormData$Params } from '../fn/food/food-update-form-data';
import { foodUpdate$Json } from '../fn/food/food-update-json';
import { FoodUpdate$Json$Params } from '../fn/food/food-update-json';
import { foodUpdate$XWwwFormUrlencoded } from '../fn/food/food-update-x-www-form-urlencoded';
import { FoodUpdate$XWwwFormUrlencoded$Params } from '../fn/food/food-update-x-www-form-urlencoded';
import { PaginatedFoodList } from '../models/paginated-food-list';

@Injectable({ providedIn: 'root' })
export class FoodService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `foodList()` */
  static readonly FoodListPath = '/api/food/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodList()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodList$Response(params?: FoodList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedFoodList>> {
    return foodList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodList(params?: FoodList$Params, context?: HttpContext): Observable<PaginatedFoodList> {
    return this.foodList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedFoodList>): PaginatedFoodList => r.body)
    );
  }

  /** Path part for operation `foodCreate()` */
  static readonly FoodCreatePath = '/api/food/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodCreate$Json$Response(params: FoodCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Food>> {
    return foodCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodCreate$Json(params: FoodCreate$Json$Params, context?: HttpContext): Observable<Food> {
    return this.foodCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Food>): Food => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodCreate$XWwwFormUrlencoded$Response(params: FoodCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Food>> {
    return foodCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodCreate$XWwwFormUrlencoded(params: FoodCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Food> {
    return this.foodCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Food>): Food => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodCreate$FormData$Response(params: FoodCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Food>> {
    return foodCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodCreate$FormData(params: FoodCreate$FormData$Params, context?: HttpContext): Observable<Food> {
    return this.foodCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Food>): Food => r.body)
    );
  }

  /** Path part for operation `foodRetrieve()` */
  static readonly FoodRetrievePath = '/api/food/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodRetrieve$Response(params: FoodRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Food>> {
    return foodRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodRetrieve(params: FoodRetrieve$Params, context?: HttpContext): Observable<Food> {
    return this.foodRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<Food>): Food => r.body)
    );
  }

  /** Path part for operation `foodUpdate()` */
  static readonly FoodUpdatePath = '/api/food/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodUpdate$Json$Response(params: FoodUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Food>> {
    return foodUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodUpdate$Json(params: FoodUpdate$Json$Params, context?: HttpContext): Observable<Food> {
    return this.foodUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Food>): Food => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodUpdate$XWwwFormUrlencoded$Response(params: FoodUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Food>> {
    return foodUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodUpdate$XWwwFormUrlencoded(params: FoodUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Food> {
    return this.foodUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Food>): Food => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodUpdate$FormData$Response(params: FoodUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Food>> {
    return foodUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodUpdate$FormData(params: FoodUpdate$FormData$Params, context?: HttpContext): Observable<Food> {
    return this.foodUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Food>): Food => r.body)
    );
  }

  /** Path part for operation `foodDestroy()` */
  static readonly FoodDestroyPath = '/api/food/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodDestroy$Response(params: FoodDestroy$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return foodDestroy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodDestroy(params: FoodDestroy$Params, context?: HttpContext): Observable<void> {
    return this.foodDestroy$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `foodPartialUpdate()` */
  static readonly FoodPartialUpdatePath = '/api/food/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodPartialUpdate$Json$Response(params: FoodPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Food>> {
    return foodPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodPartialUpdate$Json(params: FoodPartialUpdate$Json$Params, context?: HttpContext): Observable<Food> {
    return this.foodPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Food>): Food => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodPartialUpdate$XWwwFormUrlencoded$Response(params: FoodPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Food>> {
    return foodPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodPartialUpdate$XWwwFormUrlencoded(params: FoodPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Food> {
    return this.foodPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Food>): Food => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodPartialUpdate$FormData$Response(params: FoodPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Food>> {
    return foodPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodPartialUpdate$FormData(params: FoodPartialUpdate$FormData$Params, context?: HttpContext): Observable<Food> {
    return this.foodPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Food>): Food => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { FoodAllergen } from '../models/food-allergen';
import { foodAllergenCreate$FormData } from '../fn/food-allergen/food-allergen-create-form-data';
import { FoodAllergenCreate$FormData$Params } from '../fn/food-allergen/food-allergen-create-form-data';
import { foodAllergenCreate$Json } from '../fn/food-allergen/food-allergen-create-json';
import { FoodAllergenCreate$Json$Params } from '../fn/food-allergen/food-allergen-create-json';
import { foodAllergenCreate$XWwwFormUrlencoded } from '../fn/food-allergen/food-allergen-create-x-www-form-urlencoded';
import { FoodAllergenCreate$XWwwFormUrlencoded$Params } from '../fn/food-allergen/food-allergen-create-x-www-form-urlencoded';
import { foodAllergenDestroy } from '../fn/food-allergen/food-allergen-destroy';
import { FoodAllergenDestroy$Params } from '../fn/food-allergen/food-allergen-destroy';
import { foodAllergenList } from '../fn/food-allergen/food-allergen-list';
import { FoodAllergenList$Params } from '../fn/food-allergen/food-allergen-list';
import { foodAllergenPartialUpdate$FormData } from '../fn/food-allergen/food-allergen-partial-update-form-data';
import { FoodAllergenPartialUpdate$FormData$Params } from '../fn/food-allergen/food-allergen-partial-update-form-data';
import { foodAllergenPartialUpdate$Json } from '../fn/food-allergen/food-allergen-partial-update-json';
import { FoodAllergenPartialUpdate$Json$Params } from '../fn/food-allergen/food-allergen-partial-update-json';
import { foodAllergenPartialUpdate$XWwwFormUrlencoded } from '../fn/food-allergen/food-allergen-partial-update-x-www-form-urlencoded';
import { FoodAllergenPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/food-allergen/food-allergen-partial-update-x-www-form-urlencoded';
import { foodAllergenRetrieve } from '../fn/food-allergen/food-allergen-retrieve';
import { FoodAllergenRetrieve$Params } from '../fn/food-allergen/food-allergen-retrieve';
import { foodAllergenUpdate$FormData } from '../fn/food-allergen/food-allergen-update-form-data';
import { FoodAllergenUpdate$FormData$Params } from '../fn/food-allergen/food-allergen-update-form-data';
import { foodAllergenUpdate$Json } from '../fn/food-allergen/food-allergen-update-json';
import { FoodAllergenUpdate$Json$Params } from '../fn/food-allergen/food-allergen-update-json';
import { foodAllergenUpdate$XWwwFormUrlencoded } from '../fn/food-allergen/food-allergen-update-x-www-form-urlencoded';
import { FoodAllergenUpdate$XWwwFormUrlencoded$Params } from '../fn/food-allergen/food-allergen-update-x-www-form-urlencoded';
import { PaginatedFoodAllergenList } from '../models/paginated-food-allergen-list';

@Injectable({ providedIn: 'root' })
export class FoodAllergenService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `foodAllergenList()` */
  static readonly FoodAllergenListPath = '/api/food_allergen/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenList()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodAllergenList$Response(params?: FoodAllergenList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedFoodAllergenList>> {
    return foodAllergenList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodAllergenList(params?: FoodAllergenList$Params, context?: HttpContext): Observable<PaginatedFoodAllergenList> {
    return this.foodAllergenList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedFoodAllergenList>): PaginatedFoodAllergenList => r.body)
    );
  }

  /** Path part for operation `foodAllergenCreate()` */
  static readonly FoodAllergenCreatePath = '/api/food_allergen/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodAllergenCreate$Json$Response(params: FoodAllergenCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
    return foodAllergenCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodAllergenCreate$Json(params: FoodAllergenCreate$Json$Params, context?: HttpContext): Observable<FoodAllergen> {
    return this.foodAllergenCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodAllergen>): FoodAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodAllergenCreate$XWwwFormUrlencoded$Response(params: FoodAllergenCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
    return foodAllergenCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodAllergenCreate$XWwwFormUrlencoded(params: FoodAllergenCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<FoodAllergen> {
    return this.foodAllergenCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodAllergen>): FoodAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodAllergenCreate$FormData$Response(params: FoodAllergenCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
    return foodAllergenCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodAllergenCreate$FormData(params: FoodAllergenCreate$FormData$Params, context?: HttpContext): Observable<FoodAllergen> {
    return this.foodAllergenCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodAllergen>): FoodAllergen => r.body)
    );
  }

  /** Path part for operation `foodAllergenRetrieve()` */
  static readonly FoodAllergenRetrievePath = '/api/food_allergen/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodAllergenRetrieve$Response(params: FoodAllergenRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
    return foodAllergenRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodAllergenRetrieve(params: FoodAllergenRetrieve$Params, context?: HttpContext): Observable<FoodAllergen> {
    return this.foodAllergenRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodAllergen>): FoodAllergen => r.body)
    );
  }

  /** Path part for operation `foodAllergenUpdate()` */
  static readonly FoodAllergenUpdatePath = '/api/food_allergen/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodAllergenUpdate$Json$Response(params: FoodAllergenUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
    return foodAllergenUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodAllergenUpdate$Json(params: FoodAllergenUpdate$Json$Params, context?: HttpContext): Observable<FoodAllergen> {
    return this.foodAllergenUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodAllergen>): FoodAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodAllergenUpdate$XWwwFormUrlencoded$Response(params: FoodAllergenUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
    return foodAllergenUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodAllergenUpdate$XWwwFormUrlencoded(params: FoodAllergenUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<FoodAllergen> {
    return this.foodAllergenUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodAllergen>): FoodAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodAllergenUpdate$FormData$Response(params: FoodAllergenUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
    return foodAllergenUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodAllergenUpdate$FormData(params: FoodAllergenUpdate$FormData$Params, context?: HttpContext): Observable<FoodAllergen> {
    return this.foodAllergenUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodAllergen>): FoodAllergen => r.body)
    );
  }

  /** Path part for operation `foodAllergenDestroy()` */
  static readonly FoodAllergenDestroyPath = '/api/food_allergen/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodAllergenDestroy$Response(params: FoodAllergenDestroy$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return foodAllergenDestroy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  foodAllergenDestroy(params: FoodAllergenDestroy$Params, context?: HttpContext): Observable<void> {
    return this.foodAllergenDestroy$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `foodAllergenPartialUpdate()` */
  static readonly FoodAllergenPartialUpdatePath = '/api/food_allergen/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodAllergenPartialUpdate$Json$Response(params: FoodAllergenPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
    return foodAllergenPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  foodAllergenPartialUpdate$Json(params: FoodAllergenPartialUpdate$Json$Params, context?: HttpContext): Observable<FoodAllergen> {
    return this.foodAllergenPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodAllergen>): FoodAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodAllergenPartialUpdate$XWwwFormUrlencoded$Response(params: FoodAllergenPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
    return foodAllergenPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  foodAllergenPartialUpdate$XWwwFormUrlencoded(params: FoodAllergenPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<FoodAllergen> {
    return this.foodAllergenPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodAllergen>): FoodAllergen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `foodAllergenPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodAllergenPartialUpdate$FormData$Response(params: FoodAllergenPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodAllergen>> {
    return foodAllergenPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `foodAllergenPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  foodAllergenPartialUpdate$FormData(params: FoodAllergenPartialUpdate$FormData$Params, context?: HttpContext): Observable<FoodAllergen> {
    return this.foodAllergenPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodAllergen>): FoodAllergen => r.body)
    );
  }

}

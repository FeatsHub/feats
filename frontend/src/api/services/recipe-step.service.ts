/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedRecipeIngredientList } from '../models/paginated-recipe-ingredient-list';
import { RecipeIngredient } from '../models/recipe-ingredient';
import { recipeStepCreate$FormData } from '../fn/recipe-step/recipe-step-create-form-data';
import { RecipeStepCreate$FormData$Params } from '../fn/recipe-step/recipe-step-create-form-data';
import { recipeStepCreate$Json } from '../fn/recipe-step/recipe-step-create-json';
import { RecipeStepCreate$Json$Params } from '../fn/recipe-step/recipe-step-create-json';
import { recipeStepCreate$XWwwFormUrlencoded } from '../fn/recipe-step/recipe-step-create-x-www-form-urlencoded';
import { RecipeStepCreate$XWwwFormUrlencoded$Params } from '../fn/recipe-step/recipe-step-create-x-www-form-urlencoded';
import { recipeStepDestroy } from '../fn/recipe-step/recipe-step-destroy';
import { RecipeStepDestroy$Params } from '../fn/recipe-step/recipe-step-destroy';
import { recipeStepList } from '../fn/recipe-step/recipe-step-list';
import { RecipeStepList$Params } from '../fn/recipe-step/recipe-step-list';
import { recipeStepPartialUpdate$FormData } from '../fn/recipe-step/recipe-step-partial-update-form-data';
import { RecipeStepPartialUpdate$FormData$Params } from '../fn/recipe-step/recipe-step-partial-update-form-data';
import { recipeStepPartialUpdate$Json } from '../fn/recipe-step/recipe-step-partial-update-json';
import { RecipeStepPartialUpdate$Json$Params } from '../fn/recipe-step/recipe-step-partial-update-json';
import { recipeStepPartialUpdate$XWwwFormUrlencoded } from '../fn/recipe-step/recipe-step-partial-update-x-www-form-urlencoded';
import { RecipeStepPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/recipe-step/recipe-step-partial-update-x-www-form-urlencoded';
import { recipeStepRetrieve } from '../fn/recipe-step/recipe-step-retrieve';
import { RecipeStepRetrieve$Params } from '../fn/recipe-step/recipe-step-retrieve';
import { recipeStepUpdate$FormData } from '../fn/recipe-step/recipe-step-update-form-data';
import { RecipeStepUpdate$FormData$Params } from '../fn/recipe-step/recipe-step-update-form-data';
import { recipeStepUpdate$Json } from '../fn/recipe-step/recipe-step-update-json';
import { RecipeStepUpdate$Json$Params } from '../fn/recipe-step/recipe-step-update-json';
import { recipeStepUpdate$XWwwFormUrlencoded } from '../fn/recipe-step/recipe-step-update-x-www-form-urlencoded';
import { RecipeStepUpdate$XWwwFormUrlencoded$Params } from '../fn/recipe-step/recipe-step-update-x-www-form-urlencoded';

@Injectable({ providedIn: 'root' })
export class RecipeStepService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `recipeStepList()` */
  static readonly RecipeStepListPath = '/api/recipe_step/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepList()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeStepList$Response(params?: RecipeStepList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedRecipeIngredientList>> {
    return recipeStepList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeStepList(params?: RecipeStepList$Params, context?: HttpContext): Observable<PaginatedRecipeIngredientList> {
    return this.recipeStepList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedRecipeIngredientList>): PaginatedRecipeIngredientList => r.body)
    );
  }

  /** Path part for operation `recipeStepCreate()` */
  static readonly RecipeStepCreatePath = '/api/recipe_step/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeStepCreate$Json$Response(params: RecipeStepCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
    return recipeStepCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeStepCreate$Json(params: RecipeStepCreate$Json$Params, context?: HttpContext): Observable<RecipeIngredient> {
    return this.recipeStepCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeIngredient>): RecipeIngredient => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeStepCreate$XWwwFormUrlencoded$Response(params: RecipeStepCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
    return recipeStepCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeStepCreate$XWwwFormUrlencoded(params: RecipeStepCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<RecipeIngredient> {
    return this.recipeStepCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeIngredient>): RecipeIngredient => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeStepCreate$FormData$Response(params: RecipeStepCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
    return recipeStepCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeStepCreate$FormData(params: RecipeStepCreate$FormData$Params, context?: HttpContext): Observable<RecipeIngredient> {
    return this.recipeStepCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeIngredient>): RecipeIngredient => r.body)
    );
  }

  /** Path part for operation `recipeStepRetrieve()` */
  static readonly RecipeStepRetrievePath = '/api/recipe_step/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeStepRetrieve$Response(params: RecipeStepRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
    return recipeStepRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeStepRetrieve(params: RecipeStepRetrieve$Params, context?: HttpContext): Observable<RecipeIngredient> {
    return this.recipeStepRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeIngredient>): RecipeIngredient => r.body)
    );
  }

  /** Path part for operation `recipeStepUpdate()` */
  static readonly RecipeStepUpdatePath = '/api/recipe_step/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeStepUpdate$Json$Response(params: RecipeStepUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
    return recipeStepUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeStepUpdate$Json(params: RecipeStepUpdate$Json$Params, context?: HttpContext): Observable<RecipeIngredient> {
    return this.recipeStepUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeIngredient>): RecipeIngredient => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeStepUpdate$XWwwFormUrlencoded$Response(params: RecipeStepUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
    return recipeStepUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeStepUpdate$XWwwFormUrlencoded(params: RecipeStepUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<RecipeIngredient> {
    return this.recipeStepUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeIngredient>): RecipeIngredient => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeStepUpdate$FormData$Response(params: RecipeStepUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
    return recipeStepUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeStepUpdate$FormData(params: RecipeStepUpdate$FormData$Params, context?: HttpContext): Observable<RecipeIngredient> {
    return this.recipeStepUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeIngredient>): RecipeIngredient => r.body)
    );
  }

  /** Path part for operation `recipeStepDestroy()` */
  static readonly RecipeStepDestroyPath = '/api/recipe_step/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeStepDestroy$Response(params: RecipeStepDestroy$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return recipeStepDestroy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeStepDestroy(params: RecipeStepDestroy$Params, context?: HttpContext): Observable<void> {
    return this.recipeStepDestroy$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `recipeStepPartialUpdate()` */
  static readonly RecipeStepPartialUpdatePath = '/api/recipe_step/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeStepPartialUpdate$Json$Response(params: RecipeStepPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
    return recipeStepPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeStepPartialUpdate$Json(params: RecipeStepPartialUpdate$Json$Params, context?: HttpContext): Observable<RecipeIngredient> {
    return this.recipeStepPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeIngredient>): RecipeIngredient => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeStepPartialUpdate$XWwwFormUrlencoded$Response(params: RecipeStepPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
    return recipeStepPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeStepPartialUpdate$XWwwFormUrlencoded(params: RecipeStepPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<RecipeIngredient> {
    return this.recipeStepPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeIngredient>): RecipeIngredient => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeStepPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeStepPartialUpdate$FormData$Response(params: RecipeStepPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeIngredient>> {
    return recipeStepPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeStepPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeStepPartialUpdate$FormData(params: RecipeStepPartialUpdate$FormData$Params, context?: HttpContext): Observable<RecipeIngredient> {
    return this.recipeStepPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeIngredient>): RecipeIngredient => r.body)
    );
  }

}

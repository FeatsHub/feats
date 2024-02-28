/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedRecipeListList } from '../models/paginated-recipe-list-list';
import { RecipeList } from '../models/recipe-list';
import { recipeListCreate$FormData } from '../fn/recipe-list/recipe-list-create-form-data';
import { RecipeListCreate$FormData$Params } from '../fn/recipe-list/recipe-list-create-form-data';
import { recipeListCreate$Json } from '../fn/recipe-list/recipe-list-create-json';
import { RecipeListCreate$Json$Params } from '../fn/recipe-list/recipe-list-create-json';
import { recipeListCreate$XWwwFormUrlencoded } from '../fn/recipe-list/recipe-list-create-x-www-form-urlencoded';
import { RecipeListCreate$XWwwFormUrlencoded$Params } from '../fn/recipe-list/recipe-list-create-x-www-form-urlencoded';
import { recipeListDestroy } from '../fn/recipe-list/recipe-list-destroy';
import { RecipeListDestroy$Params } from '../fn/recipe-list/recipe-list-destroy';
import { recipeListList } from '../fn/recipe-list/recipe-list-list';
import { RecipeListList$Params } from '../fn/recipe-list/recipe-list-list';
import { recipeListPartialUpdate$FormData } from '../fn/recipe-list/recipe-list-partial-update-form-data';
import { RecipeListPartialUpdate$FormData$Params } from '../fn/recipe-list/recipe-list-partial-update-form-data';
import { recipeListPartialUpdate$Json } from '../fn/recipe-list/recipe-list-partial-update-json';
import { RecipeListPartialUpdate$Json$Params } from '../fn/recipe-list/recipe-list-partial-update-json';
import { recipeListPartialUpdate$XWwwFormUrlencoded } from '../fn/recipe-list/recipe-list-partial-update-x-www-form-urlencoded';
import { RecipeListPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/recipe-list/recipe-list-partial-update-x-www-form-urlencoded';
import { recipeListRetrieve } from '../fn/recipe-list/recipe-list-retrieve';
import { RecipeListRetrieve$Params } from '../fn/recipe-list/recipe-list-retrieve';
import { recipeListUpdate$FormData } from '../fn/recipe-list/recipe-list-update-form-data';
import { RecipeListUpdate$FormData$Params } from '../fn/recipe-list/recipe-list-update-form-data';
import { recipeListUpdate$Json } from '../fn/recipe-list/recipe-list-update-json';
import { RecipeListUpdate$Json$Params } from '../fn/recipe-list/recipe-list-update-json';
import { recipeListUpdate$XWwwFormUrlencoded } from '../fn/recipe-list/recipe-list-update-x-www-form-urlencoded';
import { RecipeListUpdate$XWwwFormUrlencoded$Params } from '../fn/recipe-list/recipe-list-update-x-www-form-urlencoded';

@Injectable({ providedIn: 'root' })
export class RecipeListService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `recipeListList()` */
  static readonly RecipeListListPath = '/api/recipe_list/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListList()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeListList$Response(params?: RecipeListList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedRecipeListList>> {
    return recipeListList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeListList(params?: RecipeListList$Params, context?: HttpContext): Observable<PaginatedRecipeListList> {
    return this.recipeListList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedRecipeListList>): PaginatedRecipeListList => r.body)
    );
  }

  /** Path part for operation `recipeListCreate()` */
  static readonly RecipeListCreatePath = '/api/recipe_list/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeListCreate$Json$Response(params: RecipeListCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
    return recipeListCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeListCreate$Json(params: RecipeListCreate$Json$Params, context?: HttpContext): Observable<RecipeList> {
    return this.recipeListCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeList>): RecipeList => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeListCreate$XWwwFormUrlencoded$Response(params: RecipeListCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
    return recipeListCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeListCreate$XWwwFormUrlencoded(params: RecipeListCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<RecipeList> {
    return this.recipeListCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeList>): RecipeList => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeListCreate$FormData$Response(params: RecipeListCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
    return recipeListCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeListCreate$FormData(params: RecipeListCreate$FormData$Params, context?: HttpContext): Observable<RecipeList> {
    return this.recipeListCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeList>): RecipeList => r.body)
    );
  }

  /** Path part for operation `recipeListRetrieve()` */
  static readonly RecipeListRetrievePath = '/api/recipe_list/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeListRetrieve$Response(params: RecipeListRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
    return recipeListRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeListRetrieve(params: RecipeListRetrieve$Params, context?: HttpContext): Observable<RecipeList> {
    return this.recipeListRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeList>): RecipeList => r.body)
    );
  }

  /** Path part for operation `recipeListUpdate()` */
  static readonly RecipeListUpdatePath = '/api/recipe_list/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeListUpdate$Json$Response(params: RecipeListUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
    return recipeListUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeListUpdate$Json(params: RecipeListUpdate$Json$Params, context?: HttpContext): Observable<RecipeList> {
    return this.recipeListUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeList>): RecipeList => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeListUpdate$XWwwFormUrlencoded$Response(params: RecipeListUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
    return recipeListUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeListUpdate$XWwwFormUrlencoded(params: RecipeListUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<RecipeList> {
    return this.recipeListUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeList>): RecipeList => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeListUpdate$FormData$Response(params: RecipeListUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
    return recipeListUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeListUpdate$FormData(params: RecipeListUpdate$FormData$Params, context?: HttpContext): Observable<RecipeList> {
    return this.recipeListUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeList>): RecipeList => r.body)
    );
  }

  /** Path part for operation `recipeListDestroy()` */
  static readonly RecipeListDestroyPath = '/api/recipe_list/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeListDestroy$Response(params: RecipeListDestroy$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return recipeListDestroy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeListDestroy(params: RecipeListDestroy$Params, context?: HttpContext): Observable<void> {
    return this.recipeListDestroy$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `recipeListPartialUpdate()` */
  static readonly RecipeListPartialUpdatePath = '/api/recipe_list/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeListPartialUpdate$Json$Response(params: RecipeListPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
    return recipeListPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeListPartialUpdate$Json(params: RecipeListPartialUpdate$Json$Params, context?: HttpContext): Observable<RecipeList> {
    return this.recipeListPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeList>): RecipeList => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeListPartialUpdate$XWwwFormUrlencoded$Response(params: RecipeListPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
    return recipeListPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  recipeListPartialUpdate$XWwwFormUrlencoded(params: RecipeListPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<RecipeList> {
    return this.recipeListPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeList>): RecipeList => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeListPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeListPartialUpdate$FormData$Response(params: RecipeListPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeList>> {
    return recipeListPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recipeListPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  recipeListPartialUpdate$FormData(params: RecipeListPartialUpdate$FormData$Params, context?: HttpContext): Observable<RecipeList> {
    return this.recipeListPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<RecipeList>): RecipeList => r.body)
    );
  }

}

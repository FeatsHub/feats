/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedUserSettingsList } from '../models/paginated-user-settings-list';
import { UserSettings } from '../models/user-settings';
import { userSettingsCreate$FormData } from '../fn/user-settings/user-settings-create-form-data';
import { UserSettingsCreate$FormData$Params } from '../fn/user-settings/user-settings-create-form-data';
import { userSettingsCreate$Json } from '../fn/user-settings/user-settings-create-json';
import { UserSettingsCreate$Json$Params } from '../fn/user-settings/user-settings-create-json';
import { userSettingsCreate$XWwwFormUrlencoded } from '../fn/user-settings/user-settings-create-x-www-form-urlencoded';
import { UserSettingsCreate$XWwwFormUrlencoded$Params } from '../fn/user-settings/user-settings-create-x-www-form-urlencoded';
import { userSettingsDestroy } from '../fn/user-settings/user-settings-destroy';
import { UserSettingsDestroy$Params } from '../fn/user-settings/user-settings-destroy';
import { userSettingsList } from '../fn/user-settings/user-settings-list';
import { UserSettingsList$Params } from '../fn/user-settings/user-settings-list';
import { userSettingsPartialUpdate$FormData } from '../fn/user-settings/user-settings-partial-update-form-data';
import { UserSettingsPartialUpdate$FormData$Params } from '../fn/user-settings/user-settings-partial-update-form-data';
import { userSettingsPartialUpdate$Json } from '../fn/user-settings/user-settings-partial-update-json';
import { UserSettingsPartialUpdate$Json$Params } from '../fn/user-settings/user-settings-partial-update-json';
import { userSettingsPartialUpdate$XWwwFormUrlencoded } from '../fn/user-settings/user-settings-partial-update-x-www-form-urlencoded';
import { UserSettingsPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/user-settings/user-settings-partial-update-x-www-form-urlencoded';
import { userSettingsRetrieve } from '../fn/user-settings/user-settings-retrieve';
import { UserSettingsRetrieve$Params } from '../fn/user-settings/user-settings-retrieve';
import { userSettingsUpdate$FormData } from '../fn/user-settings/user-settings-update-form-data';
import { UserSettingsUpdate$FormData$Params } from '../fn/user-settings/user-settings-update-form-data';
import { userSettingsUpdate$Json } from '../fn/user-settings/user-settings-update-json';
import { UserSettingsUpdate$Json$Params } from '../fn/user-settings/user-settings-update-json';
import { userSettingsUpdate$XWwwFormUrlencoded } from '../fn/user-settings/user-settings-update-x-www-form-urlencoded';
import { UserSettingsUpdate$XWwwFormUrlencoded$Params } from '../fn/user-settings/user-settings-update-x-www-form-urlencoded';

@Injectable({ providedIn: 'root' })
export class UserSettingsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `userSettingsList()` */
  static readonly UserSettingsListPath = '/api/user_settings/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  userSettingsList$Response(params?: UserSettingsList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedUserSettingsList>> {
    return userSettingsList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userSettingsList(params?: UserSettingsList$Params, context?: HttpContext): Observable<PaginatedUserSettingsList> {
    return this.userSettingsList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedUserSettingsList>): PaginatedUserSettingsList => r.body)
    );
  }

  /** Path part for operation `userSettingsCreate()` */
  static readonly UserSettingsCreatePath = '/api/user_settings/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSettingsCreate$Json$Response(params: UserSettingsCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
    return userSettingsCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSettingsCreate$Json(params: UserSettingsCreate$Json$Params, context?: HttpContext): Observable<UserSettings> {
    return this.userSettingsCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSettings>): UserSettings => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  userSettingsCreate$XWwwFormUrlencoded$Response(params: UserSettingsCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
    return userSettingsCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  userSettingsCreate$XWwwFormUrlencoded(params: UserSettingsCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<UserSettings> {
    return this.userSettingsCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSettings>): UserSettings => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  userSettingsCreate$FormData$Response(params: UserSettingsCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
    return userSettingsCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  userSettingsCreate$FormData(params: UserSettingsCreate$FormData$Params, context?: HttpContext): Observable<UserSettings> {
    return this.userSettingsCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSettings>): UserSettings => r.body)
    );
  }

  /** Path part for operation `userSettingsRetrieve()` */
  static readonly UserSettingsRetrievePath = '/api/user_settings/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  userSettingsRetrieve$Response(params: UserSettingsRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
    return userSettingsRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userSettingsRetrieve(params: UserSettingsRetrieve$Params, context?: HttpContext): Observable<UserSettings> {
    return this.userSettingsRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSettings>): UserSettings => r.body)
    );
  }

  /** Path part for operation `userSettingsUpdate()` */
  static readonly UserSettingsUpdatePath = '/api/user_settings/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSettingsUpdate$Json$Response(params: UserSettingsUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
    return userSettingsUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSettingsUpdate$Json(params: UserSettingsUpdate$Json$Params, context?: HttpContext): Observable<UserSettings> {
    return this.userSettingsUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSettings>): UserSettings => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  userSettingsUpdate$XWwwFormUrlencoded$Response(params: UserSettingsUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
    return userSettingsUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  userSettingsUpdate$XWwwFormUrlencoded(params: UserSettingsUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<UserSettings> {
    return this.userSettingsUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSettings>): UserSettings => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  userSettingsUpdate$FormData$Response(params: UserSettingsUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
    return userSettingsUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  userSettingsUpdate$FormData(params: UserSettingsUpdate$FormData$Params, context?: HttpContext): Observable<UserSettings> {
    return this.userSettingsUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSettings>): UserSettings => r.body)
    );
  }

  /** Path part for operation `userSettingsDestroy()` */
  static readonly UserSettingsDestroyPath = '/api/user_settings/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  userSettingsDestroy$Response(params: UserSettingsDestroy$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return userSettingsDestroy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userSettingsDestroy(params: UserSettingsDestroy$Params, context?: HttpContext): Observable<void> {
    return this.userSettingsDestroy$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `userSettingsPartialUpdate()` */
  static readonly UserSettingsPartialUpdatePath = '/api/user_settings/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSettingsPartialUpdate$Json$Response(params: UserSettingsPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
    return userSettingsPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSettingsPartialUpdate$Json(params: UserSettingsPartialUpdate$Json$Params, context?: HttpContext): Observable<UserSettings> {
    return this.userSettingsPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSettings>): UserSettings => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  userSettingsPartialUpdate$XWwwFormUrlencoded$Response(params: UserSettingsPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
    return userSettingsPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  userSettingsPartialUpdate$XWwwFormUrlencoded(params: UserSettingsPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<UserSettings> {
    return this.userSettingsPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSettings>): UserSettings => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSettingsPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  userSettingsPartialUpdate$FormData$Response(params: UserSettingsPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
    return userSettingsPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSettingsPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  userSettingsPartialUpdate$FormData(params: UserSettingsPartialUpdate$FormData$Params, context?: HttpContext): Observable<UserSettings> {
    return this.userSettingsPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSettings>): UserSettings => r.body)
    );
  }

}

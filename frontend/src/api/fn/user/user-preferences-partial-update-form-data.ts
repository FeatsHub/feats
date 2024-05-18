/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedUserPreferences } from '../../models/patched-user-preferences';
import { UserPreferences } from '../../models/user-preferences';

export interface UserPreferencesPartialUpdate$FormData$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;

/**
 * A unique integer value identifying this user.
 */
  id: number;
      body?: PatchedUserPreferences
}

export function userPreferencesPartialUpdate$FormData(http: HttpClient, rootUrl: string, params: UserPreferencesPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<UserPreferences>> {
  const rb = new RequestBuilder(rootUrl, userPreferencesPartialUpdate$FormData.PATH, 'patch');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserPreferences>;
    })
  );
}

userPreferencesPartialUpdate$FormData.PATH = '/api/user/{id}/preferences/';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedUserSettings } from '../../models/patched-user-settings';
import { UserSettings } from '../../models/user-settings';

export interface UserSettingsPartialUpdate$XWwwFormUrlencoded$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;

/**
 * A unique integer value identifying this user settings.
 */
  id: number;
      body?: PatchedUserSettings
}

export function userSettingsPartialUpdate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: UserSettingsPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
  const rb = new RequestBuilder(rootUrl, userSettingsPartialUpdate$XWwwFormUrlencoded.PATH, 'patch');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-www-form-urlencoded');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserSettings>;
    })
  );
}

userSettingsPartialUpdate$XWwwFormUrlencoded.PATH = '/api/user_settings/{id}/';

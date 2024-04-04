/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserSettings } from '../../models/user-settings';

export interface UserSettingsCreate$FormData$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;
      body: UserSettings
}

export function userSettingsCreate$FormData(http: HttpClient, rootUrl: string, params: UserSettingsCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSettings>> {
  const rb = new RequestBuilder(rootUrl, userSettingsCreate$FormData.PATH, 'post');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
    rb.body(params.body, 'multipart/form-data');
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

userSettingsCreate$FormData.PATH = '/api/user_settings/';

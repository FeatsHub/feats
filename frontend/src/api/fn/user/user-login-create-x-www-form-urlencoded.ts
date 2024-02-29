/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserLogin } from '../../models/user-login';

export interface UserLoginCreate$XWwwFormUrlencoded$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;
      body: UserLogin
}

export function userLoginCreate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: UserLoginCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<UserLogin>> {
  const rb = new RequestBuilder(rootUrl, userLoginCreate$XWwwFormUrlencoded.PATH, 'post');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
    rb.body(params.body, 'application/x-www-form-urlencoded');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserLogin>;
    })
  );
}

userLoginCreate$XWwwFormUrlencoded.PATH = '/api/user/login/';

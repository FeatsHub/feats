/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CheckEmail } from '../../models/check-email';
import { CheckUserResponse } from '../../models/check-user-response';

export interface UserCheckEmailCreate$XWwwFormUrlencoded$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;
      body: CheckEmail
}

export function userCheckEmailCreate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: UserCheckEmailCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<CheckUserResponse>> {
  const rb = new RequestBuilder(rootUrl, userCheckEmailCreate$XWwwFormUrlencoded.PATH, 'post');
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
      return r as StrictHttpResponse<CheckUserResponse>;
    })
  );
}

userCheckEmailCreate$XWwwFormUrlencoded.PATH = '/api/user/check_email/';

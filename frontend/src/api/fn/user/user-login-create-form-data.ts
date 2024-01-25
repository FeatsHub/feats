/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserLogin } from '../../models/user-login';

export interface UserLoginCreate$FormData$Params {

/**
 * List of nested objects
 */
  expand?: string;
      body: UserLogin
}

export function userLoginCreate$FormData(http: HttpClient, rootUrl: string, params: UserLoginCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<UserLogin>> {
  const rb = new RequestBuilder(rootUrl, userLoginCreate$FormData.PATH, 'post');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.body(params.body, 'multipart/form-data');
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

userLoginCreate$FormData.PATH = '/api/user/login/';

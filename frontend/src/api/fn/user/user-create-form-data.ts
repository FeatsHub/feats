/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { User } from '../../models/user';

export interface UserCreate$FormData$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;
      body: User
}

export function userCreate$FormData(http: HttpClient, rootUrl: string, params: UserCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
  const rb = new RequestBuilder(rootUrl, userCreate$FormData.PATH, 'post');
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
      return r as StrictHttpResponse<User>;
    })
  );
}

userCreate$FormData.PATH = '/api/user/';

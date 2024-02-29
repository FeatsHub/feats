/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Image } from '../../models/image';

export interface ImageLibraryCreate$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;
      body?: Image
}

export function imageLibraryCreate(http: HttpClient, rootUrl: string, params?: ImageLibraryCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Image>> {
  const rb = new RequestBuilder(rootUrl, imageLibraryCreate.PATH, 'post');
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
      return r as StrictHttpResponse<Image>;
    })
  );
}

imageLibraryCreate.PATH = '/api/image_library/';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Image } from '../../models/image';

export interface ImageLibraryRetrieve$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * List of nested objects
 */
  fields?: string;

/**
 * A unique integer value identifying this image.
 */
  id: number;
}

export function imageLibraryRetrieve(http: HttpClient, rootUrl: string, params: ImageLibraryRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Image>> {
  const rb = new RequestBuilder(rootUrl, imageLibraryRetrieve.PATH, 'get');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.query('fields', params.fields, {});
    rb.path('id', params.id, {});
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

imageLibraryRetrieve.PATH = '/api/image_library/{id}/';

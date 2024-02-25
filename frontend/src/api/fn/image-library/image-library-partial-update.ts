/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Image } from '../../models/image';
import { PatchedImage } from '../../models/patched-image';

export interface ImageLibraryPartialUpdate$Params {

/**
 * List of nested objects
 */
  expand?: string;

/**
 * A unique integer value identifying this image.
 */
  id: number;
      body?: PatchedImage
}

export function imageLibraryPartialUpdate(http: HttpClient, rootUrl: string, params: ImageLibraryPartialUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Image>> {
  const rb = new RequestBuilder(rootUrl, imageLibraryPartialUpdate.PATH, 'patch');
  if (params) {
    rb.query('expand', params.expand, {});
    rb.path('id', params.id, {});
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

imageLibraryPartialUpdate.PATH = '/api/image_library/{id}/';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Image } from '../models/image';
import { imageLibraryCreate } from '../fn/image-library/image-library-create';
import { ImageLibraryCreate$Params } from '../fn/image-library/image-library-create';
import { imageLibraryDestroy } from '../fn/image-library/image-library-destroy';
import { ImageLibraryDestroy$Params } from '../fn/image-library/image-library-destroy';
import { imageLibraryList } from '../fn/image-library/image-library-list';
import { ImageLibraryList$Params } from '../fn/image-library/image-library-list';
import { imageLibraryPartialUpdate } from '../fn/image-library/image-library-partial-update';
import { ImageLibraryPartialUpdate$Params } from '../fn/image-library/image-library-partial-update';
import { imageLibraryRetrieve } from '../fn/image-library/image-library-retrieve';
import { ImageLibraryRetrieve$Params } from '../fn/image-library/image-library-retrieve';
import { imageLibraryUpdate } from '../fn/image-library/image-library-update';
import { ImageLibraryUpdate$Params } from '../fn/image-library/image-library-update';
import { PaginatedImageList } from '../models/paginated-image-list';

@Injectable({ providedIn: 'root' })
export class ImageLibraryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `imageLibraryList()` */
  static readonly ImageLibraryListPath = '/api/image_library/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageLibraryList()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageLibraryList$Response(params?: ImageLibraryList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedImageList>> {
    return imageLibraryList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageLibraryList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageLibraryList(params?: ImageLibraryList$Params, context?: HttpContext): Observable<PaginatedImageList> {
    return this.imageLibraryList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedImageList>): PaginatedImageList => r.body)
    );
  }

  /** Path part for operation `imageLibraryCreate()` */
  static readonly ImageLibraryCreatePath = '/api/image_library/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageLibraryCreate()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageLibraryCreate$Response(params?: ImageLibraryCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Image>> {
    return imageLibraryCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageLibraryCreate$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageLibraryCreate(params?: ImageLibraryCreate$Params, context?: HttpContext): Observable<Image> {
    return this.imageLibraryCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Image>): Image => r.body)
    );
  }

  /** Path part for operation `imageLibraryRetrieve()` */
  static readonly ImageLibraryRetrievePath = '/api/image_library/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageLibraryRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageLibraryRetrieve$Response(params: ImageLibraryRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Image>> {
    return imageLibraryRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageLibraryRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageLibraryRetrieve(params: ImageLibraryRetrieve$Params, context?: HttpContext): Observable<Image> {
    return this.imageLibraryRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<Image>): Image => r.body)
    );
  }

  /** Path part for operation `imageLibraryUpdate()` */
  static readonly ImageLibraryUpdatePath = '/api/image_library/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageLibraryUpdate()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageLibraryUpdate$Response(params: ImageLibraryUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Image>> {
    return imageLibraryUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageLibraryUpdate$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageLibraryUpdate(params: ImageLibraryUpdate$Params, context?: HttpContext): Observable<Image> {
    return this.imageLibraryUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Image>): Image => r.body)
    );
  }

  /** Path part for operation `imageLibraryDestroy()` */
  static readonly ImageLibraryDestroyPath = '/api/image_library/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageLibraryDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageLibraryDestroy$Response(params: ImageLibraryDestroy$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return imageLibraryDestroy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageLibraryDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageLibraryDestroy(params: ImageLibraryDestroy$Params, context?: HttpContext): Observable<void> {
    return this.imageLibraryDestroy$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `imageLibraryPartialUpdate()` */
  static readonly ImageLibraryPartialUpdatePath = '/api/image_library/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageLibraryPartialUpdate()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageLibraryPartialUpdate$Response(params: ImageLibraryPartialUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<Image>> {
    return imageLibraryPartialUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageLibraryPartialUpdate$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageLibraryPartialUpdate(params: ImageLibraryPartialUpdate$Params, context?: HttpContext): Observable<Image> {
    return this.imageLibraryPartialUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Image>): Image => r.body)
    );
  }

}

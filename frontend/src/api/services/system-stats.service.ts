/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedStatsList } from '../models/paginated-stats-list';
import { systemStatsList } from '../fn/system-stats/system-stats-list';
import { SystemStatsList$Params } from '../fn/system-stats/system-stats-list';

@Injectable({ providedIn: 'root' })
export class SystemStatsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `systemStatsList()` */
  static readonly SystemStatsListPath = '/api/system_stats/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemStatsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemStatsList$Response(params?: SystemStatsList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedStatsList>> {
    return systemStatsList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemStatsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemStatsList(params?: SystemStatsList$Params, context?: HttpContext): Observable<PaginatedStatsList> {
    return this.systemStatsList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedStatsList>): PaginatedStatsList => r.body)
    );
  }

}

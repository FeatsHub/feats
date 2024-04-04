/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedStatsList } from '../../models/paginated-stats-list';

export interface SystemStatsList$Params {
  end?: string;

/**
 * Number of results to return per page.
 */
  limit?: number;

/**
 * The initial index from which to return the results.
 */
  offset?: number;

/**
 * Which field to use when ordering the results.
 */
  ordering?: string;

/**
 * A search term.
 */
  search?: string;
  start?: string;
}

export function systemStatsList(http: HttpClient, rootUrl: string, params?: SystemStatsList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedStatsList>> {
  const rb = new RequestBuilder(rootUrl, systemStatsList.PATH, 'get');
  if (params) {
    rb.query('end', params.end, {});
    rb.query('limit', params.limit, {});
    rb.query('offset', params.offset, {});
    rb.query('ordering', params.ordering, {});
    rb.query('search', params.search, {});
    rb.query('start', params.start, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedStatsList>;
    })
  );
}

systemStatsList.PATH = '/api/system_stats/';

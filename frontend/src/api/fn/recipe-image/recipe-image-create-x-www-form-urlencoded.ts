/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RecipeImage } from '../../models/recipe-image';

export interface RecipeImageCreate$XWwwFormUrlencoded$Params {
      body?: RecipeImage
}

export function recipeImageCreate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params?: RecipeImageCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<RecipeImage>> {
  const rb = new RequestBuilder(rootUrl, recipeImageCreate$XWwwFormUrlencoded.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/x-www-form-urlencoded');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RecipeImage>;
    })
  );
}

recipeImageCreate$XWwwFormUrlencoded.PATH = '/api/recipe_image/';

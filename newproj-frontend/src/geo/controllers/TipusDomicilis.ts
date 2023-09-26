/* tslint:disable:max-line-length */
/**
 * v1
 * GEORest
 * netiproa.corppro.imi.bcn:447
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { APIConfigService } from '../apiconfig.service';

import * as __model from '../model';

export interface TipusDomicilisGetParams {
  /** Identificador del tipus de domicili */
  id: string;
}

@Injectable()
export class TipusDomicilisService {
  constructor(
    private http: HttpClient,
    private apiConfigService: APIConfigService) {}


  /**
   * Retorna la llista de tipus de domicilis
   * http://netiproa.corppro.imi.bcn:447/swagger/swagger-ui.html#!/TipusDomicilis/TipusDomicilis_TipusDomicilis
   */
  tipusDomicilis(): Observable<__model.ConjuntElementsTipusDomicili> {
    return this.http.get<__model.ConjuntElementsTipusDomicili>(this.apiConfigService.options.apiUrl + `/api/TipusDomicilis`);
  }

  /**
   * Retorna les dades d'un tipus de domicilis
   * http://netiproa.corppro.imi.bcn:447/swagger/swagger-ui.html#!/TipusDomicilis/TipusDomicilis_TipusDomicilis_Get
   */
  tipusDomicilisGet(params: TipusDomicilisGetParams): Observable<__model.ConjuntElementsTipusDomicili> {
    const pathParams = {
      id: params.id,
    };
    return this.http.get<__model.ConjuntElementsTipusDomicili>(this.apiConfigService.options.apiUrl + `/api/TipusDomicilis/${pathParams.id}`);
  }
}

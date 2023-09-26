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

export interface PortesGetParams {
  /** Identificador del tipus de porta */
  id: string;
}

@Injectable()
export class PortesService {
  constructor(
    private http: HttpClient,
    private apiConfigService: APIConfigService) {}


  /**
   * Retorna la llista de tipus de portes
   * http://netiproa.corppro.imi.bcn:447/swagger/swagger-ui.html#!/Portes/Portes_Portes
   */
  portes(): Observable<__model.ConjuntElementsTipusPorta> {
    return this.http.get<__model.ConjuntElementsTipusPorta>(this.apiConfigService.options.apiUrl + `/api/Portes`);
  }

  /**
   * Retorna les dades d'un tipus de porta
   * http://netiproa.corppro.imi.bcn:447/swagger/swagger-ui.html#!/Portes/Portes_Portes_Get
   */
  portesGet(params: PortesGetParams): Observable<__model.ConjuntElementsTipusPorta> {
    const pathParams = {
      id: params.id,
    };
    return this.http.get<__model.ConjuntElementsTipusPorta>(this.apiConfigService.options.apiUrl + `/api/Portes/${pathParams.id}`);
  }
}

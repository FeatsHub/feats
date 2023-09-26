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

export interface SequenciesGetParams {
  /** Identificador de tipus de sequencia */
  id: string;
}

@Injectable()
export class SequenciesService {
  constructor(
    private http: HttpClient,
    private apiConfigService: APIConfigService) {}


  /**
   * Retorna la llistat de tipus sequencia
   * http://netiproa.corppro.imi.bcn:447/swagger/swagger-ui.html#!/Sequencies/Sequencies_Sequencies
   */
  sequencies(): Observable<__model.ConjuntElementsTipusSequencia> {
    return this.http.get<__model.ConjuntElementsTipusSequencia>(this.apiConfigService.options.apiUrl + `/api/Sequencies`);
  }

  /**
   * Retorna les dades d'un tipus sequencia
   * http://netiproa.corppro.imi.bcn:447/swagger/swagger-ui.html#!/Sequencies/Sequencies_Sequencies_Get
   */
  sequenciesGet(params: SequenciesGetParams): Observable<__model.ConjuntElementsTipusSequencia> {
    const pathParams = {
      id: params.id,
    };
    return this.http.get<__model.ConjuntElementsTipusSequencia>(this.apiConfigService.options.apiUrl + `/api/Sequencies/${pathParams.id}`);
  }
}

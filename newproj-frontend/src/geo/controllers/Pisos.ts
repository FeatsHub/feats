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

export interface PisosGetParams {
  /** Identificador de tipus de pis */
  id: string;
}

@Injectable()
export class PisosService {
  constructor(
    private http: HttpClient,
    private apiConfigService: APIConfigService) {}


  /**
   * Retorna la llista de tipus de pisos
   * http://netiproa.corppro.imi.bcn:447/swagger/swagger-ui.html#!/Pisos/Pisos_Pisos
   */
  pisos(): Observable<__model.ConjuntElementsPis> {
    return this.http.get<__model.ConjuntElementsPis>(this.apiConfigService.options.apiUrl + `/api/Pisos`);
  }

  /**
   * Retorna les dades d'un tipus de pis
   * http://netiproa.corppro.imi.bcn:447/swagger/swagger-ui.html#!/Pisos/Pisos_Pisos_Get
   */
  pisosGet(params: PisosGetParams): Observable<__model.ConjuntElementsPis> {
    const pathParams = {
      id: params.id,
    };
    return this.http.get<__model.ConjuntElementsPis>(this.apiConfigService.options.apiUrl + `/api/Pisos/${pathParams.id}`);
  }
}

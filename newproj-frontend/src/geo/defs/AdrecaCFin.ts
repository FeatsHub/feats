/* tslint:disable:max-line-length */
/**
 * v1
 * GEORest
 * netiproa.corppro.imi.bcn:447
 */

import * as __model from '../model';

export interface AdrecaCFin {
  NUMPOST?: string;
  LLEPOST?: string;
  CODI_CARRER?: string;
  CFIN?: string;
  /** format: date-time */
  DATA_INICI?: string;
  /** format: date-time */
  DATA_FI?: string;
  USUARI?: string;
  ADRECES?: __model.Adreca;
  /** format: int32 */
  EntityState?: EntityStateAdrecaCFinEnum;
  /** format: double */
  Id?: number;
}

export type EntityStateAdrecaCFinEnum =
  '2' |
  '4' |
  '8' |
  '16';

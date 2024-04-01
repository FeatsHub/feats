/* tslint:disable */
/* eslint-disable */
import { Stats } from '../models/stats';
export interface PaginatedStatsList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Stats>;
}

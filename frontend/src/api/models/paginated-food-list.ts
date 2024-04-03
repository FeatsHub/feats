/* tslint:disable */
/* eslint-disable */
import { Food } from '../models/food';
export interface PaginatedFoodList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Food>;
}

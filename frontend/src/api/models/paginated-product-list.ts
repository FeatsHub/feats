/* tslint:disable */
/* eslint-disable */
import { Product } from '../models/product';
export interface PaginatedProductList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Product>;
}

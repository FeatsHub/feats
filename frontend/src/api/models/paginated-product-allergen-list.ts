/* tslint:disable */
/* eslint-disable */
import { ProductAllergen } from '../models/product-allergen';
export interface PaginatedProductAllergenList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<ProductAllergen>;
}

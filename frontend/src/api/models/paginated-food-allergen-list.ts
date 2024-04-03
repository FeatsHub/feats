/* tslint:disable */
/* eslint-disable */
import { FoodAllergen } from '../models/food-allergen';
export interface PaginatedFoodAllergenList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<FoodAllergen>;
}

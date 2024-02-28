/* tslint:disable */
/* eslint-disable */
import { RecipeList } from '../models/recipe-list';
export interface PaginatedRecipeListList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<RecipeList>;
}

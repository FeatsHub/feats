/* tslint:disable */
/* eslint-disable */
import { RecipeCategory } from '../models/recipe-category';
import { RecipeImage } from '../models/recipe-image';
import { RecipeIngredient } from '../models/recipe-ingredient';

/**
 * Adds nested create feature
 */
export interface Recipe {
  category?: Array<number>;
  category_data: Array<RecipeCategory>;
  description: string;
  diners: number;
  id: number;
  image?: null | number;
  image_data: RecipeImage;
  ingredients: Array<RecipeIngredient>;
  is_public?: boolean;
  name: string;
  owner: number;
  saved_by: Array<number>;
  time: number;
}

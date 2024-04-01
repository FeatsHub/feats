/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
import { RecipeCategory } from '../models/recipe-category';
import { RecipeIngredient } from '../models/recipe-ingredient';
import { RecipeOwner } from '../models/recipe-owner';

/**
 * Adds nested create feature
 */
export interface Recipe {
  allergens: string;
  category?: Array<number>;
  category_data: Array<RecipeCategory>;
  creator: RecipeOwner;
  description: string;
  diners: number;
  id: number;
  image?: null | number;
  image_data: Image;
  ingredients: Array<RecipeIngredient>;
  is_public?: boolean;
  name: string;
  owner: number;
  saved_by: Array<number>;
  time: number;
}

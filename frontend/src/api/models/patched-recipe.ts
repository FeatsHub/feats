/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
import { RecipeCategory } from '../models/recipe-category';
import { RecipeIngredient } from '../models/recipe-ingredient';
import { RecipeOwner } from '../models/recipe-owner';
import { RecipeStep } from '../models/recipe-step';

/**
 * A ModelSerializer that takes additional arguments for
 * "fields" and "include" in order to
 * control which fields are displayed, and whether to replace simple values with
 * complex, nested serializations.
 */
export interface PatchedRecipe {
  allergens?: string;
  category?: Array<number>;
  category_data?: Array<RecipeCategory>;
  creator?: RecipeOwner;
  description?: string;
  diners?: number;
  id?: number;
  image?: null | number;
  image_data?: Image;
  ingredients?: Array<RecipeIngredient>;
  is_public?: boolean;
  name?: string;
  owner?: number;
  saved?: boolean;
  saved_by?: Array<number>;
  steps?: Array<RecipeStep>;
  time?: number;
}

/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
import { RecipeIngredient } from '../models/recipe-ingredient';

/**
 * A ModelSerializer that takes additional arguments for
 * "fields" and "include" in order to
 * control which fields are displayed, and whether to replace simple values with
 * complex, nested serializations.
 */
export interface RelatedRecipe {
  id: number;
  image_data: Image;
  ingredients: Array<RecipeIngredient>;
  name: string;
}

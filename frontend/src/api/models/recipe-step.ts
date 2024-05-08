/* tslint:disable */
/* eslint-disable */
import { RelatedRecipe } from '../models/related-recipe';

/**
 * A ModelSerializer that takes additional arguments for
 * "fields" and "include" in order to
 * control which fields are displayed, and whether to replace simple values with
 * complex, nested serializations.
 */
export interface RecipeStep {
  description: null | string;
  id: number;
  number: number;
  recipe: number;
  related_recipes: Array<number>;
  related_recipes_data: Array<RelatedRecipe>;
}

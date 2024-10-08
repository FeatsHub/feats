/* tslint:disable */
/* eslint-disable */

/**
 * A ModelSerializer that takes additional arguments for
 * "fields" and "include" in order to
 * control which fields are displayed, and whether to replace simple values with
 * complex, nested serializations.
 */
export interface RecipeIngredient {
  food: number;
  food_name: string;
  id: number;
  quantity: number;
  unit: string;
}

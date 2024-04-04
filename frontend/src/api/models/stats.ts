/* tslint:disable */
/* eslint-disable */

/**
 * A ModelSerializer that takes additional arguments for
 * "fields" and "include" in order to
 * control which fields are displayed, and whether to replace simple values with
 * complex, nested serializations.
 */
export interface Stats {
  created: string;
  id: number;
  modified: string;
  private_recipe_number: number;
  public_recipe_number: number;
  total_recipe_number: number;
  user_number: number;
}

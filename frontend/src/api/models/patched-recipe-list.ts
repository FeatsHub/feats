/* tslint:disable */
/* eslint-disable */
import { Recipe } from '../models/recipe';

/**
 * A ModelSerializer that takes additional arguments for
 * "fields" and "include" in order to
 * control which fields are displayed, and whether to replace simple values with
 * complex, nested serializations.
 */
export interface PatchedRecipeList {
  id?: number;
  is_default_list?: boolean;
  name?: string;
  owner?: number;
  recipes?: Array<number>;
  recipes_data?: Array<Recipe>;
}

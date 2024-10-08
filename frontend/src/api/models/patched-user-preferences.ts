/* tslint:disable */
/* eslint-disable */

/**
 * A ModelSerializer that takes additional arguments for
 * "fields" and "include" in order to
 * control which fields are displayed, and whether to replace simple values with
 * complex, nested serializations.
 */
export interface PatchedUserPreferences {
  allergens?: Array<number>;
  favorite_categories?: Array<number>;
  id?: number;
  use_dark_mode?: null | boolean;
}

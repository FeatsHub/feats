/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';

/**
 * A ModelSerializer that takes additional arguments for
 * "fields" and "include" in order to
 * control which fields are displayed, and whether to replace simple values with
 * complex, nested serializations.
 */
export interface RecipeOwner {
  id: number;
  image: Image;
  username: string;
}

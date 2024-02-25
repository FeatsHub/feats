/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
export interface PaginatedImageList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Image>;
}

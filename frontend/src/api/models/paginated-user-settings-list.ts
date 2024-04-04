/* tslint:disable */
/* eslint-disable */
import { UserSettings } from '../models/user-settings';
export interface PaginatedUserSettingsList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<UserSettings>;
}

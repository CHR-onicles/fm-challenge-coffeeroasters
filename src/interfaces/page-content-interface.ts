import { IListItem } from './list-item-interface';
import { IHeadquarter } from './headquarter-interface';

export interface IPageContent {
  id: string;
  title: string;
  description: string;
  imagePath: string[];
  listing?: any[];
}

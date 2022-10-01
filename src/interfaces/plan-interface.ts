import { IOption } from './option-interface';

export interface IPlan {
  id: string;
  title: string;
  options: IOption[];
  quickLink: string;
  slug: string;
}

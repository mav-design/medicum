import { Category } from './Category';

export interface MetaCategory {
  id: string;
  name: string;
  description: string;
  categories: {
    new: boolean;
    total: number;
    list: Category[];
  };
  creatorId: string;
  createdAt: Date;
  updatedAt?: Date;
}

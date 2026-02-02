import { Component } from '@angular/core';
import { CategoryWrapper } from '@src/app/modules/categories/category-wrapper/category-wrapper';
import { Category } from '@src/app/modules/categories/models/Category';
import { CategoryExpansionList } from '@src/app/modules/categories/category-expansion-list/category-expansion-list';
import { MetaCategory } from '@src/app/modules/categories/models/MetaCategory';

@Component({
  selector: 'app-categories-page',
  imports: [CategoryWrapper, CategoryExpansionList],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css',
})
export class CategoriesPage {
  public categories: MetaCategory[] = Array.from({ length: 10 }, (_, index) => ({
    createdAt: new Date(),
    name: 'MyFirstCategory',
    creatorId: '123',
    description: "It's first time",
    categories: {
      new: false,
      total: 10,
      list: Array.from({ length: Math.floor(Math.random() * 10) }, (_, index) => ({
        createdAt: new Date(),
        name: 'MyFirstCategory',
        creatorId: '123',
        description: "It's first time",
        id: '321' + index,
        threads: { new: true, total: 12 },
      })),
    },
    id: '321' + index,
    threads: { new: true, total: 12 },
  }));
}

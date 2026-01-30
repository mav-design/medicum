import { Component } from '@angular/core';
import { CategoryWrapper } from '@src/app/modules/categories/category-wrapper/category-wrapper';
import { Category } from '@src/app/modules/categories/models/Category';

@Component({
  selector: 'app-categories-page',
  imports: [CategoryWrapper],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css',
})
export class CategoriesPage {
  public categories: Category[] = Array.from({ length: 10 }, () => ({
    createdAt: new Date(),
    name: 'MyFirstCategory',
    creatorId: '123',
    description: "It's first time",
    id: '321',
    threads: { new: true, total: 12 },
  }));
}

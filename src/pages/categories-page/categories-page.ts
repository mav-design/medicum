import { Component } from '@angular/core';
import { CategoryWrapper } from '@src/app/modules/categories/category-wrapper/category-wrapper';

@Component({
  selector: 'app-categories-page',
  imports: [CategoryWrapper],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css',
})
export class CategoriesPage {}

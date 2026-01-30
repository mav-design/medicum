import { Component, input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Category } from '../models/Category';
import { CategoryCard } from '../category-card/category-card';
@Component({
  selector: 'app-category-wrapper',
  imports: [MatGridListModule, CategoryCard],
  templateUrl: './category-wrapper.html',
  styleUrl: './category-wrapper.css',
})
export class CategoryWrapper {
  categories = input<Category[]>([]);
}

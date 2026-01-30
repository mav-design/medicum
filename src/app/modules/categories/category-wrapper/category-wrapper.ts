import { Component, input } from '@angular/core';
import { Category } from '../models/Category';

@Component({
  selector: 'app-category-wrapper',
  imports: [],
  templateUrl: './category-wrapper.html',
  styleUrl: './category-wrapper.css',
})
export class CategoryWrapper {
  categories = input<Category[]>([]);
}

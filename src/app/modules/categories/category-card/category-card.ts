import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Category } from '../models/Category';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-category-card',
  imports: [MatCardModule, RouterLink, DatePipe],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css',
})
export class CategoryCard {
  category = input<Category>();

  public categoryDate = computed(() => {
    const cat = this.category();
    if (cat) {
      const { createdAt, updatedAt } = cat;
      const changed = updatedAt ? 'Изменено' : '';
      return changed + (updatedAt || createdAt);
    }
    return '';
  });
}

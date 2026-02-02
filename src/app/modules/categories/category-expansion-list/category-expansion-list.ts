import { Component, input } from '@angular/core';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CategoryWrapper } from '../category-wrapper/category-wrapper';
import { Category } from '../models/Category';
import { MetaCategory } from '../models/MetaCategory';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-category-expansion-list',
  imports: [MatExpansionModule, CategoryWrapper, DatePipe],
  templateUrl: './category-expansion-list.html',
  styleUrl: './category-expansion-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryExpansionList {
  readonly panelOpenState = signal(false);
  metaCategory = input<MetaCategory>();
}

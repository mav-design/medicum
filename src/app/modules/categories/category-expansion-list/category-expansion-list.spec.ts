import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryExpansionList } from './category-expansion-list';

describe('CategoryExpansionList', () => {
  let component: CategoryExpansionList;
  let fixture: ComponentFixture<CategoryExpansionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryExpansionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryExpansionList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

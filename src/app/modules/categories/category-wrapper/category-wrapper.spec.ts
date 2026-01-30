import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWrapper } from './category-wrapper';

describe('CategoryWrapper', () => {
  let component: CategoryWrapper;
  let fixture: ComponentFixture<CategoryWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

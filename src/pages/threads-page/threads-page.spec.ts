import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsPage } from './threads-page';

describe('ThreadsPage', () => {
  let component: ThreadsPage;
  let fixture: ComponentFixture<ThreadsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreadsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

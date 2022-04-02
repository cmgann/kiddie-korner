import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsMobileComponent } from './meals-mobile.component';

describe('MealsMobileComponent', () => {
  let component: MealsMobileComponent;
  let fixture: ComponentFixture<MealsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

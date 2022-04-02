import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsDesktopComponent } from './meals-desktop.component';

describe('MealsDesktopComponent', () => {
  let component: MealsDesktopComponent;
  let fixture: ComponentFixture<MealsDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumMobileComponent } from './curriculum-mobile.component';

describe('CurriculumMobileComponent', () => {
  let component: CurriculumMobileComponent;
  let fixture: ComponentFixture<CurriculumMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

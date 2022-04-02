import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumDesktopComponent } from './curriculum-desktop.component';

describe('CurriculumDesktopComponent', () => {
  let component: CurriculumDesktopComponent;
  let fixture: ComponentFixture<CurriculumDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

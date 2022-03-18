import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForParentsComponent } from './for-parents.component';

describe('ForParentsComponent', () => {
  let component: ForParentsComponent;
  let fixture: ComponentFixture<ForParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForParentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

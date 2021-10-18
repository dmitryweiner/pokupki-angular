import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingFormComponent } from './adding-form.component';

describe('AddingFormComponent', () => {
  let component: AddingFormComponent;
  let fixture: ComponentFixture<AddingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDrivenComponent } from './formulario-driven.component';

describe('FormularioDrivenComponent', () => {
  let component: FormularioDrivenComponent;
  let fixture: ComponentFixture<FormularioDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

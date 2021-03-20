import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masterv1Component } from './masterv1.component';

describe('Masterv1Component', () => {
  let component: Masterv1Component;
  let fixture: ComponentFixture<Masterv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Masterv1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Masterv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

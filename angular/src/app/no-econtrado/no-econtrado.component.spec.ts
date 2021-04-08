import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEcontradoComponent } from './no-econtrado.component';

describe('NoEcontradoComponent', () => {
  let component: NoEcontradoComponent;
  let fixture: ComponentFixture<NoEcontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEcontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEcontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

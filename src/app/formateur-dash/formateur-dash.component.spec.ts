import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurDashComponent } from './formateur-dash.component';

describe('FormateurDashComponent', () => {
  let component: FormateurDashComponent;
  let fixture: ComponentFixture<FormateurDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

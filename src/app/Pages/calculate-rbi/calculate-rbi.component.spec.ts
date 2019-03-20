import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateRbiComponent } from './calculate-rbi.component';

describe('CalculateRbiComponent', () => {
  let component: CalculateRbiComponent;
  let fixture: ComponentFixture<CalculateRbiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateRbiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateRbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

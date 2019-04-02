import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';

import { ManualRbiComponent } from './manual-rbi.component';

describe('ManualRbiComponent', () => {
  let component: ManualRbiComponent;
  let fixture: ComponentFixture<ManualRbiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualRbiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualRbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

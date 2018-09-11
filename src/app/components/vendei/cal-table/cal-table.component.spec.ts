import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalTableComponent } from './cal-table.component';

describe('CalTableComponent', () => {
  let component: CalTableComponent;
  let fixture: ComponentFixture<CalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

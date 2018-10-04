import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanComponent } from './dan.component';

describe('DanComponent', () => {
  let component: DanComponent;
  let fixture: ComponentFixture<DanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

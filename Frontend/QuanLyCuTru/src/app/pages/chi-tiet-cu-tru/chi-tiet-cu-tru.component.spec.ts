import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietCuTruComponent } from './chi-tiet-cu-tru.component';

describe('ChiTietCuTruComponent', () => {
  let component: ChiTietCuTruComponent;
  let fixture: ComponentFixture<ChiTietCuTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietCuTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietCuTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietCongDanComponent } from './chi-tiet-cong-dan.component';

describe('ChiTietCongDanComponent', () => {
  let component: ChiTietCongDanComponent;
  let fixture: ComponentFixture<ChiTietCongDanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietCongDanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietCongDanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

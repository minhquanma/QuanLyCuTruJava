import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangKyCuTruComponent } from './dang-ky-cu-tru.component';

describe('DangKyCuTruComponent', () => {
  let component: DangKyCuTruComponent;
  let fixture: ComponentFixture<DangKyCuTruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangKyCuTruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangKyCuTruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

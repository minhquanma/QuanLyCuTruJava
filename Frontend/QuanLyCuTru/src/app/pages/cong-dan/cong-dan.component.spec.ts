import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongDanComponent } from './cong-dan.component';

describe('CongDanComponent', () => {
  let component: CongDanComponent;
  let fixture: ComponentFixture<CongDanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongDanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongDanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

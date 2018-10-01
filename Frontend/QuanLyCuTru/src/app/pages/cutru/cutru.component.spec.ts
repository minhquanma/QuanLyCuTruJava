import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutruComponent } from './cutru.component';

describe('CutruComponent', () => {
  let component: CutruComponent;
  let fixture: ComponentFixture<CutruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

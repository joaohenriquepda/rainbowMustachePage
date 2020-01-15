import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineSupportComponent } from './headline-support.component';

describe('HeadlineSupportComponent', () => {
  let component: HeadlineSupportComponent;
  let fixture: ComponentFixture<HeadlineSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlineSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

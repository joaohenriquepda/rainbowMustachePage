import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsPart2Component } from './benefits-part2.component';

describe('BenefitsPart2Component', () => {
  let component: BenefitsPart2Component;
  let fixture: ComponentFixture<BenefitsPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScientificCalculatorPage } from './scientific-calculator.page';

describe('ScientificCalculatorPage', () => {
  let component: ScientificCalculatorPage;
  let fixture: ComponentFixture<ScientificCalculatorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScientificCalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

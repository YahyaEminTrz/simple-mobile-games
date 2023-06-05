/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XoxGamePage } from './xox-game.page';

describe('XoxGamePage', () => {
  let component: XoxGamePage;
  let fixture: ComponentFixture<XoxGamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(XoxGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});    */



import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { XoxGamePage } from './xox-game.page';

describe('XoxGamePage', () => {
  let component: XoxGamePage;
  let fixture: ComponentFixture<XoxGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [XoxGamePage]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoxGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

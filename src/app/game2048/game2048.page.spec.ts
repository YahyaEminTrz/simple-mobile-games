import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game2048Page } from './game2048.page';

describe('Game2048Page', () => {
  let component: Game2048Page;
  let fixture: ComponentFixture<Game2048Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Game2048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

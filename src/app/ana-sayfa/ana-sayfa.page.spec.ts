import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnaSayfaPage } from './ana-sayfa.page';

describe('AnaSayfaPage', () => {
  let component: AnaSayfaPage;
  let fixture: ComponentFixture<AnaSayfaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnaSayfaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

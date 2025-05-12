import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BebidasPage } from './bebidas.page';

describe('BebidasPage', () => {
  let component: BebidasPage;
  let fixture: ComponentFixture<BebidasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

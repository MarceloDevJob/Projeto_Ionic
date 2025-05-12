import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pizza1Page } from './pizza1.page';

describe('Pizza1Page', () => {
  let component: Pizza1Page;
  let fixture: ComponentFixture<Pizza1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pizza1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

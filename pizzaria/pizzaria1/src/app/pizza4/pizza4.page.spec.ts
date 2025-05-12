import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pizza4Page } from './pizza4.page';

describe('Pizza4Page', () => {
  let component: Pizza4Page;
  let fixture: ComponentFixture<Pizza4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pizza4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

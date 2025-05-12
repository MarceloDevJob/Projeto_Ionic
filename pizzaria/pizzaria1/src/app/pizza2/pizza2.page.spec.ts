import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pizza2Page } from './pizza2.page';

describe('Pizza2Page', () => {
  let component: Pizza2Page;
  let fixture: ComponentFixture<Pizza2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pizza2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pizza3Page } from './pizza3.page';

describe('Pizza3Page', () => {
  let component: Pizza3Page;
  let fixture: ComponentFixture<Pizza3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pizza3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

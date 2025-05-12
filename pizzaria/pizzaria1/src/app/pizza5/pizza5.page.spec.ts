import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pizza5Page } from './pizza5.page';

describe('Pizza5Page', () => {
  let component: Pizza5Page;
  let fixture: ComponentFixture<Pizza5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pizza5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

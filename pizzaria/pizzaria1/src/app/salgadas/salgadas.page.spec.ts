import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalgadasPage } from './salgadas.page';

describe('SalgadasPage', () => {
  let component: SalgadasPage;
  let fixture: ComponentFixture<SalgadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalgadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

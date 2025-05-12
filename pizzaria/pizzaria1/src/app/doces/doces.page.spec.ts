import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocesPage } from './doces.page';

describe('DocesPage', () => {
  let component: DocesPage;
  let fixture: ComponentFixture<DocesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

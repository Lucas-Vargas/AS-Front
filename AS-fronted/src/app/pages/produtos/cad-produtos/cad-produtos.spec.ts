import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadProdutos } from './cad-produtos';

describe('CadProdutos', () => {
  let component: CadProdutos;
  let fixture: ComponentFixture<CadProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(CadProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

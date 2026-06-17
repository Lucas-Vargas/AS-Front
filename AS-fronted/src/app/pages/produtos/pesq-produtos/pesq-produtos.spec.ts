import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesqProdutos } from './pesq-produtos';

describe('PesqProdutos', () => {
  let component: PesqProdutos;
  let fixture: ComponentFixture<PesqProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesqProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(PesqProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesqOrcamentos } from './pesq-orcamentos';

describe('PesqOrcamentos', () => {
  let component: PesqOrcamentos;
  let fixture: ComponentFixture<PesqOrcamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesqOrcamentos],
    }).compileComponents();

    fixture = TestBed.createComponent(PesqOrcamentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

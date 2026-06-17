import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadOrcamentos } from './cad-orcamentos';

describe('CadOrcamentos', () => {
  let component: CadOrcamentos;
  let fixture: ComponentFixture<CadOrcamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadOrcamentos],
    }).compileComponents();

    fixture = TestBed.createComponent(CadOrcamentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdutos } from './edit-produtos';

describe('EditProdutos', () => {
  let component: EditProdutos;
  let fixture: ComponentFixture<EditProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(EditProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

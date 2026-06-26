import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../../services/produtos/produto-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-produtos',
  imports: [ReactiveFormsModule, CommonModule, CdkDrag],
  templateUrl: './edit-produtos.html',
  styleUrl: './edit-produtos.css',
})
export class EditProdutos {
    startPosition = { x: 0, y: 100 };

    editForm: FormGroup;

    constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router
  ) {
    // Constrói o formulário com as validações necessárias
    this.editForm = this.fb.group({
      id: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      preco: ['', [Validators.required, Validators.min(0)]],
      estoque: ['', [Validators.required, Validators.min(0)]]
    });
  }
  @Input() produto: any;
  @Output() fechar = new EventEmitter<void>();
  @Output() produtoEditado = new EventEmitter<void>();

  fecharEdit(){
    this.fechar.emit();
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      // Pega os dados validados e envia para o Serviço
      this.produtoService.editarProdutos(this.editForm.value).subscribe({
        next: (resposta) => {
          alert('Produto editado com sucesso!');
          this.produtoEditado.emit(); // avisa o pai para atualizar a tabela
        },
        error: (erro) => {
          alert('Erro ao editar: ' + erro.error.erro);
        }
      });
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['produto'] && this.produto) {
      this.editForm.patchValue({
        id: this.produto.id,
        nome: this.produto.nome,
        preco: this.produto.preco,
        estoque: this.produto.estoque
      });
    }
  }
}

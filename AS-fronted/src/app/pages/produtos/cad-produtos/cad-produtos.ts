import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from '../../../services/produtos/produto-service';
import { CommonModule } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cad-produtos',
  imports: [ReactiveFormsModule, CommonModule, CdkDrag],
  templateUrl: './cad-produtos.html',
  styleUrl: './cad-produtos.css',
})
export class CadProdutos {
  cadastroForm: FormGroup; // Declara o formulário
  startPosition = { x: 0, y: 100 };
  
  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router
  ) {
    // Constrói o formulário com as validações necessárias
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required]],
      preco: ['', [Validators.required, Validators.min(0)]],
      estoque: ['', [Validators.required, Validators.min(0)]]
    });
  }

  @Output() fechar = new EventEmitter<void>();
  @Output() produtoCadastrado = new EventEmitter<void>();

  fecharcad(){
    this.fechar.emit();
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      // Pega os dados validados e envia para o Serviço
      this.produtoService.cadastrarProduto(this.cadastroForm.value).subscribe({
        next: (resposta) => {
          alert('Produto cadastrado com sucesso!');
          this.produtoCadastrado.emit();
        },
        error: (erro) => {
          alert('Erro ao cadastrar: ' + erro.error.erro);
        }
      });
    }
  }

}

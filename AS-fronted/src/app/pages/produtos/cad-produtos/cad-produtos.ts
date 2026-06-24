import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProdutoService } from '../../../services/produtos/produto-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cad-produtos',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './cad-produtos.html',
  styleUrl: './cad-produtos.css',
})
export class CadProdutos {
  cadastroForm: FormGroup; // Declara o formulário

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

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      // Pega os dados validados e envia para o Serviço
      this.produtoService.cadastrarProduto(this.cadastroForm.value).subscribe({
        next: (resposta) => {
          alert('Produto cadastrado com sucesso!');
          this.router.navigate(['/pesquisa_produto']); // Envia para a lista de produtos
        },
        error: (erro) => {
          alert('Erro ao cadastrar: ' + erro.error.erro);
        }
      });
    }
  }
}

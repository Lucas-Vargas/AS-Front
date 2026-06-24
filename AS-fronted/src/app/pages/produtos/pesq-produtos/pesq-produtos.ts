import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services/produtos/produto-service';
import { Router, RouterLink } from '@angular/router';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-pesq-produtos',
  imports: [RouterLink, CdkDrag],
  templateUrl: './pesq-produtos.html',
  styleUrl: './pesq-produtos.css',
})
export class PesqProdutos implements OnInit{
  listaDeProdutos: any[] = [];
  mensagemErro: string = '';

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private cdr: ChangeDetectorRef // 1. Injetamos o detector de mudanças aqui
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.listarProdutos().subscribe({
      next: (dadosDaApi) => {
        // 2. Verificamos se é um array de dados válido
        if (Array.isArray(dadosDaApi)) {
          // 3. Colocamos os dados na variável
          this.listaDeProdutos = dadosDaApi;
          
          // 4. A CORREÇÃO MÁGICA: Avisamos o HTML para atualizar a tela neste exato segundo!
          this.cdr.detectChanges();
        } else {
          this.listaDeProdutos = [];
        }
      },
      error: (erro) => {
        this.mensagemErro = 'Falha ao buscar dados: ' + (erro.error?.erro || erro.message);
        
        // Avisamos o HTML caso a mensagem de erro precise aparecer
        this.cdr.detectChanges();
      }
    });
  }

}

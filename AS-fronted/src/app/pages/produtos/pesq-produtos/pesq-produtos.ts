import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services/produtos/produto-service';
import { Router, RouterLink } from '@angular/router';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { EditProdutos } from '../edit-produtos/edit-produtos'
import { CadProdutos } from '../cad-produtos/cad-produtos';

@Component({
  selector: 'app-pesq-produtos',
  imports: [RouterLink, CdkDrag, EditProdutos, CadProdutos],
  templateUrl: './pesq-produtos.html',
  styleUrl: './pesq-produtos.css',
})
export class PesqProdutos implements OnInit {
  listaDeProdutos: any[] = [];
  mensagemErro: string = '';
  showEdit = false;
  showCad = false;
  prod: any = null;
  janelaAtiva: 'edit' | 'cad' | null = null;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private cdr: ChangeDetectorRef // 1. Injetamos o detector de mudanças aqui
  ) { }

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

  excluirProduto(id: number) {
    this.produtoService.deletarProdutos(id).subscribe({
      next: (resposta) => {
        console.log('Produto deletado:', resposta);

        // Remove o produto da lista na tela sem precisar recarregar tudo
        this.listaDeProdutos = this.listaDeProdutos.filter(produto => produto.id !== id);

        this.cdr.detectChanges();
      },
      error: (erro) => {
        this.mensagemErro = 'Falha ao deletar produto: ' + (erro.error?.erro || erro.message);

        this.cdr.detectChanges();
      }
    });
  }

  editarProduto(produto: any) {
    this.prod = produto;
    this.showEdit = true;
    this.janelaAtiva = 'edit';
    this.cdr.detectChanges();
  }
  abrirCadastro() {
    this.showCad = true;
    this.janelaAtiva = 'cad';
    this.cdr.detectChanges();
  }
  fecharEdit() {
    this.showEdit = false;
    this.prod = null;

    this.cdr.detectChanges();
  }
  fecharCad() {
    this.showCad = false;
    this.cdr.detectChanges();
  }
  atualizarDepoisDeEditar() {
    this.showEdit = false;
    this.prod = null;
    this.carregarProdutos();
    this.cdr.detectChanges();
  }
  atualizarDepoisDeCadastrar() {
    this.showCad = false;
    this.carregarProdutos();
    this.cdr.detectChanges();
  }
  trazerParaFrente(janela: 'edit' | 'cad') {
    this.janelaAtiva = janela;
  }
}

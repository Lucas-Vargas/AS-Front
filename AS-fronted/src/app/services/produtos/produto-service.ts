import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
      // URL da nossa API Node.js
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Envia email e senha para a rota de cadastro da API
  cadastrarProduto(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastro-produto`, dados);
  }

  listarProdutos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/produtos`);
  }
  deletarProdutos(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-produto`, {body: {id}});
  }
  editarProdutos(dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/editar-produto`, dados);
  }

}

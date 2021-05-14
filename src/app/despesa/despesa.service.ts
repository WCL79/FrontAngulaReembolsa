import { DespesaDTO } from './../shared/dto/despesa-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjetoDTO } from '../shared/dto/projeto-dto';
import { environment } from './../../environments/environment';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

@Injectable({
  providedIn: 'root',
})
export class DespesaService {
  constructor(private http: HttpClient, private autenticacao: AutenticacaoService) {}

  criaHeaderAutenticacao(): {headers: HttpHeaders, observe: 'body', 'withCredentials': true} {
    var token = this.autenticacao.getToken();
    var h: HttpHeaders = new HttpHeaders().set('Authorization', token ? token : 'null');
    let teste:  {headers: HttpHeaders, observe: 'body', 'withCredentials': true} = {'headers': h, 'observe': 'body', 'withCredentials': true};
    console.log(teste);
    return teste;
  }

  listar(): Observable<DespesaDTO[]> {
    return this.http.get<DespesaDTO[]>(`${environment.URL_SERVIDOR}` + '/despesas/', this.criaHeaderAutenticacao());
  }

  buscarById(id: number) {
    return this.http.get(`${environment.URL_SERVIDOR}` + '/despesas/' + id + '/', this.criaHeaderAutenticacao());
  }

  salvar(despesa: any) {
    return this.http.post(`${environment.URL_SERVIDOR}` + '/despesas/', despesa, this.criaHeaderAutenticacao());
  }

  atualizar(despesa: any) {
    return this.http.put(
      `${environment.URL_SERVIDOR}` + '/despesas/' + despesa.id + '/',
      despesa, this.criaHeaderAutenticacao()
    );
  }

  excluir(id: number) {
    return this.http.delete(`${environment.URL_SERVIDOR}` + '/despesas/' + id + '/', this.criaHeaderAutenticacao());
  }

  listarProjetos(): Observable<ProjetoDTO[]> {
    return this.http.get<ProjetoDTO[]>(
      `${environment.URL_SERVIDOR}` + '/projetos/', this.criaHeaderAutenticacao()
    );
  }

  listarCategorias(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.URL_SERVIDOR}` + '/categorias/' + '?projeto=' + id, this.criaHeaderAutenticacao()
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjetoDTO } from '../shared/dto/projeto-dto';
import { environment } from './../../environments/environment';
import { DespesaDTO } from './../shared/dto/despesa-dto';

@Injectable({
  providedIn: 'root',
})
export class DespesaService {
  constructor(private httpClient: HttpClient) {}

  listar(): Observable<DespesaDTO[]> {
    return this.httpClient.get<DespesaDTO[]>(
      `${environment.URL_SERVIDOR}` + '/despesas/'
    );
  }

  buscarById(id: number) {
    return this.httpClient.get(
      `${environment.URL_SERVIDOR}` + '/despesas/' + id + '/'
    );
  }

  salvar(despesa: any) {
    return this.httpClient.post(
      `${environment.URL_SERVIDOR}` + '/despesas/',
      despesa
    );
  }

  atualizar(despesa: any) {
    return this.httpClient.put(
      `${environment.URL_SERVIDOR}` + '/despesas/' + despesa.id + '/',
      despesa
    );
  }

  excluir(id: number) {
    return this.httpClient.delete(
      `${environment.URL_SERVIDOR}` + '/despesas/' + id + '/'
    );
  }

  listarProjetos(): Observable<ProjetoDTO[]> {
    return this.httpClient.get<ProjetoDTO[]>(
      `${environment.URL_SERVIDOR}` + '/projetos/'
    );
  }

  listarCategorias(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `${environment.URL_SERVIDOR}` + '/categorias/' + '?projeto=' + id
    );
  }
}

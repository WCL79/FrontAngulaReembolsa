import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjetoDTO } from '../shared/dto/projeto-dto';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DespesaService {
  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get(`${environment.URL_SERVIDOR}` + '/despesa');
  }

  buscarById(id: number) {
    return this.http.get(`${environment.URL_SERVIDOR}` + '/despesa/' + id);
  }

  salvar(despesa: any) {
    return this.http.post(`${environment.URL_SERVIDOR}` + '/despesa', despesa);
  }

  atualizar(despesa: any) {
    return this.http.put(
      `${environment.URL_SERVIDOR}` + '/despesa/' + despesa.id,
      despesa
    );
  }

  excluir(id: number) {
    return this.http.delete(`${environment.URL_SERVIDOR}` + '/despesa/' + id);
  }

  listarProjetos(): Observable<ProjetoDTO[]> {
    return this.http.get<ProjetoDTO[]>(
      `${environment.URL_SERVIDOR}` + '/projeto'
    );
  }

  listarCategorias(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.URL_SERVIDOR}` + '/categoria' + '?projeto=' + id
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ZupperService {
  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get(`${environment.URL_SERVIDOR}` + '/zuppers');
  }

  buscarById(cpf: number) {
    return this.http.get(`${environment.URL_SERVIDOR}` + '/zuppers/' + cpf);
  }

  salvar(colaborador: any) {
    return this.http.post(
      `${environment.URL_SERVIDOR}` + '/zuppers',
      colaborador
    );
  }

  atualizar(colaborador: any) {
    return this.http.put(
      `${environment.URL_SERVIDOR}` + '/zuppers/' + colaborador.cpf,
      colaborador
    );
  }

  excluir(cpf: number) {
    return this.http.delete(`${environment.URL_SERVIDOR}` + '/zuppers/' + cpf);
  }

  listarProjetos() {
    return this.http.get(`${environment.URL_SERVIDOR}` + '/projeto');
  }

  listarLocalidades(id: number) {
    return this.http.get(
      `${environment.URL_SERVIDOR}` + '/localidade' + '?projeto=' + id
    );
  }
}

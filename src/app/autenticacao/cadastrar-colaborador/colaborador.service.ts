import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http: HttpClient){}

  listar(){
    return this.http.get(`${environment.url}`+'/zupper');
  }

  buscarById(cpf: number) {
    return this.http.get(`${environment.url}`+'/zupper/'+cpf);
  }

  salvar(colaborador: any){
    return this.http.post(`${environment.url}`+'/zupper', colaborador);
  }

  atualizar(colaborador: any) {
    return this.http.put(`${environment.url}`+'/zupper/'+colaborador.cpf, colaborador);
  }

  excluir(cpf: number) {
    return this.http.delete(`${environment.url}`+'/zupper/'+cpf);
  }

  listarProjetos(){
    return this.http.get(`${environment.url}`+'/projeto');
  }

  listarLocalidades(id: number) {
    return this.http.get(`${environment.url}`+'/localidade'+'?projeto='+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http: HttpClient){}

  listar(){
    return this.http.get(`${environment.URLSERVIDOR}`+'/zupper');
  }

  buscarById(cpf: number) {
    return this.http.get(`${environment.URLSERVIDOR}`+'/zupper/'+cpf);
  }

  salvar(colaborador: any){
    return this.http.post(`${environment.URLSERVIDOR}`+'/zupper', colaborador);
  }

  atualizar(colaborador: any) {
    return this.http.put(`${environment.URLSERVIDOR}`+'/zupper/'+colaborador.cpf, colaborador);
  }

  excluir(cpf: number) {
    return this.http.delete(`${environment.URLSERVIDOR}`+'/zupper/'+cpf);
  }

  listarProjetos(){
    return this.http.get(`${environment.URLSERVIDOR}`+'/projeto');
  }

  listarLocalidades(id: number) {
    return this.http.get(`${environment.URLSERVIDOR}`+'/localidade'+'?projeto='+id);
  }
}

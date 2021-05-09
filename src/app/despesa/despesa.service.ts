import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  constructor(private http: HttpClient){}

  listar(){
    return this.http.get(`${environment.url}`+'/despesa');
  }

  buscarById(id: number) {
    return this.http.get(`${environment.url}`+'/despesa/'+id);
  }

  salvar(despesa: any){
    return this.http.post(`${environment.url}`+'/despesa', despesa);
  }

  atualizar(despesa: any) {
    return this.http.put(`${environment.url}`+'/despesa/'+despesa.id, despesa);
  }

  excluir(id: number) {
    return this.http.delete(`${environment.url}`+'/despesa/'+id);
  }

  listarProjetos(){
    return this.http.get(`${environment.url}`+'/estado');
  }

  listarCategorias(id: number) {
    return this.http.get(`${environment.url}`+'/categoria'+'?projeto='+id);
  }
}

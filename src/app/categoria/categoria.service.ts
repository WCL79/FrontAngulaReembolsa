import { CategoriaDTO } from './../dto/categoria-dto';
import { environment } from 'src/environments/environment';
import { CategoriaModel } from './../model/categoria-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url: string = environment.URLSERVIDOR+'categoria';

    constructor(private http: HttpClient) { }

    buscar(): Observable<CategoriaModel[]>{
      return this.http.get(this.url)
          .pipe(map( resposta => <CategoriaModel[]> resposta) );
    }

    salvar(categoria: CategoriaDTO): Observable<CategoriaModel>{
      return this.http.post(this.url, categoria)
            .pipe( map(resposta => <CategoriaModel> resposta) );
    }

    atualizar(categoria: CategoriaModel){
      return this.http.put(this.url+'/'+categoria.codCategoria, categoria)
      .pipe( map(resposta => <CategoriaModel> resposta) );
    }
  }

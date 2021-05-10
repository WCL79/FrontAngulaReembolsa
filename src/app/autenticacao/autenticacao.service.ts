import { AutenticacaoModule } from './autenticacao.module';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor(private http: HttpClient){}
}

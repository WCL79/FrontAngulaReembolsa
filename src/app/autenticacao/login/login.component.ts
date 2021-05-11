import { AutenticacaoModule } from './../autenticacao.module';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacaoModel } from './autenticacao.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  operacao: boolean = true;

  value1: string | undefined;
  value2: string | undefined;

  cpf: any = AutenticacaoModel;
  senha: any = AutenticacaoModel;



  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {
  }

  login(): void {
    var result = this.http.post('http://localhost:8080/login',AutenticacaoModel);
    var teste = result.toPromise().then((teste: any) => {
      console.log("Chegou uma resposta do back");
      console.log(teste);
    });
  }}

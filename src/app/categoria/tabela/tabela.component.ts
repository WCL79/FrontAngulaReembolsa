import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';

import { CategoriaDTO } from './../../dto/categoria-dto';
import { CategoriaMapper } from './../../mapper/categoria-mapper';
import { CategoriaModel } from './../../model/categoria-model';
import { CategoriaService } from './../categoria.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent implements OnInit {
  categorias: CategoriaModel[] = [];
  categoria: CategoriaDTO = {};
  mapper = new CategoriaMapper();

  operacao: Boolean = true;
  form = this.formBuilder.group({
    codCategoria: '',
    nomeCompleto: '',
  });

  constructor(
    private readonly categoriaService: CategoriaService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    //não é necessário ter o mesmo nome do método do service
    this.categoriaService
      .buscar()
      .pipe(take(1))
      .subscribe((resposta) => {
        this.categorias = resposta;
      });
  }

  adicionar() {
    this.categoriaService
      .salvar(this.categoria)
      .pipe(take(1))
      .subscribe((resposta) => {
        console.log(resposta);
        this.consultar();
        this.categoria = {};
      });
  }

  editar(dado: CategoriaModel) {
    this.categoria = this.mapper.converterModelParaDTO(dado);
    this.operacao = false;
  }

  atualizar() {
    this.categoriaService
      .atualizar(this.categoria)
      .pipe(take(1))
      .subscribe(() => {
        this.categoria = {};
        this.operacao = true;
        this.consultar();
      });
  }
}

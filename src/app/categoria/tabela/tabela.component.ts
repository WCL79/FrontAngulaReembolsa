import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { CategoriaMapper } from 'src/app/shared/mapper/categoria-mapper';
import { CategoriaModel } from 'src/app/shared/model/categoria-model';

import { CategoriaDTO } from '../../shared/dto/categoria-dto';
import { CategoriaService } from './../categoria.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class CategoriaTabelaComponent implements OnInit {
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

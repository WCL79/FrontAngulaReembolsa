import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs/operators';
import { ProjetoDTO } from 'src/app/shared/dto/projeto-dto';

import { DespesaService } from './../despesa.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class DespesaFormularioComponent implements OnInit {
  despesaForm = this.formBuilder.group({
    id: ' ',
    nome: ' ',
    email: ' ',
    status: ' ',
    projeto: ' ',
  });

  projetos: any[] = [];
  projeto: any;
  categorias: any[] = [];
  categoria: any;
  codigoDespesa: any;

  operacao: boolean = true;

  constructor(
    private readonly service: DespesaService,
    private readonly messageService: MessageService,
    private readonly route: ActivatedRoute,
    private readonly title: Title,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.listarProjetos();

    if (this.route.snapshot.params['codigo']) {
      // Editar Despesas
      this.codigoDespesa = this.route.snapshot.params['codigo'];
    } else {
      // Novo
    }

    this.title.setTitle('Nova despesa');

    if (this.codigoDespesa) {
      this.operacao = false;
      this.carregarDespesa(this.codigoDespesa);
    }
  }

  listarProjetos() {
    this.service
      .listarProjetos()
      .pipe(take(1))
      .subscribe((resposta: ProjetoDTO[]) => {
        console.log(resposta);
        this.projetos = resposta;
      });
  }

  listarCategorias(projeto: any) {
    this.categorias = [];
    const id: number = projeto.id;

    this.service
      .listarCategorias(id)
      .pipe(take(1))
      .subscribe((categorias: any[]) => {
        this.categorias = categorias;
        if (
          this.codigoDespesa &&
          this.despesaForm.value.projetoId == this.projeto.id
        ) {
          this.categoria = {
            id: this.projeto.categoria.id,
            nome: this.projeto.categoria.nome,
          };
        } else {
          this.categoria = {
            id: this.categorias[0].id,
            nome: this.categorias[0].nome,
          };
        }
        // this.categorias = categorias;
        // if (
        //   this.codigoDespesa &&
        //   this.despesaForm.value.projetoId == projeto.id
        // ) {
        //   this.categoria = {
        //     id: projeto.categoria.id,
        //     nome: this.projeto.categoria.nome,
        //   };
        // } else {
        //   this.categoria = {
        //     id: this.categorias[0].id,
        //     nome: this.categorias[0].nome,
        //   };
        // }
      });
  }

  carregarDespesa(codigoDespesa: number) {
    console.log('codigoDespesa', codigoDespesa);
    this.service
      .buscarById(codigoDespesa)
      .pipe(take(1))
      .subscribe((resposta: any) => {
        this.despesaForm.patchValue({
          id: resposta.id,
          nome: resposta.nome,
        });
        this.projeto = {
          id: resposta.id,
          nome: resposta.nome,
        };

        this.title.setTitle(`Edição da despesa: ${resposta.id}`);
      });
  }

  cadastrarOuAtualizar() {
    if (this.operacao) {
      this.cadastrar();
    } else {
      this.atualizar();
    }
  }

  cadastrar() {
    this.service
      .salvar(this.despesaForm)
      .pipe(take(1))
      .subscribe(
        (resposta) => {
          this.messageService.add({
            key: 'toast',
            severity: 'success',
            summary: 'CLIENTE',
            detail: 'cadastrado com sucesso!',
          });
          this.limparFormulario();
        },
        () => {
          this.messageService.add({
            key: 'toast',
            severity: 'error',
            summary: 'ERRO',
            detail: 'Não foi possível cadastrar o cliente!',
          });
        }
      );
  }

  atualizar() {
    this.service
      .atualizar(this.despesaForm.value)
      .pipe(take(1))
      .subscribe(
        (resposta) => {
          this.messageService.add({
            key: 'toast',
            severity: 'success',
            summary: 'CLIENTE',
            detail: 'atualizado com sucesso!',
          });
          this.limparFormulario(); //limpar os campos
          this.operacao = true;
          this.router.navigate(['listar/despesa']);
        },
        () => {
          this.messageService.add({
            key: 'toast',
            severity: 'error',
            summary: 'ERRO',
            detail: 'Não foi possível cadastrar o cliente!',
          });
        }
      );
  }

  limparFormulario() {
    this.despesaForm.reset();
    this.categorias = [];
    this.projetos = [];
    this.listarProjetos();
  }
}

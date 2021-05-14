import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs/operators';

import { ZupperService } from './colaborador.service';

@Component({
  selector: 'app-cadastrar-colaborador',
  templateUrl: './cadastrar-colaborador.component.html',
  styleUrls: ['./cadastrar-colaborador.component.css'],
})
export class ZupperFormularioComponent implements OnInit {
  colaborador: any = {
    cpf: ' ',
    email: ' ',
    senha: ' ',
    nomeCompleto: ' ',
    cargo: ' ',
    projeto: {
      id: 1,
      nomeDoProjeto: ' ',
      codigoDoProjeto: ' ',
      localidade: {
        codLocalidade: ' ',
        nome: ' ',
      },
      verba: '',
    },
    banco: ' ',
    numeroDoBanco: '',
    agencia: '',
    digitoDaAgencia: '',
    conta: '',
    digitoDaConta: '',
    tipoDaConta: '',
  };

  projetos: any[] = [];
  projeto: any;
  localidades: any[] = [];
  localidade: any;
  codigoZupper: any;

  operacao: boolean = true;

  constructor(
    private readonly service: ZupperService,
    private readonly messageService: MessageService,
    private readonly route: ActivatedRoute,
    private readonly title: Title,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.listarProjetos();
    this.codigoZupper = this.route.snapshot.params['codigo'];
    this.title.setTitle('Novo cliente');

    if (this.codigoZupper) {
      this.operacao = false;
      this.carregarCliente(this.codigoZupper);
    }
  }

  listarProjetos() {
    this.service
      .listarProjetos()
      .pipe(take(1))
      .subscribe((resposta) => {
        this.projetos = <any>resposta;
      });
  }

  listarLocalidades() {
    this.localidades = [];
    let id: number = this.projeto.id;

    this.service
      .listarLocalidades(id)
      .pipe(take(1))
      .subscribe((resposta) => {
        this.localidades = <any>resposta;
        if (
          this.codigoZupper &&
          this.colaborador.projeto.id == this.projeto.id
        ) {
          this.localidade = {
            id: this.colaborador.projeto.localidade.id,
            nome: this.colaborador.projeto.localidade.nome,
          };
        } else {
          this.localidade = {
            id: this.localidades[0].id,
            nome: this.localidades[0].nome,
          };
        }
      });
  }

  carregarCliente(codigoCliente: number) {
    this.service
      .buscarById(codigoCliente)
      .pipe(take(1))
      .subscribe((resposta) => {
        this.colaborador = <any>resposta;
        this.projeto = {
          id: this.colaborador.endereco.estado.id,
          nome: this.colaborador.endereco.estado.nome,
        };
        this.listarLocalidades();
        this.title.setTitle(`Edição do cliente: ${this.colaborador.id}`);
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
    this.preencherDados();

    this.service
      .salvar(this.colaborador)
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
  preencherDados() {
    this.colaborador.projeto.id = this.projeto.id;
    this.colaborador.projeto.nome = this.projeto.nome;
    this.colaborador.projeto.localidade.id = this.localidade.id;
    this.colaborador.projeto.localidade.nome = this.localidade.nome;
  }

  atualizar() {
    this.preencherDados();

    this.service
      .atualizar(this.colaborador)
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
          this.router.navigate(['/listar/zupper']);
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
    this.colaborador = {};
    this.colaborador.endereco = {};
    this.localidades = [];
    this.projetos = [];
    this.listarProjetos();
  }
}

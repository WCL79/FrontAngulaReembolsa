import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs/operators';
import { ProjetoDTO } from 'src/app/shared/dto/projeto-dto';
import { ZupperService } from 'src/app/zupper/cadastrar-colaborador/colaborador.service';

import { DespesaService } from './../despesa.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class DespesaFormularioComponent implements OnInit {
  despesaForm = this.formBuilder.group({
    id: '',
    zupperId: ['', Validators.required],
    projetoId: ['', Validators.required],
    descricao: ['', Validators.required],
    valor: ['', Validators.required],
    dataEmissaoNota: ['', Validators.required],
    status: 'pendente',
  });

  projetos: any[] = [];
  projeto: any;
  categorias: any[] = [];
  categoria: any;
  codigoDespesa: any;

  operacao: boolean = true;

  zuppers: any[] = [];

  constructor(
    private readonly despesaService: DespesaService,
    private readonly messageService: MessageService,
    private readonly route: ActivatedRoute,
    private readonly title: Title,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly zupperService: ZupperService
  ) {}

  ngOnInit(): void {
    this.listarProjetos();
    this.listarZuppers();

    this.codigoDespesa = this.route.snapshot.params['codigo'];

    if (this.codigoDespesa) {
      this.operacao = false;
      this.carregarDespesa(this.codigoDespesa);
    } else {
      this.title.setTitle('Nova despesa');
    }
  }

  listarProjetos() {
    this.despesaService
      .listarProjetos()
      .pipe(take(1))
      .subscribe((resposta: ProjetoDTO[]) => {
        this.projetos = resposta;
      });
  }

  listarZuppers() {
    this.zupperService
      .listar()
      .pipe(take(1))
      .subscribe((resposta) => {
        this.zuppers = resposta as any[];
      });
  }

  listarCategorias(projeto: any) {
    this.categorias = [];
    const id: number = projeto.id;

    this.despesaService
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
    this.despesaService
      .buscarById(codigoDespesa)
      .pipe(take(1))
      .subscribe((despesa: any) => {
        this.despesaForm.patchValue({
          id: despesa.id,
          zupperId: despesa.zupperId,
          projetoId: despesa.projetoId,
          descricao: despesa.descricao,
          valor: despesa.valor,
          dataEmissaoNota: despesa.dataEmissaoNota,
          status: despesa.status,
        });

        this.title.setTitle(`Edição da despesa: ${despesa.id}`);
      });
  }

  cadastrarOuAtualizar() {
    const body = this.mergeZupperEProjeto();
    if (this.operacao) {
      this.cadastrar(body);
    } else {
      this.atualizar(body);
    }
  }

  cadastrar(body: any) {
    this.despesaService
      .salvar(body)
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

  atualizar(body: any) {
    this.despesaService
      .atualizar(body)
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

  // TODO Remover quando o backend trazer informações do zupper e do projeto
  private mergeZupperEProjeto() {
    const { zupperId, projetoId } = this.despesaForm.value;
    const [zupperSelecionado] = this.zuppers.filter(
      (zupper) => zupper.cpf === zupperId
    );
    const [projetoSelecionado] = this.projetos.filter(
      (projeto) => projeto.id === projetoId
    );

    return {
      ...this.despesaForm.value,
      zupper: zupperSelecionado,
      projeto: projetoSelecionado,
    };
  }
}

import { DespesaService } from './../despesa.service';

import { MessageService } from 'primeng/api';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  despesa:any = {
  cpf: "",
  descricao: "",
  valor: "",
  projetoId: "",
  codCategoria: "",
  notaFiscal:""
  }


  projetos: any[] = [];
  projeto: any;
  categorias: any[] = [];
  categoria: any;
  codigoDespesa: any;

  operacao: boolean = true;

  constructor(
    private service: DespesaService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private title: Title,
    private router: Router) { }

  ngOnInit(): void {
    this.listarProjetos();
    this.codigoDespesa = this.route.snapshot.params['codigo'];
    this.title.setTitle('Nova despesa');

    if (this.codigoDespesa) {
      this.operacao = false;
      this.carregarDespesa(this.codigoDespesa);
    }
  }

  listarProjetos() {
    this.service.listarProjetos().subscribe(resposta => {
      this.projetos = <any>resposta;
    });
  }

  listarCategorias(){
    this.categorias = [];
    let id: number = this.projeto.id;

    this.service.listarCategorias(id).subscribe(resposta => {
      this.categorias = <any>resposta;
      if(this.codigoDespesa && this.despesa.projeto.id == this.projeto.id){
        this.categoria = {id: this.despesa.projeto.categoria.id, nome: this.despesa.projeto.categoria.nome};
      }else{
        this.categoria = {id: this.categorias[0].id, nome: this.categorias[0].nome};
      }
    });
  }

  carregarDespesa(codigoDespesa: number){
    this.service.buscarById(codigoDespesa).subscribe(resposta => {
      this.despesa = <any>resposta;
      this.projeto = {id: this.despesa.projeto.id, nome: this.despesa.projeto.nome};
      this.listarCategorias();
      this.title.setTitle(`Edição da despesa: ${this.despesa.id}`);
    });
  }

  cadastrarOuAtualizar(){
    if(this.operacao){
      this.cadastrar();
    }else{
      this.atualizar();
    }
  }

  cadastrar(){

    this.preencherDados();

    this.service.salvar(this.despesa).subscribe(
      resposta => {
      this.messageService.add(
      {
        key: 'toast',
        severity: 'success',
        summary: 'CLIENTE',
        detail: 'cadastrado com sucesso!'
      });
      this.limparFormulario();
    },
    () => {
      this.messageService.add(
        {
          key: 'toast',
          severity: 'error',
          summary: 'ERRO',
          detail: 'Não foi possível cadastrar o cliente!'
        });
    });
  }
  preencherDados() {
    this.despesa.projeto.id = this.projeto.id;
    this.despesa.projeto.nome = this.projeto.nome;
    this.despesa.projeto.categoria.id = this.categoria.id;
    this.despesa.projeto.categoria.nome = this.categoria.nome;
  }

  atualizar(){

    this.preencherDados();

    this.service.atualizar(this.despesa).subscribe(
      resposta => {
      this.messageService.add(
      {
        key: 'toast',
        severity: 'success',
        summary: 'CLIENTE',
        detail: 'atualizado com sucesso!'
      });
      this.limparFormulario(); //limpar os campos
      this.operacao = true;
      this.router.navigate(['listar/despesa']);
    },
    () => {
      this.messageService.add(
        {
          key: 'toast',
          severity: 'error',
          summary: 'ERRO',
          detail: 'Não foi possível cadastrar o cliente!'
        });
    });
  }

  limparFormulario() {
    this.despesa = {};
    this.categorias = [];
    this.projetos = [];
    this.listarProjetos();
  }

}

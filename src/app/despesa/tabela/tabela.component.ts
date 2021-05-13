import { DespesaDTO } from './../../shared/dto/despesa-dto';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { take } from 'rxjs/operators';

import { DespesaService } from './../despesa.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class DespesaTabelaComponent implements OnInit {
  despesas: DespesaDTO[] = [];
  loading: boolean = true;

  constructor(
    private despesaService: DespesaService,
    private confirmarService: ConfirmationService,
    private messageService: MessageService,
    private title: Title
  ) {}

  ngOnInit() {
    this.loading = true;
    this.carregar();
  }

  carregar() {
    this.title.setTitle('Lista de reembolso');
    this.despesas = [];
    this.despesaService
      .listar()
      .pipe(take(1))
      .subscribe((despesas) => {
        this.despesas = despesas;
        this.loading = false;
      });
  }

  excluir(id: number) {
    this.confirmarService.confirm({
      message: 'Tem certeza que deseja excluir este ESSE REEMBOLSO?',
      accept: () => {
        this.despesaService.excluir(id).subscribe((resposta) => {
          this.messageService.add({
            key: 'toast',
            severity: 'success',
            summary: 'REEMBOLSO',
            detail: 'excluído com sucesso!',
          });
          this.carregar();
        });
      },
    });
  }
}

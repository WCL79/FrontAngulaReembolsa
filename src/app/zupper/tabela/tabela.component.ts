import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';

import { ZupperService } from '../cadastrar-colaborador/colaborador.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class ZupperTabelaComponent implements OnInit {
  colaboradores: any = [];
  loading: boolean = true;

  constructor(
    private service: ZupperService,
    private confirmarService: ConfirmationService,
    private messageService: MessageService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.carregar();
  }

  carregar() {
    this.title.setTitle('Lista de clientes');
    this.colaboradores = [];
    this.service.listar().subscribe((resposta) => {
      this.colaboradores = resposta;
      this.loading = false;
    });
  }

  excluir(id: number) {
    this.confirmarService.confirm({
      message: 'Tem certeza que deseja excluir este cliente?',
      accept: () => {
        this.service.excluir(id).subscribe((resposta) => {
          this.messageService.add({
            key: 'toast',
            severity: 'success',
            summary: 'CLIENTE',
            detail: 'excluído com sucesso!',
          });
          this.carregar();
        });
      },
    });
  }
}

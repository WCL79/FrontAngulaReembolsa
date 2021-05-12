import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';

import { ZupperFormularioComponent } from './cadastrar-colaborador/cadastrar-colaborador.component';
import { ZupperTabelaComponent } from './tabela/tabela.component';
import { ZupperRoutingModule } from './zupper-routing.module';

@NgModule({
  declarations: [ZupperTabelaComponent, ZupperFormularioComponent],
  imports: [
    CommonModule,
    ZupperRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    TableModule,
    DropdownModule,
  ],
})
export class ZupperModule {}

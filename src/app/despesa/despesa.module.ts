import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';

import { DespesaRoutingModule } from './despesa-routing.module';
import { DespesaFormularioComponent } from './formulario/formulario.component';
import { DespesaTabelaComponent } from './tabela/tabela.component';

@NgModule({
  declarations: [DespesaFormularioComponent, DespesaTabelaComponent],
  imports: [
    CommonModule,
    DespesaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    FileUploadModule,
    TableModule,
  ],
})
export class DespesaModule {}

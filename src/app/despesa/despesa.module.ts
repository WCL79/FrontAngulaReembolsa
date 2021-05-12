import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
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
    InputMaskModule,
    FileUploadModule,
    TableModule,
    ButtonModule,
    InputTextModule,
  ],
})
export class DespesaModule {}

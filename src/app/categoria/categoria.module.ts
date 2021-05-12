import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaTabelaComponent } from './tabela/tabela.component';

@NgModule({
  declarations: [CategoriaTabelaComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CategoriaModule {}

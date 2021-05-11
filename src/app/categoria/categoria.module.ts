import { TabelaComponent } from './../despesa/tabela/tabela.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [TabelaComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CategoriaModule { }

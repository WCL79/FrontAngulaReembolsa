
import { DespesaModule } from './despesa/despesa.module';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import {InputTextareaModule} from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutenticacaoModule,
    ToastModule,
    ConfirmDialogModule,
    DespesaModule,
    InputTextareaModule
  ],
  providers: [MessageService,
    Title,
    ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

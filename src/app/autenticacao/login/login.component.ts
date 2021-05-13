import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AutenticacaoService } from '../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = this.formBuilder.group({
    cpf: ['', Validators.required],
    senha: ['', Validators.required],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly autenticacaoService: AutenticacaoService
  ) {}

  ngOnInit(): void {}

  login(): void {
    if (this.form.invalid) {
      return;
    }
    this.autenticacaoService
      .login(this.form.value)
      .pipe(take(1))
      .subscribe((response) => {
        this.router.navigate(['/']);
        });
  }
}

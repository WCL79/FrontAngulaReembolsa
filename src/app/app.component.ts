import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacaoService } from './autenticacao/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly autenticacaoService: AutenticacaoService
  ) {}

  ngOnInit(): void {
    const token = this.autenticacaoService.getToken();
    if (!token || token == "null") {
      this.router.navigate(['/auth']);
    } else {
      this.router.navigate(['/despesa/lista']);
    }
  }
}

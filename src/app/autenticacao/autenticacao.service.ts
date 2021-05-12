import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private readonly TOKEN = 'token';
  constructor(private httpClient: HttpClient) {}

  login(credentials: any) {
    return this.httpClient
      .post(`${environment.URL_SERVIDOR}/login`, credentials)
      .pipe(tap((response) => this.setToken(JSON.stringify(response))));
  }

  getToken() {
    return localStorage.getItem(this.TOKEN);
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }
}

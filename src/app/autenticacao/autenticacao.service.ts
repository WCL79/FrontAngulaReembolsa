import { HttpClient, HttpResponse } from '@angular/common/http';
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
      .post(`${environment.URL_SERVIDOR}/login`, credentials, {'observe': 'response'})
      .pipe(tap((response: HttpResponse <Object>) => {
        let token = response.headers.get("Authorization");

        this.setToken(token ? token : 'null');
      }));
  }

  getToken() {
    return localStorage.getItem(this.TOKEN);
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }
}

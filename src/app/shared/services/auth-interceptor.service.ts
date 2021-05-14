import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private autenticacao: AutenticacaoService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authToken = this.autenticacao.getToken() || 'null';

    const headers = req.headers
      .set('Authorization', authToken)
      .set('withCredentials', 'true');
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers,
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}

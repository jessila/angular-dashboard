import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AutenticacaoService {

  jwtPaylload: any;

  constructor(private http: Http, private jwt: JwtHelper) {
    this.carregarToken();
  }

  autenticar(login: String, senha: String): Promise<any> {
    return this.http.post('http://localhost:8080/login', {login, senha})
      .toPromise()
        .then(sucesso => {
          localStorage.setItem('token', sucesso.json().token);
          this.carregarToken();
        })
        .catch(erro => {
          return Promise.reject('Erro ao efetuar autenticação');
        });
  }

  carregarToken() {
    if (this.getToken()) {
      this.jwtPaylload = this.jwt.decodeToken(this.getToken());
    }
  }

  validarToken(): boolean {
    return !this.jwt.isTokenExpired(this.getToken());
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

}

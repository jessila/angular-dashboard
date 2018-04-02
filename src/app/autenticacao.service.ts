import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AutenticacaoService {

  jwtPayload: any;
  idtel: String;

  constructor(private http: Http, private jwt: JwtHelper) {
    this.setPayload();
  }

  autenticar(login: String, senha: String): Promise<any> {
    return this.http.post('http://localhost:8080/login', {login, senha})
      .toPromise()
        .then(sucesso => {
          localStorage.setItem('token', sucesso.json().token);
          this.setPayload();
        })
        .catch(erro => {
          return Promise.reject('Erro ao efetuar autenticação');
        });
  }

  setPayload() {
    if (this.getToken()) {
      this.jwtPayload = this.jwt.decodeToken(this.getToken());
      console.log(this.jwtPayload);
    }
  }

  validarToken(): boolean {
    return !this.jwt.isTokenExpired(this.getToken());
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

}

import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../autenticacao.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  login: String;
  senha: String;
  msgAlerta: String;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {}

  autenticar(form: NgForm) {

    this.autenticacaoService.autenticar(this.login, this.senha)
      .then((sucesso) => {
        this.router.navigate(['/index']);
      })
      .catch((erro) => {
        this.msgAlerta = 'Idtel ou Senha inválido';
      });
  }

}

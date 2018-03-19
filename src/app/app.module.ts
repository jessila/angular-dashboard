import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { JwtHelper } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { AutenticacaoService } from './autenticacao.service';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'index', component: TemplateComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AutenticacaoService,
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

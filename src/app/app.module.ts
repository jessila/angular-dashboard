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
import { AutenticacaoGuard } from './autenticacao.guard';


const routes: Routes = [
  { path: '', component: TemplateComponent, canActivate: [AutenticacaoGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AutenticacaoGuard] },
  { path: 'index', component: TemplateComponent, canActivate: [AutenticacaoGuard] },
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
    JwtHelper,
    AutenticacaoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

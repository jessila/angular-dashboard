import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { JwtHelper } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { AutenticacaoService } from './services/autenticacao.service';
import { TemplateComponent } from './components/template/template.component';
import { LoginComponent } from './components/login/login.component';
import { AutenticacaoGuard } from './guards/autenticacao.guard';


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

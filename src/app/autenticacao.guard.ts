import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';



@Injectable()
export class AutenticacaoGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const token: string = localStorage.getItem('token');

      if (state.url !== '/login') {

        if (!token) {
          this.router.navigate(['/login']);
          return false;
        }
      }

      return true;
  }
}

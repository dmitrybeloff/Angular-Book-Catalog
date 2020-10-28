import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }
  canActivate() {
    const token = localStorage.getItem('jwt');

    if (token) {
      if (this.jwtHelper.isTokenExpired(token)) {
        this.router.navigate(['login']);
        return false;
      }

      const decodedToken = this.jwtHelper.decodeToken(token);
      if (decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin') {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }
    this.router.navigate(['login']);
    return false;
  }
}

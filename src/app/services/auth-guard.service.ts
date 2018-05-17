import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import { AuthService } from './auth.service';
import { ignoreElements } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private auth: AuthService ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

    console.log(next);

    if ( this.auth.isAuthenticated()) {
      console.log('pasa por el guard');
      return true;
    } else {
      console.error('bloqueado por el guard');
      return false;
    }
  }

}

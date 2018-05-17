import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor( public auth: AuthService) {
    auth.handleAuthentication();

  }


  login() {
    this.auth.login();
  }

  salir() {
    console.log('salio');
    this.auth.logout();
  }

}

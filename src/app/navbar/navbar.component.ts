import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


   userJson = localStorage.getItem('user');
  user = this.userJson ? JSON.parse(this.userJson) : null;
  constructor( private authSrv: AuthService) { }

  
  logOut(){
    this.authSrv.logout();
  }
}

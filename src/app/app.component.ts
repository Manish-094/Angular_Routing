import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Routing';
islogin : boolean = false;
islogout : boolean = true;
  constructor(private authService:AuthService){}
  onLoginClick(){
this.authService.login();
this.islogin = true;
this.islogout = false;
  }
  onLogoutClick(){
this.authService.logOut();
this.islogin = false;
this.islogout = true;
  }
}

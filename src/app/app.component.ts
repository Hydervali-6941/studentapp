import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';
// import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminpanal';
  
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  // constructor(public login: LoginComponent){}
  constructor(public authenticationService: AuthenticationService){}
}

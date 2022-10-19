import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  Roles: any = ['ADMIN', 'aUTHOR', 'SDFSDF'];

  registraionUserData = {
    username: '',
    email: '',
    Password: '',
    select: 'user',
  };
  constructor(private _auth: AuthenticationService, private _router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    // console.log(this.registraionUserData);

    this._auth.registerUser(this.registraionUserData).subscribe(
      (res: any) => {
        localStorage.setItem('token', JSON.stringify(res));
        this._router.navigate(['/dashboard']);
        alert(this.registraionUserData.username);
      },
      (err: string) => {
        console.log('Error while receiving Data from Service: ' + err);
      }
    );
  }
}

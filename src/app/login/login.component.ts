import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication/authentication.service';
// import { SignInData } from '../model/SignInData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData = {
    userEmail: '',
    password: '',
  };

  isFormValid = false;
  areCredentialsInvalid = false;

  constructor(private _auth: AuthenticationService, private _router: Router) {}

  ngOnInit() {}

  loginUser() {
    // console.log(this.loginUserData);

    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res));
        this._router.navigate(['/dashboard']);
      },
      (err) => console.log(`Error while receiving data from service : ${err}`)
    );
  }
  // onSubmit(signInForm: NgForm) {
  //   if (!signInForm.valid) {
  //     this.isFormValid = true;
  //     this.areCredentialsInvalid = false;
  //     return;
  //   }
  //   this.checkCredentials(signInForm);

  // }

  // private checkCredentials(signInForm: NgForm) {
  //   const signInData = new SignInData(signInForm.value.login, signInForm.value.password);
  //   if (!this.authenticationService.authenticate(signInData)) {
  //     this.isFormValid = false;
  //     this.areCredentialsInvalid = true;
  //   }
  // }
}

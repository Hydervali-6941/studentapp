import { Injectable } from '@angular/core';
// import { SignInData } from 'src/app/model/SignInData';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _loginURL = 'http://localhost:5000/api/login';
  private _registerURL = 'http://localhost:5000/api/register';

  constructor(private _http: HttpClient, private _router: Router) {}
  registerUser(user: any) {
    return this._http.post(this._registerURL, user);
  }
  // authenticate(signInData: SignInData): boolean {
  //   if (this.checkCredentials(signInData)) {
  //     this.isAuthenticated = true;
  //     this.router.navigate(['dashboard']);
  //     return true;
  //   }
  //   this.isAuthenticated = false;
  //   return false;
  // }

  // private checkCredentials(signInData: SignInData): boolean {
  //   return this.checkLogin(signInData.getLogin()) && this.checkPassword(signInData.getPassword());
  // }

  loginUser(user: any) {
    return this._http.post<any>(this._loginURL, user);
  }

  // private checkPassword(password: string): boolean {
  //   return password === this.mockUser.getPassword();
  // }

  // logout() {
  //   this.isAuthenticated = false;
  //   this.router.navigate(['']);
  // }
}

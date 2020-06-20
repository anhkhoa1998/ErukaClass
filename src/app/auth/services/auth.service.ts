import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignIn } from '../models/auth.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  signIn(user: SignIn) {
    return this.httpClient.post(`${environment.apiUrl}/Users/authen`, user);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return token;
  }
}

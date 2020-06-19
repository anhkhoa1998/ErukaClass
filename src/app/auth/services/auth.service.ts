import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  getToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return token;
  }
}
